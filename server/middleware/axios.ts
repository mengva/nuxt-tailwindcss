import axios from "axios";
export default defineEventHandler((event) => {
    const config = useRuntimeConfig();
    const headers = getHeaders(event);
    const axiosConfig = axios.create({
        baseURL: config.BASE_URL,
    });
    axiosConfig.interceptors.request.use((req) => {
        req.headers = {
            ...headers,
            Authorization: headers.authorization,
            cookie: headers.cookie,
        } as any;
        return req;
    });
    event.context.axios = axiosConfig;
})