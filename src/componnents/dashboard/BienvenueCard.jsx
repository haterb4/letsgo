import React from 'react';
import { useSelector } from 'react-redux';

const BienvenueCard = () => {

    const currentUser = useSelector(state => state.user.data)

    return (
        <div className="bienvenue-card flex justify-between place-items-center text-white h-48 md:h-56
            gradient-violet mt-5 md:mt-8 pl-2 md:pl-12 lg:pl-16 pr-8 md:pr-20 lg:pr-32
            overflow-hidden">
        <div className="flex flex-col relative">
            <span className="uppercase text-base md:text-xl font-semibold py-1">Welcome <span className="text-orangeclair">{currentUser.name}</span></span>
            <span className="text-sm md:text-base">What are you doing today?</span>

            <div className="nonPermanent2">
                <div className="absolute circle-xl bg-beige z-0 -top-16 -left-8"></div>
                <div className="absolute circle-md bg-beige z-0 top-20 -left-4"></div>
                <div className="absolute circle-sm bg-beige z-0 -top-12 -right-8"></div>
            </div>

        </div>
        <div className="img relative pt-20 md:pt-28 h-full -left-20 sm:-left-24 lg:-left-28">
            <div className="absolute w-20 h-24 -bottom-3 -left-2" style={{zIndex: 5}}><img src="/images/dashboard/voiture.svg" alt="voiture" className="h-24" /></div>
            <div className="absolute w-32 h-32 z-0 top-32 md:top-40 -left-8 cercle bg-beige"></div>

            <div className="nonPermanent">
                <div className="absolute circle-lg bg-beige z-0 top-20 -left-8"></div>
                <div className="absolute circle-sm bg-beige z-0 top-44 -left-16"></div>
                <div className="absolute circle-md bg-beige z-0 top-24 left-20"></div>
                <div className="absolute circle-sm bg-beige z-0 top-36 left-24"></div>
            </div>

        </div>
    </div>
    );
};

export default BienvenueCard;