/**
 * @license MIT
 * 
 * Copyright 2026 Yuta & Hutao bot community
 * Yuta APIs - Em parceria com HutaoBot
 *
 * @author Lm Only and Nk Petrov
 */

import { BASE_YUTA_API_URL } from "./Defaults/index.js";
import { routes } from "./routes.js";
import { 
    AnimesRoute, 
    CanvasRoute, 
    DefaultResultBuffer, 
    DownloadsRoute, 
    GeradoresRoute, 
    HttpOptions, 
    IasRoute, 
    LogosOptions, 
    NoticiasRoute, 
    OthersRoute, 
    PesquisasRoute, 
    PlaqParams, 
    PlaqTextExample, 
    StickerRoute, 
    UploadResult
} from "./Types/index.js";
import { MediaTypesStringExample, MimeTypes } from "./Types/upload.js";
import { isYutaApiToken } from "./Utils/index.js";

export interface YutaApisOptions {
    /**
     * API Token do Yuta APIS localizado na parte da
     * sua conta
     * 
     * É obrigatorio
     */
    apiToken: string;
    httpOptions?: HttpOptions
}

export default class YutaApis {
    private readonly apiToken?: string;
    private readonly url?: string;
    private __routeCache: ReturnType<typeof routes> | null = null;
    
    readonly config: Readonly<{
        headers: Record<string, string>;
        apitoken: string;
        baseUrl: string;
    }>
    readonly httpOptions?: HttpOptions;
    
    private getRoutes(routeName: string) {
        if (this.__routeCache) return this.__routeCache;
        if (!this.url) {
            throw new Error('Base url is not defined');
        }

        this.__routeCache = routes({
            ...this.config,
            route: routeName
        });
        return this.__routeCache;
    }

    get ias(): IasRoute {
        return this.getRoutes('ias').ias;
    }
    
    get outros(): OthersRoute {
        return this.getRoutes('outros').outros;
    }

    get geradores(): GeradoresRoute {
        return this.getRoutes('geradores').geradores;
    }

    get plaquinhas() {
        const generate = this.getRoutes('plaquinhas').plaquinhas.generate;
        return (Plaq: PlaqParams, TextinhoRs: PlaqTextExample) => generate(Plaq, TextinhoRs) as Promise<DefaultResultBuffer>;
    }

    get downloads(): DownloadsRoute {
        return this.getRoutes('downloads').downloads;
    }

    get pesquisas(): PesquisasRoute {
        return this.getRoutes('pesquisas').pesquisas;
    }

    get noticias(): NoticiasRoute {
        return this.getRoutes('noticias').noticias;
    }

    get stickers(): StickerRoute {
        return this.getRoutes('stickers').stickers;
    }

    get upload() {
        const execute = this.getRoutes('upload').upload.execute;
        return (buffer: ArrayBuffer, name: MediaTypesStringExample, mimeType?: MimeTypes) => execute(buffer, name, mimeType) as Promise<UploadResult>
    }

    get logos() {
        const generate = this.getRoutes('logos').logos.generate;
        return (nomeDoEfeito: LogosOptions, textoPraLogo: string) => generate(nomeDoEfeito, textoPraLogo) as Promise<DefaultResultBuffer>;
    }

    get canvas(): CanvasRoute {
        return this.getRoutes('canvas').canvas;
    }

    get animes(): AnimesRoute {
        return this.getRoutes('animes').animes;
    }

    constructor(opts: YutaApisOptions) {
        if (!opts.apiToken) {
            throw new Error('apiToken is not defined');
        }

        if (!isYutaApiToken(String(opts.apiToken))) {
            console.log('A apiToken do Yuta pode está errada ou mal definida. Veja: https://yuta-apis.xyz/planos');
        }

        this.apiToken = opts.apiToken;
        this.httpOptions = opts.httpOptions ?? {};
        this.url = opts.httpOptions?.baseUrl ?? BASE_YUTA_API_URL;
        this.config = {
            headers: this.httpOptions?.headers ?? {},
            apitoken: this.apiToken,
            baseUrl: this.url
        };
    }
}
