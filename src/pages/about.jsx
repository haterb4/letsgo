import React from 'react'
import { Navbar } from '@/componnents';
import styles from '@/styles/about.module.css';
import aboutus from '/public/aboutus.svg'
import Image from 'next/image';

const About = () => {

  const handleClick = () => {
    // lorsqu'on clique sur 'learn more', cette methode est appellee
    console.log('Learn More ...')
  }

  return (
    <div>
      <div className={styles.navbar}>
        <Navbar/>
      </div>
      <div  className={styles.container}>
        <div className={styles.topcontainer}>
          <p>About us</p>
        </div>
        <div className={styles.bottomcontainer}>
          <div className={styles.story}>
            <p>Our story- how we've grown!</p>
          </div>
          <div className={styles.global}>
            <div className={styles.loremcontainer}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
              <button onClick={handleClick}>Learn More</button>
            </div>
            <div className={styles.imagecontainer}>
              <Image src={aboutus} alt="Picture of a people" width="450" height="450"></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About