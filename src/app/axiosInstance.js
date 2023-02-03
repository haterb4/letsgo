import axios from 'axios'

const Axios = axios.create({
    baseURL: 'http://192.168.43.194:8888',
});

export default Axios