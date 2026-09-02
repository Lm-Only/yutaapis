export function urlFormatString(...args: string[]): string {
    
    if (!args.length || !Array.isArray(args)) {
        throw new Error('Invalid arguments on formatUrl or is not defined');
    }

    return args.join('/');
}
