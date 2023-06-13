import React from 'react'
import styles from '@/styles/pagenotfound.module.css'
import { Navbar } from '@/componnents';
import Link from 'next/link';
import Image from 'next/image'
import arrangecar from '/public/images/main/arrangecar.svg'

const PageNotFound = () => {
  return (
    <div>
        <div>
            <Navbar/>
        </div>
        <div className={styles.container}>
            <div className={styles.leftcontainer}>
                <div className={styles.allerror}>
                    <p className={styles.fourtyfour}>404.</p>
                    <p className={styles.error}>Error</p>
                </div>
                <p className={styles.pagenotfound}>Page Not Found ...</p>
                <p>Sorry the page you are looking for doesn't exist or has been moved. </p>
                <Link href='/home' className = {styles.link}>Go to <p>Home</p></Link>
            </div>
            <div className={styles.rightcontainer}>
                <Image src={arrangecar} alt="Picture of a Car" width="800" height="800" className={styles.carimage}/>
            </div>
        </div>
    </div>
  )
}

export default PageNotFound