import React from 'react';

const BoxNumber = ({ number, text, image, color }) => {
    return (
        <div className="boxNumber flex place-items-center p-4 gap-4">
            <div className="h-36">
                <img src={image} alt="icone" className="w-36 h-36" />
            </div>
            <div className="h-full">
                <p className="uppercase text-lg">{text}</p>
                <p style={{color: color}} className="text-5xl">{number}</p>
            </div>      
        </div>
    );
};

export default BoxNumber;