import axios from "axios"
import { ChangePasswordSchemaType, GetOTPSchemaType, LoginSchemaType, SignUpSchemaType, VerifyOTPSchemaType } from "../validation/user";

export const signUp = async(postData: SignUpSchemaType) => {
    const res = await axios.post('/api/auth/signup', postData);
    return res?.data;
}

export const login = async(postData: LoginSchemaType) => {
    const res = await axios.post('/api/auth/login', postData);
    return res?.data;
}

export const getOTP = async(postData: GetOTPSchemaType) => {
    const res = await axios.post('/api/auth/get-otp', postData);
    return res?.data;
}

export const verifyOTP = async(postData: { otp: string, email: string }) => {
    const res = await axios.post('/api/auth/verify-otp', postData);
    return res?.data;
}

export const changePassword = async(postData: ChangePasswordSchemaType & { email: string }) => {
    const res = await axios.post('/api/auth/change-password', postData);
    return res?.data;
}