"use client"
import React, { useState } from 'react'

const PlaceSelector = () => {
    const [places, setPlaces] = useState([
        {
            id: 1,
            status: 'free',
        },
        {
            id: 2,
            status: 'lock',
        },
        {
            id: 3,
            status: 'reserved',
        },
        {
            id: 4,
            status: 'lock',
        },
        {
            id: 5,
            status: 'free',
        }
    ])
    const toggleReserved = (place) => {
        const index = places.indexOf(place)
        const allplaces = [...places]
        if ( index !== -1){
            if (allplaces[index].status === 'reserved'){
                allplaces[index].status = 'free'
            }
            else if(allplaces[index].status === 'free'){
                allplaces[index].status = 'reserved'
            }
        }
        setPlaces(allplaces)
    }
  return (
    <div className='w-96 border bg-white rounded-2xl flex justify-between items-start p-4'>
        {places.map((place) => {
            return (
                <button onClick={ () => { toggleReserved(place) }} key={place.id} className={`h-12 w-12 bg-gray-200 rounded-lg flex justify-center items-center ${place.status === 'free'? 'hover:bg-green-600': place.status === 'reserved'? 'bg-green-600': 'bg-blue-900'}`}>{place.id}</button>
            )
        })}
    </div>
  )
}

export default PlaceSelector