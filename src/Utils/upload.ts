import { DefaultParamsFunc } from "../index.js";
import { UploadResult } from "../Types/index.js";

const MIME_MAP: Record<string, string> = {
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    png: 'image/png',
    webp: 'image/webp',
    gif: 'image/gif',
    mp3: 'audio/mpeg',
    ogg: 'audio/ogg',
    wav: 'audio/wav',
    m4a: 'audio/mp4',
    mp4: 'video/mp4',
    mkv: 'video/x-matroska',
    webm: 'video/webm',
    pdf: 'application/pdf',
    zip: 'application/zip',
    json: 'application/json'
};

function getMimeType(fileName: string): string {
    const ext = fileName.slice((fileName.lastIndexOf('.') - 1 >>> 0) + 2).toLowerCase();
    return MIME_MAP[ext] || 'application/octet-stream';
}

export async function upload(
    buffer: ArrayBuffer,
    name: string = 'yuta_file.bin',
    opts: DefaultParamsFunc,
    mimeType?: string
): Promise<UploadResult> {
    const resolvedMime = mimeType || getMimeType(name);

    const form = new FormData();
    form.append('file', new Blob([buffer], { type: resolvedMime }), name);

    const url = new URL(opts.url);
    url.searchParams.set('apitoken', opts.apitoken);

    const response = await fetch(url, {
        method: 'POST',
        body: form
    });

    return (await response.json()) as UploadResult;
}