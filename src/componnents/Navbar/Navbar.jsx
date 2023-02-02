"use client";
import React, {useState} from "react";
import "@/styles/Navbar.css";
import { NavLink } from "react-router-dom";

 export default function Navbar(){

    const [currentLink, setCurrentLink] = useState(1);

    window.onload=function(){
    const hamburger = document.querySelector(".hamburger");
    const ulNavbar = document.querySelector(".ul-navbar");

    hamburger.addEventListener("click", ()=>{
        hamburger.classList.toggle("actived");
        ulNavbar.classList.toggle("actived");
    })

    document.querySelectorAll(".active").forEach(n => n.addEventListener("click", ()=>{
        hamburger.classList.remove("actived");
        ulNavbar.classList.remove("actived");
    }))
}

    return(
        <div className="navbar">
            <div className="let-go-symbole">
                <span className="let-go-icon"></span>
                <div className="let-go-text"> <a href="/">Let's Go !</a></div>
            </div>
            <ul className="ul-navbar">
                <li className={currentLink === 1 ? "active" : "none"} onClick={() => setCurrentLink(1)}>
                    <NavLink   className="a-navbar" to="/">Covoiturage<span className="active-barre"></span></NavLink>
                </li>
                <li className={currentLink === 2 ? "active" : "none"} onClick={() => setCurrentLink(2)}>
                    <NavLink   className="a-navbar" to="/">Taxi<span className="active-barre"></span></NavLink>
                </li>
                <li className={currentLink === 3 ? "active" : "none"} onClick={() => setCurrentLink(3)}>
                    <NavLink   className="a-navbar" to="/">Rechercher<span className="active-barre"></span></NavLink>
                </li>
                <li className={currentLink === 4 ? "active" : "none"} onClick={() => setCurrentLink(4)}>
                    <NavLink  className="a-navbar" to="/">Télécharger<span className="active-barre"></span></NavLink>
                </li>
                <li className={currentLink === 5 ? "active" : "none"} onClick={() => setCurrentLink(5)}>
                    <NavLink   className="a-navbar" to="/">Trajet<span className="active-barre"></span></NavLink>
                </li>
                <li className={currentLink === 6 ? "active" : "none"} onClick={() => setCurrentLink(6)}>
                    <NavLink   className="a-navbar" to="/">Partenaires<span className="active-barre"></span></NavLink>
                </li>
                <li className={currentLink === 7 ? "active" : "none"} onClick={() => setCurrentLink(7)}>
                    <NavLink className="a-navbar" to="/">Tarifs<span className="active-barre"></span></NavLink>
                </li>
                <div className="connexion-btn">
                <div className="connexion-icon"></div>
                 Se connecter
            </div>
            </ul>
            
            <div className="hamburger">
               <span className="bar"></span>
               <span className="bar"></span> 
               <span className="bar"></span> 
            </div>
        </div>
    );
 } 