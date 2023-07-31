'use client'

import Link from 'next/link'
import React, { useState } from 'react' 
import { BiSolidInfoCircle } from 'react-icons/bi' 
import { AuthInput } from '@/components'
import { registerUser } from '@/app/utils/api/authentication/register'
import { useRouter } from 'next/navigation'

const Page = () => {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    console.log({
      username,
      password
    })
    if (confirmPassword === password){
      try {
        const response = await registerUser(`${username}`, password)
        const { status } = response
        if (status !== 'success') {
          console.log(response.error)
          return ;
        }
        console.log(response)
        const { verificationId } = response
        if (!verificationId){
          return;
        }
        router.push(`/authentication/validate-otp/${verificationId}`)
      } catch (error) {
        console.log(error)
      }
    }
  }
  return (
    <div className='w-[350px] h-full flex flex-col justify-center items-center'>
        <div className='w-full flex flex-col justify-center gap-2'>
          <h1 className='font-bold text-2xl text-center'>Create Account</h1>
          <p className='text-xs text-left'>Use a minimum of 10 characters, including uppercase letters, lowercase letters, and numbers</p>
        </div>
        <form onSubmit={(e) => handleSubmit(e)} className='w-full flex flex-col justify-center items-center gap-3 my-3'>
            <AuthInput value={username} handleChange={(e: string) => setUsername(e)} type='number' label='username' placeholder='695724963'/>
            <AuthInput value={password} handleChange={(e: string) => setPassword(e)} type='password' label='password' placeholder='Password'/>
            <AuthInput value={confirmPassword} handleChange={(e: string) => setConfirmPassword(e)} type='password' label='confirm password' placeholder='Confirm Password'/>
            {password && confirmPassword && (password !== confirmPassword) && <div className='w-full flex justify-center items-center text-[#F84800] text-sm gap-x-1'>
              <BiSolidInfoCircle size={20}/> Passwords do not match
            </div>}
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