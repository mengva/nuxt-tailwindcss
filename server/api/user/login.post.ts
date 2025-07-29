import { AuthLoginSchema } from '~/models/auth';
export default defineEventHandler(async event => {
    const body = await readBody<AuthLoginSchema>(event);
    const axios = event.context.axios;
    const { data } = await axios.post("/login", body);
    return data;
});