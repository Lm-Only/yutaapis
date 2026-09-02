import { request } from "../../request.js";
import { DefaultParamsFunc } from "../../Types/types.js";

type GithubStalkResponse = Record<string, any>; 

export default async function gitstalk(opts: DefaultParamsFunc): Promise<GithubStalkResponse> {
    if (!opts.query) {
        throw 'Parâmetro inválido - Está faltando';
    }

    try {
        return await request(opts.url, {
            requestOptions: {
                method: 'GET',
                query: {
                    username: opts.query,
                },
            },
            dataType: 'JSON'
        }, 0, opts);
    } catch (error) {
        throw new Error('API_ERROR: ' + error);
    }
};