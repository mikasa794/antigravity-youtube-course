
const APP_ID = process.env.FEISHU_APP_ID || '';
const APP_SECRET = process.env.FEISHU_APP_SECRET || '';

// Base ID (App Token)
const BITABLE_APP_TOKEN = process.env.FEISHU_BITABLE_APP_TOKEN || '';

// Table IDs
const ARTICLES_TABLE_ID = process.env.FEISHU_BITABLE_TABLE_ID || '';
/* Lingo Table */
const VOCAB_TABLE_ID = process.env.FEISHU_VOCAB_TABLE_ID || '';
/* Lingo Videos Table */
const LINGO_TABLE_ID = process.env.FEISHU_LINGO_TABLE_ID || '';

/* Courses Table - Optional */
const COURSES_TABLE_ID = process.env.FEISHU_COURSES_TABLE_ID || '';
/* Lessons Table */
const LESSONS_TABLE_ID = process.env.FEISHU_LESSONS_TABLE_ID || '';

// ... (Existing Imports/Functions)

export interface Course {
    id: string;
    title: string;
    description: string;
    cover: string;
    status: string;
}

export interface Lesson {
    id: string;
    title: string;
    moduleTitle: string;
    videoUrl: string;
    duration: string;
    transcript: string;
    courseId: string;
}

// --- STATIC DATA FALLBACK (Bypass Vercel/Feishu IP Issues) ---
import staticData from '@/data/static_db.json';

// Helper to simulate DB Delay
const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export async function fetchCourses(): Promise<Course[]> {
    // 1. Try Static Data First (Fastest, Most Reliable for Demo)
    if (staticData && staticData.courses) {
        // await delay(100); // Optional: simulate network
        return (staticData.courses as any[]).map((item: any) => {
            const f = item.fields;
            return {
                id: item.record_id,
                title: f['Title'] || 'Untitled Course',
                description: f['Description'] || '',
                cover: f['Cover Image URL'] || '',
                status: f['Status'] || 'Draft',
            };
        });
    }

    if (!BITABLE_APP_TOKEN || !COURSES_TABLE_ID) return [];

    const token = await getTenantAccessToken();
    if (!token) return [];

    const url = `https://open.feishu.cn/open-apis/bitable/v1/apps/${BITABLE_APP_TOKEN}/tables/${COURSES_TABLE_ID}/records`;

    try {
        const response = await fetch(url, {
            headers: { 'Authorization': `Bearer ${token}` },
            next: { revalidate: 60 }
        });

        const data = await response.json();
        if (data.code !== 0) return [];

        return (data.data?.items || []).map((item: any) => {
            const f = item.fields;
            return {
                id: item.record_id,
                title: f['Title'] || 'Untitled Course',
                description: f['Description'] || '',
                cover: f['Cover Image URL'] || '',
                status: f['Status'] || 'Draft',
            };
        });
    } catch (e) {
        console.error('Error fetching courses:', e);
        return [];
    }
}

export async function fetchLessons(courseId?: string): Promise<Lesson[]> {
    // 1. Static Fallback
    if (staticData && staticData.lessons) {
        let lessons = (staticData.lessons as any[]).map((item: any) => {
            const f = item.fields;
            return {
                id: item.record_id,
                title: f['Title'] || 'Untitled Lesson',
                moduleTitle: f['Module Title'] || '',
                videoUrl: f['Video URL']?.link || f['Video URL'] || '',
                duration: f['Duration'] || '',
                transcript: f['Transcript'] || '',
                courseId: f['Course ID'] || '',
            };
        });
        if (courseId) {
            lessons = lessons.filter(l => l.courseId === courseId);
        }
        return lessons;
    }

    if (!BITABLE_APP_TOKEN || !LESSONS_TABLE_ID) return [];

    const token = await getTenantAccessToken();
    if (!token) return [];

    let url = `https://open.feishu.cn/open-apis/bitable/v1/apps/${BITABLE_APP_TOKEN}/tables/${LESSONS_TABLE_ID}/records`;

    try {
        const response = await fetch(url, {
            headers: { 'Authorization': `Bearer ${token}` },
            next: { revalidate: 60 }
        });

        const data = await response.json();
        if (data.code !== 0) return [];

        let lessons = (data.data?.items || []).map((item: any) => {
            const f = item.fields;
            return {
                id: item.record_id,
                title: f['Title'] || 'Untitled Lesson',
                moduleTitle: f['Module Title'] || '',
                videoUrl: f['Video URL']?.link || f['Video URL'] || '',
                duration: f['Duration'] || '',
                transcript: f['Transcript'] || '',
                courseId: f['Course ID'] || '',
            };
        });

        if (courseId) {
            lessons = lessons.filter((l: Lesson) => l.courseId === courseId);
        }

        return lessons;
    } catch (e) {
        console.error('Error fetching lessons:', e);
        return [];
    }
}


