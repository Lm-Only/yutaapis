import { request } from "../../request.js";
import { DefaultParamsFunc, DataTypeDefault } from "../../Types/types.js";

export default async function ias(opts: DefaultParamsFunc, dataType: DataTypeDefault) {
    return await request(opts.url, {
        requestOptions: {
            method: 'GET',
            query: {
                query: opts.query,
            }
        },
        dataType: dataType
    }, 0, opts)
}