import { useRouter } from 'next/router';
import React from 'react';

const BoxNumber = ({ number, text, image, color, page }) => {
// La propriété page désigne la page vers laquelle on doit aller lorsqu'on clique sur la box
    const router = useRouter();

    const elt = typeof(number) === 'string' && number.split(' ').length >= 2 ?  number.split(' ').map(
        (value, index) => <span className="lines" key={index}>{value}</span>) : number
    return (
        <div className="boxNumber flex place-items-center p-4 gap-4 cursor-pointer" 
        onClick={()=>router.push(`/dashboard/user/${router.query.id}/${page}`)}
        >
            <div className="h-24">
                <img src={image} alt="icone" className="w-24 h-24" />
            </div>
            <div className="h-full pt-1">
                <p className="text uppercase">{text}</p>
                <p style={{color: color}} className="number text-5xl font-bold">{elt}</p>
            </div>      
        </div>
    );
};

export default BoxNumber;