import React from "react";
import styles from "@/styles/vue.module.css";
import Navbar from "@/componnents/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faUser } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faCalendarLines } from "@fortawesome/free-solid-svg-icons";
import { faCircleDollar } from "@fortawesome/free-regular-svg-icons";
import styles2 from "@/styles/option.module.css";
import { faBus as fasBus } from "@fortawesome/free-solid-svg-icons";
import { faTaxi as fasTaxi } from "@fortawesome/free-solid-svg-icons";
import { OptionCard } from "../componnents";
import Link from "next/link";

const Vue = (props) => {
  const optionCardInfo = [
    {
      startTown: "Yaoundé",
      startTime: "16h30",
      destinationTown: "Douala",
      destinationTime: "21h30",
      reduction: "-30%",
      startDate: "30 Janvier 2023",
      tripDuration: "5h",
      driverName: "Teddy William",
      tripCost: 100000,
      rideOption: "Covoiturage",
    },
    {
      startTown: "Yaoundé",
      startTime: "16h30",
      destinationTown: "Douala",
      destinationTime: "21h30",
      reduction: "-30%",
      startDate: "30 Janvier 2023",
      tripDuration: "5h",
      driverName: "Teddy William",
      tripCost: 200000,
      rideOption: "Covoiturage",
    },
    {
      startTown: "Douala",
      startTime: "18h30",
      destinationTown: "Yaoundé",
      destinationTime: "23h30",
      reduction: "-40%",
      startDate: "12 Janvier 2023",
      tripDuration: "5h",
      driverName: "Momo William",
      tripCost: 150000,
      rideOption: "Bus",
    },
    {
      startTown: "Yaoundé",
      startTime: "4h00",
      destinationTown: "Dschang",
      destinationTime: "11h00",
      reduction: "-50%",
      startDate: "14 février 2023",
      tripDuration: "7h",
      driverName: "Jordan Esso",
      tripCost: 150000,
      rideOption: "Individuel",
    },
    {
      startTown: "Yaoundé",
      startTime: "16h30",
      destinationTown: "Douala",
      destinationTime: "21h30",
      reduction: "-30%",
      startDate: "30 Janvier 2023",
      tripDuration: "5h",
      driverName: "Teddy William",
      tripCost: 300000,
      rideOption: "Covoiturage",
    },
    {
      startTown: "Douala",
      startTime: "18h30",
      destinationTown: "Yaoundé",
      destinationTime: "23h30",
      reduction: "-40%",
      startDate: "12 Janvier 2023",
      tripDuration: "5h",
      driverName: "Momo William",
      tripCost: 400000,
      rideOption: "Bus",
    },
    {
      startTown: "Yaoundé",
      startTime: "4h00",
      destinationTown: "Dschang",
      destinationTime: "23h00",
      reduction: "-50%",
      startDate: "14 février 2023",
      tripDuration: "19h",
      driverName: "Jordan Esso",
      tripCost: 300000,
      rideOption: "Individuel",
    },
    {
      startTown: "Yaoundé",
      startTime: "4h00",
      destinationTown: "Dschang",
      destinationTime: "11h00",
      reduction: "-50%",
      startDate: "14 février 2023",
      tripDuration: "7h",
      driverName: "Jordan Esso",
      tripCost: 200000,
      rideOption: "Individuel",
    },
  ];

  const optionCardComp = optionCardInfo.map((info, index) => (
    <OptionCard
      key={index}
      tripIndex={index}
      startTown={info.startTown}
      startTime={info.startTime}
      destinationTown={info.destinationTown}
      destinationTime={info.destinationTime}
      reduction={info.reduction}
      startDate={info.startDate}
      tripDuration={info.tripDuration}
      driverName={info.driverName}
      tripCost={info.tripCost}
      rideOption={info.rideOption}
    />
  ));

  const numberofTrip = [
    {
      totalTrip: 5+9+3,
      individualTrip: 5,
      sharingcartrip: 9,
      bustrip:3,
    }
  ];

  // const numberofTripcomp = numberofTrip.map((info, index) =>
  // )





  return (
    <div>
      <header className={styles.global}>
        <div className={styles.disposition}>
          <Navbar />
        </div>
      </header>
      <div className={`${styles.container} ${styles2.contain}`}>
        <div className={styles.Rechercher}>
          <h1 className={styles.titre}>Rechercher</h1>

          <form action="/vue" method="post" onSubmit="">
            <div className={styles.formcontainer}>
              <div className={styles.childrencontainer1}>
                <span className={styles.text}>je me rends à</span>
                <label for="destination">
                  <i className={styles.icon1}>
                    <FontAwesomeIcon icon={faLocationDot} />
                  </i>
                </label>
                <input
                  type="text"
                  id="destination"
                  name="destination"
                  className={styles.inputtext0}
                  placeholder="Où allez vous?"
                  required
                />
              </div>

              <div className={styles.childrencontainer2}>
                <span className={styles.text}>à la date</span>
                <label for="jourexacte">
                  <i className={styles.icon2}>
                    <FontAwesomeIcon icon={faCalendarLines} />
                  </i>
                </label>

                <input
                  type="text"
                  id="jourexacte"
                  name="jourexacte"
                  className={styles.inputtext1}
                  placeholder="Quand voulez-vous y aller?"
                  required
                />
              </div>

              <div className={styles.childrencontainer3}>
                <span className={styles.text}> Partant de </span>

                <label for="départ">
                  <i className={styles.icon3}>
                    <FontAwesomeIcon icon={faLocationDot} />
                  </i>
                </label>

                <input
                  type="text"
                  id="départ"
                  name="départ"
                  className={styles.inputtext2}
                  placeholder="Quel est votre point de départ?"
                  required
                />
              </div>

              <div className={styles.childrencontainer4}>
                <span className={styles.text}>Je réserve pour </span>

                <label for="réservation">
                  <i className={styles.icon4}>
                    <FontAwesomeIcon icon={faUser} />
                  </i>
                </label>

                <input
                  type="number"
                  id="réservation"
                  name="réservation"
                  className={styles.inputtext3}
                  placeholder="combien de places?"
                  required
                />
              </div>

              <div className={styles.childrencontainer5}>
                <span className={styles.text}>Et j'ai un budget de </span>

                <label for="budget">
                  <i className={styles.icon5}>
                    <FontAwesomeIcon icon={faCircleDollar} />
                  </i>
                </label>
                <input
                  type="text"
                  id="budget"
                  name="budget"
                  className={styles.inputtext4}
                  placeholder="  Quel est votre budget?"
                  required
                />
              </div>
            </div>
            <button type="submit" className={styles.mybutton}>
              Trouver un véhicule
            </button>
          </form>
        </div>

        <div className={`${styles.voyage} ${styles2.voy}`}>
          <div className={`${styles.option} ${styles2.option}`}>
            <ul className={styles.liste}>
              <li>
                <Link href="/vue">Tout</Link> 
                <span className={styles.number1}>17</span> 
              </li>
              <li>
                <Link href="/vue">
                  Inviduel 
                  <div className={styles.commun}><FontAwesomeIcon icon={fasTaxi} className={styles.icon} /> 
                  <span className={styles.number2}>5</span>
                  </div>
                </Link> 
              </li>
              <li>
                <Link href="/vue">
                  Covoiturage
                  <div className={styles.commun1}> 
                  <FontAwesomeIcon icon={faCar} className={styles.icon2} /> 
                  <span className={styles.number3}> 9</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/vue">
                  Bus 
                  <div className={styles.commun2}>
                  <FontAwesomeIcon icon={fasBus} className={styles.icon3} /> 
                  <span className={styles.number4}>3</span>
                  </div>
                </Link>  
              </li>
            </ul>
          </div>
          <div className={styles2.optioncardcontainer}>{optionCardComp}</div>
        </div>
      </div>
    </div>
  );
};

export default Vue;
