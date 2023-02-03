import React, { useState } from 'react';
import styles from '../styles/login.module.css'
import Link from 'next/link';
import Image from 'next/image'
import google from '/public/google.svg'
import apple from '/public/apple.svg'
import facebook from '/public/facebook.svg'
import car from '/public/car.svg'
import DefaultLayout from '../layout/DefaultLayout';
import Axios from '../app/axiosInstance';


const Login = (props) => {
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [remeberMe, setRememberMe] = useState(false)
    
    //redux
    const login = async () => {
        const ConfigObj = {
            method: 'post',
            url: '/api/v0/auth/phone/login',
            data: {
                password,
                phone 
            }
        }
        const response = await Axios.request(ConfigObj)
        const {data} = response
        const requestUser = await Axios.request({method: 'post', url: 'api/v0/users/me', data: data.access_token})
        location.href = `${location.origin}`
    }

    return (
        <DefaultLayout>
            <div className={styles.global}>
                <div className={styles.container}>
                    <div className={styles.leftcontainer}>
                        <p className={styles.starttext}>Sign In to<br/>Start a new Trip</p>
                        <p>If you don't have an account <br /> You can <Link href='/signup' className={styles.link2}>Register here!</Link></p>
                        <div className={styles.carcontainer}>
                            <Image src={car} alt="Picture of a Car" width="300" height="300" className={styles.carimage}/>
                        </div>
                    </div>
                    <div>
                        <div className={styles.rightcontainer}>
                            <input type="text" id='username' name='phone' className = {styles.inputtext} onChange={e => setPhone(e.target.value)} placeholder='Enter email or phone number' required/>
                            <input type="text" id='password' name='password' className = {styles.inputtext1} onChange={e => setPassword(e.target.value)} placeholder='Password' required/>
                            <div className={styles.link1}>
                                <Link href='/forgot-password' className = {styles.link}>Forgot password</Link>
                            </div>
                            <div className = {styles.remember}>
                                <input type="checkbox" name="" id="" className='mr-5' onChange={ e => setRememberMe(!remeberMe) }/>
                                <p>Remember me</p>
                            </div>
                            <button onClick={login} className = {styles.mybutton}>Login</button>
                            <div className = {styles.continue}>
                                <hr className = {styles.line}/>
                                <p>or continue with</p>
                                <hr className = {styles.line}/>
                            </div>
                            <div className = {styles.icon}>
                                <Link href='#' className = {styles.iconitem}>
                                    <Image src={google} alt="Google icon" width="50" height="50"/>
                                </Link>
                                <Link href='#' className = {styles.iconitem}>
                                    <Image src={apple} alt="Apple icon" width="50" height="50"/>
                                </Link>
                                <Link href='#' className = {styles.iconitem}>
                                    <Image src={facebook} alt="Facebook icon" width="50" height="50"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </DefaultLayout>
        
    );
};

export default Login;