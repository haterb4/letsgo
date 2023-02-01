import FooterDashboard from '@/componnents/dashboard/FooterDashboard';
import SideBarDashboard from '@/componnents/dashboard/SideBarDashboard';
import React, { useState } from 'react';
import { useDetectClickOutside } from 'react-detect-click-outside';
import '@/assets/fontAwesome/css/all.min.css';
import '@/styles/Dashboard.scss'
import '@/styles/style-dashboard.scss'
import '@/styles/style-dashboard-2.scss'
import HeaderDashboard from '@/componnents/dashboard/HeaderDashboard';

const DashoardLayout = ({ children }) => {

    const [sideBarVisible, setSideBarVisible] = useState(true)
    const [sideBarPhoneVisible, setSideBarPhoneVisible] = useState(false)

    const [justToggle, setJustToggle] = useState(false)

    const toggleSideBar = () => {
        setSideBarVisible(!sideBarVisible)
    }

    const toggleSideBarPhone = () => {
        setSideBarPhoneVisible(!sideBarPhoneVisible)
        setJustToggle(true) //On vient tout juste de toggle
    }

    const closeSideBarPhone = () => {
      if(!justToggle) setSideBarPhoneVisible(false)  //Si on vient tout juste de toggle, alors on ne fait rien (on ne masque pas la sidebar)
      setJustToggle(false)
    }

    const ref = useDetectClickOutside({ onTriggered: closeSideBarPhone })

    return (
        <div id="Dashboard" className="dashboard">
            <div
            className={"grid headergrid w-full fixed top-0 right-0 z-20 " + (sideBarVisible ? 'headergrid-normal' : 'headergrid-phone')}
            >
            <HeaderDashboard
                toggleSideBar={toggleSideBar}
                toggleSideBarPhone={toggleSideBarPhone}
                sideBarVisible={sideBarVisible}
                sideBarPhoneVisible={sideBarPhoneVisible}
            />
            </div>
            <div
            className={"grid maingrid relative bg-grisbleu " + (sideBarVisible ? 'maingrid-normal' : 'maingrid-phone')}
            >
            {sideBarVisible && 
             <div className="typeNormal z-40 fixed top-0 left-0">
                <SideBarDashboard/>
             </div> }

            {/* <transition name="slide"> */}
            {sideBarPhoneVisible && 
                <div ref={ref} className="typePhone z-40 fixed top-0 left-0">
                    <SideBarDashboard className="hide"
                    closeSideBarPhone={closeSideBarPhone}
                    />
                </div> }
            {/* </transition> */}

            <div className={"pageContent " + (sideBarVisible ? 'sideBarVisible' : '')
            + ' dashboard-content-layout-padding'} >
                {/* <slot /> */}
                <main>{children}</main>
            </div>
            <FooterDashboard />
            </div>
        </div>
    );
};

export default DashoardLayout;