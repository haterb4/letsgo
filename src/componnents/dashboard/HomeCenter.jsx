import React from 'react';
import { useSelector } from 'react-redux';
import BoxNumber from './BoxNumber';
import TripTabs from './TripTabs';

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
        {number: completedTripsCount, text: 'Completed trips', image: '/images/dashboard/trip_vert.png', color: '#296E3B'},
        {number: recentGain, text: 'Recent gain', image: '/images/dashboard/gains.png', color: '#2D3A96'},
    ]

    return (
    <div id="HomeCenter" className="my-5 flex justify-between gap-8">
        <div className="col1 flex flex-col justify-between gap-6">
            <div className="col11 flex flex-col gap-6">
                <BoxNumber number={data[0].number} text={data[0].text} image={data[0].image} color={data[0].color} />
                <BoxNumber number={data[3].number} text={data[3].text} image={data[3].image} color={data[3].color} />
            </div>

            <BoxNumber number={data[4].number} text={data[4].text} image={data[4].image} color={data[4].color} />
        </div>

        <div className="col2 flex flex-col">
            <div className="row1 flex justify-between gap-10">
                <BoxNumber number={data[1].number} text={data[1].text} image={data[1].image} color={data[1].color} />
                <BoxNumber number={data[2].number} text={data[2].text} image={data[2].image} color={data[2].color} />
            </div>
            <div className="row2 flex flex-col pt-4">
                <div className="row21 flex place-items-center text-xl font-bold">
                    <p className="pl-3"><span className="text-orangeclair">RECENT </span><span>COMPLETED TRIP</span></p>
                    <img src="/images/dashboard/valises.png" alt="valises" className="ml-20 w-24" />
                </div>
                <TripTabs />
            </div>
        </div>
    </div>
    );
};

export default HomeCenter;