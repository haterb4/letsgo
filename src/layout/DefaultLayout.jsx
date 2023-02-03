import { Navbar } from '../componnents'
import React from 'react'

const DefaultLayout = ({children, bg}) => {
  return (
    <div className={`${bg? bg: 'bg-[#E8F9F8]'} flex flex-col justify-between items-start min-h-screen `}>
        <Navbar shadow={true}/>
        <div className='m-auto w-full h-full'>{children}</div>
    </div>
  )
}

export default DefaultLayout