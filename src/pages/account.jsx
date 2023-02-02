import React from 'react'
import { useEffect } from 'react';
import styles from '@/styles/account.module.css'
import '@/assets/fontAwesome/css/all.min.css';
import AccountBar from '@/componnents/accountBar';
import AccountTop from '@/componnents/accountTop';
import AccountInfo from '@/componnents/accountInfo';

const Account =() =>{

    useEffect(()=>{
        let container=document.querySelector('.first');
        let bar=document.querySelector('.first > div');
        let icon=document.querySelector('.second  i');
        let i=document.querySelector('.first > div i');

        let slide=()=>{
            bar.classList.remove(styles.translate)
            window.setTimeout(()=>{
                container.classList.remove(styles.visible)
            },200)
        }

        icon.addEventListener("click",()=>{
            container.classList.add(styles.visible)
            window.setTimeout(()=>{
                bar.classList.add(styles.translate)
            },10)
        })

        container.addEventListener("click",slide)
        i.addEventListener("click",slide)
        bar.addEventListener("click",(e)=>{e.stopPropagation()})


    },[])
    

    return(
        <section className={styles.account}>
            <div className={styles.leftContainer+" first"}>
                <AccountBar />
            </div>
            <div className={styles.rightContainer+" second"}>

                 <AccountTop name={"Johanna  Sandoval"}/>

                 <div className={styles.accountInfo}>
                    <p>Details</p>

                    <AccountInfo label={"First Name"} value={"Johanna"}/>
                    <AccountInfo label={"Last Name"} value={"Sandoval"}/>
                    <AccountInfo label={"Adress"} value={"Bonaberi"}/>
                    <AccountInfo label={"Phone Number"} value={"+237 677885512"}/>

                    <div className={styles.preference}>
                        <div className={styles.prefTitle}>
                            <p>Préférence</p>
                        </div>
                        <div className={styles.prefButton}>
                            <i className="fa-solid fa-chevron-down"></i>
                        </div>
                    </div>
                    <div className={styles.validation}>
                        <button>Save</button>
                        <button>Cancel</button>
                    </div>
                 </div>
            </div>

        </section>
        
        
    )
}

export default Account;