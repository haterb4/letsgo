import React from 'react'
import Filter from '@/componnents/Filter';
import Grid from '@/componnents/Grid';
import SearchBar from '@/componnents/SearchBar';
import styles from '@/styles/search.module.css'
import { Navbar } from '@/componnents';


const search = () => {
  return (
    <div className={styles.sSearchPage}>
        <Navbar shadow={true}/>
        <div className='w-full mt-12'>
            <SearchBar/> 
        </div>
        <div className={styles.mainContent}>
            <div className={styles.sContent}>
                <div>
                    <div className={styles.sFtitle}>
                        <p>Trie par</p>
                        <p>Delete all</p>
                    </div>
                    <Filter/>
                </div>
                <div className={styles.sLeftContent}>
                    <div className={styles.sLeftContentDesc}>
                        <p>Today</p>
                        <p>Yaoundé - Douala</p>
                        <p><span>11</span> routes available</p>  
                    </div>
                    <Grid/>
                    <Grid/>
                    <Grid/>
                </div>
            </div>
        </div>
        
      
    </div>
  )
}

export default search;