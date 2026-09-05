/**
 * @license MIT
 * 
 * Copyright 2026 Yuta & Hutao bot community
 * Yuta APIs - Em parceria com HutaoBot
 *
 * @author Lm Only and Nk Petrov
 */

/** Opções de HTTP adcionais */
export interface HttpOptions {
    baseUrl?: string;
    headers?: Record<string, string>;
    /** Numero maximo de tentativas em caso de erro */
    maxRetry?: number;
}

export interface ParamsQuery {
    apitoken?: string;

    /** Ok Nk, 
     * sofri por que achava que tudo era query kkkk
     * 😡😡😡
     */
    query?: string;
    url?: string;
    text?: string;
    username?: string;

    /** Esse é exclusivo da rota de logos  */
    texto?: string;
}

/**
 * O gemini voz retorna buffer
 * Mas o resto retorna JSON
 * cuidado
 */
export type DataTypeDefault = 'JSON' | 'BUFFER';
export type OtherOpts = Record<string, string> | null | any

export interface RequestOptions {
    method: 'GET' | 'POST'
    headers?: Record<string, string>;

    /**
     * Query params para url, exemplo: ?query= e etc
     */
    query?: ParamsQuery
}

export interface RequestOptsConfig {
    requestOptions: RequestOptions;
    dataType: 'JSON'
    | 'BUFFER'
    | 'TEXT'
}

export interface DefaultParamsFunc {
    query?: string;
    /**
     * Seria como https://yuta-apis.xyz/api
     */
    baseUrl: string;
    /**
     * Tipo: pesquisa
     */
    route: string;
    /**
     * Exemplo: yt-search
     */
    url: string;
    /**
     * Token do Yuta
     */
    apitoken: string;
    headers?: Record<string, string>;
}

export interface DefaultResultJSON {
    status?: boolean;
    msg?: string;
    resposta?: string;

    total?: number;
    fonte?: string;

    criador?: | '@NkPetrøv' | '@LmOnly';
    creator?: | '@NkPetrøv' | '@LmOnly';

    resultado?: Array<any>;
    result?: Array<any>;
}

export interface PesquisasRoute {
    ytsearch: (query: string) => Promise<DefaultResultJSON>;
    gitstalk: (query: string) => Promise<DefaultResultJSON>;
    wiki: (query: string) => Promise<DefaultResultJSON>;
}

export interface DownloadsRoute {
    play: (query: string) => Promise<ArrayBuffer>;
    playvideo: (query: string) => Promise<ArrayBuffer>;
    ytmp3: (url: string) => Promise<ArrayBuffer>;
    ytmp4: (url: string) => Promise<ArrayBuffer>;
    tiktokdl: (url: string) => Promise<DefaultResultJSON>;
    tiktokMp3: (url: string) => Promise<ArrayBuffer>;
    tiktokMp4: (url: string) => Promise<ArrayBuffer>;
    instavideo: (url: string) => Promise<DefaultResultJSON>;
    facebook: (url: string) => Promise<DefaultResultJSON>;
    facebookMp3: (url: string) => Promise<ArrayBuffer>;
    facebookMp4: (url: string) => Promise<ArrayBuffer>;
    pinterest: (query: string) => Promise<ArrayBuffer>;
    pinterestVideo: (url: string) => Promise<DefaultResultJSON>;
    pinterestMp3: (url: string) => Promise<ArrayBuffer>;
    pinterestMp4: (url: string) => Promise<ArrayBuffer>;
}

export interface IasRoute {
    gpt: (query: string) => Promise<DefaultResultJSON>;
    gemini: (query: string) => Promise<DefaultResultJSON>;
    gemini_pro: (query: string) => Promise<DefaultResultJSON>;
    perplexity_ai: (query: string) => Promise<DefaultResultJSON>;
    geminivoz: (query: string) => Promise<ArrayBuffer>;
};


export interface GeradoresRoute {
    nick: (query: string) => Promise<DefaultResultJSON>;
    qrcode: (query: string) => Promise<any>;
};

export interface AnimesRoute {
    hentai_video: () => Promise<DefaultResultJSON>;
    hentai_video2: () => Promise<DefaultResultJSON>;
    metadinha: () => Promise<DefaultResultJSON>;
    quotesanimes: () => Promise<DefaultResultJSON>;
};

export  interface TraduizrOpts {
    text: string;
    idioma: | 'en' | 'pt';
}

