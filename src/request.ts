/**
 * @license MIT
 * 
 * Copyright 2026 Yuta & Hutao bot community
 * Yuta APIs - Em parceria com HutaoBot
 *
 * @author Lm Only and Nk Petrov
 */

import { request as httpRequest } from 'undici';
import { RequestOptsConfig } from './Types/types.js';
import { RequestError } from './errors.js';
import { Opts } from './routes.js';

async function getBodyByType<T>(body: any, dataType: string): Promise<T> {
    if (!dataType) return (await body.text()) as T;

    switch (dataType.toUpperCase()) {
        case 'JSON': return (await body.json()) as T;
        case 'TEXT': return (await body.text()) as T;
        case 'BUFFER': return Buffer.from(await body.arrayBuffer()) as T;
        default: return (await body.text()) as T;
    }
}

export async function request<T = unknown>(url: string, opts: RequestOptsConfig, redirectCount: number = 0, otherOpts: Opts): Promise<T> {
    if (redirectCount > 5) {
        throw new RequestError({ statusCode: 310, message: 'MAX_REDIRECTS' });
    }

    if (!opts.requestOptions.query) {
        opts.requestOptions.query = {};
    }

    opts.requestOptions.query.apitoken = otherOpts.apitoken;
    opts.requestOptions.headers = {
        ...opts.requestOptions.headers,
        ...otherOpts.headers,
    };

    const { statusCode, headers, body } = await httpRequest(url, opts.requestOptions);


    if (statusCode >= 200 && statusCode < 300) {
        return await getBodyByType<T>(body, opts.dataType);
    }

    const locationHeader = headers.location;
    if (statusCode >= 300 && statusCode < 400 && locationHeader) {
        await body.dump();
        const targetUrl = Array.isArray(locationHeader) ? locationHeader[0] : locationHeader;

        return request<T>(targetUrl, opts, redirectCount + 1, otherOpts);
    }

    /**
     * Aqui é pra quando der erro e a API retornar algo
     * Evitando retornar erro mal detalhado
     * Mas se caso a API não retornar nada
     * Segue pra erro desconhecido .
     */
    try {
        const responseError: any = await getBodyByType(body, opts.dataType);
        const hasResponseApi: boolean = Array.isArray(responseError) || typeof responseError !== 'undefined';

        if (hasResponseApi) {
            return responseError;
        }
    } catch {
        await body.dump().catch(() => {});
    }

    throw new RequestError({
        statusCode,
        message: 'REQ_FAILED',
    });
}