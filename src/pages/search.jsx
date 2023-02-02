import React from 'react'
import Filter from '@/componnents/Filter';
import Grid from '@/componnents/Grid';
import SearchBar from '@/componnents/SearchBar';
import styles from '@/styles/search.module.css'
import { Navbar } from '@/componnents';

const card=[
    {startCity: "Yaoundé", startLocation: "Poste centrale", destinationCity: "Douala", destinationLocation: "Bonamoussadi", standardCost: "5500", startime: "16:30", endTime: "22:30"},
    {startCity: "Yaoundé", startLocation: "Poste centrale", destinationCity: "Douala", destinationLocation: "Bonamoussadi", standardCost: "5500", startime: "16:30", endTime: "22:30"},
    {startCity: "Yaoundé", startLocation: "Poste centrale", destinationCity: "Douala", destinationLocation: "Bonamoussadi", standardCost: "5500", startime: "16:30", endTime: "22:30"},
    {startCity: "Yaoundé", startLocation: "Poste centrale", destinationCity: "Douala", destinationLocation: "Bonamoussadi", standardCost: "5500", startime: "16:30", endTime: "22:30"},
    {startCity: "Yaoundé", startLocation: "Poste centrale", destinationCity: "Douala", destinationLocation: "Bonamoussadi", standardCost: "5500", startime: "16:30", endTime: "22:30"},
    {startCity: "Yaoundé", startLocation: "Poste centrale", destinationCity: "Douala", destinationLocation: "Bonamoussadi", standardCost: "5500", startime: "16:30", endTime: "22:30"}
]

const search = () => {
  return (
    <div className={styles.sSearchPage}>
        <Navbar shadow={true}/>
        <div className={styles.searchContent}>
            <SearchBar/> 
        </div>
        <div className={styles.mainContent}>
            <div className={styles.sContent}>
                <div className={styles.filterBloc}>
                    <Filter/>
                </div>
                <div className={styles.sLeftContent}>
                    <div className={styles.sLeftContentDesc}>
                        <p>Today</p>
                        <p>Yaoundé - Douala</p>
                        <p><span>11</span> routes available</p>  
                    </div>
                    {
                        card.map((i,index)=>
                             <Grid key={index} refs="/" startCity={i.startCity} startLocation={i.startLocation} destinationCity={i.destinationCity} destinationLocation={i.destinationLocation} standardCost={i.standardCost} startime={i.startime} endTime={i.endTime}/>

                        )
                    }
                

                </div>
            </div>
        </div>
        
      
    </div>
  )
}

export default search;