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
}

/**
 * O gemini voz retorna buffer
 * Mas o resto retorna JSON
 * cuidado
 */
export declare type DataTypeDefault = 'JSON' | 'BUFFER';

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

export declare interface RouteNames {
    pesquisas: {
        ytsearch: (query: string) => Promise<any>;
        gitstalk: (query: string) => Promise<any>;
        wiki: (query: string) => Promise<any>;
    };
    downloads: {
        ytaudio2: (query: string) => Promise<any>;
    };
    ias: {
        gpt: (query: string) => Promise<any>;
        gemini: (query: string) => Promise<any>;
        gemini_pro: (query: string) => Promise<any>;
        perplexity_ai: (query: string) => Promise<any>;
    };
    geradores: {
        nick: (query: string) => Promise<any>;
        qrcode: (query: string) => Promise<any>;
    };
    animes: {
        hentai_video: (query: string) => Promise<any>;
        hentai_video2: (query: string) => Promise<any>;
        metadinha: (query: string) => Promise<any>;
        quotesanimes: (query: string) => Promise<any>;
    };
}