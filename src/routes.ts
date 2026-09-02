/**
 * @license MIT
 * 
 * Copyright 2026 Yuta & Hutao bot community
 * Yuta APIs - Em parceria com HutaoBot
 *
 * @author Lm Only and Nk Petrov
 */

import gitstalk from "./Routes/pesquisa/github-search.js";
import ytsearch from "./Routes/pesquisa/yt-search.js";
import ytaudio2 from "./Routes/downloads/ytaudio2.js";
import wiki from "./Routes/pesquisa/wikipedia.js";

import { RouteNames } from "./Types/types.js";
import { urlFormatString } from "./Utils/url.js";
import ias from "./Routes/ias/ias.js";
import geradores from "./Routes/geradores/geradores.js";


type RouteHandler = (...args: any[]) => any;
type RouteParams = Record<string, RouteHandler>

export type Opts = {
    baseUrl: string;
    apitoken: string;
    route: string;
    headers?: Record<string, any>
}

export function routes(opts: Opts): Record<keyof RouteNames, RouteParams> {
    return {
        pesquisas: {
            ytsearch: async (query: string) => await ytsearch({
                ...opts, query,
                url: urlFormatString(opts.baseUrl, opts.route, 'yt-search')
            }),

            gitstalk: async (query: string) => await gitstalk({
                ...opts, query,
                url: urlFormatString(opts.baseUrl, opts.route, 'github-stalker')
            }),

            wiki: async (query: string) => await wiki({
                ...opts, query,
                url: urlFormatString(opts.baseUrl, opts.route, 'wiki-search')
            })
        },
        
        downloads: {
            ytaudio2: async (query: string) => await ytaudio2({
                ...opts, query,
                url: urlFormatString(opts.baseUrl, opts.route, 'ytaudio2')
            }),
        },

        ias: {
            
            gpt: async (query: string) => await ias({
                ...opts, query,
                url: urlFormatString(opts.baseUrl, opts.route, 'gpt')
            }, 'JSON'),
            
            gemini: async (query: string) => await ias({
                ...opts, query,
                url: urlFormatString(opts.baseUrl, opts.route, 'gemini')
            }, 'JSON'),

            gemini_pro: async (query: string) => await ias({
                ...opts, query,
                url: urlFormatString(opts.baseUrl, opts.route, 'gemini-pro')
            }, 'JSON'),

            geminivoz: async (query: string) => await ias({
                ...opts, query,
                url: urlFormatString(opts.baseUrl, opts.route, 'geminivoz')
            }, 'BUFFER'),

            perplexity_ai: async (query: string) => await ias({
                ...opts, query,
                url: urlFormatString(opts.baseUrl, opts.route, 'perplexity-ai')
            }, 'JSON')
        },

        geradores: {
            nick: async (query: string) => await geradores({
                ...opts, query,
                url: urlFormatString(opts.baseUrl, opts.route, 'gerar-nicks')
            }, 'JSON'),

            qrcode: async (query: string) => await geradores({
                ...opts, query,
                url: urlFormatString(opts.baseUrl, opts.route, 'qrcode')
            }, 'BUFFER'),
        }
    }
}