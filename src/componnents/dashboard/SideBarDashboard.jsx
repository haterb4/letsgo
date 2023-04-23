import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const SideBarDashboard = ({ closeSideBarPhone, className }) => {

    const router = useRouter()
    const [showDropDownTrips, setShowDropDownTrips] = useState(router.asPath.match(/trips/)? true : false)
    const [showDropDownVehicles, setShowDropDownVehicles] = useState(router.asPath.match(/vehicle/)? true : false)
    const [showDropDownSettings, setShowDropDownSettings] = useState(router.asPath.match(/settings/)? true : false)

    const dashboardUrl = () => {
      return `/dashboard/user/${router.query.id}`
    }

    const toggleDropDownTrips = () => {
      setShowDropDownTrips(!showDropDownTrips)
    }

    const toggleDropDownVehicles = () => {
      setShowDropDownVehicles(!showDropDownVehicles)
    }

    const toggleDropDownSettings = () => {
      setShowDropDownSettings(!showDropDownSettings)
    }

    return (
        <div id="SideBarDashboard" className={className + " sideBarDashboard flex justify-center bg-grisclair overflow-auto"}>
      <div className="flex flex-col">
        <div className="logoText flex font-bold lg:pl-3">
          <img src="/images/dashboard/logo_lets_go.svg" alt="Let's go" className="w-48 relative -left-3" />
        </div>
        <div className="flex flex-col divLiens" 
        // onClick={closeSideBarPhone}
        >
            <Link href={dashboardUrl()} className={"flex place-items-center homelink " + (router.asPath == dashboardUrl() ? "active-link" : "")}>
            <i className="fa-solid fa-house pr-2"></i>Home
            </Link>

            <Link href={dashboardUrl() + '/earnings'} className={"flex place-items-center " + (router.asPath == dashboardUrl() + '/earnings' ? "active-link" : "")}>
              <i className="fa-solid fa-sack-dollar pr-2"></i>Earnings
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
              <Link href={dashboardUrl() + '/trips'} className={"sublink text-sm flex place-items-center " + (router.asPath == dashboardUrl() + '/trips' ? "active-link" : "")}>
                <i className="fa-regular fa-circle text-xs pr-2"></i>My trips
              </Link>
            
              <Link href={dashboardUrl() + '/tripsmanagement'} className={"sublink text-sm flex place-items-center " + (router.asPath == dashboardUrl() + '/tripsmanagement' ? "active-link" : "")}>
                <i className="fa-regular fa-circle text-xs pr-2"></i>Trips management
              </Link>
              </div>
            }

            <Link href={dashboardUrl() + '/schedule'} className={"flex place-items-center " + (router.asPath == dashboardUrl() + '/schedule' ? "active-link" : "")}>
              <i className="fa-solid fa-calendar-days pr-2"></i>Schedule
            </Link>

            <Link href={dashboardUrl() + '/drivers'} className={"flex place-items-center " + (router.asPath == dashboardUrl() + '/drivers' ? "active-link" : "")}>
              <i className="fa-solid fa-user-group pr-2"></i>Drivers
            </Link>

            <Link href={dashboardUrl() + '/vehicles'} className={"flex place-items-center " + (router.asPath == dashboardUrl() + '/vehicles' ? "active-link" : "")}>
              <i className="fa-solid fa-car pr-2"></i><span>Vehicles</span>
            </Link>

            {/* <div className="dropdown-title flex justify-between place-items-center cursor-pointer"
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
              <Link href={dashboardUrl() + '/vehicles'} className={"sublink text-sm flex place-items-center " + (router.asPath == dashboardUrl() + '/vehicles' ? "active-link" : "")}>
              <i className="fa-regular fa-circle text-xs pr-2"></i>My vehicles
              </Link>

              <Link href={dashboardUrl() + '/vehicletypes'} className={"sublink text-sm flex place-items-center " + (router.asPath == dashboardUrl() + '/vehicletypes' ? "active-link" : "")}>
                <i className="fa-regular fa-circle text-xs pr-2"></i>Vehicle types
              </Link>
            
              <Link href={dashboardUrl() + '/vehicleoptions'} className={"sublink text-sm flex place-items-center " + (router.asPath == dashboardUrl() + '/vehicleoptions' ? "active-link" : "")}>
                <i className="fa-regular fa-circle text-xs pr-2"></i>Comfort options
              </Link>
              </div>
            } */}

            <Link href={dashboardUrl() + '/comments'} className={"flex place-items-center " + (router.asPath == dashboardUrl() + '/comments' ? "active-link" : "")}>
              <i className="fa-solid fa-comment pr-2"></i><span>Comments and ratings</span>
            </Link>

            <Link href={dashboardUrl() + '/promocode'} className={"flex place-items-center " + (router.asPath == dashboardUrl() + '/promocode' ? "active-link" : "")}>
              <i className="fa-solid fa-tag pr-2"></i>Promo code
            </Link>

            <Link href={dashboardUrl() + '/notifications'} className={"flex place-items-center " + (router.asPath == dashboardUrl() + '/notifications' ? "active-link" : "")}>
              <i className="fa-solid fa-bell pr-2"></i>Notifications
            </Link>

            <div className="mt-24"></div>

            <div className="dropdown-title flex justify-between place-items-center cursor-pointer"
            onClick={toggleDropDownSettings}>
              <div className="flex place-items-center">
                <i className="fa-solid fa-gear pr-2"></i>
                <span>Planner settings</span>
              </div>
              <i className="fa-solid fa-chevron-down text-xs"></i>
            </div>

            <Link href={dashboardUrl() + '/logout'} className={"flex place-items-center " + (router.asPath == dashboardUrl() + '/logout' ? "active-link" : "")}>
              <i className="fa-solid fa-arrow-right-from-bracket pr-2"></i>Logout
            </Link>

        </div>
      </div>
    </div>
    );
};

export default SideBarDashboard;