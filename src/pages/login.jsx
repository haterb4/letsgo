import React from 'react';
import styles from '@/styles/login.module.css'
import Link from 'next/link';
import Image from 'next/image'
import objet1 from '/public/images/main/objet.svg'
import objet2 from '/public/images/main/objet2.svg'
import objet3 from '/public/images/main/objet3.svg'
import objet4 from '/public/images/main/objet4.svg'
import point from '/public/images/main/point.svg'
import whitepoint from '/public/images/main/whitepoint.svg'
import smallellipse from '/public/images/main/smallellipse.svg'
import bigellipse from '/public/images/main/bigellipse.svg'
import logo from '/public/images/main/letsgoLogo.svg';
import google from '/public/images/main/google.svg';
import apple from '/public/images/main/apple.svg';
import drawing from '/public/images/main/drawing.png';
import { useRouter } from 'next/router'

const Login = (props) => {

    // const [phone, setPhone] = useState('')
    // const [password, setPassword] = useState('')
    // const [remeberMe, setRememberMe] = useState(false)
    let router= useRouter()
    
    // const handleSubmit = async (event) =>{
    //     event.preventDefault()

    //     if(phone && password){
    //         const baseUrl = 'http://192.168.43.194:8888';

    //         const rawResponse = await axios.post(baseUrl+'/api/v0/auth/phone/login', {
    //             "password": password,
    //             "phone": phone
    //           })
    //           .then(function (response) {
    //             console.log(response);
    //             router.push('/dashboard/user/1')
    //           })
    //           .catch(function (error) {
    //             alert('Identifiants incorrectes')
    //           });
    //     }
    // }

    return (
        <div className={styles.global}>
            <div className={styles.topcontainer}>
                <div className={styles.letsgo}>
                    <Link href="/"><Image src={logo} alt="Let's go logo" width="100" height="100" /></Link>
                </div>
                <div className={styles.circle}>
                    <Image src={bigellipse} alt="ellipse 1" width="300" height="300" className={styles.bigcircle}/>
                    <Image src={smallellipse} alt="ellipse 2" width="150" height="150" className={styles.smallcircle}/>
                </div>
            </div>

            <div className={styles.bottomcontainer}>
                <Image src={objet1} alt="ellipse 1" width="500" height="500" className={styles.bottomimage1}/>
                <Image src={objet2} alt="ellipse 2" width="520" height="520" className={styles.bottomimage2}/>
                <Image src={objet3} alt="ellipse 3" width="540" height="540" className={styles.bottomimage3}/>
                <Image src={objet4} alt="ellipse 4" width="560" height="560" className={styles.bottomimage4}/>
                <div className={styles.human}>
                    <Image src={drawing} alt="drawing human" className={styles.humanimage}/>
                </div>
            </div>
            
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
                    <p className="text-xl font-bold mb-7">Log In</p>
                    <Link href="/login1" className={styles.button1}>CONTINUE WITH EMAIL</Link>
                    <button className={styles.button}><Image src={google} alt="google icon" width="20" height="20" className="mr-2"/>CONTINUE WITH GOOGLE</button>
                    <button className={styles.button}><Image src={apple} alt="apple icon" width="25" height="25" className="mr-2"/>CONTINUE WITH APPLE</button>
                    <p className={styles.signin}>Don't yet have an acount ? <Link href="/signup" className={styles.link1}>Sign up</Link></p>
                    <hr className={styles.seperator}/>
                    <p className={styles.agreement}>By Signing in or creating an account, you agree with our <br/><a href="#" className={styles.link}>Terms & Conditions</a> and <a href="" className={styles.link}>Privacy Statement</a></p>
                    <p className={styles.agreement}>All rights reserved.<br/>Copyright (2022-2023) - Letsgo.com</p>
                </div>
            </div>

        </div>
    );
};

export default Login;