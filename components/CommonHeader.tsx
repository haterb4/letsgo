"use client";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import LangDropdown from "./LangDropdown";
import NotificationDropdown from "./NotificationDropdown";
import ProfileDropdown from "./ProfileDropdown";
import { useAppSelector } from "@/app/store/hooks";
import { selectToken } from "@/app/store/features/token/tokenSlice";
import Link from "next/link";

const CommonHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const accessToken = useAppSelector(selectToken)

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, []);
  return (
    <header
      className={`z-30 border-y sticky hidden lg:block top-0 ${
        scrolled &&
        "z-50 shadow-md bg-white bg-opacity-70 backdrop-blur border-0"
      } duration-300`}>
      <div className="container flex justify-between items-center relative px-3 py-2 lg:py-0 lg:px-0">
        <div className="lg:order-2 flex gap-2 items-center">
          <LangDropdown lang={true}/>
          <LangDropdown lang={false}/>
          <NotificationDropdown />
          {accessToken !== undefined && accessToken !== '' ?
          <ProfileDropdown />
          :
          <div className="flex space-x-4 items-center z-10 bg-white px-4 py-[12px] rounded-3xl">
            <Link href="/sign-in">Sign in / Sign up</Link>
          </div>
          }
        </div>

        <div className="lg:order-1">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden border py-1 px-2 rounded-md bg-[var(--btn-bg)]">
            <i className="las la-bars text-2xl"></i>
          </button>
          <div className={`lg:block ${menuOpen ? "block" : "hidden"}`}>
            <Navbar />
          </div>
        </div>
      </div>
    </header>
  );
};

export default CommonHeader;
