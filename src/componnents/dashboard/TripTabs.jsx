import React, { useState } from 'react';
import TripSchedule from './triptabs/TripSchedule';
import TripVehicle from './triptabs/TripVehicle';
import TripDriver from './triptabs/TripDriver';
import TripSeats from './triptabs/TripSeats';
import TripEarned from './triptabs/TripEarned';

const composants = [<TripSchedule />, <TripVehicle />, <TripDriver />, <TripSeats />, <TripEarned />]
const onglets = ['Schedule', 'Vehicle', 'Driver', 'Seats', 'Earned']

const TripTabs = () => {

    const [ongletActif, setOngletActif] = useState(0)

    return (
        <div className="tripTabs h-56 w-full flex flex-col p-3">
            <div className="navBar flex gap-5 place-items-center cursor-pointer">
                {onglets.map((value, index) => 
                    <span key={index} onClick={()=>setOngletActif(index)} className={index === ongletActif? "ongletActif" : ""}>{value}
                    </span>)
                }
            </div>

            {composants[ongletActif]}

        </div>
    );
};

export default TripTabs;