export interface OthersRoute {
    signo: (signo: string) => Promise<DefaultResultJSON>;
    traduzir: (traduzirOpts: TraduizrOpts) => Promise<DefaultResultJSON>;
    ip: (ip: string) => Promise<DefaultResultJSON>;
}

export type LogosOptions =
    | 'glitch'
    | 'write'
    | 'advancedglow'
    | 'typography'
    | 'pixelglitch'
    | 'neonglitch'
    | 'flag'
    | 'flag3d'
    | 'deleting'
    | 'glowing'
    | 'underwater'
    | 'logomaker'
    | 'cartoon'
    | 'papercut'
    | 'watercolor'
    | 'effectclouds'
    | 'blackpinklogo'
    | 'gradient'
    | 'summerbeach'
    | 'luxurygold'
    | 'multicoloredneon'
    | 'sandsummer'
    | 'galaxywallpaper'
    | '1917'
    | 'makingneon'
    | 'royal'
    | 'freecreate'
    | 'galaxy'
    | 'darkgreen'
    | 'lighteffects'
    | 'dragonball'
    | 'neondevil'
    | 'frozen'
    | 'wooden3d'
    | 'metal3d'
    | 'ligatures'
    | '3druby'
    | 'sunset'
    | 'cemetery'
    | 'halloween'
    | 'horror'
    | 'blood'
    | 'joker'
    | 'clouds';


// scrr quem usa isso?
export type PlaqParams = | 'plaq1'
    | 'plaq2'
    | 'plaq3'
    | 'plaq4'
    | 'plaq5'
    | 'plaq6'
    | 'plaq7'
    | 'plaq8'
    | 'plaq9'
    | 'plaq10';

export type PlaqTextExample = | 'Lm amor' | 'Nk Domina';
export interface WelcomeOpts {
    fundo: string;
    text: string;
    logo: string;
}
export interface CardMusicOpts {
    fundo: string;
    avatar: string;
    titulo: string;
    author: string;
    atual: string;
    total: string;
}
export interface BemVindoOpts {
    fundo: string;
    perfil: string;
    lengenda: string;
    titulo: string;
}

export interface LogosRoute {
    generate: (nomeDoEfeito: LogosOptions, textoPraLogo: string) => Promise<ArrayBuffer>;
}

export interface PlaqRoute {
    generate: (Plaq: PlaqParams, TextinhoRs: PlaqTextExample) => Promise<ArrayBuffer>;
};

export interface NoticiasRoute {
    cnn: () => Promise<DefaultResultJSON>;
    esportes: () => Promise<DefaultResultJSON>;
    g1: () => Promise<DefaultResultJSON>;
    ibge: () => Promise<DefaultResultJSON>;
    noticias_atuais: () => Promise<DefaultResultJSON>;
    politica: () => Promise<DefaultResultJSON>;
    uol: () => Promise<DefaultResultJSON>;
}

export interface StickerRoute {
    attp: (text: string) => Promise<ArrayBuffer>;
    brat: (text: string) => Promise<ArrayBuffer>;
    bratvid: (text: string) => Promise<ArrayBuffer>;
    figu: () => Promise<ArrayBuffer>;
    figu_anime: () => Promise<ArrayBuffer>;
    figu_coreana: () => Promise<ArrayBuffer>;
    figu_desenho: () => Promise<ArrayBuffer>;
    figu_emoji: () => Promise<ArrayBuffer>;
    figu_engracadas: () => Promise<ArrayBuffer>;
    figu_raiva: () => Promise<ArrayBuffer>;
    figu_roblox: () => Promise<ArrayBuffer>;
}

export interface CanvasRoute {
    welcome: (opts: WelcomeOpts) => Promise<ArrayBuffer>;
    cardMusic: (opts: CardMusicOpts) => Promise<ArrayBuffer>;
    bemvindo: (opts: BemVindoOpts) => Promise<ArrayBuffer>;
}

export interface RouteNames {
    pesquisas: PesquisasRoute;
    downloads: DownloadsRoute;
    ias: IasRoute;
    geradores: GeradoresRoute;
    animes: AnimesRoute;
    logos: LogosRoute;
    noticias: NoticiasRoute;
    plaquinhas: PlaqRoute;
    stickers: StickerRoute;
    canvas: CanvasRoute;
    outros: OthersRoute
}