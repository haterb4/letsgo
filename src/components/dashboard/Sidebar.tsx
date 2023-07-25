'use client'

import React from 'react'
import SidebarLink from './SidebarLink'
import { AiTwotoneSetting } from 'react-icons/ai'
import { IoLogOutSharp } from 'react-icons/io5'
import sidebarMenu from '../data/sidebarMenu'
import { useAppSelector } from '@/app/appState/hooks'


const Sidebar = () => {
  const activeDashboardPage = useAppSelector((state) => state.ActiveDashboardPage.name)
  return (
    <div className='w-full h-full flex flex-col items-center justify-between gap-3 self-stretch py-4 px-0'>
        <div className='w-full flex flex-col gap-1'>
            {sidebarMenu.map((menu, index) => {
                return (
                    <SidebarLink key={index} active={menu.link.text === activeDashboardPage} icon={menu.icon} link={{href: menu.link.href, text: menu.link.text}} iconClass={menu.iconClass}/>
                )
            })}
        </div>
        <div className='w-full flex flex-col'>
            <SidebarLink active={activeDashboardPage === 'planner settings'} icon={AiTwotoneSetting} link={{href: '/dashboard/1/planner-settings', text: 'planner settings'}}/>
            <SidebarLink icon={IoLogOutSharp} link={{href: '/authentication/login', text: 'logout'}} iconClass='rotate-180'/>
        </div>
    </div>
  )
}

export default Sidebar
