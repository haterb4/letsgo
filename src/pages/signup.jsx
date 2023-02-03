import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import styles from '@/styles/signup.module.css'
import Link from 'next/link';
import Image from 'next/image'
import womancar from '/public/womancar.svg'
import position from '/public/position.svg'
import { useState } from 'react';
import DefaultLayout from '@/layout/DefaultLayout';
import Axios from '@/app/axiosInstance';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { userLoggedIn } from '@/reducers/userSlice';
const SingUp = (props) => {

    // pour la conformite des inputs
    const [confirmpwdErr, setConfirmpwdErr] = useState('')
    const [phoneErr,setPhoneErr] = useState('')
    const [passwordErr,setPasswordErr] = useState('')


    // pour reccuperer le contenu des inputs
    const [phoneNumber,setPhoneNumber] = useState('')
    const [password,setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')

    const [requestError, setRequestError] = useState(false)
    const [requestErrorStatus, setRequestErrorStatus] = useState({
        code: '',
        message: ''
    })
    //redux state
    const dispatch = useDispatch()
    const hidePopup = () => {
        setRequestError(false)
    }
    useEffect(() => {
        if (requestError){
            setTimeout(hidePopup, 5000)
        }
    }, [requestError])
    const login = async (userObject) => {
        const ConfigObj = {
            method: 'post',
            url: '/api/v0/auth/phone/login',
            data: {
                password: password,
                phone: phoneNumber 
            }
        }
        const response = await Axios.request(ConfigObj)
        const {data} = response
        userObject.accessToken = data.access_token
        userObject.token = data.refresh_token
        dispatch(userLoggedIn({...userObject}))
        const loggedUser = useSelector(state => state.user)
        location.href = `${location.origin}`
    }
    const signUp = async () => {
        if (phoneNumber && password && confirmpassword){
            if (password === confirmpassword){
                console.log({
                    phone: phoneNumber,
                    password
                })
                const values = {
                    phone: phoneNumber, 
                    password: password,
                    userType: "TRAVELER"
                }
                const configObject = {
                    method: 'post',
                    url: '/api/v0/users/sign-up/',
                    data: {...values}
                }
                try {
                    const response = await Axios.request(configObject)
                    const {data} = response
                    const tmpUser = {
                        id: data.userId,
                        name: 'Unknown',
                        phone: phoneNumber,
                        accessToken: '',
                        token: '',
                    }
                    await login(tmpUser)
                } catch (error) {
                    try {
                        const { data } = error.response
                        if (data){
                            console.log(data)
                            setRequestErrorStatus({
                                code: data.status,
                                message: data.error
                            })
                            setRequestError(true)
                        } 
                    } catch (error) {
                        return null
                    }
                    
                }
            }
            else{
                setConfirmpwdErr("password don't match")
            }
        }
        else{
            phoneNumber && setPhoneErr("required field")
            password && setPasswordErr("required field")
            confirmpassword && setConfirmpwdErr("required field")
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
                        <input type="text" id='phoneNumber' name='phoneNumber' onChange={(e)=> { setPhoneNumber(e.target.value); setPhoneErr('')} } className = {styles.inputtext} placeholder='Phone number' required/>
                        {phoneErr && <div className = {styles.spancontainer}><span className = {styles.span}>{phoneErr}</span></div>}
                        <input type="text" id='password' name='password' onChange={(e)=>{ setPassword(e.target.value); setPasswordErr('')}} className = {styles.inputtext} placeholder='Password' required/>
                        {passwordErr && <div className = {styles.spancontainer}><span className = {styles.span}>{passwordErr}</span></div>}
                        <input type="text" id='confirmpassword' name='confirmpassword' onChange={(e)=>{ setConfirmPassword(e.target.value); setConfirmpwdErr('')}} className = {styles.inputtext} placeholder='Password' required/>
                        {confirmpwdErr && <div className = {styles.spancontainer}><span className = {styles.span}>{confirmpwdErr}</span></div>}
                        <div className = {styles.privacy}>
                            <input type="checkbox" name="" id="" className = {styles.checkbox}/>
                            <p>I agree with</p>
                            <Link  href='#' className = {styles.link1}>Privacy Policy</Link>
                        </div>
                        <button onClick={ signUp } type="submit" className = {styles.mybutton}>Sign Up</button>
                    </div>
                </div>
            </div>
            {requestError && <div className='absolute top-0 left-0 h-full w-full flex justify-center items-center' style={{background: "rgba(3, 3, 3, 0.4)"}}>
                <div className='bg-white h-56 w-80 flex flex-col justify-between items-start rounded-lg'>
                    <div className='h-16 w-full flex justify-between px-2 items-center bg-orange-500 rounded-t-lg'>
                        <span className='bg-pink-600 text-white h-8 px-2 rounded-lg flex items-center justify-center mr-2'>Reuest Error</span>
                        <button onClick={() => { setRequestError(false) }} className='h-12 w-12 p-2 flex justify-center items-center text-red-600'><FontAwesomeIcon icon={faClose}/></button>
                    </div>
                    <div className='w-full h-full flex flex-col items-center justify-center px-4'>
                        <p className='py-2 w-full text-left flex justify-start items-center'><span>{requestErrorStatus.message === 'Conflict'? 'This phone number allready exists please check for your phone number and try again.' :''}</span></p>
                    </div>
                </div>
            </div>}
        </DefaultLayout>
    );
};

export default SingUp;