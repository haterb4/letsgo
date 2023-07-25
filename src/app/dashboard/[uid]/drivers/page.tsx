/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '@/app/appState/hooks'
import { setActivePage } from '@/app/appState/features/dashboard/activePageSlice'
import { setHeader } from '@/app/appState/features/dashboard/pageHeaderSlice'
import { Select } from '@/components'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { CiSearch } from 'react-icons/ci'

const Page = () => {
  const dispatch = useAppDispatch()
  const pageHeaderTitle = <h1 className='uppercase text-2xl font-bold'>
    welcome <span className='text-[#FE9261]'>buca voyage</span>
  </h1>
  useEffect(()=> { 
   const updateActivePage = () => {
    dispatch(setActivePage('drivers'))
    dispatch(setHeader({
      bg: 'bg-gradient-to-r from-[rgba(104,117,206,1.0)] to-[rgba(104,117,206,0.0)]',
      description: 'What are you doing today ?',
      image: 'bg-[url(/images/headers/drivers.svg)] bg-no-repeat bg-right-bottom bg-contain bg-origin-border lg:w-[calc(100%-50px)]',
      title: pageHeaderTitle
    })) 
   }
   updateActivePage()
  }, [])
  const activeDashboardPage = useAppSelector((state) => state.ActiveDashboardPage.name)
  return (
    <div className='w-full flex flex-col justify-between rounded-lg border p-4 gap-4'>
      <div className='flex items-center'>
        <div className='w-[70%] h-[54px] border rounded-lg bg-zinc-50 flex items-center'>
          <input type="search" name="" id="" className='h-full w-full rounded-lg bg-transparent px-2 outline-none'/>
          <button className='h-[54px] w-[54px] flex justify-center items-center'><CiSearch size={24} /></button>
        </div>
        <div className='flex items-center'></div>
      </div>
      <div></div>
      <div className='w-full flex justify-between items-center'>
        <h4>Showing 1-3 of 3</h4>
        <div className='flex items-center gap-4'>
          <button className='w-[150px] flex justify-center items-center gap-3 border py-2 border-[#2D3A96] text-[#2D3A96] uppercase rounded-md '><AiOutlineLeft /> Previous</button>
          <div className='flex items-center gap-2'>
            <button className='w-8 h-8 flex justify-center items-center rounded bg-[#FE9261] text-white hover:bg-[#FE9261] hover:text-white'>1</button>
            <button className='w-8 h-8 flex justify-center items-center rounded hover:bg-[#FE9261] hover:text-white'>2</button>
            <button className='w-8 h-8 flex justify-center items-center rounded hover:bg-[#FE9261] hover:text-white'>...</button>
            <button className='w-8 h-8 flex justify-center items-center rounded hover:bg-[#FE9261] hover:text-white'>10</button>
          </div>
          <button className='w-[150px] flex justify-center items-center gap-3 border py-2 border-[#2D3A96] text-[#2D3A96] uppercase rounded-md '>Next <AiOutlineRight /></button>
        </div>
        <div className='flex items-center gap-2'>
          <h4 className='capitalize'>Drivers per page</h4>
          <div>
            <Select items={[3, 5, 12, 15, 20]} onChange={() => null} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page