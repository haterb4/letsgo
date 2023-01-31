import React, { useState } from "react";
import HeaderSubMenu from "@/componnents/dashboard/HeaderSubMenu";
import { useDetectClickOutside } from "react-detect-click-outside";

const HeaderDashboard = ({
  sideBarVisible,
  sideBarPhoneVisible,
  toggleSideBar,
  toggleSideBarPhone,
}) => {
  const [subMenuVisible, setSubMenuVisible] = useState(false);
  const currentUser = { name: "Johanna", isOnline: true };

  const toggleSubMenu = () => {
    setSubMenuVisible(!subMenuVisible);
  };

  const closeSubMenu = () => {
    if (subMenuVisible) setSubMenuVisible(false);
  };

  const ref = useDetectClickOutside({ onTriggered: closeSubMenu });

  return (
    <div
      id="HeaderDashboard"
      ref={ref}
      className="z-30 headerDashboard relative flex justify-between place-items-center bg-white
    pr-2 sm:pr-4 md:pr-8 pl-2 md:pl-4  mt-1 sm:mt-2 rounded-md py-1 md:py-2
    dashboard-content-margin"
    >
      <div className="flex place-items-center">
        <i
          className={
            "fa-solid text-xl md:text-2xl cursor-pointer " +
            (sideBarVisible ? "fa-xmark" : "fa-bars")
          }
          title={sideBarVisible ? "Masquer le menu" : "Afficher le menu"}
          onClick={toggleSideBar}
          id="toggleSideBar"
        ></i>
        <i
          className="fa-solid fa-bars text-xl cursor-pointer hide"
          title={sideBarPhoneVisible ? "Masquer le menu" : "Afficher le menu"}
          onClick={toggleSideBarPhone}
          id="toggleSideBarPhone"
        ></i>
      </div>
      <div className="flex justify-between place-items-center gap-4 sm:gap-6 lg:gap-8">
        <i className="fa-regular fa-message"></i>
        <i className="fa-solid fa-magnifying-glass"></i>
        <i className="fa-regular fa-bell"></i>
        <span>{currentUser.name}</span>
        <div className="relative cursor-pointer" onClick={toggleSubMenu}>
          <img
            src="/images/dashboard/profile-pic.png"
            alt="profile pic"
            className="w-10"
          />
          {currentUser.isOnline && (
            <div className="absolute bottom-0 right-1 circle-sm bg-green-500 border border-white"></div>
          )}
        </div>
      </div>
      {subMenuVisible && <HeaderSubMenu />}
    </div>
  );
};

export default HeaderDashboard;