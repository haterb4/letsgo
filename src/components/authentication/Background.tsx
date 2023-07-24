import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Background = () => {
  return (
    <div className='absolute w-full h-full top-0 left-0 z-0'>
        <div className='relative w-full h-full  flex flex-col justify-between items-start'>
            <div className='w-full flex justify-between items-start'>
                <div className='w-[70%] py-6'>
                    <div className='w-full h-[60px] rounded-r-full bg-gradient-to-r from-[#2D3A96] to-[#5438CD] flex items-center'>
                        <Link href='/' className='relative h-[50px] w-[250px]'>
                            <Image src={'/images/main/letsgoLogo.svg'} fill alt='rounded' />
                        </Link>
                    </div>
                </div>
                <div className='w-[25%] min-w-[300px] h-[300px] relative'>
                    <Image src={'/images/main/bigellipse.svg'} fill alt='rounded' />
                </div>
            </div>
            <div className='w-full flex justify-between items-baseline'>
                <div className='w-[45%] min-w-[300px] h-[380px] relative'>
                    <Image src={'/images/main/waves.svg'} fill alt='rounded' />
                </div>
                <div className='w-[25%] min-w-[300px] h-[250px] relative'>
                    <Image src={'/images/main/drawing.png'} fill alt='rounded' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Background