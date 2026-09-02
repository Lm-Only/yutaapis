import { request } from "../../request.js";
import { DefaultParamsFunc, DataTypeDefault } from "../../Types/types.js";

export default async function geradores(opts: DefaultParamsFunc, dataType: DataTypeDefault) {
    return await request(opts.url, {
        requestOptions: {
            method: 'GET',
            query: {
                text: opts.query
            }
        },
        dataType: dataType
    }, 0, opts)
}