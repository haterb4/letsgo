import React from 'react';
import styles from '@/styles/signup.module.css'
import Link from 'next/link';
import Image from 'next/image'
import { Navbar } from '@/componnents';
import womancar from '/public/womancar.svg'
import position from '/public/position.svg'
import { useState } from 'react';

const SingUp = (props) => {

    // pour la conformite des inputs
    const [userStatus,setUserStatus] = useState(false)
    const [emailStatus,setEmailStatus] = useState(false)
    const [phoneStatus,setPhoneStatus] = useState(false)
    const [passwordStatus,setPasswordStatus] = useState(false)

    // pour reccuperer le contenu des inputs
    const [_username,setUsername] = useState('')
    const [_emailAddress,setEmailAddress] = useState('')
    const [_phoneNumber,setPhoneNumber] = useState('')
    const [_password,setPassword] = useState('')

    const handleSubmit = async () =>{
        if(!userStatus && !emailStatus && !phoneStatus && !passwordStatus){
            console.log('connexion en cours ...')
            // mettre la requete ici
        }
    }

    let usernameChange = (e) => {
        setUsername(e.currentTarget.value)
        console.log(_username)
        if(_username.indexOf('_') != -1){
            setUserStatus(true)
        }else{
            setUserStatus(false)
        }
    }

    let emailAddressChange = (e) => {
        setEmailAddress(e.currentTarget.value)
        console.log(_emailAddress)
        if(_emailAddress.indexOf('@') == -1){
            setEmailStatus(true)
        }else{
            setEmailStatus(false)
        }
    }

    let phoneNumberChange = (e) => {
        setPhoneNumber(e.currentTarget.value)
        console.log(_phoneNumber)
        if(_phoneNumber.length<9 || _phoneNumber.length>13){
            setPhoneStatus(true)
        }else{
            setPhoneStatus(false)
        }
    }

    let passwordChange = (e) => {
        setPassword(e.currentTarget.value)
        console.log(_password)
        if(_password.length<8){
            setPasswordStatus(true)
        }else{
            setPasswordStatus(false)
        }
    }

    return (
        <div>
            <div className={styles.navbar}>
                <Navbar shadow={true}/>
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
                        <input type="text" id='username' name='username' onChange={(e)=>{usernameChange(e)}} className = {styles.inputtext} placeholder='Username' required/>
                        <div className = {styles.spancontainer}><span className = {styles.span}>{userStatus ? "username should not have _" : ''}</span></div>
                        <input type="text" id='emailAddress' name='emailAddress' onChange={(e)=>{emailAddressChange(e)}} className = {styles.inputtext} placeholder='Email address' required/>
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
                        <button type="submit" className = {styles.mybutton}>Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SingUp;