import React from 'react'
import styles from '@/styles/searchbar.module.css'
import '@/assets/fontAwesome/css/all.min.css';

const SearchBar = () =>{

    return(
        <div className={styles.searchbar}>
            <form>
                <div className={styles.sRow}>
                    <div className={styles.icon}>
                        <i class="fa-solid fa-circle-dot"></i>
                    </div>
                    <input type="text" placeholder='Départure' required/>
                </div>
                <div className={styles.sRow}>
                    <div className={styles.icon}>
                        <i class="fa-solid fa-circle-dot"></i>
                    </div>
                    <input type="text" placeholder='Destination' required/>
                </div>
                <div className={styles.sRow}>
                    <input type="date" required/>
                </div>
                <div className={styles.sRow} style={{border: "none"}}>
                    <div className={styles.icon}>
                    <i class="fa-solid fa-user"></i>
                    </div>
                    <input type="number" defaultValue="1" required/>
                </div>
                <div>
                    <input className={styles.sSubmit} type="submit" value="Search"/>
                </div>
            </form>
        </div>
    );
}

export default SearchBar;