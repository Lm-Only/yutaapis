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

import { DefaultResultJSON, RouteNames } from "./Types/types.js";
import { urlFormatString } from "./Utils/url.js";
import ias from "./Routes/ias/index.js";
import geradores from "./Routes/geradores/index.js";
import animes from "./Routes/animes/index.js";
import logos from "./Routes/logos/index.js";

export type Opts = {
    baseUrl: string;
    apitoken: string;
    route: string;
    headers?: Record<string, any>
}

export function routes(opts: Opts): RouteNames {

    async function executeAnimesRoute(endpoint: string) {
        return await animes({
            ...opts,
            url: urlFormatString(opts.baseUrl, opts.route, endpoint)
        });
    }

    type FunctionName = 'yt-search'
        | 'github-stalker'
        | 'wiki-search'

    const functionsMap = {
        'github-stalker': gitstalk,
        'wiki-search': wiki,
        'yt-search': ytsearch
    } as const;


    async function executePesquisasRoute(query: string, functionName: FunctionName) {
        const executeFunction = functionsMap[functionName];

        return await executeFunction({
            ...opts, query,
            url: urlFormatString(opts.baseUrl, opts.route, functionName)
        });
    }

    return {
        pesquisas: {
            ytsearch: (query: string) => executePesquisasRoute(query, 'yt-search') as Promise<DefaultResultJSON>,
            gitstalk: (query: string) => executePesquisasRoute(query, 'github-stalker') as Promise<DefaultResultJSON>,
            wiki: (query: string) => executePesquisasRoute(query, 'wiki-search') as Promise<DefaultResultJSON>
        },
        
        downloads: {
            ytaudio2: async (query: string) => await ytaudio2({
                ...opts, query,
                url: urlFormatString(opts.baseUrl, opts.route, 'ytaudio2')
            }),
        },

        ias: {
            
            gpt: (query: string) => ias({
                ...opts, query,
                url: urlFormatString(opts.baseUrl, opts.route, 'gpt')
            }) as Promise<DefaultResultJSON>,
            
            gemini: (query: string) => ias({
                ...opts, query,
                url: urlFormatString(opts.baseUrl, opts.route, 'gemini')
            }) as Promise<DefaultResultJSON>,

            gemini_pro: (query: string) => ias({
                ...opts, query,
                url: urlFormatString(opts.baseUrl, opts.route, 'gemini-pro')
            }) as Promise<DefaultResultJSON>,

            geminivoz: async (query: string): Promise<ArrayBuffer> => ias({
                ...opts, query,
                url: urlFormatString(opts.baseUrl, opts.route, 'geminivoz')
            }, 'BUFFER') as Promise<ArrayBuffer>,

            perplexity_ai: (query: string) => ias({
                ...opts, query,
                url: urlFormatString(opts.baseUrl, opts.route, 'perplexity-ai')
            }) as Promise<DefaultResultJSON>
        },

        geradores: {
            nick: (query: string) => geradores({
                ...opts, query,
                url: urlFormatString(opts.baseUrl, opts.route, 'gerar-nicks')
            }) as Promise<DefaultResultJSON>,

            qrcode: async (query: string) => await geradores({
                ...opts, query,
                url: urlFormatString(opts.baseUrl, opts.route, 'qrcode')
            }, 'BUFFER'),
        },

        animes: {
            hentai_video: async () => await executeAnimesRoute('hentai-video'),
            hentai_video2: async () => await executeAnimesRoute('hentai-video2'),
            metadinha: async () => await executeAnimesRoute('metadinha'),
            quotesanimes: async () => await executeAnimesRoute('quotesanimes')
        },

        logos: {
            generate: (nomeDoEfeito: string, textoPraLogo: string) => {
                
                if (!textoPraLogo) {
                    console.error('Ei você errou aí na função de logos, você primeiro tem que passar o nome do efeito (tipo: glitch) e depois o texto a ser gerado: (ex: Yuta APis)');
                    throw new Error('Invalid params');
                }

                return logos({
                    ...opts,
                    query: textoPraLogo,
                    url: urlFormatString(opts.baseUrl, opts.route, nomeDoEfeito)
                }) as Promise<ArrayBuffer>;
            }
        }
    }
}