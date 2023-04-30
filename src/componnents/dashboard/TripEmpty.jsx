import React from 'react';

const TripEmpty = () => {

    return (
        <div className="tripTabs h-56 w-full overflow-auto flex justify-around place-items-center p-3">
            <div>
                <p className="text-xl p-4 text-center text-gray-500">NO COMPLETED TRIP YET</p>
                <div className="text-white btn-view-trip cursor-pointer">
                    VIEW PUBLISHED TRIPS
                </div>
            </div>
            <div>
                <img src="/images/dashboard/dame_valise.png" alt="dame_valise" className="w-48 h-48" />
            </div>
        </div>
    );
};

export default TripEmpty;