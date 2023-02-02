import React from "react";
import {
    FaBars, FaCar, FaHouseUser, FaSuitcase, FaTrain, FaUsers,
} from "react-icons/fa";
import Link from 'next/link';
//import '../styles/Sidebar.css'
import Planner from "@/pages/planner";

import styles from '@/styles/Sidebar.module.css'

const Sidebar = () => {

    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <div className={styles.top_section}>
                    <h1 className={styles.logo}>Let'sgo</h1>
                    <div className={styles.bars}>
                        <FaBars />
                    </div>
                </div>

                <span className={styles.link}>
                    <div className={styles.icon}>
                        <FaHouseUser />
                    </div>
                    <Link href="#" className={styles.link_text}>Dashboard</Link>
                </span>

                <span className={styles.link}>
                    <div className={styles.icon}>
                        <FaSuitcase />
                    </div>
                    <Link href="#" className={styles.link_text}>Trips</Link>
                </span>

                <span className={styles.link}>
                    <div className={styles.icon}>
                        <FaUsers />
                    </div>
                    <Link href="#" className={styles.link_text}>Drivers</Link>
                </span>

                <span className={styles.link}>
                    <div className={styles.icon}>
                        <FaCar />
                    </div>
                    <Link href="#" className={styles.link_text}>Cars</Link>
                </span>


            </div>
            <main>
                <div className={styles.main}>
                    <Planner />
                </div>
                <footer>
                    <div className={styles.footer}>
                        <p>Copyrigth © 2023 let's go</p>
                    </div>
                </footer>
            </main>
        </div>

    );
};

export default Sidebar; 