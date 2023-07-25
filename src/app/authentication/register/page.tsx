'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc' 
import { FaApple } from 'react-icons/fa6' 
import { BiSolidInfoCircle } from 'react-icons/bi' 
import { AuthInput } from '@/components'
const Page = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }
  return (
    <div className='w-[350px] h-full flex flex-col justify-center items-center'>
        <div className='w-full flex flex-col justify-center gap-2'>
          <h1 className='font-bold text-2xl text-center'>Create Account</h1>
          <p className='text-xs text-left'>Use a minimum of 10 characters, including uppercase letters, lowercase letters, and numbers</p>
        </div>
        <form onSubmit={(e) => handleSubmit} className='w-full flex flex-col justify-center items-center gap-3 my-3'>
            <AuthInput value={email} handleChange={(e: string) => setEmail(e)} type='email' label='email' placeholder='Email'/>
            <AuthInput value={password} handleChange={(e: string) => setPassword(e)} type='password' label='password' placeholder='Password'/>
            <AuthInput value={confirmPassword} handleChange={(e: string) => setConfirmPassword(e)} type='password' label='confirm password' placeholder='Confirm Password'/>
            <div className='w-full flex justify-center items-center text-[#F84800] text-sm gap-x-1'>
              <BiSolidInfoCircle size={20}/> Passwords do not match
            </div>
            <button className='w-full text-sm flex justify-center items-center py-2 px-8 rounded-md shadow-md bg-[#2D3A96] text-black uppercase gap-2'>create account</button>
        </form>
        <div className='w-full flex items-center gap-x-2 justify-center'>
            allready have an account? <Link href={'/authentication/login'} className='text-[#5438CD]'>Login</Link> 
        </div>
        <hr className='w-full border-2 my-3'/>
        <div className='w-full flex flex-col justify-center items-center'>
            <p className='text-center text-xs'>By Signing in or creating an account, you agree with our</p>
            <p className='flex items-center text-xs justify-center text-center gap-2'><Link href={'/terms-and-conditions'} className='text-[#FE9261]'>Terms & Conditions</Link><span>and</span><Link href={'/privacy-statement'} className='text-[#FE9261]'>Privacy Statement</Link></p>
        </div>
        <div className='text-center text-xs mt-3'>
            All rights reserved. <br /> Copyright (2022-2023) - Letsgo.com
        </div>
    </div>
  )
}

export default Page