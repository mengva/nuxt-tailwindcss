
export default defineEventHandler(async event => {
    const id = getRouterParams(event);
    const axios = event.context.axios;
    const { data } = await axios.get(`/products/${id}`);
    return data;
});