import React from 'react';
import styles from '@/styles/signup.module.css'
import Link from 'next/link';
import Image from 'next/image'
import { Navbar } from '@/componnents';
import womancar from '/public/womancar.svg'
import position from '/public/position.svg'
import { useState } from 'react';

const SingUp = (props) => {

    const [username,setUsername] = useState(false)
    const [emailAddress,setEmailAddress] = useState(false)
    const [phoneNumber,setPhoneNumber] = useState(false)
    const [password,setPassword] = useState(false)

    const handleSubmit = async (event) =>{
        event.preventDefault()
        const _username = event.target.username.value
        const _emailAddress = event.target.emailAddress.value
        const _phoneNumber = event.target.phoneNumber.value
        const _password = event.target.password.value
        if(_username.indexOf('_') != -1){
            setUsername(true)
        }else{
            setUsername(false)
        }
        if(_emailAddress.indexOf('@') == -1){
            setEmailAddress(true)
        }else{
            setEmailAddress(false)
        }
        if(_phoneNumber.length<9 || phoneNumber.length>13){
            setPhoneNumber(true)
        }else{
            setPhoneNumber(false)
        }
        if(_password.length<8){
            setPassword(true)
        }else{
            setPassword(false)
        }
        console.log(username, emailAddress, phoneNumber, password)
        if(!username && !emailAddress && !phoneNumber && !password){
            console.log('username :', _username, 'emailAdress :', _emailAddress,', phoneNumber :', _phoneNumber,', password :', _password)
            // on peut donc exploiter les informations fournies par l'utilisateur
        }
    }

    return (
        <div>
            <div className={styles.navbar}>
                <Navbar/>
            </div>
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
                <form action="" method='post' onSubmit={handleSubmit} className={styles.forms}>
                    <div className={styles.rightcontainer}>
                        <div className={styles.consumer}>
                            <p className={styles.consumertext}>Sign Up as a </p>
                            <p className={styles.consumertext1}>Consumer</p>
                        </div>
                        <input type="text" id='username' name='username' className = {styles.inputtext} placeholder='Username' required/>
                        <div className = {styles.spancontainer}><span className = {styles.span}>{username ? "username should not have _" : ''}</span></div>
                        <input type="text" id='emailAddress' name='emailAddress' className = {styles.inputtext} placeholder='Email address' required/>
                        <div className = {styles.spancontainer}><span className = {styles.span}>{emailAddress ? "email address should have @" : ''}</span></div>
                        <input type="text" id='phoneNumber' name='phoneNumber' className = {styles.inputtext} placeholder='Phone number' required/>
                        <div className = {styles.spancontainer}><span className = {styles.span}>{phoneNumber ? "phone number should between 9 and 13 caracters" : ''}</span></div>
                        <input type="text" id='password' name='password' className = {styles.inputtext} placeholder='Password' required/>
                        <div className = {styles.spancontainer}><span className = {styles.span}>{password ? "password should have least 8 caracters" : ''}</span></div>
                        <div className = {styles.privacy}>
                            <input type="checkbox" name="" id="" className = {styles.checkbox}/>
                            <p>I agree with</p>
                            <Link  href='#' className = {styles.link1}>Privacy Policy</Link>
                        </div>
                        <button type="submit" className = {styles.mybutton}>Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SingUp;