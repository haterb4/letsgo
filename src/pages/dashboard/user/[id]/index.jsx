import React from 'react'
import DashboardLayout from '@/layout/DashboardLayout'
import BienvenueCard from '@/componnents/dashboard/BienvenueCard'
import HomeCenter from '@/componnents/dashboard/HomeCenter'

const Dashboard = () => {
  return (
    <DashboardLayout>
        <div>
          <BienvenueCard />
          <HomeCenter />
        </div>
    </DashboardLayout>
  )
}

export default Dashboard