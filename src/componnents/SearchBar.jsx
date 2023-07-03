import React, { useEffect, useRef, useState } from 'react';
import * as moment from 'moment'
import Calendar from './Calendar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faMoneyBill1, faUser } from '@fortawesome/free-regular-svg-icons';
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import {createAutocomplete} from '@/scripts/autocomplete.min'

const SearchBar = () => {
    const router = useRouter();

    const calendarRef = useRef();
    const [chosenDate, setChosenDate] = useState();

    useEffect(()=>{
        createAutocomplete("departure")
        createAutocomplete("destination")
    }, [])

    return (
        <div className="w-full flex justify-center flex-col items-center gap-6">
        <div className="bg-white lg:rounded-full max-w-6xl w-full flex items-stretch overflow-visible">
            <div className="input-container flex flex-wrap w-full lg:w-5/6">
                <div className="auto-search-wrapper pl-2 lg:pl-4 lg:w-1/4 w-1/2 flex place-items-center">
                    <label htmlFor="departure"><FontAwesomeIcon icon={faLocationCrosshairs} /></label>
                    <input type="text" id="departure" placeholder="Departure" className="w-full h-full border-0 border-r  rounded-l-full text-sm lg:text-base pl-2 py-4 focus:outline-none focus:ring-0" />
                </div>

                <div className="auto-search-wrapper pl-2 lg:w-1/4 w-1/2 flex place-items-center">
                    <label htmlFor="destination"><FontAwesomeIcon icon={faLocationCrosshairs} /></label>
                    <input type="text" id="destination" placeholder="Destination" className="w-full h-full border-0 lg:border-r  focus:outline-none text-sm lg:text-base pl-2 py-4 focus:ring-0" />
                </div>

                <div className="relative overflow-visible pl-2 lg:w-1/4 w-1/2 flex place-items-center border-t border-r  lg:border-t-0">
                    <label htmlFor="departure_date"><FontAwesomeIcon icon={faCalendarDays} /></label>
                    <input type="text" id="departure_date" placeholder="Departure Date & Time" className="w-full h-full border-0 text-sm lg:text-base lg:text-left text-center px-2 lg:py-2 py-4 focus:outline-0 focus:ring-0"
                    onClick={()=>calendarRef.current.open()} value={chosenDate ? moment(chosenDate).format('DD/MM/YYYY HH:mm') : ''} readOnly />
                
                <Calendar ref={calendarRef} chosenDate={chosenDate} setChosenDate={setChosenDate} />
                </div>

                <div className="pl-2 lg:w-1/8 w-1/2 flex place-items-center border-t lg:border-r  lg:border-t-0">
                    <label htmlFor="seats"><FontAwesomeIcon icon={faUser} /></label>
                    <input type="number" id="seats" placeholder="Seats" min={1} max={100} className="w-full h-full border-0 text-sm lg:text-base lg:text-left text-center px-2 lg:py-2 py-4 focus:outline-0 focus:ring-0" />
                </div>

                <div className="pl-2 w-full lg:w-1/8 flex place-items-center border-t lg:border-t-0">
                    <label htmlFor="budget"><FontAwesomeIcon icon={faMoneyBill1} /></label>
                    <input type="number" id="budget" placeholder="Budget" min={0} className="w-full h-full border-0 text-sm lg:text-base lg:text-left text-center px-2 lg:py-2 py-4 focus:outline-0 focus:ring-0" />
                </div>
            </div>

                <button type="button" className="text-white bg-secondary w-1/6 font-medium justify-center focus:ring-4 focus:outline-none focus:ring-primary rounded-r-full text-xs lg:text-base px-5 py-2.5 text-center lg:inline-flex hidden items-center dark:bg-secondary dark:hover:bg-secondary dark:focus:ring-secondary"
                onClick={()=>{router.push(`/search`);}}>
                    <span>Rechercher</span>    
                </button>

        </div>
        <button type="button" className="text-white bg-secondary lg:w-1/4 font-medium justify-center   focus:ring-4 focus:outline-none focus:ring-primary rounded-full text-sm sm:text-base px-5 py-2.5 text-center inline-flex lg:hidden items-center dark:bg-secondary dark:hover:bg-secondary dark:focus:ring-secondary"
        onClick={()=>{router.push(`/search`);}}>
            <span>Rechercher</span>
        </button>

        <style jsx>{`
        @import "/css/autocomplete.min.css";

        @media (min-width: 1024px) {
            .lg\:w-1\/8 {
                width: 12.5%;
            }
        }
      `}</style>

    </div>
    );
};

export default SearchBar;