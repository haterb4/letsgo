import React from 'react'
import styles from '../styles/grid.module.css'


const Grid = ()=>{

    return(
        <div className={styles.sVoyage}>
            <div>
                <div className={styles.sTrajetInfo}>
                    <div className={styles.sHour}>
                        <h3>16:30</h3>
                        <p>5h45</p>
                        <h3>22:30</h3>
                    </div>
                    <div>
                        <div className={styles.sPosition}>
                            <h3>Yaoundé</h3>
                            <p>Poste centrale</p>
                        </div>
                        <div className={styles.sPosition}>
                            <h3>Douala</h3>
                            <p>Bonamoussadi</p>
                        </div>
                    </div>
                    <hr/>
                </div>
                <div className={styles.sPrice}>
                    5500FCFA
                </div>

            </div>
            <div>
                <div className={styles.sDriverInfo}>
                    <div className={styles.sDriverImg}>

                    </div>
                    <div>
                        <div className={styles.sDriverName}>
                            Gael
                        </div>
                        <div className={styles.sLevel}>
                            <p>Super Driver</p>
                            <p>4,8</p>
                        </div>
                    </div>

                </div>
                <div className={styles.sNPlace}>
                    <div>
                      4  
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Grid;