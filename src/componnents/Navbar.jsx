/* eslint-disable react/no-unescaped-entities */
"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faBars, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import logo from '../../public/images/logo.png'

const Navbar = ({user, shadow}) => {
  const [credential, setCredential] = useState(false)
  const loggedUser = {}
  console.log(loggedUser)
  return (
    <nav className={`w-full h-16 flex justity-between items-center z-50 bg-white px-8 ${shadow && 'shadow-md'}`}>
      <div className='w-full flex justify-between items-center'>
        <div className='w-64 flex justify-between items-center'>
          <button className='hidden'><FontAwesomeIcon icon={faBars} className="w-8 h-8"/></button>
          <Link href='/' className='text-orange-600 font-bold text-2xl'>
            <div className='h-10 w-32 flex justify-center'>
              <Image src={logo} alt='letsgo logo'/>
            </div>
          </Link>
          </div>
        <div className='w-full flex justify-end items-center gap-6'>
          <Link href='/about' className='text-xl'>About us</Link>
          <Link href='/trips' className='text-xl'>Daily Trips</Link>
          <Link href='/agency' className='text-xl'>Agency</Link>
          <Link href='/dashboard/user/1' className='text-xl'>Contact</Link>
        </div> 
      </div>
      <div className='w-96 flex items-center justify-end relative'>
        <button className='h-16 w-16 flex items-center justify-between' onClick={() => { setCredential(!credential) }}>
          <div className='h-10 w-10 bg-orange-600 rounded-full flex justify-center items-center p-3'>
            {loggedUser.id ? <div className='h-full w-full flex justify-center items-center text-white'>{loggedUser.name[0].toUpperCase() }</div> :<FontAwesomeIcon icon={faUser} className="w-6 h-6"/>}
          </div>
          <span className='h-4 w-4 flex justify-center items-center'>
            <FontAwesomeIcon icon={faCaretDown} className="w-8 h-8"/>
          </span>
        </button>
        { credential && <div className='absolute w-40 shadow-md bg-white border mt-1 rounded-l-md top-16 right-0' style={{right: '-2rem'}}>
          {!loggedUser.id?  <div className='rounded-l-md bg-white'>
            <Link href='/login' className='flex justify-start items-center  w-full h-12 text-left pl-4 border-b hover:bg-orange-500 hover:text-white rounded-tl-md'>Login</Link>
            <Link href='/signup' className='flex justify-start items-center  w-full h-12 text-left pl-4 hover:bg-orange-500 hover:text-white rounded-bl-md'>Signup</Link>
          </div>:
          <div>Loged in</div>
          }
        </div>}
      </div>
    </nav>
  )
}

export default Navbar