import DashoardLayout from '@/layout/DashoardLayout'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import TripTable from '@/componnents/dashboard/TripTable'
const Trips = () => {
  
  const router = useRouter()
  const dashboardUrl = () => {
    return `/dashboard/user/${router.query.id}`
  }

  return (
    <DashoardLayout>
    <div id="TripList" className="mt-12">
    <div className="title">
      <p className="m-text-bigger-normal uppercase w-full font-bold">
        Trip list
      </p>
      <p className="text-orange m-text-small mt-2 font-semibold">
        <Link href={dashboardUrl()} > Dashboard / </Link>
        <span>Trips</span>
      </p>
    </div>
    <div className="contenant w-full bg-white mt-10">
      <div className="flex flex-row-reverse">
        <button className="gradient-violetsombre-orange text-white text-sm mt-4 md:mt-6 lg:mt-8 mr-5 md:mr-8"
        // v-on:click="toggleModaleAdd"
        >
          <img
            src="/images/dashboard/plus.png"
            className="inline-block"
          />
          <span className="ml-1">New Trip</span>
        </button>
      </div>
      <div className="table-container p-4 md:p-8">
        <div className=""><p className="font-semibold text-gray-600 mb-1">Trip list</p></div>
        {/* <MemberTable ref="MemberTable" /> */}
        <TripTable/>
      </div>
    </div>
    {/* <CreateMemberModal :showModal="showModalAdd" :closeFunction="toggleModaleAdd"
     @create-member="createItem" /> */}
    
  </div>
    </DashoardLayout>
  )
}

export default Trips