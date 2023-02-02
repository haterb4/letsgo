import React from 'react'
import '@/styles/Covoiturage.css'
import { Card, Pub, Testimonials, Footer } from '@/componnents';

const Covoiturage = () => {
  return (
    <div className='covoiturage'>
        <div className='logo-covoiturage'>
            <div className='location-dowload'>
                <div className='location-covoiturage'>
                    <span className="logo-lets"></span>
                    <span className="car-members"></span>
                </div>
                <div className="download">
                 <div className='slogan-lets'> Déplacez-vous en toute simplicité, en toute convivialité et en toute sécurité. </div>
                 votre nouvelle application de covoiturage vous permettra de vous deplacez partout dans au cameroun sans plus d'effort. Voyage? Tourisme? Affaires?
                 <div className="slogan-btn">
                 <span className="btn-download"> Télécharger l'application</span>
                 </div>
                </div>
            </div>
            <div className='search-detail'>
            <Card />
            </div>
        </div>
        <div className='middle-white'></div>
        <div className='grille'>
            <Pub />
        </div>
        <div className="testi">
          <Testimonials />
        </div>
        <div className='footer-covoiturage'>
          <Footer />
        </div>
    </div>
  )  
}

export default Covoiturage