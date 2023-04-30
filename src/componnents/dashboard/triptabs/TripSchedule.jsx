import React from 'react';

const TripSchedule = () => {

    return (
        <div className="tripSchedule text-sm w-full flex gap-8">
            <div className="flex flex-col">
                <div className="departure flex gap-2">
                    <div className="left flex flex-col place-items-center pt-1 gap-2">
                        <img src="/images/dashboard/pin_depart.png" alt="pin_depart" />                      
                        <img src="/images/dashboard/pointilles.png" alt="pointilles" className="h-14 w-2" />
                    </div>
                    <div className="right">
                        <div className="text-gray-500">DEPARTURE</div>
                        <div className="text-base font-bold">Biyem-Assi</div>
                        <div>7:10, Today</div>
                    </div>
                </div>

                <div className="destination flex gap-2">
                    <div className="left flex flex-col place-items-center pt-1 gap-2">
                        <img src="/images/dashboard/pin_destination.png" alt="pin_destination" className="pl-0.5" />                      
                    </div>
                    <div className="right">
                        <div className="text-gray-500">DESTINATION</div>
                        <div className="text-base font-bold">Melen, Polytechnique</div>
                        <div>7:50, Today</div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4 place-items-center">
                <div className="flex justify-between gap-7">
                    <div className="flex gap-1">
                        <div className="left flex flex-col place-items-center pt-1 gap-2">
                            <img src="/images/dashboard/pin_clock.png" alt="pin_clock" className="w-4 h-4" />                      
                        </div>
                        <div className="right">
                            <div className="text-gray-500">DURATION</div>
                            <div className="text-base font-bold">00h40</div>
                            <div className="text-gray-500 mt-3">TRIP SERVICE</div>
                        </div>
                    </div>
                    <div className="flex gap-1">
                        <div className="left flex flex-col place-items-center pt-1 gap-2">
                            <img src="/images/dashboard/pin_dollar.png" alt="pin_dollar" className="w-4 h-4" />                      
                        </div>
                        <div className="right">
                            <div className="text-gray-500">UNIT SEAT PRICE</div>
                            <div className="text-base font-bold">XAF 250</div>
                            <div className="text-base font-bold mt-3">Day, Normal</div>
                        </div>
                    </div>
                </div>
                <div className="text-white btn-view-trip cursor-pointer">
                    VIEW TRIP DETAILS
                </div>
            </div>
        </div>
    );
};

export default TripSchedule;