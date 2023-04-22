import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const SideBarDashboard = ({ closeSideBarPhone, className }) => {

    const router = useRouter()
    const [showDropDownTrips, setShowDropDownTrips] = useState(router.asPath.match(/trips/)? true : false)
    const [showDropDownVehicles, setShowDropDownVehicles] = useState(router.asPath.match(/vehicle/)? true : false)

    const dashboardUrl = () => {
      return `/dashboard/user/${router.query.id}`
    }

    const toggleDropDownTrips = () => {
      setShowDropDownTrips(!showDropDownTrips)
    }

    const toggleDropDownVehicles = () => {
      setShowDropDownVehicles(!showDropDownVehicles)
    }

    return (
        <div id="SideBarDashboard" className={className + " sideBarDashboard flex justify-center bg-white overflow-auto"}>
      <div className="flex flex-col">
        <div className="logoText flex font-bold lg:pl-3">
          <img src="/images/dashboard/logo_lets_go.svg" alt="Let's go" className="w-48 relative -left-3" />
        </div>
        <div className="flex flex-col divLiens" 
        // onClick={closeSideBarPhone}
        >
            <Link href={dashboardUrl()} className={"block homelink " + (router.asPath == dashboardUrl() ? "active-link" : "")}>
            <i className="fa-solid fa-house pr-2"></i>Home
            </Link>

            <div className="dropdown-title flex justify-between place-items-center cursor-pointer"
            onClick={toggleDropDownTrips}>
              <div className="flex place-items-center">
                <i className="fa-solid fa-suitcase pr-2"></i>
                <span>Trips</span>
              </div>
              <i className="fa-solid fa-chevron-down text-xs"></i>
            </div>

            {
              showDropDownTrips && 
              <div className="dropdown-body">
              <Link href={dashboardUrl() + '/trips'} className={"sublink text-sm block " + (router.asPath == dashboardUrl() + '/trips' ? "active-link2" : "")}>
                <i className="fa-regular fa-circle text-xs pr-2"></i>My trips
              </Link>
            
              <Link href={dashboardUrl() + '/tripsmanagement'} className={"sublink text-sm block " + (router.asPath == dashboardUrl() + '/tripsmanagement' ? "active-link2" : "")}>
                <i className="fa-regular fa-circle text-xs pr-2"></i>Trips management
              </Link>
              </div>
            }

            <Link href={dashboardUrl() + '/drivers'} className={"block " + (router.asPath == dashboardUrl() + '/drivers' ? "active-link2" : "")}>
              <i className="fa-solid fa-user-group pr-2"></i>Drivers
            </Link>


            <div className="dropdown-title flex justify-between place-items-center cursor-pointer"
            onClick={toggleDropDownVehicles}>
              <div className="flex place-items-center">
                <i className="fa-solid fa-car pr-2"></i>
                <span>Vehicles</span>
              </div>
              <i className="fa-solid fa-chevron-down text-xs"></i>
            </div>

            {
              showDropDownVehicles && 
              <div className="dropdown-body">
              <Link href={dashboardUrl() + '/vehicles'} className={"sublink text-sm block " + (router.asPath == dashboardUrl() + '/vehicles' ? "active-link2" : "")}>
              <i className="fa-regular fa-circle text-xs pr-2"></i>My vehicles
              </Link>

              <Link href={dashboardUrl() + '/vehicletypes'} className={"sublink text-sm block " + (router.asPath == dashboardUrl() + '/vehicletypes' ? "active-link2" : "")}>
                <i className="fa-regular fa-circle text-xs pr-2"></i>Vehicle types
              </Link>
            
              <Link href={dashboardUrl() + '/vehicleoptions'} className={"sublink text-sm block " + (router.asPath == dashboardUrl() + '/vehicleoptions' ? "active-link2" : "")}>
                <i className="fa-regular fa-circle text-xs pr-2"></i>Comfort options
              </Link>
              </div>
            }

        </div>
      </div>
    </div>
    );
};

export default SideBarDashboard;