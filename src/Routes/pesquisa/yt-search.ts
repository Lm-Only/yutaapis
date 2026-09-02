import { request } from "../../request.js";
import { DefaultParamsFunc } from "../../Types/types.js";
import { urlFormatString } from "../../Utils/url.js";


export default async function ytsearch(opts: DefaultParamsFunc): Promise<any> {
    if (!opts.query) {
        throw 'Parâmetro inválido - Está faltando';
    }
    
    try {
        return await request(opts.url, {
            requestOptions: {
                method: 'GET',
                query: {
                    query: opts.query,
                },
            },
            dataType: 'JSON'
        }, 0, opts);
    } catch (error) {
        throw new Error('API_ERROR: ' + error);
    }
}