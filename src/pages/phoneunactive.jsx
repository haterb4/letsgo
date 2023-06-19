
import React, { useState, useEffect, useRef } from 'react';
import styles from '@/styles/phoneunactive.module.css'
import Image from 'next/image'
import point from '/public/images/main/point.svg'
import whitepoint from '/public/images/main/whitepoint.svg'
import smallellipse from '/public/images/main/smallellipse.svg'
import bigellipse from '/public/images/main/bigellipse.svg'
import flag from '/public/images/main/Flag.svg';
import icon_error from '/public/images/main/icon_error.svg';
import { useRouter } from 'next/router'
import image1 from '/public/images/main/woman2.jpg'
import image2 from '/public/images/main/woman3.jpg'
import image3 from '/public/images/main/woman4.jpg'

const Phoneunactive = (props) => {

    // pour recuperer le contenu des inputs
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [confirm_password, setConfirmPassword] = useState('');

    let phonenumber = '';

    // pour connaitre si un champ est vide ou pas
    const [etat_phonenumber, setEtatPhonenumber] = useState(false);
    

    // pour verifier la conformité des informations fournies
    const [conform_phonenumber, setConformPhonenumber] = useState(true);
    

    const [available_submission, setAvailableSubmission] = useState(false);

    

    const phonenumberRef = useRef();
    const phonenumber_titleRef = useRef();
    
    const buttonRef = useRef();

    let router= useRouter();

    useEffect(()=>{
        if(available_submission){
            buttonRef.current.disabled = false;
        }else{
            buttonRef.current.disabled = true;
        }
    },[available_submission])

    
    

    let phonenumberChange = async (value) => {
        // on teste la conformite de l'email
        phonenumber = phonenumberRef.current.value;
        

        // on doit d'abord effectuer cette modif avant de tester la taille de l'email
        // await delay(100);

        if(phonenumber.length >= 1){
            setEtatPhonenumber(true);
        }else{
            setEtatPhonenumber(false);
        }

        let expressionReguliere = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;

        // on doit verifier que le numéro de téléphone est conforme
        if(phonenumber.length == 9){
            setConformPhonenumber(true);
    
            setAvailableSubmission(true);
            
        }else{
            setConformPhonenumber(false);
            
            setAvailableSubmission(false);
        }
    }
    
    

    const handleSubmit = async (event) =>{
        event.preventDefault();

        phonenumber = phonenumberRef.current.value;

        if(conform_phonenumber){
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
            
            console.log("Email : "+phonenumber);

            // on switch sur le login
            // router.push('/login');
        }
        else{
            console.log("Les informations sont erronnées !");
            console.log("Email : "+phonenumber);
           
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
                            <p className={`${styles.registerphone} text-xl font-bold `}>Register Your Phone Number</p>
                            {etat_phonenumber ? <p ref={phonenumber_titleRef} id='email_title' className={`${styles.input_title} ${!conform_phonenumber && styles.text_warning}`}>Phone</p> : <p className={styles.input_title_hidle}>.</p> }
                            <div className = {styles.inputtext2}>
                                <div className={`${styles.inputtext1} ${conform_phonenumber ? styles.input_conform : styles.input_warning}`}>
                                    <Image src={flag} alt="the flay on the country" width="25" height="25" className={styles.icon_error}/>
                                    <select id="destination" className={styles.select}>
                                        <option selected className={styles.destination}> +000 </option>
                                        <option value="Cameroun" className={styles.destination}>+237</option>
                                        <option value="Canada" className={styles.destination}>+1</option>
                                        <option value="France" className={styles.destination}>+33</option>
                                        <option value="Angleterre" className={styles.destination}>+34</option>
                                    </select>
                                </div>
                                
                                <input ref={phonenumberRef} type="number" id='phonenumber' name='phonenumber' className = {`${styles.inputtext} ${conform_phonenumber ? styles.input_conform : styles.input_warning}`} onChange={e => phonenumberChange(e.target.value)} placeholder='000 000 000' required/>
                            </div>
                            
                            {!conform_phonenumber ? <p className={styles.input_title1}><Image src={icon_error} alt="error icon" width="15" height="15" className={styles.icon_error}/>Phone is incorrect</p> : <p className={styles.input_title_hidle}>.</p> }
                            <button ref={buttonRef} id='submit_button' className={`${available_submission ? styles.button3 : styles.button2}`} disabled>SEND VERIFICATION CODE</button>
                        </form>
                        <hr className={styles.seperator}/>
                        <p className={styles.agreement}>By Signing in or creating an account, you agree with our <br/><a href="#" className={styles.link}>Terms & Conditions</a> and <a href="" className={styles.link}>Privacy Statement</a></p>
                        <p className={styles.agreement}>All rights reserved.<br/>Copyright (2022-2023) - Letsgo.com</p>
                    </div>
                </div>
            </div>
            

        </div>
    );
};

export default Phoneunactive;