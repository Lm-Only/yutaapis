import { request } from "./request.js";
import { DataTypeDefault, DefaultParamsFunc, OtherOpts } from "../Types/types.js";

export async function defaultRequest(opts: DefaultParamsFunc, dataType: DataTypeDefault = 'JSON', otherOpts: OtherOpts = null): Promise<any> {
    return request(opts.url, {
        requestOptions: {
            method: 'GET',
            ...(otherOpts ? { query: otherOpts } : {})
        },
        dataType
    }, 0, opts);
}