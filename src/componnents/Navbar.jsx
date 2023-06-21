/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import { useDetectClickOutside } from 'react-detect-click-outside';


const Navbar = () => {

  const router = useRouter()

  const [isOpen, setIsOpen] = useState(false)
  const [isScroll, setIsScroll] = useState(false)
  const scroll = useRef(false)
  const navBg = router.asPath === "/" ? "bg-transparent " : "bg-degrade "

  const navRef = useDetectClickOutside({ onTriggered: ()=>{if(isOpen) setIsOpen(false)} });

  useEffect(()=>{
    window.addEventListener("scroll", async function () {
      let value = window.scrollY > 120;
      if(value !== scroll.current) {scroll.current = value; setIsScroll(value);}
    })
    scroll.current = window.scrollY > 150; setIsScroll(scroll.current);
  }, [])


  return (
    <nav ref={navRef}  className={ isScroll ? 'fixed z-50 w-full bg-white shadow text-white' : navBg + ' fixed w-full text-white dark:bg-gray-800'}>
    <div className={(isScroll ?  'py-4 ' : 'py-8 ') + 'w-full px-6 lg:mx-auto md:flex md:justify-between md:items-center'} >
        <div className="flex items-center justify-between">
            <Link href="/" onClick={()=>setIsOpen(false)}>
              {
                isScroll ?
                <img className=" h-12 w-auto lg:h-16" src="/images/logo.png" alt="" />
                :
                <img className=" h-12 w-auto lg:h-16" src="/images/logo1.png" alt="" />
              }
            </Link>

             {/* Mobile menu button  */}
            <div className="flex md:hidden">
                <button  onClick={()=>setIsOpen(val => !val)} type="button" className={ (isScroll ? 'text-gray-700 ' : 'text-white ') + 'dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none dark:focus:text-gray-400'} aria-label="toggle menu">
                    {
                      !isOpen ? 
                      <svg  xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 " fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                      </svg>
                      :
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    }
                </button>
            </div>
        </div>

        {/* Mobile Menu open: "block", Menu closed: "hidden" */}
        <div  className={(isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full ') + 'absolute inset-x-0 z-20 w-full px-6 py-4 sm:mt-0 mt-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center'} >
            <div className="flex flex-col md:flex-row">
                <a className={ (isScroll ? 'text-gray-700 ' : 'md:text-white text-gray-700 ') + ' my-2 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 mx-3 md:mx-5 lg:mx-6 md:my-0 text-sm sm:text-base font-medium'} href="#">Covoiturage</a>
                <a className={ (isScroll ? 'text-gray-700 ' : 'md:text-white text-gray-700 ') + ' my-2 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 mx-3 md:mx-5 lg:mx-6 md:my-0 text-sm sm:text-base font-medium'} href="#">Bus</a>
                <a className={ (isScroll ? 'text-gray-700 ' : 'md:text-white text-gray-700 ') + ' my-2 transition-colors duration-300 transform dark:text-gray-200 hover:text-secondary dark:hover:text-blue-400 mx-3 md:mx-5 lg:mx-6 md:my-0 text-sm sm:text-base font-medium'}  href="#">Taxi</a>
                <a className={ (isScroll ? 'text-gray-700 ' : 'md:text-white text-gray-700 ') + ' my-2 transition-colors duration-300 transform dark:text-gray-200 hover:text-secondary dark:hover:text-blue-400 mx-3 md:mx-5 lg:mx-6 md:my-0 text-sm sm:text-base font-medium'}  href="#">Moto Taxi</a>
                <a className={ (isScroll ? 'text-gray-700 ' : 'md:text-white text-gray-700 ') + ' my-2 transition-colors duration-300 transform dark:text-gray-200 hover:text-secondary dark:hover:text-blue-400 mx-3 md:mx-5 lg:mx-6 md:my-0 text-sm sm:text-base font-medium'}  href="#">Tarifs</a>
                <a className={ (isScroll ? 'text-gray-700 ' : 'md:text-white text-gray-700 ') + ' my-2  transition-colors duration-300 transform dark:text-gray-200 hover:text-secondary dark:hover:text-secondary mx-3 md:mx-5 lg:mx-6 md:my-0 text-sm sm:text-base font-medium'}  href="#">Trajets</a>
                <a className={ (isScroll ? 'text-gray-700 ' : 'md:text-white text-gray-700 ') + ' my-2  transition-colors duration-300 transform dark:text-gray-200 hover:text-secondary dark:hover:text-secondary mx-3 md:mx-5 lg:mx-6 md:my-0 text-sm sm:text-base font-medium'}  href="#">Partenaires</a>
            </div>

            <div className="flex justify-center md:block sm:mt-0 mt-4">
              <Link href="/login">
                <button type="button" onClick={()=>setIsOpen(false)} className="text-white bg-secondary font-medium justify-center sm:w-auto w-full focus:ring-4 focus:outline-none focus:ring-primary rounded-full text-sm sm:text-base px-5 py-2.5 text-center inline-flex items-center dark:bg-secondary dark:hover:bg-secondary dark:focus:ring-secondary">
                    <span>Se Connecter</span>
                </button>
              </Link>
            </div>
        </div>
    </div>

    <style jsx>{`
        nav{z-index: 50;}
        nav.bg-degrade{
            background: linear-gradient(to bottom, #2D3A96, rgb(83, 94, 169));
        }

        @media screen and (max-width: 430px) {
          nav.bg-transparent{
            background: linear-gradient(to bottom, #2D3A96, rgb(83, 94, 169));
        }
        }
      `}</style>

</nav>
  )
}

export default Navbar