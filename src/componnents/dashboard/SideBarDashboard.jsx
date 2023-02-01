import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const SideBarDashboard = ({ closeSideBarPhone, className }) => {

    const router = useRouter()
    const [showDropDown, setShowDropDown] = useState(true)

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
            <Link href="/dashboard" className={"block homelink " + (router.pathname.match(/^\/dashboard/) ? "active-link" : "")}>
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
              <Link href="/dashboard/my-trips" className={"sublink text-sm block " + (router.pathname == "/dashboard/my-trips" ? "active-link" : "")}>
                <i className="fa-regular fa-circle text-xs pr-2"></i>My trips
              </Link>
            
              <Link href="/dashboard/trips-management" className={"sublink text-sm block " + (router.pathname == "/dashboard/trips-management" ? "active-link" : "")}>
                <i className="fa-regular fa-circle text-xs pr-2"></i>Trips management
              </Link>
            </div>
            }

            <Link href="/dashboard/members" className={"block " + (router.pathname == "/dashboard/members" ? "active-link" : "")}>
              <i className="fa-solid fa-user-group pr-2"></i>Drivers
            </Link>

            <Link href="/dashboard/roles" className={"block " + (router.pathname == "/dashboard/roles" ? "active-link" : "")}>
              <i className="fa-solid fa-car pr-2"></i>Vehicles
            </Link>

        </div>
      </div>
    </div>
    );
};

export default SideBarDashboard;