import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const SideBarDashboard = ({ closeSideBarPhone, className }) => {

    const router = useRouter()
    const [showDropDown, setShowDropDown] = useState(true)

    const dashboardUrl = () => {
      return `/dashboard/user/${router.query.id}`
    }

    const toggleDropDown = () => {
      setShowDropDown(!showDropDown)
    }

    return (
        <div id="SideBarDashboard" className={className + " sideBarDashboard flex justify-center bg-white overflow-auto"}>
      <div className="flex flex-col py-5">
        <div className="logoText flex font-bold pl-2 lg:pl-3">
          Let's go
        </div>
        <div className="flex flex-col divLiens" 
        // onClick={closeSideBarPhone}
        >
            <Link href={dashboardUrl()} className={"block homelink " + (router.pathname.match(/^\/dashboard/) ? "active-link" : "")}>
            <i className="fa-solid fa-house pr-2"></i>Dashboard
            </Link>

            <div className="dropdown-title flex justify-between place-items-center cursor-pointer"
            onClick={toggleDropDown}>
              <div className="flex place-items-center">
                <i className="fa-solid fa-suitcase pr-2"></i>
                <span>Trips</span>
              </div>
              <i className="fa-solid fa-chevron-down text-xs"></i>
            </div>

            {
              showDropDown && 
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

            <Link href={dashboardUrl() + '/vehicles'} className={"block " + (router.asPath == dashboardUrl() + '/vehicles' ? "active-link2" : "")}>
              <i className="fa-solid fa-car pr-2"></i>Vehicles
            </Link>

        </div>
      </div>
    </div>
    );
};

export default SideBarDashboard;