// --- Save Vocab (Still needs API, but less critical for initial view) ---
export async function saveVocab(data: {
    word: string;
    meaning: string;
    context: string;
    videoTitle: string;
    videoUrl: string;
    timestamp: number;
}): Promise<{ success: boolean; id?: string; error?: string }> {
    if (!BITABLE_APP_TOKEN || !VOCAB_TABLE_ID) {
        return { success: false, error: 'Missing Feishu Configuration' };
    }

    const token = await getTenantAccessToken();
    if (!token) return { success: false, error: 'Failed to get Access Token' };

    const url = `https://open.feishu.cn/open-apis/bitable/v1/apps/${BITABLE_APP_TOKEN}/tables/${VOCAB_TABLE_ID}/records`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({
                fields: {
                    'Word': data.word,
                    'Meaning': data.meaning,
                    'Context': data.context,
                    'Video Title': data.videoTitle,
                    'Video URL': { link: data.videoUrl, text: 'Watch' },
                    'Timestamp': String(data.timestamp),
                    'Date': new Date().getTime(), // Date field in Feishu often takes timestamp
                    'Tags': ['LingoTube']
                }
            })
        });

        const resData = await response.json();
        if (resData.code === 0) {
            return { success: true, id: resData.data.record.record_id };
        } else {
            console.error('Feishu Save Error:', resData);
            return { success: false, error: resData.msg || 'Feishu API Error' };
        }

    } catch (e) {
        console.error('Save Vocab Network Error:', e);
        return { success: false, error: 'Network Error' };
    }
}

interface TenantAccessTokenResponse {
    code: number;
    msg: string;
    tenant_access_token: string;
    expire: number;
}

export async function getTenantAccessToken(): Promise<string> {
    if (!APP_ID || !APP_SECRET) {
        console.error('FEISHU_APP_ID or FEISHU_APP_SECRET is missing');
        return '';
    }

    try {
        const response = await fetch('https://open.feishu.cn/open-apis/auth/v3/tenant_access_token/internal', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify({
                app_id: APP_ID,
                app_secret: APP_SECRET,
            }),
            cache: 'no-store',
        });

        const data: TenantAccessTokenResponse = await response.json();

        if (data.code !== 0) {
            console.error('Failed to get tenant access token:', data);
            return '';
        }

        return data.tenant_access_token;
    } catch (error) {
        console.error('Error fetching tenant access token:', error);
        return '';
    }
}

export interface Article {
    id: string;
    title: string;
    summary: string;
    platform: string;
    url: string;
    cover?: string;
    author: string;
    goldenQuote: string;
    tags: string[];
    date: string;
    aiNotes?: string;
    status: string;
}

