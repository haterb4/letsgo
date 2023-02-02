import DashoardLayout from '@/layout/DashoardLayout'
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import triplist from '@/fakedata/triplist';
import TripTable from '@/componnents/dashboard/TripTable'
import CreateTripModal from '@/componnents/dashboard/CreateTripModal'
const Trips = () => {
  
  const router = useRouter()
  const [modalCreateVisible, setModalCreateVisible] = useState(false)
  const [trips, setTrips] = useState(triplist)
  const dashboardUrl = () => {
    return `/dashboard/user/${router.query.id}`
  }

  //Function to create a new Trip. Executed when we click on the button "Create"
  const createTrip = (newTrip)=>{
    newTrip.id = trips.length + 1
    setTrips([...trips, newTrip])
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
        onClick={()=>setModalCreateVisible(true)}
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
        <TripTable data={trips} />
      </div>
    </div>
    <CreateTripModal showModal={modalCreateVisible} setShowModal={setModalCreateVisible}
     runFunction={createTrip} action="create" />
    
  </div>
    </DashoardLayout>
  )
}

export default Trips