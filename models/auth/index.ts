export interface AuthSendOtpToEmail {
    email: string;
}

export interface AuthVerifyOtp extends AuthSendOtpToEmail {
    otpCode: string
}

export interface AuthLoginSchema extends AuthSendOtpToEmail {
    password: string;
}

export interface AuthRegisterSchema extends AuthLoginSchema {
    firstName: string;
    lastName: string;
    gender: string;
}

export interface AuthResetPassword extends AuthLoginSchema {
    confirmPassword: string;
}