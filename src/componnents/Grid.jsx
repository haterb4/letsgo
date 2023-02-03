import React from 'react'
import styles from '../styles/grid.module.css'
import '@/assets/fontAwesome/css/all.min.css';
import Link from 'next/link';


const Grid = ({refs,startCity,startLocation,destinationCity,destinationLocation,standardCost,startime,endTime})=>{

    return(
        <Link href={refs} className={styles.sVoyage}>
            <div>
                <div className={styles.sTrajetInfo}>
                    <div className={styles.sHour}>
                        <h3>{startime}</h3>
                        <p>5h45</p>
                        <h3>{endTime}</h3>
                    </div>
                    <div>
                        <div className={styles.sPosition}>
                            <h3>{startCity}</h3>
                            <p>{startLocation}</p>
                        </div>
                        <div className={styles.sPosition}>
                            <h3>{destinationCity}</h3>
                            <p>{destinationLocation}</p>
                        </div>
                    </div>
                    <hr/>
                </div>
                <div className={styles.sPrice}>
                    {standardCost}FCFA
                </div>

            </div>
            <div>
                <div className={styles.sDriverInfo}>
                    <div className={styles.sDriverImg}>
                            <div className={styles.sImg}>
                            </div>
                    </div>
                    <div>
                        <div className={styles.sDriverName}>
                            Gael
                        </div>
                        <div className={styles.sLevel}>
                            <p>Super Driver</p>
                            <p><i className="fa-solid fa-star pr-4"></i>4,8</p>
                        </div>
                    </div>

                </div>
                <div className={styles.sNPlace}>
                    <div>
                    4  
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Grid;