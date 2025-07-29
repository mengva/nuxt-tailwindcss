import { AuthVerifyOtp } from '~/models/auth';
export default defineEventHandler(async event => {
    const body = await readBody<AuthVerifyOtp>(event);
    const axios = event.context.axios;
    const { data } = await axios.post("/verify-otp", body);
    return data;
});