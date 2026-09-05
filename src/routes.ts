/**
 * @license MIT
 * 
 * Copyright 2026 Yuta & Hutao bot community
 * Yuta APIs - Em parceria com HutaoBot
 *
 * @author Lm Only and Nk Petrov
 */

import { 
    BemVindoOpts,
    CardMusicOpts,
    DataTypeDefault, 
    DefaultResultJSON, 
    OtherOpts, 
    PlaqParams, 
    PlaqTextExample, 
    RouteNames, 
    TraduizrOpts, 
    WelcomeOpts
} from "./Types/types.js";
import { urlFormatString, defaultRequest } from "./Utils/index.js";

export type Opts = {
    baseUrl: string;
    apitoken: string;
    route: string;
    query?: string;
    headers?: Record<string, any>
}

/**
 * Explicação - A API do Nk teve uma variação aqui
 * Aparentemente as vezes é /api/canvas
 * Depois: /canvas sem o /api
 * Isso causou um certo conflito no codigo
 */
type ExplainThisMethod = 'WITH_API_PATH' | 'NO_API_PATH';

/**
 * AVISO: Antes e adicionar um rota aqui
 * é necessario registrar no types.js
 * 
 * @param opts nothing-zero
 * @returns Todas as rotas do Yuta APIS
 */
