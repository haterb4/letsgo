import React from 'react'
import styles from '../styles/filter.module.css'

const Delete=()=>{
        let check=document.querySelectorAll("input[type='checkbox']")
        Array.from(check).forEach(i=>
            i.checked=false
        )
    }

const Filter = ()=>{


    

    return(
        <>
            <div className={styles.sFtitle}>
                <p>Trie par</p>
                <p onClick={Delete}>Delete all</p>
            </div>
            <div className={styles.sFilter}>
                <form>
                    <div className={styles.sFilterRow}>
                        <label>Departure as soon as possible</label>
                        <input type="checkbox" required/>
                    </div>
                    <div className={styles.sFilterRow}>
                        <label>Lowest price</label>
                        <input type="checkbox" required/>
                    </div>
                    <div className={styles.sFilterRow}>
                        <label>Close to the starting point</label>
                        <input type="checkbox" required/>
                    </div>
                    <div className={styles.sFilterRow}>
                        <label>Close to the point of arrival</label>
                        <input type="checkbox" required/>
                    </div>
                    <div className={styles.sFilterRow}>
                        <label>Shortest route</label>
                        <input type="checkbox" required/>
                    </div>
                    <div className={styles.sFilterRow}>
                        <label>Climatisation</label>
                        <input type="checkbox" required/>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Filter;