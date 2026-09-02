declare global {
    interface PesquisasRoutes {
        ytsearch: (query: string) => Promise<any>;
        gitstalk: (query: string) => Promise<any>;
        wiki: (query: string) => Promise<any>;
    }

    interface DownloadsRoutes {
        ytaudio2: (query: string) => Promise<any>;
    }

    interface IasRoutes {
        gpt: (query: string) => Promise<any>;
        gemini: (query: string) => Promise<any>;
        gemini_pro: (query: string) => Promise<any>;
        perplexity_ai: (query: string) => Promise<any>;
    }

    interface GeradoresRoutes {
        nick: (query: string) => Promise<any>;
        qrcode: (query: string) => Promise<any>;
    }

    interface AnimesRoutes {
        hentai_video: (query: string) => Promise<any>;
        hentai_video2: (query: string) => Promise<any>;
        metadinha: (query: string) => Promise<any>;
        quotesanimes: (query: string) => Promise<any>;
    }
}

// Mantém as exportações normais do pacote
export declare class YutaApis {
    get ias(): IasRoutes;
    get geradores(): GeradoresRoutes;
    get downloads(): DownloadsRoutes;
    get pesquisas(): PesquisasRoutes;
    get animes(): AnimesRoutes;
}

export { };