import FooterDashboard from '@/componnents/dashboard/FooterDashboard';
import SideBarDashboard from '@/componnents/dashboard/SideBarDashboard';
import React, { useState } from 'react';
import { useDetectClickOutside } from 'react-detect-click-outside';

import '@/assets/fontAwesome/css/all.min.css';
import '@/styles/Dashboard.scss'
import '@/styles/style-dashboard.scss'
import '@/styles/style-dashboard-2.scss'
import HeaderDashboard from '@/componnents/dashboard/HeaderDashboard';
import { AnimatePresence, motion } from 'framer-motion';

const DashboardLayout = ({ children }) => {

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
            className={"grid maingrid relative bg-grisclair " + (sideBarVisible ? 'maingrid-normal' : 'maingrid-phone')}
            >
            <AnimatePresence>
                {sideBarVisible && 
                <motion.div className="typeNormal z-40 fixed top-0 left-0" key="sideBar"
                initial="visible" animate="visible" exit="hidden" variants={{
                    hidden: {x: -240, opacity: 0, transition: {duration: .3}},
                    visible: {x: 0, opacity: 1, transition: {duration: .3}},
                }} 
                >
                    <SideBarDashboard/>
                </motion.div>
                }
            </AnimatePresence>

            <AnimatePresence>
                {sideBarPhoneVisible && 
                    <motion.div ref={ref} className="typePhone z-40 fixed top-0 left-0" key="sideBarPhone"
                    initial="hidden" animate="visible" exit="hidden" variants={{
                        hidden: {x: -240, opacity: 0, transition: {duration: .3}},
                        visible: {x: 0, opacity: 1, transition: {duration: .3}},
                    }} 
                    >
                        <SideBarDashboard className="hide"
                        closeSideBarPhone={closeSideBarPhone}
                        />
                    </motion.div> 
                }
            </AnimatePresence>

            <div className={"pageContent " + (sideBarVisible ? 'sideBarVisible' : '')
            + ' dashboard-content-layout-padding'} >
                {/* <img src="/images/dashboard/peinture_gauche.svg" alt="peinture" className="relative" /> */}
                <main>{children}</main>
            </div>
            <FooterDashboard />
            </div>
        </div>
    );
};

export default DashboardLayout;