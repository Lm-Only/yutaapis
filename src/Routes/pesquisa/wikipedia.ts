

import { request } from "../../request.js";
import { DefaultParamsFunc } from "../../Types/types.js";

export default async function wiki(opts: DefaultParamsFunc) {
    if (!opts.query) {
        throw 'Parâmetro inválido - Está faltando';
    }

    return await request(opts.url, {
        requestOptions: {
            method: 'GET',
            query: {
                query: opts.query,
            }
        },
        dataType: 'JSON'
    }, 0, opts);
}