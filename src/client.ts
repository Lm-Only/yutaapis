/**
 * @license MIT
 * 
 * Copyright 2026 Yuta & Hutao bot community
 * Yuta APIs - Em parceria com HutaoBot
 *
 * @author Lm Only and Nk Petrov
 */

import { API_TOKEN_WARN_MESSAGE, BASE_YUTA_API_URL } from "./Defaults/index.js";
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
    RouteKey, 
    RouteNames, 
    StalkerRoute, 
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
    /**
     * Logs no console 
     * Como avisar sobre a apiToken mal configurada
     * 
     * Default=true
     */
    logger?: boolean;
    /**
     * Essa mensagem é usada para que o módulo 
     * avise sobre o token mal configurado
     */
    messageInvalidToken?: string;
    httpOptions?: HttpOptions
}

export default class YutaApis {
    private readonly url?: string;
    private readonly __routeCacheMap = new Map()
    
    private readonly config: {
        headers: Record<string, string>;
        apitoken: string;

        readonly baseUrl: string;
        readonly logger: boolean;
        readonly messageInvalidToken: string;
    }
    readonly httpOptions?: HttpOptions;
    
    private getRoutes(routeName: RouteKey) {
        if (this.__routeCacheMap.has(routeName)) return this.__routeCacheMap.get(routeName);
        if (!this.url) throw new Error('Base url is not defined');

        const __routeCache = routes({
            ...this.config,
            route: routeName
        })[routeName];
        this.__routeCacheMap.set(routeName, __routeCache);
        return  __routeCache
    }

    /**
     * Atualiza o token do Yuta APIs após iniciar o cliente.
     * Util para bots/projetos que precisam atualizar o API Token 
     * em tempo de execução sem precisar reiniciar
     * 
     * @param token novo token do Yuta APIs
     */
    public updateApiToken(token: string): void {
        if (typeof token !== 'string') {
            throw new Error('invalid apiToken');
        }

        const isLogger = this.config.logger;
        const messageInvalidToken = this.config.messageInvalidToken;

        if (!isYutaApiToken(String(token)) && isLogger) {
            console.log(messageInvalidToken);
        }

        this.__routeCacheMap.clear();
        this.config.apitoken = token;
    }

    get ias(): IasRoute {
        return this.getRoutes('ias');
    }
    
    get outros(): OthersRoute {
        return this.getRoutes('outros');
    }

    get geradores(): GeradoresRoute {
        return this.getRoutes('geradores');
    }

    get plaquinhas() {
        const generate = this.getRoutes('plaquinhas').generate;
        return (Plaq: PlaqParams, TextinhoRs: PlaqTextExample) => generate(Plaq, TextinhoRs) as Promise<DefaultResultBuffer>;
    }

    get downloads(): DownloadsRoute {
        return this.getRoutes('downloads');
    }

    get pesquisas(): PesquisasRoute {
        return this.getRoutes('pesquisas');
    }

    get stalker(): StalkerRoute {
        return this.getRoutes('stalker');
    }

    get noticias(): NoticiasRoute {
        return this.getRoutes('noticias');
    }

    get stickers(): StickerRoute {
        return this.getRoutes('stickers');
    }

    get upload() {
        const execute = this.getRoutes('upload').execute;
        return (buffer: ArrayBuffer, name: MediaTypesStringExample, mimeType?: MimeTypes) => execute(buffer, name, mimeType) as Promise<UploadResult>
    }

    get logos() {
        const generate = this.getRoutes('logos').generate;
        return (nomeDoEfeito: LogosOptions, textoPraLogo: string) => generate(nomeDoEfeito, textoPraLogo) as Promise<DefaultResultBuffer>;
    }

    get canvas(): CanvasRoute {
        return this.getRoutes('canvas');
    }

    get animes(): AnimesRoute {
        return this.getRoutes('animes');
    }

    constructor(opts: YutaApisOptions) {
        if (!opts.apiToken) {
            throw new Error('apiToken is not defined');
        }

        opts.logger = opts.logger ?? true;

        const messageInvalidToken = opts.messageInvalidToken || API_TOKEN_WARN_MESSAGE;
        if (!isYutaApiToken(String(opts.apiToken)) && opts.logger) {
            console.log(messageInvalidToken);
        }

        this.httpOptions = opts.httpOptions ?? {};
        this.url = this.httpOptions?.baseUrl ?? BASE_YUTA_API_URL;
        this.config = {
            headers: this.httpOptions?.headers ?? {},
            apitoken: opts.apiToken,
            baseUrl: this.url,
            logger: opts.logger,
            messageInvalidToken
        };
    }
}
