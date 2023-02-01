import React from 'react'
import DashoardLayout from '@/layout/DashoardLayout'
import BienvenueCard from '@/componnents/dashboard/BienvenueCard'
import DateCard from '@/componnents/dashboard/DateCard'
import RecentTrips from '@/componnents/dashboard/RecentTrips'

const Dashboard = () => {
  return (
    <DashoardLayout>
        <div>
          <BienvenueCard />
          <DateCard />
          <RecentTrips />
        </div>
    </DashoardLayout>
  )
}

export default Dashboard