export function routes(opts: Opts): RouteNames {
    async function executeDefaultMethod(
        endPoint: string, 
        params: OtherOpts = {}, 
        dataType: DataTypeDefault = 'JSON',
        methodType: ExplainThisMethod = 'WITH_API_PATH'
    ): Promise<DefaultResultJSON | ArrayBuffer> {
        opts.baseUrl = opts.baseUrl + (methodType ==='WITH_API_PATH' ? '/api' : '');

        return defaultRequest({
            ...opts, 
            url: urlFormatString(opts.baseUrl, opts.route, endPoint)
        }, dataType, params);
    }

    return {
        outros: {
            signo: (signo: string) => executeDefaultMethod('signo', { signo }) as Promise<DefaultResultJSON>,
            traduzir: (traduzirOpts: TraduizrOpts) => executeDefaultMethod('traduzir', traduzirOpts) as Promise<DefaultResultJSON>,
            ip: (ip: string) => executeDefaultMethod('ip', { ip }) as Promise<DefaultResultJSON>
        },

        canvas: {
            welcome: (opts: WelcomeOpts) => executeDefaultMethod('welcome', { ...opts }, 'BUFFER', 'NO_API_PATH') as Promise<ArrayBuffer>,
            bemvindo: (opts: BemVindoOpts) => executeDefaultMethod('bemvindo', { ...opts }, 'BUFFER') as Promise<ArrayBuffer>,
            cardMusic: (opts: CardMusicOpts) => executeDefaultMethod('cardmusic', { ...opts }, 'BUFFER', 'NO_API_PATH') as Promise<ArrayBuffer>,
        },

        stickers: {
            attp: (text: string) => executeDefaultMethod('attp', { text }, 'BUFFER') as Promise<ArrayBuffer>,
            brat: (text: string) => executeDefaultMethod('brat-img', { text }, 'BUFFER') as Promise<ArrayBuffer>,
            bratvid: (text: string) => executeDefaultMethod('brat-vid', { text }, 'BUFFER') as Promise<ArrayBuffer>,
            figu: () => executeDefaultMethod('figu', null, 'BUFFER') as Promise<ArrayBuffer>,
            figu_anime: () => executeDefaultMethod('figu_anime', null, 'BUFFER') as Promise<ArrayBuffer>,
            figu_coreana: () => executeDefaultMethod('figu_coreana', null, 'BUFFER') as Promise<ArrayBuffer>,
            figu_desenho: () => executeDefaultMethod('figu_desenho', null, 'BUFFER') as Promise<ArrayBuffer>,
            figu_emoji: () => executeDefaultMethod('figu_emoji', null, 'BUFFER') as Promise<ArrayBuffer>,
            figu_engracadas: () => executeDefaultMethod('figu_engracadas', null, 'BUFFER') as Promise<ArrayBuffer>,
            figu_raiva: () => executeDefaultMethod('figu_raiva', null, 'BUFFER') as Promise<ArrayBuffer>,
            figu_roblox: () => executeDefaultMethod('figu_roblox', null, 'BUFFER') as Promise<ArrayBuffer>
        },

        noticias: {
            cnn: () => executeDefaultMethod('cnn') as Promise<DefaultResultJSON>,
            esportes: () => executeDefaultMethod('esportes') as Promise<DefaultResultJSON>,
            g1: () => executeDefaultMethod('g1') as Promise<DefaultResultJSON>,
            ibge: () => executeDefaultMethod('ibge') as Promise<DefaultResultJSON>,
            noticias_atuais: () => executeDefaultMethod('noticias-atuais') as Promise<DefaultResultJSON>,
            politica: () => executeDefaultMethod('politica') as Promise<DefaultResultJSON>,
            uol: () => executeDefaultMethod('uol') as Promise<DefaultResultJSON>,
        },

        pesquisas: {
            ytsearch: (query: string) => executeDefaultMethod('yt-search', { query }) as Promise<DefaultResultJSON>,
            wiki: (query: string) => executeDefaultMethod('wiki-search', { query }) as Promise<DefaultResultJSON>,
            gitstalk: (query: string) => executeDefaultMethod('github-stalker', { username: query }) as Promise<DefaultResultJSON>,
        },
        
        downloads: {
            play: (query: string) => executeDefaultMethod('play-audio2', { query }, 'BUFFER') as Promise<ArrayBuffer>,
            playvideo: (query: string) => executeDefaultMethod('play-video2', { query }, 'BUFFER') as Promise<ArrayBuffer>,
            ytmp3: (url: string) => executeDefaultMethod('ytaudio2', { url }, 'BUFFER') as Promise<ArrayBuffer>,
            ytmp4: (url: string) => executeDefaultMethod('ytvideo2', { url }, 'BUFFER') as Promise<ArrayBuffer>,
            tiktokdl: (url: string) => executeDefaultMethod('tiktok-dl', { url }) as Promise<DefaultResultJSON>,
            tiktokMp3: (url: string) => executeDefaultMethod('tiktok-mp3', { url }, 'BUFFER') as Promise<ArrayBuffer>,
            tiktokMp4: (url: string) => executeDefaultMethod('tiktok-mp4', { url }, 'BUFFER') as Promise<ArrayBuffer>,
            instavideo: (url: string) => executeDefaultMethod('instagram-video', { url }) as Promise<DefaultResultJSON>,
            facebook: (url: string) => executeDefaultMethod('facebook-video', { url }) as Promise<DefaultResultJSON>,
            facebookMp3: (url: string) => executeDefaultMethod('face-mp3', { url }, 'BUFFER') as Promise<ArrayBuffer>,
            facebookMp4: (url: string) => executeDefaultMethod('face-mp4', { url }, 'BUFFER') as Promise<ArrayBuffer>,
            pinterestVideo: (url: string) => executeDefaultMethod('pinterest-video', { url }) as Promise<DefaultResultJSON>,
            pinterest: (query: string) => executeDefaultMethod('pinterest', { query }, 'BUFFER') as Promise<ArrayBuffer>,
            pinterestMp3: (url: string) => executeDefaultMethod('pinterest-mp3', { url }, 'BUFFER') as Promise<ArrayBuffer>,
            pinterestMp4: (url: string) => executeDefaultMethod('pinterest-mp4', { url }, 'BUFFER') as Promise<ArrayBuffer>,
        },

        ias: {
            gpt: (query: string) => executeDefaultMethod('gpt', { query }) as Promise<DefaultResultJSON>,
            gemini: (query: string) => executeDefaultMethod('gemini', { query }) as Promise<DefaultResultJSON>,
            gemini_pro: (query: string) => executeDefaultMethod('gemini-pro', { query }) as Promise<DefaultResultJSON>,
            geminivoz: (query: string) => executeDefaultMethod('geminivoz', { query }, 'BUFFER') as Promise<ArrayBuffer>,
            perplexity_ai: (query: string) => executeDefaultMethod('perplexity-ai', { query }) as Promise<DefaultResultJSON>,
        },

        geradores: {
            nick: (query: string) => executeDefaultMethod('gerar-nicks', { text: query }) as Promise<DefaultResultJSON>,
            qrcode: (query: string) => executeDefaultMethod('qrcode', { text: query }, 'BUFFER') as Promise<ArrayBuffer>
        },

        animes: {
            hentai_video: () => executeDefaultMethod('hentai-video') as Promise<DefaultResultJSON>,
            hentai_video2: () => executeDefaultMethod('hentai-video2') as Promise<DefaultResultJSON>,
            metadinha: () => executeDefaultMethod('metadinha') as Promise<DefaultResultJSON>,
            quotesanimes: () => executeDefaultMethod('quotesanimes') as Promise<DefaultResultJSON>
        },

        logos: {
            generate: (nomeDoEfeito: string, textoPraLogo: string): Promise<ArrayBuffer> => {
                
                if (!textoPraLogo) {
                    console.error('Ei você errou aí na função de logos, você primeiro tem que passar o nome do efeito (tipo: glitch) e depois o texto a ser gerado: (ex: Yuta APis)');
                    throw new Error('Invalid params');
                }

                return executeDefaultMethod(nomeDoEfeito, { texto: textoPraLogo }, 'BUFFER') as Promise<ArrayBuffer>;
            }
        },

        plaquinhas: {
            generate: (Plaq: PlaqParams, TextinhoRs: PlaqTextExample) => {
                if (!TextinhoRs) {
                    console.error('Ei você errou aí na função de plaquinha, você primeiro tem que passar o nome da plaq (tipo: plaq1) e depois o texto a ser gerado: (ex: Yuta APis)');
                    throw new Error('Invalid params');
                }

                return executeDefaultMethod(Plaq, { query: TextinhoRs }, 'BUFFER') as Promise<ArrayBuffer>
            }
        }
    }
}