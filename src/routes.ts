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
    DefaultResultBuffer, 
    DefaultResultJSON, 
    EncurtalinkResult, 
    FrasesDeAmorResult, 
    OtherOpts, 
    PlaqParams, 
    PlaqTextExample, 
    RouteNames, 
    TraduizrOpts, 
    WelcomeOpts
} from "./Types/index.js";
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
            ip: (ip: string) => executeDefaultMethod('ip', { ip }) as Promise<DefaultResultJSON>,
            encurtarLink: (url: string) => executeDefaultMethod('encurtar-link', { url }) as Promise<EncurtalinkResult>,
            frasesAmor: () => executeDefaultMethod('frases-amor', null) as Promise<FrasesDeAmorResult>
        },

        canvas: {
            welcome: (opts: WelcomeOpts) => executeDefaultMethod('welcome', { ...opts }, 'BUFFER', 'NO_API_PATH') as Promise<DefaultResultBuffer>,
            bemvindo: (opts: BemVindoOpts) => executeDefaultMethod('bemvindo', { ...opts }, 'BUFFER') as Promise<DefaultResultBuffer>,
            cardMusic: (opts: CardMusicOpts) => executeDefaultMethod('cardmusic', { ...opts }, 'BUFFER', 'NO_API_PATH') as Promise<DefaultResultBuffer>,
        },

        stickers: {
            attp: (text: string) => executeDefaultMethod('attp', { text }, 'BUFFER') as Promise<DefaultResultBuffer>,
            brat: (text: string) => executeDefaultMethod('brat-img', { text }, 'BUFFER') as Promise<DefaultResultBuffer>,
            bratvid: (text: string) => executeDefaultMethod('brat-vid', { text }, 'BUFFER') as Promise<DefaultResultBuffer>,
            figu: () => executeDefaultMethod('figu', null, 'BUFFER') as Promise<DefaultResultBuffer>,
            figu_anime: () => executeDefaultMethod('figu_anime', null, 'BUFFER') as Promise<DefaultResultBuffer>,
            figu_coreana: () => executeDefaultMethod('figu_coreana', null, 'BUFFER') as Promise<DefaultResultBuffer>,
            figu_desenho: () => executeDefaultMethod('figu_desenho', null, 'BUFFER') as Promise<DefaultResultBuffer>,
            figu_emoji: () => executeDefaultMethod('figu_emoji', null, 'BUFFER') as Promise<DefaultResultBuffer>,
            figu_engracadas: () => executeDefaultMethod('figu_engracadas', null, 'BUFFER') as Promise<DefaultResultBuffer>,
            figu_raiva: () => executeDefaultMethod('figu_raiva', null, 'BUFFER') as Promise<DefaultResultBuffer>,
            figu_roblox: () => executeDefaultMethod('figu_roblox', null, 'BUFFER') as Promise<DefaultResultBuffer>
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
            play: (query: string) => executeDefaultMethod('play-audio2', { query }, 'BUFFER') as Promise<DefaultResultBuffer>,
            playvideo: (query: string) => executeDefaultMethod('play-video2', { query }, 'BUFFER') as Promise<DefaultResultBuffer>,
            ytmp3: (url: string) => executeDefaultMethod('ytaudio2', { url }, 'BUFFER') as Promise<DefaultResultBuffer>,
            ytmp4: (url: string) => executeDefaultMethod('ytvideo2', { url }, 'BUFFER') as Promise<DefaultResultBuffer>,
            tiktokdl: (url: string) => executeDefaultMethod('tiktok-dl', { url }) as Promise<DefaultResultJSON>,
            tiktokMp3: (url: string) => executeDefaultMethod('tiktok-mp3', { url }, 'BUFFER') as Promise<DefaultResultBuffer>,
            tiktokMp4: (url: string) => executeDefaultMethod('tiktok-mp4', { url }, 'BUFFER') as Promise<DefaultResultBuffer>,
            instavideo: (url: string) => executeDefaultMethod('instagram-video', { url }) as Promise<DefaultResultJSON>,
            facebook: (url: string) => executeDefaultMethod('facebook-video', { url }) as Promise<DefaultResultJSON>,
            facebookMp3: (url: string) => executeDefaultMethod('face-mp3', { url }, 'BUFFER') as Promise<DefaultResultBuffer>,
            facebookMp4: (url: string) => executeDefaultMethod('face-mp4', { url }, 'BUFFER') as Promise<DefaultResultBuffer>,
            pinterestVideo: (url: string) => executeDefaultMethod('pinterest-video', { url }) as Promise<DefaultResultJSON>,
            pinterest: (query: string) => executeDefaultMethod('pinterest', { query }, 'BUFFER') as Promise<DefaultResultBuffer>,
            pinterestMp3: (url: string) => executeDefaultMethod('pinterest-mp3', { url }, 'BUFFER') as Promise<DefaultResultBuffer>,
            pinterestMp4: (url: string) => executeDefaultMethod('pinterest-mp4', { url }, 'BUFFER') as Promise<DefaultResultBuffer>,
        },

        ias: {
            gpt: (query: string) => executeDefaultMethod('gpt', { query }) as Promise<DefaultResultJSON>,
            gemini: (query: string) => executeDefaultMethod('gemini', { query }) as Promise<DefaultResultJSON>,
            gemini_pro: (query: string) => executeDefaultMethod('gemini-pro', { query }) as Promise<DefaultResultJSON>,
            geminivoz: (query: string) => executeDefaultMethod('geminivoz', { query }, 'BUFFER') as Promise<DefaultResultBuffer>,
            perplexity_ai: (query: string) => executeDefaultMethod('perplexity-ai', { query }) as Promise<DefaultResultJSON>,
        },

        geradores: {
            nick: (query: string) => executeDefaultMethod('gerar-nicks', { text: query }) as Promise<DefaultResultJSON>,
            qrcode: (query: string) => executeDefaultMethod('qrcode', { text: query }, 'BUFFER') as Promise<DefaultResultBuffer>
        },

        animes: {
            hentai_video: () => executeDefaultMethod('hentai-video') as Promise<DefaultResultJSON>,
            hentai_video2: () => executeDefaultMethod('hentai-video2') as Promise<DefaultResultJSON>,
            metadinha: () => executeDefaultMethod('metadinha') as Promise<DefaultResultJSON>,
            quotesanimes: () => executeDefaultMethod('quotesanimes') as Promise<DefaultResultJSON>
        },

        logos: {
            generate: (nomeDoEfeito: string, textoPraLogo: string): Promise<DefaultResultBuffer> => {
                
                if (!textoPraLogo) {
                    console.error('Ei você errou aí na função de logos, você primeiro tem que passar o nome do efeito (tipo: glitch) e depois o texto a ser gerado: (ex: Yuta APis)');
                    throw new Error('Invalid params');
                }

                return executeDefaultMethod(nomeDoEfeito, { texto: textoPraLogo }, 'BUFFER');
            }
        },

        plaquinhas: {
            generate: (Plaq: PlaqParams, TextinhoRs: PlaqTextExample): Promise<DefaultResultBuffer> => {
                if (!TextinhoRs) {
                    console.error('Ei você errou aí na função de plaquinha, você primeiro tem que passar o nome da plaq (tipo: plaq1) e depois o texto a ser gerado: (ex: Yuta APis)');
                    throw new Error('Invalid params');
                }

                return executeDefaultMethod(Plaq, { query: TextinhoRs }, 'BUFFER');
            }
        }
    }
}