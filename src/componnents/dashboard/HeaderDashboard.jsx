import React, { useState } from 'react';
import '@/styles/HeaderDashboard.scss'
import HeaderSubMenu from '@/componnents/dashboard/HeaderSubMenu'

const HeaderDashboard = ({ sideBarVisible, toggleSideBar, toggleSideBarPhone }) => {

    const [subMenuVisible, setSubMenuVisible] = useState(false)
    const currentUser = {name: 'Johanna', isOnline: true}

    const toggleSubMenu = () => {
      setSubMenuVisible(!subMenuVisible)
    }

    const closeSubMenu = () => {
      setSubMenuVisible(false)
    }


    return (
        <div id="HeaderDashboard" class="headerDashboard relative flex justify-between place-items-center bg-white
    pr-2 sm:pr-4 md:pr-8 pl-2 md:pl-4  mt-1 sm:mt-2 rounded-md
    dashboard-content-margin">
      <div class="flex place-items-center">
        <i class="fa-solid text-xl md:text-2xl" className={sideBarVisible? 'fa-xmark' : 'fa-bars'}
        title={sideBarVisible? 'Masquer le menu' : 'Afficher le menu'}
        onClick={toggleSideBar} id="toggleSideBar"></i>

        <i class="fa-solid fa-bars text-xl hide" 
          onClick={toggleSideBarPhone} id="toggleSideBarPhone"></i>
      </div>
      <div class="flex justify-between place-items-center gap-4 sm:gap-6 lg:gap-8">
        <i class="fa-regular fa-message"></i>
        <i class="fa-solid fa-magnifying-glass"></i>
        <i class="fa-regular fa-bell"></i>
        <span>{currentUser.name}</span>
        <div class="relative" onClick={toggleSubMenu}>
          <img src="~/assets/img/settings/profile-pic.png" alt="profile pic" class="w-10" />
          {currentUser.isOnline && 
          <div class="absolute bottom-0 right-1 circle-sm bg-green-500 border border-white"></div>
          }
        </div>
      </div>
      {subMenuVisible && <HeaderSubMenu closeDropdown={closeSubMenu} />}
    </div>

    );
};

export default HeaderDashboard;