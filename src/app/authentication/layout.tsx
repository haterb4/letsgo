'use client'


import { AuthSlider, Background } from '@/components'
import React from 'react'

const Layout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className='w-full min-h-screen bg-[#F9F9F9] text-black'>
            <Background />
            <div className='w-full h-full min-h-screen flex justify-center items-center z-50'>
                <div className='border h-[550px] w-[900px] rounded-3xl shadow-md bg-[#F9F9F9] z-50 flex justify-between items-center'>
                    <div className='w-[450px] h-full relative'>
                        <AuthSlider />
                    </div>
                    <div className='w-[450px] h-full flex flex-col justify-center items-center'>{children}</div>
                </div>
            </div>
        </div>
    )
}

export default Layout