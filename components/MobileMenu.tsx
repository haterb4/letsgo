import {
  Bars3Icon,
  BuildingOffice2Icon,
  HeartIcon,
  HomeIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import logo from "@/public/img/logos/logo.png";
import Navbar from "./NavbarMobile";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();
  const toggleOffCanvas = () => {
    setIsOpen((prevState) => !prevState);
  };
  useEffect(() => {
    setIsOpen(false);
  }, [path]);
  return (
    <header className="lg:hidden fixed bottom-0 left-0 right-0 p-2 bg-white shadow z-[52]">
      <ul className=" flex items-center justify-around">
        <li>
          <Link
            href="/home-2"
            className={`flex flex-col items-center gap-1 py-2 px-3 rounded-md ${
              path == "/home-2" && "bg-primary text-white"
            }`}>
            <HomeIcon className="w-5 h-5" />
            <span className="text-center text-xs">Home</span>
          </Link>
        </li>{" "}
        <li>
          <Link
            href="/flight-list"
            className={`flex flex-col items-center gap-1 py-2 px-3 rounded-md ${
              path == "/flight-list" && "bg-primary text-white"
            }`}>
            <BuildingOffice2Icon className="w-5 h-5" />
            <span className="text-center text-xs">Trips Listing</span>
          </Link>
        </li>
        <li>
          <Link
            href="/user-wishlist"
            className={`flex flex-col items-center gap-1 py-2 px-3 rounded-md ${
              path == "/user-wishlist" && "bg-primary text-white"
            }`}>
            <HeartIcon className="w-5 h-5" />
            <span className="text-center text-xs">Wishlist</span>
          </Link>
        </li>
        <li>
          <button
            onClick={toggleOffCanvas}
            className={`flex flex-col items-center gap-1 py-2 px-3 rounded-md`}>
            <Bars3Icon className="w-5 h-5" />
            <span className="text-center text-xs">Menu</span>
          </button>
        </li>
      </ul>
      <div
        className={`fixed top-0 left-0 h-screen w-full bg-white shadow-lg z-20 transform transition-transform ease-in-out duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}>
        <button
          onClick={toggleOffCanvas}
          className="p-3 rounded-full absolute top-1 right-1">
          <XMarkIcon className="w-6 h-6" />
        </button>
        <Image src={logo} className="p-2" alt="logo" />
        <div className="border-b my-2"></div>
        <Navbar />
      </div>
    </header>
  );
};

export default MobileMenu;
