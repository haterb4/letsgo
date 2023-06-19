import React, { useState, useEffect, useRef} from 'react';
import styles from '@/styles/login.module.css';
import Link from 'next/link';
import Image from 'next/image';
import point from '/public/images/main/point.svg'
import whitepoint from '/public/images/main/whitepoint.svg'
import smallellipse from '/public/images/main/smallellipse.svg'
import bigellipse from '/public/images/main/bigellipse.svg'
import icon_error from '/public/images/main/icon_error.svg';
import google from '/public/images/main/google.svg';
import apple from '/public/images/main/apple.svg';
import { useRouter } from 'next/router'



const Login1 = (props) => {
    
    // pour recuperer le contenu des inputs
    //const [email, setEmail] = useState('');
    //const [password, setPassword] = useState('');

    let email = '';
    let password = '';

    // pour connaitre si un champ est vide ou pas
    const [etat_email, setEtatEmail] = useState(false);
    const [etat_password, setEtatPassword] = useState(false);

    // pour verifier la conformité des informations fournies
    const [conform_email, setConformEmail] = useState(true);
    const [conform_password, setConformPassword] = useState(true);


    const [available_submission, setAvailableSubmission] = useState(false);

    const emailRef = useRef();
    const passwordRef = useRef();
    const email_titleRef = useRef();
    const password_titleRef = useRef();
    const buttonRef = useRef();


    let router = useRouter();

    useEffect(()=>{
        if(available_submission){
            buttonRef.current.disabled = false;
        }else{
            buttonRef.current.disabled = true;
        }
    },[available_submission]);

    
    let emailChange = async (event) => {
        //setEmail(event.target.value);
        // setEmail(emailRef.current.value);
        email = event.target.value;
        password = passwordRef.current.value;

        // await delay(100);

        if(email.length >= 1){
            setEtatEmail(true);
        }else{
            setEtatEmail(false);
        }

        let expressionReguliere = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
        
        if(expressionReguliere.test(email) || email.length == 0){
            setConformEmail(true);

            if(conform_password && password.length >= 1 && email.length >= 1){
                setAvailableSubmission(true);
            }
        }else{
            setConformEmail(false);

            setAvailableSubmission(false);
        }
    }
    
    let passwordChange = async (event) => {
        // on teste la conformite du mot de passe
        // setPassword(event.target.value);
        // setPassword(passwordRef.current.value);
        password = event.target.value;
        email = emailRef.current.value;

        // await delay(100);

        if(password.length >= 1){
            setEtatPassword(true);
        }else{
            setEtatPassword(false);
        }

        if(password.length >= 8  || password.length == 0){
            setConformPassword(true);
            
            if(conform_email && email.length >=1 && password.length >= 1){
                setAvailableSubmission(true);
            }
        }else{
            setConformPassword(false);

            setAvailableSubmission(false);
        }
    }

    function delay(n){
        return new Promise(function(resolve){
            setTimeout(resolve,n);
        });
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();

        email = emailRef.current.value;
        password = passwordRef.current.value;

        if(conform_email && conform_password){
            // const baseUrl = 'http://192.168.43.194:8888';

            // const rawResponse = await axios.post(baseUrl+'/api/v0/auth/phone/login', {
            //     "password": password,
            //     "phone": phone
            //   })
            //   .then(function (response) {
            //     console.log(response);
            //     router.push('/dashboard/user/1')
            //   })
            //   .catch(function (error) {
            //     alert('Identifiants incorrectes')
            //   });
            
            console.log("Email : "+email+", Password : "+password);

            // si les identifiants sont correctes, on redirige vers une autre page 

            //router.push('/login');
        }
        else{
            console.log("Email : "+email+", Password : "+password);
        }
    }

    

    return (
        <div className={styles.global}>
            <div className={styles.topcontainer}>
                <div className={styles.letsgo}>
                    
                </div>
                <div className={styles.circle}>
                    <Image src={bigellipse} alt="ellipse 1" width="300" height="300" className={styles.bigcircle}/>
                    <Image src={smallellipse} alt="ellipse 2" width="150" height="150" className={styles.smallcircle}/>
                </div>
            </div>

            <div className={styles.supercentercontainer}>
                <div className={styles.centercontainer}>
                    <div className={styles.leftimage}>
                        <p>Reach Your Destination <br/>In A Finger Snap</p>
                        <div className={styles.points}>
                            <Image src={whitepoint} alt="point 1" width="10" height="10" className={styles.point}/>
                            <Image src={whitepoint} alt="point 2" width="10" height="10" className={styles.point}/>
                            <Image src={point} alt="point 3" width="10" height="10" className={styles.point}/>
                        </div>
                    </div>
                    <div className={styles.login}>
                        <form action="" className={styles.myform} onSubmit={handleSubmit}>
                            <p className="text-xl font-bold mb-5">Log In</p>
                            <div className={styles.linkcontainer}>
                                {etat_email ? <p ref={email_titleRef} id='email_title' className={`${styles.input_title} ${!conform_email && styles.text_warning}`}>Email or Phone</p> : <p className={styles.input_title_hidle}>.</p> }
                            </div>
                            
                            <input ref={emailRef} type="text" id='email' name='email' className = {`${styles.inputtext} ${!conform_email && styles.input_warning}`} onChange={emailChange} placeholder='Email or Phone' required/>
                            {!conform_email ? <p className={styles.input_title1}><Image src={icon_error} alt="error icon" width="10" height="10" className={styles.icon_error}/>Email incorrect</p> : <p className={styles.input_title_hidle}>.</p> }

                            <div className={styles.linkcontainer}>
                                {etat_password ? <p ref={password_titleRef} id='password_title' className={`${styles.input_title} ${!conform_password && styles.text_warning}`}>Password</p> : <p className={styles.input_title_hidle}>.</p> }
                            </div>
                            
                            <input ref={passwordRef} type="password" id='password' name='password' className = {`${styles.inputtext} ${!conform_password && styles.input_warning}`} onChange={passwordChange} placeholder='Password' required/>
                            {!conform_password ? <p className={styles.input_title1}><Image src={icon_error} alt="error icon" width="10" height="10" className={styles.icon_error}/>Au moins 8 caracteres</p> : <p className={styles.input_title_hidle}>.</p> }

                            <div className={styles.link2container}>
                                <Link href="/phoneunactive" className={styles.link2}>Forgot password ?</Link>
                            </div>

                            <button ref={buttonRef} id='submit_button' className={`${available_submission ? styles.button3 : styles.button2}`} disabled>LOG IN</button>
                        </form>
                        <p className={styles.signin}>Don't yet have an acount ? <Link href="/signup" className={styles.link1}>Sign up</Link></p>
                        
                        <div className={styles.linecontainer}>
                            <hr className={styles.seperator}/>
                            <p>OR</p>
                            <hr className={styles.seperator}/>
                        </div>

                        <button className={styles.button}><Image src={google} alt="google icon" width="20" height="20" className="mr-2"/>CONTINUE WITH GOOGLE</button>
                        <button className={styles.button}><Image src={apple} alt="apple icon" width="25" height="25" className="mr-2"/>CONTINUE WITH APPLE</button>

                        <p className={styles.agreement}>By Signing in or creating an account, you agree with our <br/><a href="#" className={styles.link}>Terms & Conditions</a> and <a href="" className={styles.link}>Privacy Statement</a></p>
                        <p className={styles.agreement}>All rights reserved.<br/>Copyright (2022-2023) - Letsgo.com</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login1;
