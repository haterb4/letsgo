import React from 'react';
import styles from '@/styles/review.module.css';
import Image from 'next/image';
import profile from '/public/images/main/profile.svg';
import start from '/public/images/main/start.svg';

const Review = ({name, description, nbstart}) => {
    // nbstart = designe le nombre d'étoiles
    let allstart = [false,false,false,false,false];

    for(let i=0;i<nbstart;i++){
        allstart[i] = true;
    }

    return (
        <div className={styles.container}>
            <Image src={profile} alt="profile image" width="70" height="70" className={styles.image}/>
            <div className={styles.rigthcontainer}>
                <p className={styles.name}>{name}</p>
                <p>{description}</p>
                <div className={styles.allstarts}>
                    {allstart[0] && <Image src={start} alt="start 1" width="20" height="20" className={styles.start}/>}
                    {allstart[1] && <Image src={start} alt="start 2" width="20" height="20" className={styles.start}/>}
                    {allstart[2] && <Image src={start} alt="start 3" width="20" height="20" className={styles.start}/>}
                    {allstart[3] && <Image src={start} alt="start 4" width="20" height="20" className={styles.start}/>}
                    {allstart[4] && <Image src={start} alt="start 5" width="20" height="20" className={styles.start}/>}
                </div>
            </div>
        </div>
    );
};

export default Review;