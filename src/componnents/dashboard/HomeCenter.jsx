import React from 'react';
import { useSelector } from 'react-redux';
import BoxNumber from './BoxNumber';

const HomeCenter = () => {

    const driversCount = useSelector(state => state.drivers.array.length)
    const vehiclesCount = useSelector(state => state.vehicles.array.length)
    const trips = useSelector(state => state.trips.array)
    const publishedTripsCount = trips.filter((value) => value.statut === 'Published').length
    const completedTripsCount = trips.filter((value) => value.statut === 'Completed').length
    const recentGain = 'XAF 1000'

    const data = [
        {number: driversCount, text: 'Drivers', image: '/images/dashboard/volan.png', color: '#2D3A96'},
        {number: vehiclesCount, text: 'Vehicles', image: '/images/dashboard/voitures.png', color: '#4285F4'},
        {number: publishedTripsCount, text: 'Published trips', image: '/images/dashboard/trip_bleu.png', color: '#2D3A96'},
        {number: completedTripsCount, text: 'Completed trips', image: '/images/dashboard/trip_vert.png', color: '#2D3A96'},
        {number: recentGain, text: 'Recent gain', image: '/images/dashboard/gains.png', color: '#2D3A96'},
    ]

    return (
    <div id="HomeCenter" className="mt-5 flex flex-wrap gap-5">
        {
            data.map( (elt, index) => <BoxNumber key={index} number={elt.number} text={elt.text} image={elt.image} color={elt.color} />)
        }
    </div>
    );
};

export default HomeCenter;