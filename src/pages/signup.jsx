import React from 'react';
import styles from '@/styles/signup.module.css'
import Link from 'next/link';
import Image from 'next/image'
import { Navbar } from '@/componnents';
import womancar from '/public/womancar.svg'
import position from '/public/position.svg'
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';


const SingUp = (props) => {

    // pour la conformite des inputs
    const [phoneStatus,setPhoneStatus] = useState(false)
    const [passwordStatus,setPasswordStatus] = useState(false)
    const [more, setMore] = useState(false)

    // pour reccuperer le contenu des inputs
    const [_phoneNumber,setPhoneNumber] = useState('')
    const [_password,setPassword] = useState('')

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [gender, setGender] = useState('Male')
    const [birthday, setBirthday] = useState('')
    const [description, setDescription] = useState('')
    const [country, setCountry] = useState('Cameroon')
    const [city, setCity] = useState('Yaounde')
    const [descriptionAddress, setDescriptionAddress] = useState('')

    // on cree notre router
    let router= useRouter()

    const handleSubmit = async (event) =>{
        event.preventDefault()

        verifyConformity();

        // on envoi la requete
        if(!phoneStatus && !passwordStatus){
            const baseUrl = 'http://192.168.43.194:8888';

            const rawResponse = await axios.post(baseUrl+'/api/v0/users/sign-up/', {
                "password": _password,
                "phone": _phoneNumber
              })
              .then(function (response) {
                console.log(response);
                setMore(!more)
              })
              .catch(function (error) {
                alert('This phone number is already used')
              });
        }
    }

    let phoneConform =  () => {
        // on teste la conformite du numero de telephone
        if(_phoneNumber.length < 9 || _phoneNumber.length > 13){
            setPhoneStatus(true)
        }else{
            setPhoneStatus(false)
        }
    }

    let passwordConform = () => {
        // on teste la conformite du mot de passe
        if(_password.length < 8){
            setPasswordStatus(true)
        }else{
            setPasswordStatus(false)
        }
    }

    // fonction pour attendre 'n' millisecondes
    function delay(n){
        return new Promise(function(resolve){
            setTimeout(resolve,n);
        });
    }

    async function verifyConformity(){

        phoneConform();
        
        passwordConform();
    
        await delay(100);
    }

    const handleSubmitMore = async (event) =>{
        event.preventDefault()
        console.log('your are giving more informations ...')

        await delay(100);

        if(firstName !='' && lastName !='' && gender !='' && birthday !='' && country !='' && city !=''){
            const baseUrl = 'http://192.168.43.194:8888';

            console.log('firstName :', firstName, 'lastName :',lastName, 'gender :',gender, 'birthday :',birthday, 'description :',description, 'country :',country, 'city :',city, 'description of address :',descriptionAddress)
            // on effectue la requette pour enregistrer les informations supplementaires
            
            // const rawResponse = await axios.post(baseUrl+'/api/v0/users/sign-up/', {
            //     //body de la requete
            //   })
            //   .then(function (response) {
            //     console.log(response);
            //     setMore(!more)
            //     router.push('/login')
            //   })
            //   .catch(function (error) {
            //     alert('An error occured when saving informations') 
            //   });
        }
        setMore(false) // on eleve ceci des que la requete sera effective
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
                        <input type="text" id='phoneNumber' name='phoneNumber' onChange={(e)=>{setPhoneNumber(e.currentTarget.value)}} className = {styles.inputtext} placeholder='Phone number' required/>
                        <div className = {styles.spancontainer}><span className = {styles.span}>{phoneStatus ? "phone number should between 9 and 13 caracters" : ''}</span></div>
                        <input type="text" id='password' name='password' onChange={(e)=>{setPassword(e.currentTarget.value)}} className = {styles.inputtext} placeholder='Password' required/>
                        <div className = {styles.spancontainer}><span className = {styles.span}>{passwordStatus ? "password should have least 8 caracters" : ''}</span></div>
                        <div className = {styles.privacy}>
                            <input type="checkbox" name="" id="" className = {styles.checkbox}/>
                            <p>I agree with</p>
                            <Link  href='#' className = {styles.link1}>Privacy Policy</Link>
                        </div>
                        <button type="submit" className = {styles.mybutton}>Sign Up</button>
                    </div>
                </form>

                {more && <form action="" method='post' onSubmit={handleSubmitMore} className={styles.moreInformation}>
                    <div className = {styles.moreInformation1}>
                        <p>Give more informations</p>
                        <input type="text" id='firstName' name='firstName' onChange={(e)=>{setFirstName(e.currentTarget.value)}} className = {styles.inputtext2} placeholder='First name' required/>
                        <input type="text" id='lastName' name='lastName' onChange={(e)=>{setLastName(e.currentTarget.value)}} className = {styles.inputtext2} placeholder='Last name' required/>
                        <select id='gender' name='gender' onChange={(e)=>{setGender(e.currentTarget.value)}} className = {styles.inputtext1} required>
                            <option value="Male">Man</option>
                            <option value="Female">Woman</option>
                        </select>
                        <input type="date" id='birthday' name='birthday' onChange={(e)=>{setBirthday(e.currentTarget.value)}} className = {styles.inputtext1} placeholder='Birth day' required/>
                        <textarea name="description" id="description" cols="30" rows="10" onChange={(e)=>{setDescription(e.currentTarget.value)}} className = {styles.description} placeholder='Give a short description of yourself'></textarea>
                        <div className={styles.address}>
                            <p>Address</p>
                            <div className={styles.contry}>
                                <select id='country' name='country' onChange={(e)=>{setCountry(e.currentTarget.value)}} className = {styles.inputtext3} required>
                                    <option value="Cameroon">Cameroon</option>
                                    <option value="Gabon">Gabon</option>
                                    <option value="Nigeria">Nigeria</option>
                                </select>
                                <select id='city' name='city' onChange={(e)=>{setCity(e.currentTarget.value)}} className = {styles.inputtext4} required>
                                    <option value="Yaounde">Yaounde</option>
                                    <option value="Douala">Douala</option>
                                    <option value="Abijan">Abijan</option>
                                </select>
                            </div>
                            <textarea name="descriptionAddress" id="descriptionAddress" cols="30" rows="10" onChange={(e)=>{setDescriptionAddress(e.currentTarget.value)}} className = {styles.inputtext5  } placeholder='Describe your address'></textarea>
                        </div>

                        <button type="submit" className = {styles.mybutton}>Save</button>
                    </div>
                </form>}
            </div>
        </div>
    );
};

export default SingUp;