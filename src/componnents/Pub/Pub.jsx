import React from 'react'
import '@/styles/Pub.css'

const Pub = () => {
    return(
        <>
            <div className='covoi-lieu'>
                <span className="importe">N'importe où, n'importe quand</span>
                <span className='descript-importe'>
                    L'application est disponible depuis les plateformes web et mobile et accessible à tout moment
                </span>
                <div className="logo-app">
                    <div className='logo-name'>
                        <span className="logo1"></span>
                        <span className="name">Smart TV</span>
                    </div>
                    <div className='logo-name'>
                        <span className="logo2"></span>
                        <span className="name">Laptop</span>
                    </div>
                    <div className='logo-name'>
                        <span className="logo3"></span>
                        <span className="name">Smartphone</span>
                    </div>
                    <div className='logo-name'>
                        <span className="logo4"></span>
                        <span className="name">Tablette</span>
                    </div>
                </div>
            </div>
            <div className='adapted'>
                <span className='adapted-title'>Adapté a tous les budgets, à tous les horaires</span>
                <span className="adapted-desc">Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Minus, veritatis quas aliquam, reprehenderit distinctio accusantium ipsam maiores repudiandae voluptatum explicabo odit architecto earum doloribus 
                repellendus sit fuga expedita, sint possimus.</span>
            </div>
            <div className='color-violet'></div>
            <div className="security-covoi">
                <span className='adapted-title'>La sécurité avant tout</span>
                <span className="adapted-desc">L'application est disponible depuis les plateformes web et mobile et accessible à tout moment</span>
                <span className="logo-security"></span>
            </div>
            <div className='reserved'>
                <span className='adapted-title'>Reservation des taxis</span>
                <span className="adapted-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste porro 
                deleniti eligendi perferendis? Error rerum officia sequi ipsum maxime sunt. Mollitia impedit in culpa, 
                eaque optio tempore? Ducimus, eligendi doloremque.</span>
            </div>
            <div className='tarif-reduit'>
                <span className='adapted-title'>Du covoiturage, des tarifs reduits</span>
                <span className="adapted-desc">On sait depuis longtemps que travailler avec du texte lisible
                    et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même.
                </span>
            </div>
            <div className='vehicule-covoi'>
                <span className='adapted-title'>Des véhicules à tout moment</span>
                <span className="adapted-desc">Contrainement à une opinion répandue, le  Lorem ipsum n'est pas simplement du texte 
                aléatoire.
                </span>
            </div>
        </>
    );  
}

export default Pub