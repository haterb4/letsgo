import React from 'react'
import Filter from '@/componnents/Filter';
import Grid from '@/componnents/Grid';
import SearchBar from '@/componnents/SearchBar';
import styles from '@/styles/search.module.css'
import DefaultLayout from '@/layout/DefaultLayout';


const search = () => {
  return (
    <DefaultLayout>
        <div className={styles.sSearchPage}>
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
    </DefaultLayout>
    
  )
}

export default search;