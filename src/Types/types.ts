/**
 * @license MIT
 * 
 * Copyright 2026 Yuta & Hutao bot community
 * Yuta APIs - Em parceria com HutaoBot
 *
 * @author Lm Only and Nk Petrov
 */

/** Opções de HTTP adcionais */
export declare interface HttpOptions {
    baseUrl?: string;
    headers?: Record<string, string>;
    /** Numero maximo de tentativas em caso de erro */
    maxRetry?: number;
}

export declare interface ParamsQuery {
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
export declare type DataTypeDefault = 'JSON' | 'BUFFER';
export declare type OtherOpts = Record<string, string> | null

export declare interface RequestOptions {
    method: 'GET' | 'POST'
    headers?: Record<string, string>;

    /**
     * Query params para url, exemplo: ?query= e etc
     */
    query?: ParamsQuery
}

export declare interface RequestOptsConfig {
    requestOptions: RequestOptions;
    dataType: 'JSON'
    | 'BUFFER'
    | 'TEXT'
}

export declare interface DefaultParamsFunc {
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

export declare interface DefaultResultJSON {
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

export declare interface PesquisasRota {
    ytsearch: (query: string) => Promise<DefaultResultJSON>;
    gitstalk: (query: string) => Promise<DefaultResultJSON>;
    wiki: (query: string) => Promise<DefaultResultJSON>;
}

export declare interface DownloadsRota {
    play: (query: string) => Promise<ArrayBuffer>;
    playvideo: (query: string) => Promise<ArrayBuffer>;
    ytmp3: (url: string) => Promise<ArrayBuffer>;
    ytmp4: (url: string) => Promise<ArrayBuffer>;
    tiktokdl: (url: string) => Promise<DefaultResultJSON>;
    tiktokMp3: (url: string) => Promise<ArrayBuffer>;
    tiktokMp4: (url: string) => Promise<ArrayBuffer>;
    instavideo: (url: string) => Promise<DefaultResultJSON>;
    pinterest: (query: string) => Promise<ArrayBuffer>;
    pinterestVideo: (url: string) => Promise<DefaultResultJSON>;
    pinterestMp3: (url: string) => Promise<ArrayBuffer>;
    pinterestMp4: (url: string) => Promise<ArrayBuffer>;
}

export declare interface IaRota {
    gpt: (query: string) => Promise<DefaultResultJSON>;
    gemini: (query: string) => Promise<DefaultResultJSON>;
    gemini_pro: (query: string) => Promise<DefaultResultJSON>;
    perplexity_ai: (query: string) => Promise<DefaultResultJSON>;
    geminivoz: (query: string) => Promise<ArrayBuffer>;
};

export declare interface GeradoresRota {
    nick: (query: string) => Promise<DefaultResultJSON>;
    qrcode: (query: string) => Promise<any>;
};

export declare interface AnimesRota {
    hentai_video: () => Promise<DefaultResultJSON>;
    hentai_video2: () => Promise<DefaultResultJSON>;
    metadinha: () => Promise<DefaultResultJSON>;
    quotesanimes: () => Promise<DefaultResultJSON>;
};

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
export declare type PlaqParams = | 'plaq1'
    | 'plaq2'
    | 'plaq3'
    | 'plaq4'
    | 'plaq5'
    | 'plaq6'
    | 'plaq7'
    | 'plaq8'
    | 'plaq9'
    | 'plaq10';

export declare type PlaqTextExample = | 'Lm amor' | 'Nk Domina';

export declare interface LogosRota {
    generate: (nomeDoEfeito: LogosOptions, textoPraLogo: string) => Promise<ArrayBuffer>;
}

export declare interface PlaqRoutes {
    generate: (Plaq: PlaqParams, TextinhoRs: PlaqTextExample) => Promise<ArrayBuffer>;
};

export declare interface NoticiasRota {
    cnn: () => Promise<DefaultResultJSON>;
    esportes: () => Promise<DefaultResultJSON>;
    g1: () => Promise<DefaultResultJSON>;
    ibge: () => Promise<DefaultResultJSON>;
    noticias_atuais: () => Promise<DefaultResultJSON>;
    politica: () => Promise<DefaultResultJSON>;
    uol: () => Promise<DefaultResultJSON>;
}

export declare interface RouteNames {
    pesquisas: PesquisasRota;
    downloads: DownloadsRota;
    ias: IaRota;
    geradores: GeradoresRota;
    animes: AnimesRota;
    logos: LogosRota;
    noticias: NoticiasRota;
    plaquinhas: PlaqRoutes;
}