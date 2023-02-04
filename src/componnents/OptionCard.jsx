import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar  } from "@fortawesome/free-solid-svg-icons";
import styles2 from "@/styles/option.module.css";
import { faCircle } from "@fortawesome/free-regular-svg-icons"
import { faBus as fasBus } from "@fortawesome/free-solid-svg-icons"
import { faTaxi as fasTaxi } from "@fortawesome/free-solid-svg-icons"

const OptionCard = (props) => {
   let rideOptionIcon;
   const rideOption = props.rideOption
   switch(rideOption){

      case "Covoiturage":
         rideOptionIcon = <FontAwesomeIcon icon={faCar} className={styles2.icon} />
         break;
         case "Bus":
            rideOptionIcon = <FontAwesomeIcon icon={fasBus} className={styles2.icon} />
            break;
            case "Individuel":
         rideOptionIcon = <FontAwesomeIcon icon={fasTaxi} className={styles2.icon} />
         break;
      default :
         break;
   }
   return (
      <div className={styles2.card}>
         <div className={styles2.info}>
            <span className={styles2.ville}>{props.startTown}-{props.startTime}</span>
            <FontAwesomeIcon icon={faCircle} className={styles2.icon}/>
            <div className={styles2.line}> </div>
            <FontAwesomeIcon icon={faCircle} className={styles2.icon3}/>
            <span className={styles2.ville}> <span className={styles2.ville2}>{props.destinationTown}-{props.destinationTime}</span></span>
            <div className={styles2.reduction}>
               <p>{props.reduction}</p>
            </div>
         </div>

         <div className={styles2.contenu}>
            <span className={styles2.text}>Départ le </span>
            <h3>{props.startDate} à {props.startTime}</h3>
            <span className={styles2.text}>Durée totale du trajet</span>
            <h3>{props.tripDuration}</h3>
            <span className={styles2.text}>Chaffeur</span>
            <h3>{props.driverName}</h3>
         </div>

         <div className={styles2.price}>
            <h3>{props.tripCost} XAF</h3>
            <span>
               {props.rideOption} {rideOptionIcon}
            </span>
         </div>
      </div>
   );
};

export default OptionCard;
