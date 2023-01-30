/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faBars, faCaretDown } from '@fortawesome/free-solid-svg-icons'


const Navbar = ({user, }) => {
  return (
    <nav className='w-full h-16 flex justity-between items-center bg-white px-8'>
      <div className='w-full flex justify-between items-center'>
        <div className='w-64 flex justify-between items-center'>
          <button className='hidden'><FontAwesomeIcon icon={faBars} className="w-8 h-8"/></button>
          <Link href='/' className='text-orange-600 font-bold text-2xl'>let's go</Link>
          </div>
        <div className='w-full flex justify-end items-center gap-6'>
          <Link href='/' className='text-xl'>About us</Link>
          <Link href='/' className='text-xl'>Daily Trips</Link>
          <Link href='/' className='text-xl'>Agency</Link>
          <Link href='/' className='text-xl'>Contact</Link>
        </div> 
      </div>
      <div className='w-96 flex items-center justify-end'>
        <button className='h-16 w-16 flex items-center justify-between'>
          <div className='h-10 w-10 bg-orange-600 rounded-full flex justify-center items-center p-3'>
            <FontAwesomeIcon icon={faUser} className="w-6 h-6"/>
          </div>
          <span className='h-4 w-4 flex justify-center items-center'>
            <FontAwesomeIcon icon={faCaretDown} className="w-8 h-8"/>
          </span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar