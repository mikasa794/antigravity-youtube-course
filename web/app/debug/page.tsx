import fs from 'fs';
import path from 'path';

export default function DebugPage() {
    const publicDir = path.join(process.cwd(), 'public');
    const imagesDir = path.join(publicDir, 'images/articles');

    let files: string[] = [];
    let error = '';

    try {
        if (fs.existsSync(imagesDir)) {
            files = fs.readdirSync(imagesDir);
        } else {
            error = `Directory not found: ${imagesDir}. CWD: ${process.cwd()}`;
        }
    } catch (e: any) {
        error = e.message;
    }

    return (
        <div className="p-10 font-mono text-sm">
            <h1 className="text-xl font-bold mb-4">File System Debug</h1>
            <div className="mb-4 p-4 bg-gray-100 rounded">
                <strong>Process CWD:</strong> {process.cwd()}
            </div>

            {error && (
                <div className="text-red-500 mb-4 p-4 border border-red-200 bg-red-50">
                    Error: {error}
                </div>
            )}

            <h2 className="text-lg font-bold mt-6 mb-2">Files in public/images/articles ({files.length}):</h2>
            <ul className="grid grid-cols-2 gap-2">
                {files.map(f => (
                    <li key={f} className="border-b border-gray-100 py-1">{f}</li>
                ))}
            </ul>
        </div>
    );
}
