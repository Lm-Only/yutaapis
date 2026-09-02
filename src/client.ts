/**
 * @license MIT
 * 
 * Copyright 2026 Yuta & Hutao bot community
 * Yuta APIs - Em parceria com HutaoBot
 *
 * @author Lm Only and Nk Petrov
 */

import { routes } from "./routes.js";
import { HttpOptions, RouteNames } from "./Types/types.js";
import { isYutaApiToken } from "./Utils/index.js";

const BASE_YUTA_API_URL: string = 'https://yuta-apis.xyz/api';

/**
 * YutaApis opções de configuração
 */
export interface YutaApisOptions {
    /**
     * API Token do Yuta APIS localizado na parte da
     * sua conta
     * 
     * É obrigatorio
     */
    apiToken: string;
    /** 
     * Opções de HTTP adcionais 
     */
    httpOptions?: HttpOptions
}

export class YutaApis {
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

    get ias() {
        return this.getRoutes('ias').ias;
    }

    get geradores() {
        return this.getRoutes('geradores').geradores;
    }

    get downloads() {
        return this.getRoutes('downloads').downloads;
    }

    get pesquisas() {
        return this.getRoutes('pesquisas').pesquisas;
    }

    get animes() {
        return this.getRoutes('animes').animes;
    }

    constructor(opts: YutaApisOptions = {} as YutaApisOptions) {
        if (!opts.apiToken || !isYutaApiToken(String(opts.apiToken))) {
            throw new Error('apiToken is not defined');
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
