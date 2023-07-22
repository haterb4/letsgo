'use client'

import { Navigation, PageHeader } from '@/components'
import Sidebar from '@/components/dashboard/Sidebar'
import Image from 'next/image'
import React, { useState } from 'react'
import { useAppSelector } from '@/app/appState/hooks'


const DashboardLayout = ({
    children,
  }: {
    children: React.ReactNode
}) => {
  const [sidebarIsVisible, setSidebarIsVisile] = useState(true)
  const pageHeader = useAppSelector((state) => state.pageHeader)
  console.log(pageHeader)
  return (
    <div className='w-full flex justify-between items-start min-h-screen h-screen overflow-hidden bg-white text-black'>
      {sidebarIsVisible && <div className='w-[354px] hidden min-w-[354px] md:flex flex-col justify-center items-center flex-shrink-0 self-stretch p-8 h-screen overflow-hidden'>
        <div className='w-[285px] h-[151px] relative'>
            <Image src={'/logo.svg'} fill={true} alt='letsgo'/>
        </div>
        <div className='w-[285px] min-h-[calc(100%-151px)] h-[calc(100%-151px)]'>
            <Sidebar />
        </div>
      </div>}
      <div className='min-w-[calc(100%-354px)] w-full flex flex-col items-center gap-8 self-stretch px-8 py-8 overflow-y-scroll relative' style={{flex: '1 0 0'}}>
        <Navigation toggler={setSidebarIsVisile}/>
        <div className='w-full flex flex-col gap-y-8'>
            <div className='mt-36 w-full'>
              <PageHeader description={pageHeader.description} image={pageHeader.image} bg={pageHeader.bg}>
                {pageHeader.title}
              </PageHeader>
            </div>
            <main className='w-full'>{children}</main>
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
