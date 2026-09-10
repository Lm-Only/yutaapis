import { getTypeAndExt } from "./upload.js";

export interface FileIOopts {
    type?: 'audio' | 'video' | 'image';
}

interface UguuResponse {
    success: boolean;
    files: Array<{
        name: string;
        url: string;
        size: number;
    }>;
}

const TYPE_METADATA = {
    audio: { ext: 'mp3', mime: 'audio/mpeg' },
    video: { ext: 'mp4', mime: 'video/mp4' },
    image: { ext: 'jpg', mime: 'image/jpeg' },
};

/**
 * Faz um upload temporario para rotas que precisam de URL 
 * ao invés de buffer. 
 * 
 * @param buffer ArrayBuffer da midia
 * @param opts opções como tipo da midia
 * @returns Promise - url de resultado do upload
 */
export const uploadTemp = async (
    buffer: ArrayBuffer,
    opts: FileIOopts
): Promise<string> => {
    const { ext, mime } = opts.type ? TYPE_METADATA[opts.type] : (await getTypeAndExt(buffer));

    const form = new FormData();
    form.append('files[]', new Blob([buffer], { type: mime }), `tmp.${ext}`);

    const res = await fetch('https://uguu.se/upload', {
        method: 'POST',
        body: form,
    });

    if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
    }

    const json: UguuResponse = await res.json();

    if (!json.success || !json.files?.[0]?.url) {
        throw new Error('Falha ao enviar arquivo para o server');
    }

    return json.files[0].url;
};