import React, { useState } from 'react';
import TripSchedule from './triptabs/TripSchedule';
import TripVehicle from './triptabs/TripVehicle';
import TripDriver from './triptabs/TripDriver';
import TripSeats from './triptabs/TripSeats';
import TripEarned from './triptabs/TripEarned';

const composants = [<TripSchedule key={0} />, <TripVehicle key={1} />, 
                    <TripDriver key={2} />, <TripSeats key={3} />, <TripEarned key={4} />]
const onglets = ['Schedule', 'Vehicle', 'Driver', 'Seats', 'Earned']

const TripTabs = () => {

    const [ongletActif, setOngletActif] = useState(0)

    return (
        <div className="tripTabs h-56 w-full overflow-auto flex flex-col p-3">
            <div className="navBar flex gap-5 place-items-center cursor-pointer mb-4">
                {onglets.map((value, index) => 
                    <span key={index} onClick={()=>setOngletActif(index)} 
                    className={"basis-1/6 text-center " + (index === ongletActif? "ongletActif" : "")}
                    >
                        {value}
                    </span>)
                }
            </div>

            {composants[ongletActif]}

        </div>
    );
};

export default TripTabs;