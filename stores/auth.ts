import type { AuthLoginSchema, AuthRegisterSchema, AuthResetPassword, AuthSendOtpToEmail, AuthVerifyOtp } from "~/models/auth";

export const authStore = defineStore("authStore", () => {
    const userLogin = async (body: AuthLoginSchema) => {
        try {
            const data = await $fetch("/api/user/login", {
                method: "POST",
                body
            });
            return data;
        } catch (error) { }
    }

    const userRegister = async (body: AuthRegisterSchema) => {
        try {
            const data = await $fetch("/api/user/register", {
                method: "POST",
                body
            });
            return data;
        } catch (error) { }
    }

    const userForgotPassword = async (body: AuthSendOtpToEmail) => {
        try {
            const data = await $fetch("/api/user/send-otp-to-email", {
                method: "POST",
                body
            });
            return data;
        } catch (error) { }
    }

    const userVerifyOtp = async (body: AuthVerifyOtp) => {
        try {
            const data = await $fetch("/api/user/verify-otp", {
                method: "POST",
                body
            });
            return data;
        } catch (error) { }
    }

    const userResetPassword = async (body: AuthResetPassword) => {
        try {
            const data = await $fetch("/api/user/reset-password", {
                method: "POST",
                body
            });
            return data;
        } catch (error) { }
    }

    return {
        userLogin,
        userRegister,
        userForgotPassword,
        userVerifyOtp,
        userResetPassword
    }
});