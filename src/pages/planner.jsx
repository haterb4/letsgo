import React from "react";
import styles from '@/styles/planner.module.css'
import Picker from "@/app/Picker";
import { FaAd, FaPlus } from "react-icons/fa";



const Planner = () => {

    return (
        <div>
            <div>
                <button className={styles.button}>
                    <FaPlus /> &nbsp; Plan a trip
                </button>
            </div>

            <h1 className={styles.h1}><b>W</b>elcome, <b>John</b></h1>

            <div className={styles.container1}>

                <div className={styles.container2}>
                    <h2 className={styles.h2}>Programs</h2>
                    <hr className={styles.hr} />
                    <table className={styles.table}>
                        <thead className={styles.thead}>
                            <tr>
                                <th>Traject</th>
                                <th>Driver</th>
                                <th>Travel date</th>
                            </tr>
                        </thead>
                        <tbody className={styles.tbody}>
                            <tr className={styles.tr}>
                                <td className={styles.td}>Birthday</td>
                                <td className={styles.td}>Birthday</td>
                                <td className={styles.td}>Birthday</td>
                            </tr>

                            <tr className={styles.tr}>
                                <td className={styles.td}>Birthday</td>
                                <td className={styles.td}>Birthday</td>
                                <td className={styles.td}>Birthday</td>
                            </tr>

                            <tr className={styles.tr}>
                                <td className={styles.td}>Birthday</td>
                                <td className={styles.td}>Birthday</td>
                                <td className={styles.td}>Birthday</td>
                            </tr>

                            <tr className={styles.tr}>
                                <td className={styles.td}>Birthday</td>
                                <td className={styles.td}>Birthday</td>
                                <td className={styles.td}>Birthday</td>
                            </tr>

                            <tr className={styles.tr}>
                                <td className={styles.td}>Birthday</td>
                                <td className={styles.td}>Birthday</td>
                                <td className={styles.td}>Birthday</td>
                            </tr>

                            <tr className={styles.tr}>
                                <td className={styles.td}>Birthday</td>
                                <td className={styles.td}>Birthday</td>
                                <td className={styles.td}>Birthday</td>
                            </tr>

                            <tr className={styles.tr}>
                                <td className={styles.td}>Birthday</td>
                                <td className={styles.td}>Birthday</td>
                                <td className={styles.td}>Birthday</td>
                            </tr>

                            <tr className={styles.tr}>
                                <td className={styles.td}>Birthday</td>
                                <td className={styles.td}>Birthday</td>
                                <td className={styles.td}>Birthday</td>
                            </tr>

                        </tbody>
                    </table>
                </div>


                <div className={styles.calendar}>
                    <Picker />
                </div>

            </div>


        </div>
    );
};

export default Planner;