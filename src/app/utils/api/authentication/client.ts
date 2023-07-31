'use client'

import axios, { AxiosError } from 'axios';
import { wrapper } from "axios-cookiejar-support";
import { CookieJar } from "tough-cookie";


const jar = new CookieJar(); // allow to retrieve session cookie
export const client = wrapper(axios.create({ jar: jar, withCredentials: true }))