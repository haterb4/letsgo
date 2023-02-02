import React from 'react'
import '@/styles/Card.css'
import calendar from '@/asset/Img/calendar.svg'

const Card = () => {
  return (
    <>
    <div className='card'>
       <div className='card-title'>Préparez votre prochain déplacement</div>
        <div className='destination'>
            Je me rends à
            <div className='dest-logo-dest'>
                <span className='logo'></span>
                <input className='dest' type="text" placeholder='Où allez-vous ?' />
            </div>
        </div>
        <div className='destination'>
            A la date
            <div className='dest-logo-dest'>
                <span className='logo'></span>
                <input className='dest' type="text" placeholder='Quand voulez-vous y aller ?' />
            </div>
        </div>
        <div className='destination'>
            Partant de
            <div className='dest-logo-dest'>
                <span className='logo'></span>
                <input className='dest' type="text" placeholder='Quel est votre point de depart ?' />
            </div>
        </div>
        <div className='destination'>
            Je reserve pour
            <div className='dest-logo-dest'>
                <span className='logo'></span>
                <input className='dest' type="number" placeholder='Combien de places ?' />
            </div>
        </div>
        <div className='destination'>
            Et j'ai un budget de
            <div className='dest-logo-dest'>
                <span className='logo'></span>
                <input className='dest' type="text" placeholder='Quel est votre budget ?' />
            </div>
        </div>
    <span className="card-validate">Trouver vehicule</span>
    </div>
    </>
  );
}

export default Card