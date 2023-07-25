/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '@/app/appState/hooks'
import { setActivePage } from '@/app/appState/features/dashboard/activePageSlice'
import { setHeader } from '@/app/appState/features/dashboard/pageHeaderSlice'
import Image from 'next/image'
import { ItemCard } from '@/components'

const Home = () => {
  const dispatch = useAppDispatch()
  const pageHeaderTitle = <h1 className='uppercase text-2xl font-bold'>
    welcome <span className='text-[#FE9261]'>buca voyage</span>
  </h1>
  useEffect(()=> { 
   const updateActivePage = () => {
    dispatch(setActivePage('Home'))
    dispatch(setHeader({
      bg: 'bg-gradient-to-r to-[#5438CD] from-[#2D3A96]',
      description: 'What are you doing today ?',
      image: 'bg-[url(/images/headers/car.svg)] bg-no-repeat bg-right-bottom bg-contain bg-origin-border -bottom-4 lg:w-[calc(100%-100px)]',
      title: pageHeaderTitle
    })) 
   }
   updateActivePage()
  }, [])
  const activeDashboardPage = useAppSelector((state) => state.ActiveDashboardPage.name)
  return (
    <div className='w-full'>
      <div className='w-full grid grid-cols-3 gap-8'>
        <ItemCard title='Drivers' value='10' iconUri='/images/icons/volant.png' />
        <ItemCard title='vehicules' value='10' iconUri='/images/icons/cars.png' />
        <ItemCard title='published trips' value='1000' iconUri='/images/icons/trips-1.png' />
      </div>
      <div className='flex mt-8 gap-x-8'>
        <div className='flex flex-col gap-y-8 w-[250px]'>
          <ItemCard title='completed trips' value='10' iconUri='/images/icons/trips-2.png' />
          <ItemCard title='recent gain' value='XAF 1000' iconUri='/images/icons/cars.png' />
        </div>
        <div className='w-full h-full pt-4'>
          <div className='w-full flex justify-between'>
            <h1 className='font-bold text-3xl uppercase'><span className='text-[#FE9261]'>Recent</span> completed trip</h1>
            <div className='w-[200px] h-[80px] relative'>
              <Image src={'/images/icons/traveller.png'} fill alt='traveller' />
            </div>
          </div>
          <div className='w-full h-[220px] Input-shadow mt-5 rounded-[20px]'></div>
        </div>
      </div>
    </div>
  )
}

export default Home