import { request } from "../../request.js";
import { DefaultParamsFunc } from "../../Types/types.js";

export default async function animes(opts: DefaultParamsFunc): Promise<any> {
    return await request(opts.url, {
        requestOptions: {
            method: 'GET',
        },
        dataType: 'JSON'
    }, 0, opts);
}