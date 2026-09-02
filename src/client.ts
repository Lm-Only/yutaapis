/**
 * @license MIT
 * 
 * Copyright 2026 Yuta & Hutao bot community
 * Yuta APIs - Em parceria com HutaoBot
 *
 * @author Lm Only and Nk Petrov
 */

import { routes } from "./routes.js";
import { HttpOptions } from "./Types/types.js";
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
    
    readonly config: Readonly<{
        headers: Record<string, string>;
        apitoken: string;
        baseUrl: string;
    }>
    readonly httpOptions?: HttpOptions;
    
    get ias() {
        const baseUrl: string | undefined = this.url;

        if (!baseUrl) {
            throw new Error('baseUrl is not defined');
        }

        return routes({
            ...this.config,
            route: 'ias'
        }).ias;
    }

    get geradores() {
        const baseUrl: string | undefined = this.url;

        if (!baseUrl) {
            throw new Error('baseUrl is not defined');
        }

        return routes({
            ...this.config,
            route: 'geradores'
        }).geradores;
    }

    get downloads() {
        const baseUrl: string | undefined = this.url;

        if (!baseUrl) {
            throw new Error('baseUrl is not defined');
        }
        
        return routes({
            ...this.config,
            route: 'downloads'
        }).downloads;
    }
    
    get pesquisas() {
        const baseUrl: string | undefined = this.url;

        if (!baseUrl) {
            throw new Error('baseUrl is not defined');
        }

        return routes({
            ...this.config,
            route: 'pesquisas'
        }).pesquisas;
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
