'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import authslides from '../data/authSlider'

const AuthSlider = () => {
  const [image, setImage] = useState(authslides[0])
  const [index, setIndex] = useState(0)
  useEffect(() => {

    const interval = setInterval(() => {
      index < authslides.length - 1 && setIndex(prev => prev + 1)
      index === authslides.length - 1 && setIndex(0)
      setImage(authslides[index])
    }, 5000);
    return () => clearInterval(interval);
  }, [index])
  return (
    <div className='w-full h-full rounded-l-2xl relative'>
      <div className='absolute w-full rounded-l-2xl h-full left-0 top-0 z-0'>
        <div className='w-full h-full rounded-l-2xl relative z-0 overflow-hidden'>
          <Image src={image.uri} alt={image.alt} fill/>
        </div>
      </div>
      <div className='w-full h-full z-50 flex justify-center items-end'>
        <div className='flex items-center z-50 gap-4 p-3 mb-8'>
          {authslides.map((slide, i) => {
            return (<button key={i} onClick={() => {setIndex(i); setImage(slide)}} className={`w-[15px] h-[15px] rounded-full ${index===i ? 'bg-white' : 'bg-[#FE9261]'}`} />)
          })}
        </div>
      </div>
    </div>
  )
}

export default AuthSlider