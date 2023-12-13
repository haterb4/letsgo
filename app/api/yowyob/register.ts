"use client"

import axios from "axios"
import { baseUrl, proxyBaseUrl } from "../constant"

export const apiRegister = async (email: string, password: string, useaxios:boolean = false) => {
    const data = {
        username: email,
        password,
        deviceName: "(Windows NT 10.0; Win64; x64)",
        deviceId: "uuid4",
        deviceOs: "WEB",
        userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
        deviceModel: "windows",
        deviceManufacturer: "windows",
        usernameType: "EMAIL",
    }
    if (useaxios === false){
        const res = await fetch(proxyBaseUrl + '/api/v0/web/register', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        return res
    }
    else{
        try {
            const res = await axios.post(proxyBaseUrl + '/api/v0/web/register', data)
            return res.data
            
        } catch (error) {
            console.log(error)
        }
    }
    
}