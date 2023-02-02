import React from 'react';
import styles from '@/styles/signup.module.css'
import Link from 'next/link';
import Image from 'next/image'
import { Navbar } from '@/componnents';
import womancar from '/public/womancar.svg'
import position from '/public/position.svg'
import { useState } from 'react';
import DefaultLayout from '@/layout/DefaultLayout';
import Axios from '@/app/axiosInstance';
import axios from 'axios'

const SingUp = (props) => {

    // pour la conformite des inputs
    const [emailStatus,setEmailStatus] = useState(false)
    const [phoneStatus,setPhoneStatus] = useState(false)
    const [passwordStatus,setPasswordStatus] = useState(false)

    // pour reccuperer le contenu des inputs
    const [_phoneNumber,setPhoneNumber] = useState('')
    const [_password,setPassword] = useState('')

    const signUp = async () => {
        const configObject = {
            method: 'post',
            header: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin' : '*',
                Accept: '*/*'
            }
        }
        const values = {
            password: _password,
            phone: _phoneNumber, 
            userType: "FEMALE"
        }
        const response = await Axios.request({
            url: '/api/users/sign-up/',
            data: {...values},
            ...configObject
        })
        console.log(response.data)
    }

    let phoneNumberChange = (e) => {
        setPhoneNumber(e.currentTarget.value)
        if(_phoneNumber.length < 9 || _phoneNumber.length > 13){
            setPhoneStatus(true)
        }else{
            setPhoneStatus(false)
        }
    }

    let passwordChange = (e) => {
        setPassword(e.currentTarget.value)
        if(_password.length < 8){
            setPasswordStatus(true)
        }else{
            setPasswordStatus(false)
        }
    }

    return (
        <DefaultLayout bg='bg-white'>
            <div className={styles.container}>
                <div className={styles.leftcontainer}>
                    <div className={styles.letsgo}>
                        <p className={styles.starttext}>lets</p>
                        <p className={styles.gtext}>G</p>
                        <Image src={position} alt="Picture of a Car" width="40" height="40"/>
                    </div>
                    <p  className={styles.link}>If you have an account <br /> You can <Link href='/login' className={styles.link2}>Sign In here!</Link></p>
                    <Image src={womancar} alt="Picture of a Car" width="400" height="400"/>
                </div>
                <div className={styles.forms}>
                    <div className={styles.rightcontainer}>
                        <div className={styles.consumer}>
                            <p className={styles.consumertext}>Sign Up as a </p>
                            <p className={styles.consumertext1}>Consumer</p>
                        </div>
                        <div className = {styles.spancontainer}><span className = {styles.span}>{emailStatus ? "email address should have @" : ''}</span></div>
                        <input type="text" id='phoneNumber' name='phoneNumber' onChange={(e)=>{phoneNumberChange(e)}} className = {styles.inputtext} placeholder='Phone number' required/>
                        <div className = {styles.spancontainer}><span className = {styles.span}>{phoneStatus ? "phone number should between 9 and 13 caracters" : ''}</span></div>
                        <input type="text" id='password' name='password' onChange={(e)=>{passwordChange(e)}} className = {styles.inputtext} placeholder='Password' required/>
                        <div className = {styles.spancontainer}><span className = {styles.span}>{passwordStatus ? "password should have least 8 caracters" : ''}</span></div>
                        <div className = {styles.privacy}>
                            <input type="checkbox" name="" id="" className = {styles.checkbox}/>
                            <p>I agree with</p>
                            <Link  href='#' className = {styles.link1}>Privacy Policy</Link>
                        </div>
                        <button onClick={ signUp } type="submit" className = {styles.mybutton}>Sign Up</button>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
};

export default SingUp;