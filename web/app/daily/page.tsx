import { promises as fs } from 'fs';
import path from 'path';

// --- Types ---
interface DigestData {
    date: string;
    edition: string;
    hero: {
        id: string;
        title: string;
        author: string;
        summary: string;
        cover: string;
        hook_text?: string;
    };
    bites: {
        id: string;
        source: string;
        category: string;
        title: string;
        title_cn: string;
        hook_text: string;
        summary: string;
        summary_cn: string;
        type: string;
        url: string;
        image: string;
    }[];
}

// --- Morandi Colors Map ---
const CAT_COLORS: Record<string, string> = {
    "INSIGHT": "bg-[#B2A4D4]", // Morandi Violet
    "STRATEGY": "bg-[#94B0D5]", // Morandi Blue
    "MODEL": "bg-[#D8A499]",    // Morandi Red
    "ESSAY": "bg-[#E0C8AA]",    // Morandi Orange
    "TECH": "bg-[#8AB09B]",     // Morandi Green
    "INDUSTRY": "bg-[#778899]", // Morandi Dark
    "DEFAULT": "bg-[#B4B4B4]",   // Morandi Gray
    "HEADLINE STORY": "bg-[#73B9B9]" // Morandi Teal
};

// --- Helper: Get Color ---
function getCatColor(cat: string) {
    return CAT_COLORS[cat?.toUpperCase()] || CAT_COLORS["DEFAULT"];
}

// --- Page Component ---
export default async function DailyDigestPage() {
    // Read Data
    const jsonDirectory = path.join(process.cwd(), 'public/data');
    const fileContents = await fs.readFile(jsonDirectory + '/daily_latest.json', 'utf8');
    const data: DigestData = JSON.parse(fileContents);

    return (
        <div className="min-h-screen bg-[#FCFAF2] text-[#1e1e1e] font-sans pb-20">

            {/* 1. HEADER */}
            <div className="max-w-2xl mx-auto px-6 pt-8 pb-6 flex items-end justify-between">
                <h1 className="text-4xl font-bold tracking-tight text-[#2D2D2D]">Antigravity Daily</h1>
                <div className="bg-[#2D2D2D] text-white px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide">
                    {data.date} | {data.edition}
                </div>
            </div>

            <div className="max-w-2xl mx-auto px-4 space-y-12">

                {/* 2. HERO CARD (Poster-Split) */}
                <section className="bg-white rounded-[32px] overflow-hidden shadow-lg border border-gray-100">
                    {/* Top: Poster (60% Height approx) */}
                    <div className="relative h-[480px] w-full group">
                        <div className="absolute top-0 left-0 w-full h-full">
                            {/* Image */}
                            <img
                                src={data.hero.cover.replace('web/public', '')}
                                alt={data.hero.title}
                                className="w-full h-full object-cover"
                            />
                            {/* Vertical Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
                        </div>

                        {/* Hook Text */}
                        <div className="absolute bottom-8 left-8">
                            <div className="text-white text-6xl font-bold leading-[1.1] drop-shadow-md whitespace-pre-line font-serif">
                                {data.hero.hook_text || "The Daily\nDeep Dive"}
                            </div>
                        </div>

                        {/* Headline Tag */}
                        <div className="absolute bottom-[220px] left-8">
                            <span className="bg-[#73B9B9] text-white px-3 py-1 rounded-lg text-sm font-bold tracking-wider">
                                HEADLINE STORY
                            </span>
                        </div>
                    </div>

                    {/* Bottom: Content (40%) */}
                    <div className="p-8 bg-white">
                        <h2 className="text-3xl font-bold text-[#1e1e1e] mb-4 leading-tight">
                            {data.hero.title}
                        </h2>
                        <div className="text-base text-gray-500 leading-relaxed space-y-4">
                            {/* Parse summary markdown if needed, simple text for now */}
                            <p>{data.hero.summary.split('\n')[0]}</p>
                        </div>
                        <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between text-sm text-gray-400">
                            <span>{data.hero.author}</span>
                            <div className="flex items-center gap-2">
                                <span>Read Story</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. QUICK BITES (Grid 3:4) */}
                <section className="grid grid-cols-2 gap-4">
                    {data.bites.map((bite) => (
                        <a
                            key={bite.id}
                            href={bite.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block bg-white rounded-[24px] overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="flex flex-col h-full">

                                {/* A. Category Header */}
                                <div className={`${getCatColor(bite.category)} h-[40px] flex items-center justify-center`}>
                                    <span className="text-white text-xs font-bold tracking-widest uppercase">
                                        {bite.category}
                                    </span>
                                </div>

                                {/* B. Poster Image */}
                                <div className="relative aspect-[4/3] w-full overflow-hidden">
                                    <img
                                        src={bite.image.replace('web/public', '')}
                                        alt={bite.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {/* Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                                    {/* Hook Text */}
                                    <div className="absolute bottom-4 left-4">
                                        <p className="text-white text-3xl font-bold leading-none drop-shadow-sm font-serif">
                                            {bite.hook_text?.split('\n').map((line, i) => (
                                                <span key={i} className="block">{line}</span>
                                            ))}
                                        </p>
                                    </div>
                                </div>

                                {/* C. Content */}
                                <div className="p-5 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-lg font-bold text-[#2D2D2D] leading-snug mb-3 min-h-[3.5rem]">
                                            {bite.title_cn}
                                        </h3>
                                        <p className="text-sm text-gray-500 line-clamp-4 leading-relaxed">
                                            {bite.summary_cn}
                                        </p>
                                    </div>

                                    <div className="mt-4 flex items-center gap-2 text-xs text-gray-400 font-medium">
                                        <span>{bite.source}</span>
                                    </div>
                                </div>

                            </div>
                        </a>
                    ))}
                </section>

                {/* Footer */}
                <div className="text-center text-gray-400 text-sm pb-10 pt-4">
                    Antigravity AI Engine • Generated on {data.date}
                </div>

            </div>
        </div>
    );
}
