import React, { useState, useEffect, useRef } from 'react';
import styles from '@/styles/signup.module.css'
import Link from 'next/link';
import Image from 'next/image'
import point from '/public/images/main/point.svg'
import whitepoint from '/public/images/main/whitepoint.svg'
import smallellipse from '/public/images/main/smallellipse.svg'
import bigellipse from '/public/images/main/bigellipse.svg'
import icon_error from '/public/images/main/icon_error.svg';
import { useRouter } from 'next/router'
import Head from 'next/head';


const SignUp1 = (props) => {

    // pour recuperer le contenu des inputs
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [confirm_password, setConfirmPassword] = useState('');

    let email = '';
    let password = '';
    let confirm_password = '';

    // pour connaitre si un champ est vide ou pas
    const [etat_email, setEtatEmail] = useState(false);
    const [etat_password, setEtatPassword] = useState(false);
    const [etat_confirm_password, setEtatConfirmPassword] = useState(false);

    // pour verifier la conformité des informations fournies
    const [conform_email, setConformEmail] = useState(true);
    const [conform_password, setConformPassword] = useState(true);
    const [conform_confirm_password, setConformConfirmPassword] = useState(true);


    const [show_password, setShowPassword] = useState(false);
    const [show_confirm_password, setShowConfirmPassword] = useState(false);
    const [available_submission, setAvailableSubmission] = useState(false);

    // pour verivier si le password et le confirm_password sont identiques
    const [can_save, setCanSave] = useState(true);

    const emailRef = useRef();
    const passwordRef = useRef();
    const confirm_passwordRef = useRef();
    const email_titleRef = useRef();
    const password_titleRef = useRef();
    const confirm_password_titleRef = useRef();
    const buttonRef = useRef();

    let router= useRouter();

    useEffect(()=>{
        if(available_submission){
            buttonRef.current.disabled = false;
        }else{
            buttonRef.current.disabled = true;
        }
    },[available_submission])

    
    

    let emailChange = async (value) => {
        // on teste la conformite de l'email
        email = emailRef.current.value;
        password = passwordRef.current.value;
        confirm_password = confirm_passwordRef.current.value;

        // on doit d'abord effectuer cette modif avant de tester la taille de l'email
        // await delay(100);

        if(email.length >= 1){
            setEtatEmail(true);
        }else{
            setEtatEmail(false);
        }

        let expressionReguliere = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;

        if(expressionReguliere.test(email)){
            setConformEmail(true);
    
            if(conform_password && password.length >=1 && conform_confirm_password && confirm_password.length >= 1){
                setAvailableSubmission(true);
            }
        }else{
            setConformEmail(false);
            
            setAvailableSubmission(false);
        }
    }
    
    let passwordChange = async (value) => {
        // on teste la conformite du mot de passe
        // setPassword(value);
        email = emailRef.current.value;
        password = passwordRef.current.value;
        confirm_password = confirm_passwordRef.current.value;

        // await delay(100);

        if(password.length >= 1){
            setEtatPassword(true);
        }else{
            setEtatPassword(false);
        }

        if(password.length >= 8){
            setConformPassword(true);
    
            if(conform_email && email.length >=1 && conform_confirm_password && confirm_password.length >= 1){
                setAvailableSubmission(true);
                
                // if(password == confirm_password){
                //     setAvailableSubmission(true);
                // }else{
                //     // on affiche que les deux mot de passe ne sont pas identiques
                // }
                
            }
        }else{
            setConformPassword(false);

            setAvailableSubmission(false);
        }
    }


    let confirmPasswordChange = async (value) => {
        // on teste la conformite du mot de passe
        // setConfirmPassword(value);

        email = emailRef.current.value;
        password = passwordRef.current.value;
        confirm_password = confirm_passwordRef.current.value;

        console.log("Email : "+email+", Password : "+password+", Confirm Password : "+confirm_password);

        // await delay(100);

        if(confirm_password.length >= 1){
            setEtatConfirmPassword(true);
        }else{
            setEtatConfirmPassword(false);
        }

        if(confirm_password.length >= 8){
            setConformConfirmPassword(true);
        
            if(conform_email && email.length >=1 && conform_password && password.length >= 1){
                setAvailableSubmission(true);
                
                // if(password == confirm_password){
                //     setAvailableSubmission(true);
                // }else{
                //     // on affiche que les deux mot de passe ne sont pas identiques
                // }
            }
        }else{
            setConformConfirmPassword(false);
    
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
        confirm_password = confirm_passwordRef.current.value;

        if(conform_email && conform_password && conform_confirm_password && password == confirm_password){
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

            alert('Informations correctes');
            
            console.log("Email : "+email+", Password : "+password+", Confirm Password : "+confirm_password);

            setCanSave(true);
            // on enregistres les informations dans la BD

            // on switch sur le login
            // router.push('/login');
        }
        else{
            console.log("Les informations sont erronnées !");
            console.log("Email : "+email+", Password : "+password+", Confirm Password : "+confirm_password);
            // on affiche ce message a l'ecran
            setCanSave(false);
        }
    }



    return (
        <>
        <Head>
            <title>Sign up - let's go</title>
        </Head>
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
                            <p className="text-xl font-bold mb-1">Create Account</p>
                            <p className={styles.instructions}>Use a minimum of 10 characters, including uppercase letters,lowercase letters, and numbers</p>
                            {etat_email ? <p ref={email_titleRef} id='email_title' className={`${styles.input_title} ${!conform_email && styles.text_warning}`}>Email</p> : <p className={styles.input_title_hidle}>.</p> }
                            <input ref={emailRef} type="text" id='email' name='email' className = {`${styles.inputtext} ${!conform_email && styles.input_warning}`} onChange={e => emailChange(e.target.value)} placeholder='Email' required/>
                            {!conform_email ? <p className={styles.input_title1}><Image src={icon_error} alt="error icon" width="10" height="10" className={styles.icon_error}/>Email incorrect</p> : <p className={styles.input_title_hidle}>.</p> }
                            {etat_password ? <p ref={password_titleRef} id='password_title' className={`${styles.input_title} ${!conform_password && styles.text_warning}`}>Password</p> : <p className={styles.input_title_hidle}>.</p> }
                            <input ref={passwordRef} type="password" id='password' name='password' className = {`${styles.inputtext1} ${!conform_password && styles.input_warning}`} onChange={e => passwordChange(e.target.value)} placeholder='Password' required/>
                            {!conform_password ? <p className={styles.input_title1}><Image src={icon_error} alt="error icon" width="10" height="10" className={styles.icon_error}/>Au moins 8 caracteres</p> : <p className={styles.input_title_hidle}>.</p> }
                            {etat_confirm_password ? <p ref={confirm_password_titleRef} id='confirm_password_title' className={`${styles.input_title} ${!conform_confirm_password && styles.text_warning}`}>Confirm Password</p> : <p className={styles.input_title_hidle}>.</p> }
                            <input ref={confirm_passwordRef} type="password" id='confirm_password' name='confirm_password' className = {`${styles.inputtext1} ${!conform_confirm_password && styles.input_warning}`} onChange={e => confirmPasswordChange(e.target.value)} placeholder='Confirm Password' required/>
                            {!conform_confirm_password ? <p className={styles.input_title1}><Image src={icon_error} alt="error icon" width="10" height="10" className={styles.icon_error}/>Au moins 8 caracteres</p> : <p className={styles.input_title_hidle}>.</p> }
                            {!can_save ? <p className={styles.input_title1}><Image src={icon_error} alt="error icon" width="10" height="10" className={styles.icon_error}/>Password do not match</p> : <p className={styles.input_title_hidle}>.</p> }
                            <button ref={buttonRef} id='submit_button' className={`${available_submission ? styles.button3 : styles.button2}`} disabled>CREATE ACCOUNT</button>
                        </form>
                        <p className={styles.signin}>Already have an account?  <Link href="/login" className={styles.link1}>Log in</Link></p>
                        <hr className={styles.seperator}/>
                        <p className={styles.agreement}>By Signing in or creating an account, you agree with our <br/><a href="#" className={styles.link}>Terms & Conditions</a> and <a href="" className={styles.link}>Privacy Statement</a></p>
                        <p className={styles.agreement}>All rights reserved.<br/>Copyright (2022-2023) - Letsgo.com</p>
                    </div>
                </div>

            </div>

        </div>
        </>
    );
};

export default SignUp1;