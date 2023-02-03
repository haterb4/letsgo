import React from 'react';

const BoxDate = ({ nom, numero, thisDay }) => {
    return (
        <div className="boxDate flex flex-col place-items-center mr-3 pt-3 pb-5 rounded-md bg-white">
        <div className={"flex justify-center text-center p-1 mb-3 w-2/3 rounded-2xl font-normal text-white " + 
        (thisDay? 'gradient-vert-orange' : 'bg-orange')} >
            {nom}
        </div>
        <div className="text-center p-3 text-3xl text-black">{numero}</div>
    </div>
    );
};

export default BoxDate;