import React from 'react';
import styles from '@/styles/login.module.css'
import Link from 'next/link';
import Image from 'next/image'
import google from '/public/google.svg'
import apple from '/public/apple.svg'
import facebook from '/public/facebook.svg'
import car from '/public/car.svg'

const Login = (props) => {
    return (
        <div>
            <div className={styles.navbar}>
                Ceci est la navbar
            </div>
            <div className={styles.container}>
                <div className={styles.leftcontainer}>
                    <p>Sign In to<br/>Start a new Trip</p>
                    <p>If you don't have an account <br /> You can <Link href='#'>Register here!</Link></p>
                    <div>
                        <Image src={car} alt="Picture of a Car" width="300" height="300"/>
                    </div>
                </div>
                <div className={styles.rightcontainer}>
                    <input type="text" className = {styles.inputtext} placeholder='Enter email or phone number' />
                    <input type="text" className = {styles.inputtext1} placeholder='Password' />
                    <div className={styles.link1}>
                        <Link href='#' className = {styles.link}>Forgot password</Link>
                    </div>
                    <div className = {styles.remember}>
                        <input type="checkbox" name="" id="" className='mr-5'/>
                        <p>Remember me</p>
                    </div>
                    <button className = {styles.mybutton}>Sign In</button>
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
    );
};

export default Login;