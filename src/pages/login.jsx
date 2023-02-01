import React from 'react';
import styles from '@/styles/login.module.css'
import Link from 'next/link';
import Image from 'next/image'
import google from '/public/google.svg'
import apple from '/public/apple.svg'
import facebook from '/public/facebook.svg'
import car from '/public/car.svg'
import { Navbar } from '@/componnents';


const Login = (props) => {
    
    const handleSubmit = async (event) =>{
        event.preventDefault()
        const username = event.target.username.value
        const password = event.target.password.value
        if(username && password){
            console.log('username :', username, ', password :', password)
            // on peut donc exploiter les informations fournies par l'utilisateur
        }
    }

    return (
        <div className={styles.global}>
            <div className={styles.navbar}>
                <Navbar/>
            </div>
            <div className={styles.container}>
                <div className={styles.leftcontainer}>
                    <p className={styles.starttext}>Sign In to<br/>Start a new Trip</p>
                    <div className={styles.carcontainer}>
                        <p>If you don't have an account <br /> You can <Link href='/signup' className={styles.link2}>Register here!</Link></p>
                        <div>
                            <Image src={car} alt="Picture of a Car" width="300" height="300" className={styles.carimage}/>
                        </div>
                    </div>
                </div>
                <form action="" method='post' onSubmit={handleSubmit}>
                    <div className={styles.rightcontainer}>
                        <input type="text" id='username' name='username' className = {styles.inputtext} placeholder='Enter email or phone number' required/>
                        <input type="text" id='password' name='password' className = {styles.inputtext1} placeholder='Password' required/>
                        <div className={styles.link1}>
                            <Link href='/forgot-password' className = {styles.link}>Forgot password</Link>
                        </div>
                        <div className = {styles.remember}>
                            <input type="checkbox" name="" id="" className='mr-5'/>
                            <p>Remember me</p>
                        </div>
                        <button type="submit" className = {styles.mybutton}>Sign In</button>
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
                </form>
                
            </div>
            
        </div>
    );
};

export default Login;