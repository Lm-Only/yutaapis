/**
 * Analisa se o token tem as características da API token do yuta.
 * Ele checa se a string segue os mesmos padrões do token
 * 
 * @param apiToken String para analisar
 * @returns {boolean}
 */
export function isYutaApiToken(apiToken: string): boolean {
    return typeof apiToken === 'string' && apiToken.startsWith('yuta_') && apiToken.length >= 40;
}