export async function fetchArticles(): Promise<Article[]> {
    // 1. Static Fallback
    if (staticData && staticData.articles) {
        const sorted = (staticData.articles as any[]).map((item: any) => {
            const f = item.fields;
            // FILTER: If Tags contain "Friends", skip it (it belongs in Lingo)
            const tags = f['Tags'] ? (Array.isArray(f['Tags']) ? f['Tags'] : [f['Tags']]) : [];
            if (tags.includes('Friends')) return null;

            const getCoverParams = (attachmentField: any) => {
                if (attachmentField && Array.isArray(attachmentField) && attachmentField.length > 0) {
                    return attachmentField[0].url;
                }
                return undefined;
            };

            return {
                id: item.record_id,
                title: f['Title'] || 'Untitled',
                summary: f['Summary'] || '',
                platform: f['Platform'] || 'Unknown',
                url: f['URL'] && f['URL'].link ? f['URL'].link : (f['URL'] || '#'),
                cover: getCoverParams(f['Cover']),
                author: f['Author'] || 'Antigravity AI',
                goldenQuote: f['Quote'] || f['Golden Quote'] || '',
                tags: tags,
                date: f['Date'] ? new Date(f['Date']).toISOString() : new Date().toISOString(),
                aiNotes: f['AI Notes'] || '',
                status: f['Status'] || 'Done',
            };
        }).filter(Boolean) as Article[];

        // Sort by Date Descending
        sorted.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

        return sorted;
    }

    if (!BITABLE_APP_TOKEN || !ARTICLES_TABLE_ID) {
        console.warn('FEISHU_BITABLE_APP_TOKEN or FEISHU_BITABLE_TABLE_ID is missing');
        return [];
    }

    const token = await getTenantAccessToken();
    if (!token) return [];

    const url = `https://open.feishu.cn/open-apis/bitable/v1/apps/${BITABLE_APP_TOKEN}/tables/${ARTICLES_TABLE_ID}/records`;

    try {
        const response = await fetch(url, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            next: { revalidate: 60 }
        });

        const data = await response.json();

        if (data.code !== 0) {
            console.error('Failed to fetch articles from Feishu:', data);
            return [];
        }

        if (!data.data || !data.data.items) {
            return [];
        }

        return data.data.items.map((item: any) => {
            const f = item.fields;

            const getCoverParams = (attachmentField: any) => {
                if (attachmentField && Array.isArray(attachmentField) && attachmentField.length > 0) {
                    return attachmentField[0].url;
                }
                return undefined;
            };

            return {
                id: item.record_id,
                title: f['Title'] || 'Untitled',
                summary: f['Summary'] || '',
                platform: f['Platform'] || 'Unknown',
                url: f['URL'] && f['URL'].link ? f['URL'].link : (f['URL'] || '#'),
                cover: getCoverParams(f['Cover']),
                author: f['Author'] || 'Antigravity AI',
                goldenQuote: f['Quote'] || f['Golden Quote'] || '',
                tags: f['Tags'] ? (Array.isArray(f['Tags']) ? f['Tags'] : [f['Tags']]) : [],
                date: f['Date'] ? new Date(f['Date']).toISOString() : new Date().toISOString(),
                aiNotes: f['AI Notes'] || '',
                status: f['Status'] || 'Done',
            };
        });

    } catch (error) {
        console.error('Error fetching articles:', error);
        return [];
    }
}

export async function fetchArticleById(id: string): Promise<Article | null> {
    const articles = await fetchArticles();
    return articles.find(a => a.id === id) || null;
}

export interface VocabCard {
    id: string;
    word: string;
    context: string;
    translation: string;
    videoTitle?: string;
    timestamp?: string;
}

export async function fetchVocabCards(): Promise<VocabCard[]> {
    // 1. Static Fallback
    if (staticData && staticData.vocab) {
        return (staticData.vocab as any[]).map((item: any) => ({
            id: item.record_id,
            word: item.fields['Word'] || 'Unknown',
            context: item.fields['Context'] || '',
            translation: item.fields['Translation'] || '',
            videoTitle: item.fields['Video Title'] || '',
            timestamp: item.fields['Timestamp'] || '',
        }));
    }

    if (!BITABLE_APP_TOKEN || !VOCAB_TABLE_ID) {
        console.warn('FEISHU_BITABLE_APP_TOKEN or FEISHU_VOCAB_TABLE_ID is missing');
        return [];
    }

    const token = await getTenantAccessToken();
    if (!token) return [];

    const url = `https://open.feishu.cn/open-apis/bitable/v1/apps/${BITABLE_APP_TOKEN}/tables/${VOCAB_TABLE_ID}/records`;

    try {
        const response = await fetch(url, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            next: { revalidate: 60 }
        });

        const data = await response.json();

        if (data.code !== 0) {
            console.error('Failed to fetch vocab cards:', data);
            return [];
        }

        if (!data.data || !data.data.items) {
            return [];
        }

        return data.data.items.map((item: any) => ({
            id: item.record_id,
            word: item.fields['Word'] || 'Unknown',
            context: item.fields['Context'] || '',
            translation: item.fields['Translation'] || '',
            videoTitle: item.fields['Video Title'] || '',
            timestamp: item.fields['Timestamp'] || '',
        }));

    } catch (error) {
        console.error('Error fetching vocab cards:', error);
        return [];
    }
}

