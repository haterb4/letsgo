"use client"
import React, { useState } from 'react'
import styles from '@/styles/searchform.module.css'
import { faLocation, faMapMarkerAlt, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { SearchItem } from '.'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const SearchForm = () => {
    const [destination, setDestination] = useState('')
    const [dateDepart, setDateDepart] = useState('')
    const [depart, setDepart] = useState('')
    const [places, setPlaces] = useState(1)
    const [somme, setSomme] = useState(0)
    const incrementPlaces = () => {
        setPlaces(places + 1)
    }
    const decrementPlaces = () => {
        if (places >= 2){
            setPlaces(places - 1)
        }
    }
    const setNormalPlaces = (value) => {
        console.log(typeof(Number.parseInt(value)))
        if (isNaN(Number.parseInt(value))){
            setPlaces(Number.parseInt(1))
        }
        else{
            setPlaces(Number.parseInt(value))
        }
    }
    const setNormalSomme = (value) => {
        if (isNaN(Number.parseInt(value))){
            setSomme(Number.parseInt(0))
        }
        else{
            setSomme(Number.parseInt(value))
        }
    }
    const logState = () => {
        console.log({
            depart,
            destination,
            places,
            dateDepart,
            somme
        })
    }
    const incermentor = (
        <div className='w-44 h-ful ml-2 flex justify-between items-center'>
            <button onClick={decrementPlaces} className='text-orange-500 bg-white h-6 w-6 p-2 border border-orange-500 rounded-full flex justify-center items-center  mr-2'><FontAwesomeIcon icon={faMinus} /></button>
            <button onClick={incrementPlaces} className='text-orange-500 bg-white h-6 w-6 p-2 border border-orange-500 rounded-full flex justify-center items-center'><FontAwesomeIcon icon={faPlus} /></button>
        </div>
    )
  return (
    <div className={styles.form}>
        <h1>Rechercher</h1>
        <div className={styles.formGroup}>
            <SearchItem label='Je me rend a' placeholder='ou allez vous ?' setItemState={setDestination} icon={faMapMarkerAlt} value={destination}/>
            <SearchItem label='A la date' placeholder='quand voulez vous y aller ?' setItemState={setDateDepart} icon={faMapMarkerAlt} value={dateDepart}/>
            <SearchItem label='Partant de' placeholder='quel est votre point de depart ?' setItemState={setDepart} icon={faMapMarkerAlt} value={depart}/>
            <SearchItem label='Je reserve pour' placeholder='combien de places ?' setItemState={setNormalPlaces} icon={faMapMarkerAlt} control={incermentor} value={places}/>
            <SearchItem label="Et j'ai un budget de" placeholder='quel est votre budget ?' setItemState={setNormalSomme} icon={faMapMarkerAlt} value={somme}/>
        </div>
        <div className='flex justify-center items-center text-white'>
            <button onClick={logState}  className='h-12 bg-orange-500 rounded-lg px-4'>Trouver un voyage</button>
        </div>
    </div>
  )
}

export default SearchForm