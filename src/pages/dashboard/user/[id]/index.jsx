import React from 'react'
import DashboardLayout from '@/layout/DashboardLayout'
import BienvenueCard from '@/componnents/dashboard/BienvenueCard'
import DateCard from '@/componnents/dashboard/DateCard'
import RecentTrips from '@/componnents/dashboard/RecentTrips'

const Dashboard = () => {
  return (
    <DashboardLayout>
        <div>
          <BienvenueCard />
          <DateCard />
          <RecentTrips />
        </div>
    </DashboardLayout>
  )
}

export default Dashboard