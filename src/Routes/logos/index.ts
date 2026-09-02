import { request } from "../../request.js";
import { DefaultParamsFunc } from "../../Types/types.js";

export default async function logos(opts: DefaultParamsFunc): Promise<any> {
    return await request(opts.url, {
        requestOptions: {
            method: 'GET',
            query: {
                texto: opts.query
            }
        },
        dataType: 'BUFFER'
    }, 0, opts);
}