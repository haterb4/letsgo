"use client"

import axios from "axios"
import { baseUrl, proxyBaseUrl } from "../constant"

export const apiVerifyRegistration = async (verificationId: string, verificationCode: string) => {
    const data = {
        verificationId,
        verificationCode,
        deviceId: "uuid4",
    }
    try {
        const res = await axios.post(proxyBaseUrl + '/web/otp/verify', data, {
            headers: {
                "Content-Type": "multipart/form-data;",
            }
        })
        return res.data
        
    } catch (error) {
        console.log(error)
    }
}