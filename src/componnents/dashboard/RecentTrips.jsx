import React from 'react';

const RecentTrips = () => {

    const voyages = [
        {traject: 'Yaoundé - Bafia', driver: 'Djoumessi', travelDate: '06 Janvier 2023', places: 5},
        {traject: 'Bafoussam - Dschang', driver: 'Anzié', travelDate: '06 Janvier 2023', places: 5},
        {traject: 'Yaoundé - Tradex Yassa', driver: 'Anzié', travelDate: '04 Janvier 2023', places: 4},
        {traject: 'Douala - Yaoundé', driver: 'Lening', travelDate: '04 Janvier 2023', places: 6},
        {traject: 'Bafoussam - Yaoundé', driver: 'Djoumessi', travelDate: '03 Janvier 2023', places: 5},
        {traject: 'Douala - Yaoundé', driver: 'Tchoumi', travelDate: '02 Janvier 2023', places: 6},
      ]

    return (
        <div id="RecentTrips" className="recentTrips flex flex-col bg-white mt-4 md:mt-6 mb-10 overflow-auto rounded-md
            px-2 md:px-4 lg:px-8 pt-2 md:pt-4 pb-8 md:pb-10">
            <div className="font-bold md:text-lg mb-2">
                Recent trips
            </div>
            <div className="tableau">
                <table className="w-full text-sm lg:text-base">
                    <thead>
                        <tr className="text-left">
                            <th>Traject</th><th>Travel date</th>
                            <th>Driver</th><th className="images">Places</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            voyages.map((voyage, index)=>
                                <tr key={index}>
                                    <td>{voyage.traject}</td>
                                    <td>{voyage.travelDate}</td>
                                    <td>{voyage.driver}</td>
                                    <td className="text-center">{voyage.places}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
 
            </div>
    </div>
    );
};

export default RecentTrips;