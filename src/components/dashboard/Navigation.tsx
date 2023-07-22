'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { BsBellFill } from 'react-icons/bs'
import { AiOutlineMenu } from 'react-icons/ai'
interface NavigationProps {
  toggler?: Function
}

const Navigation: React.FC<NavigationProps> = (props) => {
  const [isHalf, setIsHalf] = useState(true)
  return (
    <div className='absolute z-50 left-8 right-8 w-[calc(100%-64px)] p-4 flex items-center justify-between rounded-md bg-gradient-to-r from-[#FE9261] via-[#ffd5c5] to-[#FFF] border-amber-500' style={{boxShadow: '0px 4px 20px 0px rgba(0, 0, 0, 0.25)'}}>
      <div className='flex items-center text-white gap-x-6'>
        <button className='w-8 h-8 hidden md:flex justify-center items-center' onClick={() => { setIsHalf((prev) => !prev); props?.toggler && props?.toggler((prev: any) => !prev) }}>
          {isHalf ? <IoMdClose size={32}/> : <AiOutlineMenu size={32}/>}
        </button>
        <Link href={'/'} className='text-2xl font-bold'>HOME</Link>
      </div>
      <div className='flex items-center gap-5'>
        <div className='hidden md:block'>
          <button className='w-16 h-10 flex justify-center items-center gap-1'>
            <BsBellFill size={32}/>
            <div className='w-8 h-8 rounded-full bg-[#FE9261] text-white flex justify-center items-center'>20</div>
          </button>
        </div>
        <div className='hidden md:block'>
          <h1 className='tex-2xl font-bold'>BUCA VOYAGE</h1>
        </div>
        <div className='h-12 w-12 rounded-full bg-red-500 text-white flex justify-center items-center'>
          BV
        </div>
      </div>
    </div>
  )
}

export default Navigation
