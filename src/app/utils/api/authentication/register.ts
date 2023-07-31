import { APIRouter } from "./routes";

export interface RegisterResponse {
    verificationId: string;
    status: "success" | "faild";
}

export interface ErrorResponse {
    error: string;
    message: string;
}

export const registerUser = async (username:string, password: string) => {
  
    const data = {
        username: username,
        password: password, // 
        deviceName: "(Windows NT 10.0; Win64; x64)",
        deviceId: "uuid4",
        deviceOs: "WEB",
        userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
        deviceModel: "windows",
        deviceManufacturer: "windows",
        usernameType: "PHONE", // EMAIL Or PHONE
    }
    const res = await fetch(APIRouter.register, {
        body: JSON.stringify(data),
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    })
    const json = await res.json()
    return await json
}