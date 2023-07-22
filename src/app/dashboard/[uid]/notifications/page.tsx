/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '@/app/appState/hooks'
import { setActivePage } from '@/app/appState/features/dashboard/activePageSlice'
import { setHeader } from '@/app/appState/features/dashboard/pageHeaderSlice'

const Page = () => {
  const dispatch = useAppDispatch()
  const pageHeaderTitle = <h1 className='text-2xl font-bold'>
    Get notified on any activities on your organization and customize your alerts type
  </h1>
  useEffect(()=> { 
   const updateActivePage = () => {
    dispatch(setActivePage('notifications'))
    dispatch(setHeader({
      bg: 'bg-gradient-to-r to-[rgba(104,117,206,0.00)] from-[#6875CE]',
      image: 'bg-[url(/notification.svg)]',
      title: pageHeaderTitle
    }))
   }
   updateActivePage()
  }, [])
  const activeDashboardPage = useAppSelector((state) => state.ActiveDashboardPage.name)
  return (
    <div>notifications page</div>
  )
}

export default Page