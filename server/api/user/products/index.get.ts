export default defineEventHandler(async event => {
    const params = getQuery(event);
    const axios = event.context.axios;
    const { data } = await axios.get('/products', {
        params
    });
    return data;
});