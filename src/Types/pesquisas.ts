import { DefaultResultJSON } from "./index.js";

interface TikTokAvatars {
    thumbnail: string;
    medium: string;
    small: string;
}

export interface TikTokResult extends Pick<DefaultResultJSON, 'criador' | 'msg' | 'status'> {
    message: string;
    creator: string;
    name: string;
    link: string;
    seguidores: number;
    seguindo: number;
    likes: number;
    idname: string;
    region: string | null;
    videos: number;
    description: string;
    privateAccount: boolean;
    created: string;
    verified: boolean;
    avatars: TikTokAvatars;
}


interface GoogleIcon {
    Height: string;
    URL: string;
    Width: string;
}

interface GoogleRelatedItem {
    FirstURL: string;
    Icon: GoogleIcon;
    Result: string;
    Text: string;
}

interface GoogleData {
    abstract: string;
    answer: string;
    url: string;
    related: GoogleRelatedItem[];
}

export interface GoogleResult extends Pick<DefaultResultJSON, 'creator' | 'msg' | 'status'> {
    result: GoogleData;
}

interface WallpaperItem {
    title: string;
    type: string;
    source: string;
    image: string;
}

export interface WallpaperResult extends Pick<DefaultResultJSON, 'criador' | 'msg' | 'status'> {
    total: number;
    resultado: WallpaperItem[];
}

interface PlayStoreItem {
    nome: string;
    imagem: string;
    desenvolvedor: string;
    estrelas: string;
    link: string;
}

export interface PlayStoreSearchResult extends Pick<DefaultResultJSON, 'criador' | 'msg' | 'status'> {
    total: number;
    resultado: PlayStoreItem[];
}

interface PensadorItem {
    frase: string;
}

export interface PensadorSearchResult extends Pick<DefaultResultJSON, 'criador' | 'msg' | 'status'> {
    total: number;
    resultados: PensadorItem[];
}

interface LetraMusicaItem {
    titulo: string;
    artista: string;
    image: string;
    link: string;
    letra: string;
}

export interface LetraMusicaResult extends Pick<DefaultResultJSON, 'criador' | 'msg' | 'status'> {
    result: LetraMusicaItem[];
}
