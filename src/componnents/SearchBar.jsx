import React from 'react'
import styles from '@/styles/searchbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';

const SearchBar = () =>{

    return(
        <div className={styles.searchbar}>
            <form>
                <div className={styles.sRow}>
                    <FontAwesomeIcon icon={faUser} />
                    <input type="text" placeholder='Départure' requied/>
                </div>
                <div className={styles.sRow}>
                    <input type="text" placeholder='Destination' requied/>
                </div>
                <div className={styles.sRow}>
                    <input type="date" requied/>
                </div>
                <div className={styles.sRow} style={{border: "none"}}>
                    <input type="number" defaultValue="1" requied/>
                </div>
                <div>
                    <input className={styles.sSubmit} type="submit" value="Search"/>
                </div>
            </form>
        </div>
    );
}

export default SearchBar;