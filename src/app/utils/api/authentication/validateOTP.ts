import { APIRouter } from "./routes";

export const validateOtp = async (verificationId: string, otp: string) => {

    const data = {
        verificationId: verificationId,
        verificationCode: otp
    }
    const res = await fetch(APIRouter.validateOTP, {
        body: JSON.stringify(data),
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    })
    const json = await res.json()
    return await json
    console.log(res)
    return res;
}