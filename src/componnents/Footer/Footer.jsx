import React from 'react'
import '@/styles/Footer.css'

const Footer = () => {
  return(
    <>
    <div className='renseignement-logo'>
        <div className='renseignement'>
            <div className='page-logo'>
                <div className="logo-page"></div>
                <div className='page'>fb_page</div>
            </div>
            <div className='page-logo'>
                <div className="logo-page"></div>
                <div className='page'>twitter_page</div>
            </div>
            <div className='page-logo'>
                <div className="logo-page"></div>
                <div className='page'>instagram_page</div>
            </div>
            <div className='page-logo'>
                <div className="logo-page"></div>
                <div className='page'>+237 695935026</div>
            </div>
        </div>
        <div className='logo-renseignement'></div>
    </div>
    <div className='downl-btn'>Télécharger l'application</div>
    <div className='copyright'>Copyright@Ewoki_ebouele</div>
    </>
  );
}

export default Footer;