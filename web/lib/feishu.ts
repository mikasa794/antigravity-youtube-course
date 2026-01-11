
const APP_ID = process.env.FEISHU_APP_ID || '';
const APP_SECRET = process.env.FEISHU_APP_SECRET || '';

// Base ID (App Token)
const BITABLE_APP_TOKEN = process.env.FEISHU_BITABLE_APP_TOKEN || ''; 

// Table IDs
const ARTICLES_TABLE_ID = process.env.FEISHU_BITABLE_TABLE_ID || '';
/* Lingo Table */
const VOCAB_TABLE_ID = process.env.FEISHU_VOCAB_TABLE_ID || '';
/* Courses Table - Optional */
const COURSES_TABLE_ID = process.env.FEISHU_COURSES_TABLE_ID || '';

interface TenantAccessTokenResponse {
    code: number;
    msg: string;
    tenant_access_token: string;
    expire: number;
}

async function getTenantAccessToken(): Promise<string> {
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
    coverUrl?: string; 
    tags: string[];
    date: string;
    aiNotes?: string;
    status: string;
}

export async function fetchArticles(): Promise<Article[]> {
    if (!BITABLE_APP_TOKEN || !ARTICLES_TABLE_ID) {
        console.warn('FEISHU_BITABLE_APP_TOKEN or FEISHU_BITABLE_TABLE_ID is missing');
        return [];
    }

    const token = await getTenantAccessToken();
    if (!token) return [];

    const url = https://open.feishu.cn/open-apis/bitable/v1/apps//tables//records;

    try {
        const response = await fetch(url, {
            headers: {
                'Authorization': Bearer ,
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

        const items = data.data.items.map((item: any) => {
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
            coverUrl: getCoverParams(f['Cover']),
            tags: f['Tags'] ? (Array.isArray(f['Tags']) ? f['Tags'] : [f['Tags']]) : [],
            date: f['Date'] ? new Date(f['Date']).toISOString() : new Date().toISOString(),
            aiNotes: f['AI Notes'] || '',
            status: f['Status'] || 'Done',
           };
        });

        return items;

    } catch (error) {
        console.error('Error fetching articles:', error);
        return [];
    }
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
     if (!BITABLE_APP_TOKEN || !VOCAB_TABLE_ID) {
        console.warn('FEISHU_BITABLE_APP_TOKEN or FEISHU_VOCAB_TABLE_ID is missing');
        return [];
    }

    const token = await getTenantAccessToken();
    if (!token) return [];

    const url = https://open.feishu.cn/open-apis/bitable/v1/apps//tables//records;

    try {
        const response = await fetch(url, {
            headers: {
                'Authorization': Bearer ,
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
