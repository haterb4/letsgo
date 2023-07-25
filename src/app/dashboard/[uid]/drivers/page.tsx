/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '@/app/appState/hooks'
import { setActivePage } from '@/app/appState/features/dashboard/activePageSlice'
import { setHeader } from '@/app/appState/features/dashboard/pageHeaderSlice'
import { ItemsTable } from '@/components'
import itemsTableList from '@/components/data/itemsTableList'

const Page = () => {
  const dispatch = useAppDispatch()
  const pageHeaderTitle = <h1 className='uppercase text-2xl font-bold'>
    welcome <span className='text-[#FE9261]'>buca voyage</span>
  </h1>
  const filters = ['Recent', 'Ratings', 'Name', 'Taxi', 'Personal', 'Bus', 'Bike']
  
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
    <div className='w-full'>
      <ItemsTable filters={filters} items={itemsTableList}/>
    </div>
  )
}

export default Page