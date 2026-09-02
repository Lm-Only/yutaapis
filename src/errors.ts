/**
 * @license MIT
 * 
 * Copyright 2026 Yuta & Hutao bot community
 * Yuta APIs - Em parceria com HutaoBot
 *
 * @author Lm Only and Nk Petrov
 */
 
export interface RequestErrorOpts {
    message?: string;
    statusCode: number;
}

export class RequestError extends Error {
    statusCode: number;

    constructor(opts: RequestErrorOpts) {
        super(opts.message);
        this.statusCode = opts.statusCode

        Object.setPrototypeOf(this, RequestError.prototype);
    }
}
