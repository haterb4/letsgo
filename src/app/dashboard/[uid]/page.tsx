/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '@/app/appState/hooks'
import { setActivePage } from '@/app/appState/features/dashboard/activePageSlice'
import { setHeader } from '@/app/appState/features/dashboard/pageHeaderSlice'

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
      image: 'bg-[url(/car.svg)]',
      title: pageHeaderTitle
    })) 
   }
   updateActivePage()
  }, [])
  const activeDashboardPage = useAppSelector((state) => state.ActiveDashboardPage.name)
  return (
    <div>home page</div>
  )
}

export default Home