export async function getVocabList() {
    try {
        const items = await fetchVocabCards();
        return { success: true, items };
    } catch (e) {
        return { success: false, error: 'Failed to fetch' };
    }
}

export interface LingoClip {
    id: string;
    title: string;
    videoUrl: string;
    cover?: string;
    series: string;
    targetLang: string;
    difficulty: string;
    transcript: string; // JSON string of subtitle array
    tags: string[];
    date: string;
    status: string;
}

export async function fetchLingoClips(): Promise<LingoClip[]> {
    // 1. Static Fallback
    if (staticData && staticData.lingo) {
        return (staticData.lingo as any[]).map((item: any) => {
            const f = item.fields;

            // Helper for Cover
            const getCover = (field: any) => {
                if (field && Array.isArray(field) && field.length > 0) return field[0].url;
                return undefined;
            };

            return {
                id: item.record_id,
                title: f['Title'] || 'Untitled Clip',
                videoUrl: f['Video URL'] || f['URL'] || '',
                cover: getCover(f['Cover']),
                series: f['Series'] || 'General',
                targetLang: f['Target Language'] || 'EN',
                difficulty: f['Difficulty'] || 'Medium',
                transcript: f['Transcript (JSON)'] || '[]',
                tags: f['Tags'] ? (Array.isArray(f['Tags']) ? f['Tags'] : [f['Tags']]) : [],
                date: f['Date'] ? new Date(f['Date']).toISOString() : new Date().toISOString(),
                status: f['Status'] || 'Done',
            };
        });
    }

    if (!BITABLE_APP_TOKEN || !LINGO_TABLE_ID) {
        console.warn('FEISHU_BITABLE_APP_TOKEN or FEISHU_LINGO_TABLE_ID is missing');
        return [];
    }

    const token = await getTenantAccessToken();
    if (!token) return [];

    const url = `https://open.feishu.cn/open-apis/bitable/v1/apps/${BITABLE_APP_TOKEN}/tables/${LINGO_TABLE_ID}/records`;

    try {
        const response = await fetch(url, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            next: { revalidate: 60 }
        });

        const data = await response.json();

        if (data.code !== 0) {
            console.error('Failed to fetch lingo clips:', data);
            return [];
        }

        if (!data.data || !data.data.items) {
            return [];
        }

        return data.data.items.map((item: any) => {
            const f = item.fields;

            // Helper for Cover
            const getCover = (field: any) => {
                if (field && Array.isArray(field) && field.length > 0) return field[0].url;
                return undefined;
            };

            return {
                id: item.record_id,
                title: f['Title'] || 'Untitled Clip',
                videoUrl: f['Video URL'] || f['URL'] || '',
                cover: getCover(f['Cover']),
                series: f['Series'] || 'General',
                targetLang: f['Target Language'] || 'EN',
                difficulty: f['Difficulty'] || 'Medium',
                transcript: f['Transcript (JSON)'] || '[]',
                tags: f['Tags'] ? (Array.isArray(f['Tags']) ? f['Tags'] : [f['Tags']]) : [],
                date: f['Date'] ? new Date(f['Date']).toISOString() : new Date().toISOString(),
                status: f['Status'] || 'Done',
            };
        });

    } catch (error) {
        console.error('Error fetching lingo clips:', error);
        return [];
    }
}
