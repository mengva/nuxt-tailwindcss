import { AuthSendOtpToEmail } from "~/models/auth";
export default defineEventHandler(async event => {
    const body = await readBody<AuthSendOtpToEmail>(event);
    const axios = event.context.axios;
    const { data } = await axios.post("/send-otp-to-email", body);
    return data;
});