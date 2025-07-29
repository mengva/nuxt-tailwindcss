import { AuthResetPassword } from '~/models/auth';
export default defineEventHandler(async event => {
    const body = await readBody<AuthResetPassword>(event);
    const axios = event.context.axios;
    const { data } = await axios.post("/reset-password", body);
    return data;
});