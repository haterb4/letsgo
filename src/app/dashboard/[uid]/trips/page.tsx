/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '@/app/appState/hooks'
import { setActivePage } from '@/app/appState/features/dashboard/activePageSlice'

const Page = () => {
  const dispatch = useAppDispatch()
  useEffect(()=> { 
   const updateActivePage = () => {
    dispatch(setActivePage('trips')) 
   }
   updateActivePage()
  }, [])
  const activeDashboardPage = useAppSelector((state) => state.ActiveDashboardPage.name)
  return (
    <div>trips page</div>
  )
}

export default Page