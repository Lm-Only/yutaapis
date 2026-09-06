/**
 * @license MIT
 * 
 * Copyright 2026 Yuta & Hutao bot community
 * Yuta APIs - Em parceria com HutaoBot
 *
 * @author Lm Only and Nk Petrov
 */

import { request } from "./request.js";
import { DataTypeDefault, DefaultParamsFunc, OtherOpts } from "../Types/index.js";

export async function defaultRequest(opts: DefaultParamsFunc, dataType: DataTypeDefault = 'JSON', otherOpts: OtherOpts = null): Promise<any> {
    return request(opts.url, {
        requestOptions: {
            method: 'GET',
            ...(otherOpts ? { query: otherOpts } : {})
        },
        dataType
    }, 0, opts);
}