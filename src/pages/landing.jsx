import React from 'react';
import styles from '@/styles/landing.module.css';
import Link from 'next/link';
import Image from 'next/image';
import logo from '/public/images/main/letsgoLogo.svg';
import point from '/public/images/main/blackpoint.svg';
import around from '/public/images/main/around.svg';
import womanincar from '/public/images/main/womanincar.svg';
import blueellipse from '/public/images/main/blueellipse.svg';
import pinkdashedellipse from '/public/images/main/pinkdashedellipse.svg';
import backgroundimage2 from '/public/images/main/backgroundimage2.svg';
import Visitedplace from '@/componnents/visitedplace';
import apple from '/public/images/main/apple-64.png';
import google from '/public/images/main/google.svg';


import Review from '@/componnents/review';

const Landing = () => {


    let handleSubmit = (event)=>{
        event.preventDefault(); // pour ne pas actualiser la page

        // on entre ici lorsqu'on clique sur le boutton submit du formulaire
        alert("On a soumis le formulaire !");
    }

    return (
        <div>
            <div className={styles.topcontainer}>
                <div className={styles.thetop}>
                <Link href="/"><Image src={logo} alt="let'sgo Logo" width="200" height="200" className={styles.google}/></Link>
                    <nav className={styles.mainnav}>
                        <ul className={styles.mynav}>
                            <li className={styles.link}><Link href='#'>Covoiturage</Link></li>
                            <li className={styles.link}><Link href='#'>Taxis</Link></li>
                            <li className={styles.link}><Link href='#'>Tarifs</Link></li>
                            <li className={styles.link}><Link href='#'>Trajets</Link></li>
                            <li className={styles.link}><Link href='#'>Partenaires</Link></li>
                            <li className={styles.link}>
                                <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" data-dropdown-delay="500" data-dropdown-trigger="hover" class={styles.loginbutton} type="button">Log In<svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                                <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                        <li>
                                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Log In</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign Up</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className={styles.textcontainer}>
                    <p className={styles.text}>Reach Your Destinations<br/>In Time</p>
                </div>
                <div className={styles.searchbarcontainer}>
                    <div className={styles.searchbar}>
                        <select id="destination" class={styles.destination}>
                            <option selected class={styles.destination1}>Enter destination</option>
                            <option value="Melen" class={styles.destination1}>Melen</option>
                            <option value="Nlongkak" class={styles.destination1}>Nlongkak</option>
                            <option value="Jouvance" class={styles.destination1}>Jouvance</option>
                            <option value="Bastos" class={styles.destination1}>Bastos</option>
                            <option value="Etoudi" class={styles.destination1}>Etoudi</option>
                        </select>

                        <div className={styles.line1}></div>
                        
                        <select id="departure times" class={styles.destination}>
                            <option selected class={styles.destination1}>Departure time ?</option>
                            <option value="10h" class={styles.destination1}>10h</option>
                            <option value="11h" class={styles.destination1}>11h</option>
                            <option value="12h" class={styles.destination1}>12h</option>
                            <option value="13h" class={styles.destination1}>13h</option>
                            <option value="15h" class={styles.destination1}>15h</option>
                        </select>

                        <div className={styles.line1}></div>
                        
                        <select id="departure times" class={styles.destination}>
                            <option selected class={styles.destination1}>Departing point</option>
                            <option value="Mvogbi" class={styles.destination1}>Mvogbi</option>
                            <option value="Mvan" class={styles.destination1}>Mvan</option>
                            <option value="Gousso" class={styles.destination1}>Gousso</option>
                            <option value="Olembe" class={styles.destination1}>Olembe</option>
                            <option value="Etoudi" class={styles.destination1}>Etoudi</option>
                        </select>

                        <div className={styles.line1}></div>

                        <button class={styles.searchbutton}>Search</button>
                    </div>
                </div>
                <div className={styles.wishcontainer}>
                    <div className={styles.wish}>
                        <p className={styles.wishtext}>I wish to be at </p>
                        <p className={styles.wishtext1}>simbock</p>
                        <div className={styles.line}></div>
                    </div>
                </div> 
            </div>

            <div className={styles.ourapp}>
                <a href="#" className={styles.googlelink}>
                    <Image src={google} alt="google paystore link" width="40" height="40" className={styles.google}/>
                    <div>
                        <p className={styles.getin}>GET IN ON</p>
                        <p className={styles.play}>Google Play</p>
                    </div>
                </a>
                <a href="#" className={styles.googlelink}>
                    <Image src={apple} alt="apple store link" width="40" height="40" className={styles.google1}/>
                    <div>
                        <p className={styles.getin}>Download on the</p>
                        <p className={styles.play}>App Store</p>
                    </div>
                </a>
            </div>

            <div className={styles.frequentlyvisitedtitle}>
                <Image src={point} alt="surrounding of a division" width="15" height="15" className={styles.point}/>
                <p>Most Frequently visited<br/>places</p>
                <Image src={point} alt="surrounding of a division" width="15" height="15" className={styles.point}/>
            </div>

            <div className={styles.mostfrequentlyvisited}>
                <Image src={backgroundimage2} alt="surrounding of a division" className={styles.backgroundimage2}/>
                <div className={styles.mostfrequentlycontent}>
                    <div className={styles.mostfrequentlyitem}>
                        <Visitedplace name={'Hotel United'} quartier={'Mbankomo'} ville={'Yaounde'} big={false}></Visitedplace>
                        <Visitedplace name={'Foumban Royal Palace'} quartier={'Foumban'} ville={'Baffoussam'} big={false}></Visitedplace>
                        <Visitedplace name={'Hotel de ville'} quartier={'Province'} ville={'Yaounde'} big={false}></Visitedplace>
                    </div>
                    <div className={styles.mostfrequentlyitem1}>
                        <Visitedplace name={'National Meseum'} quartier={'Education'} ville={'Yaounde'} big={true}></Visitedplace>
                        <Visitedplace name={'Maritime Meseum'} quartier={'Bonajo'} ville={'Douala'} big={true}></Visitedplace>
                        <Visitedplace name={'Hilton'} quartier={'Education'} ville={'Yaounde'} big={true}></Visitedplace>
                    </div>
                    <div className={styles.mostfrequentlyitem}>
                        <Visitedplace name={'Luluana Beach'} quartier={'Kribi Coast'} ville={'Kribi'} big={false}></Visitedplace>
                        <Visitedplace name={'Playce'} quartier={'Warda'} ville={'Yaounde'} big={false}></Visitedplace>
                        <Visitedplace name={'Rond Point Deido'} quartier={'Deido'} ville={'Douala'} big={false}></Visitedplace>
                    </div>
                </div>
            </div>
                
            <div className={styles.letsgoreason}>
                <p>WHY LET'S GO?</p>
                <Image src={womanincar} alt="image of a woman" width="390" height="390" className={styles.around1}/>
                <Image src={around} alt="surrounding of image 1" width="390" height="390" className={styles.around}/>
                <Image src={around} alt="surrounding of image 2" width="380" height="380" className={styles.around1}/>

                <Image src={pinkdashedellipse} alt="pink dashed ellipse" width="150" height="150" className={styles.pinkellipse}/>
                <Image src={blueellipse} alt="blue ellipse" width="150" height="150" className={styles.blueellipse}/>
            </div>

            <div className={styles.rvahcontainer}>

                <div className={styles.crosscontainer}></div>

                <div className={styles.rvahcontainer1}>
                    <div className={styles.divrva}>
                        <div className={styles.divr}>
                            <p className={styles.Rsymbole}>R</p>
                            <p className={styles.text}>Reservations<br/>of Taxis</p>
                        </div>
                        <div className={styles.divr}>
                            <p className={styles.Vsymbole}>V</p>
                            <p className={styles.text}>Vehicules<br/>available at all<br/>moments</p>
                        </div>
                        <div className={styles.divr}>
                            <p className={styles.Asymbole}>A</p>
                            <p className={styles.text}>Adapted to<br/>every budget</p>
                        </div>
                    </div>
                    <div className={styles.divh}>
                        <p className={styles.Hsymbole}>H</p>
                        <p className={styles.text}>High Level Of Security and Verification</p>
                    </div>
                </div>
            </div>


            <div className={styles.reviewcontainer}>
                <div className={styles.reviewtitle}>
                    <Image src={point} alt="point 1" width="20" height="20" className={styles.point}/>
                    <p>Reviews</p>
                    <Image src={point} alt="point 2" width="20" height="20" className={styles.point}/>
                </div>
                <div className={styles.review}>
                    <Review name={'Otamendi Youssoufa'} description={'Some drivers drive to fast and it to scary'} nbstart={3}></Review>
                    <Review name={'Otamendi Solomon'} description={'It saves time which is very important for business people'} nbstart={4}></Review>
                    <Review name={'Otamendi Youssoufa'} description={'Some drivers drive to fast and it to scary'} nbstart={2}></Review>
                    <Review name={'Lening Steve'} description={'Éleve ingénieur en 4eme année Genie Informatique'} nbstart={5}></Review>
                </div>
            </div>
            

            <footer className={styles.footer}>
                <div className={styles.footer_links}>
                    <div className={styles.links}>
                        <p className={styles.footer_title}>OUR COMPANY</p>
                        <hr className={styles.line}/>
                        <Link href="#" className={styles.link}>Why us ?</Link>
                        <Link href="#" className={styles.link}>About us</Link>
                        <Link href="#" className={styles.link}>Blog</Link>
                        <Link href="#" className={styles.link}>FAQ</Link>
                    </div>
                    <div className={styles.links1}>
                        <p className={styles.footer_title}>OUR APP</p>
                        <hr className={styles.line}/>
                        <Link href="#" className={styles.link1}>Terms and Conditions</Link>
                        <Link href="#" className={styles.link1}>Privacy Policy</Link>
                    </div>
                </div>
                <div className='mb-10'>
                    <Image src={logo} alt="Let'sgo logo" width="100" height="100" className={styles.footer_logo}/>
                    <p className="text-white">Let's Go helps clients and .....</p>
                </div>
                <div className={styles.contacts}>
                    <p className='mr-10 text-white'>+(237) 688 445 457</p>
                    <div className={styles.line1}></div>
                    <p className='ml-5 text-white'>support@letsgo.com</p>
                </div>
                <form className={styles.formulaire} onSubmit={handleSubmit}>
                    <p className="text-xl font-bold mb-5">Get in Touch</p>
                    <input type="text" id='name' name='name' className = {styles.inputtext} onChange={e => {}} placeholder='Name' required/>
                    <input type="text" id='email' name='email' className = {styles.inputtext} onChange={e => {}} placeholder='Your email' required/>
                    <input type="text" id='phone' name='phone' className = {styles.inputtext} onChange={e => {}} placeholder='Phone number' required/>
                    <textarea name="message" id="message" cols="30" rows="10" className = {styles.textarea} onChange={e => {}} placeholder='Your message(optional)'></textarea>
                    <button className={styles.submit_button}>Submit</button>
                </form>
            </footer>
        </div>
    );
};

export default Landing;