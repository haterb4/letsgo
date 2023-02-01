import React from 'react';
import styles from '@/styles/vue.module.css';
import Navbar from '@/componnents/Navbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { faCalendarLines } from "@fortawesome/free-regular-svg-icons"
import { faCircleDollar } from "@fortawesome/free-solid-svg-icons"
const Vue = () =>{
 return (
    <div  >
      <header className={styles.global}>
     <div className={styles.disposition}>  
     <Navbar/>
        </div> 
      </header>
      <div className={styles.container }>
              <div className={styles.Rechercher}>
          <h1 className={styles.titre}>Rechercher</h1>

            <form action='/vue' method='post' onSubmit="">
        <div className={styles.formcontainer}>

           <div className={styles.childrencontainer1}>
         
          <span className={styles.text}>je me rends à</span>
            <label for="destination"><FontAwesomeIcon icon={faLocationDot} /></label>
            <input type="text" id='destination' name='destination' className={styles.inputtext0} placeholder='Où allez vous?' required /> 
            </div>
            
            <div className={styles.childrencontainer2}>
           <span className={styles.text}>à la date</span>
            <label for="jourexacte"><FontAwesomeIcon icon={faCalendarLines}/></label>

            <input type="text" id='jourexacte' name='jourexacte' className={styles.inputtext1} placeholder='Quand voulez-vous y aller?' required/> 
            </div>
            
            <div className={styles.childrencontainer3}>
            <span className={styles.text}> Partant de </span>
            
            <label for="départ"><FontAwesomeIcon icon={faLocationDot} /></label>

            <input type="text" id='départ' name='départ' className={styles.inputtext2} placeholder='Quel est votre point de départ?' required/>
           </div>
           
            <div className={styles.childrencontainer4}>
            <span className={styles.text}>Je réserve pour </span>
            
            <label for="réservation"><FontAwesomeIcon icon={faUser} /></label>

            <input type="number" id='réservation' name='réservation' className={styles.inputtext3} placeholder='combien de places?' required/>
           </div>
          
           <div className={styles.childrencontainer5}>
           <span className={styles.text}>Et j'ai un budget de </span>
           
            <label for="budget"><FontAwesomeIcon icon={faCircleDollar} /></label>
            <input type="text" id='budget' name='budget' className={styles.inputtext4} placeholder='Quel est votre budget?' required/>
            </div>
        
        </div>
            <button type="submit" className = {styles.mybutton}>Trouver un véhicule </button>
            </form>
          
      </div>
     
      <div className={styles.voyage}></div>
        
      </div>

      
    </div>
 )
}

export default Vue