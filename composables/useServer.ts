import type { UseFetchOptions } from "nuxt/app";
import { defu } from "defu";

export async function useServer<T>(url: string, options: UseFetchOptions<T> = {}) {
    const token = useCookie("token");
    const headers = process.server ? useRequestHeaders() : {};
    const defaults: UseFetchOptions<T> = {
        baseURL: "/api/user",
        // cache request
        key: url,
        // set user token if connected
        headers: {
            ...headers,
            Authorization: token.value ? `Bearer ${token.value}` : "",
        },
    };

    // for nice deep defaults, please use unjs/defu
    const params = defu(options, defaults);
    // const customParams = JSON.parse(JSON.stringify(params));
    return useFetch(url, params);
}
