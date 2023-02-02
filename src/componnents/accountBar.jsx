import React from "react";
import Link from 'next/link';
import styles from '@/styles/accountbar.module.css'
import '@/assets/fontAwesome/css/all.min.css';
import { useRouter } from 'next/router';


const AccountBar = ()=>{

    const router = useRouter()

    return(
        <div className={styles.accountBar}>
            <div className={styles.logo}>
            <i className="fa-solid fa-bars"></i><span>Let's go</span>
            </div>
            <nav className={styles.navigation}>
                <ul>
                    <il>
                        <Link href=""><i className="fa-solid fa-house"></i>Dashboard</Link>
                    </il>
                    <il>
                        <Link href="/account" className={(router.pathname == "/account" ? styles.active:"")}><i className="fa-solid fa-user"></i>My Account</Link>
                    </il>
                    <il>
                        <Link href=""><i className="fa-solid fa-suitcase"></i>Trips</Link>
                    </il>
                    <il>
                        <Link href=""><i className="fa-solid fa-user-group"></i>Drivers</Link>
                    </il>
                    <il>
                        <Link href=""><i className="fa-solid fa-car"></i>Vehicules</Link>
                    </il>
                    <il>
                        <Link href=""><i className="fa-solid fa-arrow-right-from-bracket"></i>Log out</Link>
                    </il>
                </ul>
            </nav>

        </div>

    );
}

export default AccountBar;