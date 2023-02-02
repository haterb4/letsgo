import React from "react";
import styles from '@/styles/accountTop.module.css'


const AccountTop =({name}) =>{

    return(
        <div className={styles.profilImg}>
           
            <div>
                <img src="/images/dashboard/profile-pic.png" alt=""/>
            </div>
             <div className={styles.icon}>
                <i className="fa-solid fa-bars"></i>
            </div>
            <p>{name}</p>
        </div>

    );
}

export default AccountTop;