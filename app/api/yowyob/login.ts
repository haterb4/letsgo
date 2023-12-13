import axios from "axios"
import { proxyBaseUrl } from "../constant"

export const apiLogin = async (email: string, password: string) => {
    try {
        console.log({email, password})
        let data = new FormData()
        data.append('username', email);
		data.append('password', password);
		data.append('deviceId', "uuid4");
		data.append('deviceOs', "windows");
		data.append('userAgent', window.navigator.userAgent);
        data.append('deviceModel', "windows");
		data.append('deviceManufacturer', "windows");

        const res = await axios.post(proxyBaseUrl+ '/web/login', data, {
            headers: {
				"Content-Type": "multipart/form-data;", 
			}
        })
        return res.data
    } catch (error) {
        console.log(error)
        return;
    }
}