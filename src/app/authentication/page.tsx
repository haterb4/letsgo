import Link from 'next/link'
import React from 'react'
import { FcGoogle } from 'react-icons/fc' 
import { FaApple } from 'react-icons/fa6' 
const page = () => {
  return (
    <div className='w-[350px] h-full flex flex-col justify-center items-center'>
        <h1 className='font-bold text-2xl mb-8'>Sign Up</h1>
        <div className='w-full flex flex-col justify-center items-center gap-4 my-4'>
            <Link href={'/authentication/register'} className='w-full text-sm flex justify-center items-center py-2 px-8 rounded-md shadow-md bg-[#2D3A96] text-white uppercase gap-2'>continue with email</Link>
            <Link href={'/authentication/register'} className='w-full text-sm flex justify-center items-center py-2 px-8 rounded-md shadow-md bg-[#FFF] text-black uppercase gap-2'><FcGoogle size={18} /> continue with google</Link>
            <Link href={'/authentication/register'} className='w-full text-sm flex justify-center items-center py-2 px-8 rounded-md shadow-md bg-[#FFF] text-black uppercase gap-2'><FaApple size={20} />continue with apple</Link>
        </div>
        <div className='w-full flex items-center gap-2 justify-center text-black'>
            allready have an account? <Link href={'/authentication/login'} className='text-[#5438CD]'>Login</Link> 
        </div>
        <hr className='w-full border-2 my-8'/>
        <div className='w-full flex flex-col justify-center items-center gap-2'>
            <p className='text-center text-xs'>By Signing in or creating an account, you agree with our</p>
            <p className='flex items-center text-xs justify-center text-center gap-2'><Link href={'/terms-and-conditions'} className='text-[#FE9261]'>Terms & Conditions</Link><span>and</span><Link href={'/privacy-statement'} className='text-[#FE9261]'>Privacy Statement</Link></p>
        </div>
        <div className='text-center text-xs mt-4'>
            All rights reserved. <br /> Copyright (2022-2023) - Letsgo.com
        </div>
    </div>
  )
}

export default page