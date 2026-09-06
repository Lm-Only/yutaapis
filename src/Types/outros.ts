import { DefaultResultJSON } from "./index.js";

export interface ClimaResult extends Pick<DefaultResultJSON, 'status' | 'creator' | 'msg'> {
    result: {
        cidade: string;
        temperatura: string;
        sensacao: string;
        umidade: string;
        vento: string;
        clima: string;
        observado: string;
        imagem: string;
    }
}

export interface AsciiResult extends Pick<DefaultResultJSON, 'status' | 'criador' | 'msg'> {
    resultado: Array<{
        result: string;
    }>;
}

export interface EncurtalinkResult extends Pick<DefaultResultJSON, 'status' | 'criador' | 'msg'> {
    result: Array<{ original: string, encurtado: string }>
}

export interface FrasesAmorResult extends Pick<DefaultResultJSON, 'criador' | 'status' | 'msg'> {
    total: number;
    resultados: Array<string>;
}

export type TraduzirLanguages =
    | "zh-CN"
    | "zh-TW"
    | "pt"
    | "af"
    | "am"
    | "ar"
    | "auto"
    | "az"
    | "be"
    | "bg"
    | "bn"
    | "bs"
    | "ca"
    | "ceb"
    | "co"
    | "cs"
    | "cy"
    | "da"
    | "de"
    | "el"
    | "en"
    | "eo"
    | "es"
    | "et"
    | "eu"
    | "fa"
    | "fi"
    | "fr"
    | "fy"
    | "ga"
    | "gd"
    | "gl"
    | "gu"
    | "ha"
    | "haw"
    | "he"
    | "hi"
    | "hmn"
    | "hr"
    | "ht"
    | "hu"
    | "hy"
    | "id"
    | "ig"
    | "is"
    | "it"
    | "iw"
    | "ja"
    | "jw"
    | "ka"
    | "kk"
    | "km"
    | "kn"
    | "ko"
    | "ku"
    | "ckb"
    | "ky"
    | "la"
    | "lb"
    | "lo"
    | "lt"
    | "lv"
    | "mg"
    | "mi"
    | "mk"
    | "ml"
    | "mn"
    | "mr"
    | "ms"
    | "mt"
    | "my"
    | "ne"
    | "nl"
    | "no"
    | "ny"
    | "pa"
    | "pl"
    | "ps"
    | "ro"
    | "ru"
    | "sd"
    | "si"
    | "sk"
    | "sl"
    | "sm"
    | "sn"
    | "so"
    | "sq"
    | "sr"
    | "st"
    | "su"
    | "sv"
    | "sw"
    | "ta"
    | "te"
    | "tg"
    | "th"
    | "tl"
    | "tr"
    | "uk"
    | "ur"
    | "uz"
    | "vi"
    | "xh"
    | "yi"
    | "yo"
    | "zu";