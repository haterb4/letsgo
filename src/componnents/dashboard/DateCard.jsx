import React from 'react';
import BoxDate from './BoxDate';

const DateCard = () => {

    const jours = [
        {nom: 'Lun', numero: '05', thisDay: false},
        {nom: 'Mar', numero: '06', thisDay: true},
        {nom: 'Mer', numero: '07', thisDay: false},
        {nom: 'Jeu', numero: '08', thisDay: false},
        {nom: 'Ven', numero: '09', thisDay: false}
      ]

    return (
        <div id="DateCard">
        <div className="date-card flex flex-col bg-white mt-4 md:mt-6 overflow-auto
            px-2 md:px-4 lg:px-8 pt-2 md:pt-4 pb-8 md:pb-10 font-semibold">
            <div className="text-indigo">
                Date
            </div>
            <div className="flex flex-col px-3 md:px-4 lg:px-7 text-indigo">
                <div className="py-1">Janvier 2023</div>
                <div className="jours flex justify-between">
                    {
                        jours.map((jour, index) => <BoxDate key={index}
                        nom={jour.nom} numero={jour.numero} thisDay={jour.thisDay} />)
                    }
                </div>
            </div>
        </div>

        <div className="date-card-phone flex flex-col mt-3 md:mt-5 pb-3 font-semibold">
            <div className="px-3 py-1">
                Jours de la semaine
            </div>
            <div className="jours flex justify-between px-3 md:px-4 lg:px-7 overflow-auto text-indigo">
            {
                jours.map((jour, index) => <BoxDate key={index}
                nom={jour.nom} numero={jour.numero} thisDay={jour.thisDay} />)
            }
            </div>
        </div>
    </div>
    );
};

export default DateCard;