import { DefaultParamsFunc } from "../index.js";
import { UploadResult } from "../Types/index.js";
import { fileTypeFromBuffer } from "file-type";
import { Extensions, MediaTypesStringExample, MimeTypes } from "../Types/upload.js";


const MIME_MAP: Record<Extensions, MimeTypes> = {
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

interface TypeExtResponse {
    ext: Extensions;
    mime: MimeTypes;
}

function getMimeType(fileName: string): string | null {
    const ext = fileName.slice((fileName.lastIndexOf('.') - 1 >>> 0) + 2).toLowerCase() as Extensions;
    const mimeType = MIME_MAP[ext];

    return  (ext && mimeType) ? mimeType : null; 
}

async function getTypeAndExt(buffer: ArrayBuffer): Promise<TypeExtResponse> {
    try {
        const fileType = await fileTypeFromBuffer(buffer);
        if (!fileType?.ext || !fileType.mime) {
            throw new Error('Invalid File');
        }

        return fileType as TypeExtResponse;
    } catch (error) {
        throw new Error('File Type check error');
    }
}

function resolveFileName(typeExt: TypeExtResponse): string {
    return typeExt.mime.slice(0, typeExt.mime.indexOf('/')) + '.' + typeExt.ext;
}

export async function upload(
    buffer: ArrayBuffer,
    name: MediaTypesStringExample = 'default.',
    opts: DefaultParamsFunc,
    mimeType?: MimeTypes
): Promise<UploadResult> {
    let resolvedMime = mimeType || getMimeType(name);

    if (!resolvedMime) {
        const typeExt: TypeExtResponse = await getTypeAndExt(buffer);
        resolvedMime = typeExt.mime;
        name = resolveFileName(typeExt);
    }

    const form = new FormData();
    form.append('file', new Blob([buffer], { type: resolvedMime }), name);
    
    const url = new URL(opts.url);
    url.searchParams.set('apitoken', opts.apitoken);

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            ...opts.headers
        },
        body: form
    });

    return (await response.json()) as UploadResult;
}