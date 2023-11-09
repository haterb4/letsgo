import Faq from "@/components/home-1/Faq";
import Cta from "@/components/home-6/Cta";

import {
  InformationCircleIcon,
  ShieldExclamationIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <header className="text-white px-3 text-center py-[60px] lg:py-[120px] bg-[var(--dark)]">
        <h1 className="h1 font-semibold mb-7 lg:mb-10">How Can We Help You?</h1>
        <form className="max-w-[526px] mx-auto bg-white rounded-[30px] flex justify-between  p-2 mb-7 lg:mb-10">
          <input
            type="text"
            className="w-full focus:outline-none rounded-[30px] px-3 text-black"
            placeholder="Search Question"
          />
          <button type="submit" className="btn-primary">
            Search
          </button>
        </form>
        <div className="max-w-[680px] mx-auto text-center justify-center gap-3 flex flex-wrap">
          <Link href="#">How Can We Help?</Link>
          <Link href="#">How to upload data to the system?</Link>
          <Link href="#">Installation Guide?</Link>
          <Link href="#">How to view expired tickets?</Link>
          <Link href="#">View All Question</Link>
        </div>
      </header>
      <section className="py-[60px] lg:py-[120px] bg-[var(--bg-1)]">
        <div className="container">
          <div className="max-w-[526px] text-center mx-auto">
            <h2 className="h2 mb-3 lg:mb-6">Need more help!</h2>
            <p className="mb-10 lg:mb-[60px]">
              Booking a online can be a convenient and cost-effective way to
              secure your accommodations for your next trip
            </p>
          </div>
          <div className="grid grid-cols-12 gap-4 lg:gap-6 px-3 ">
            <div className="col-span-12 md:col-span-6 xl:col-span-4 shadow-xl bg-white rounded-2xl p-4 md:p-6 lg:p-8">
              <div className="flex justify-between items-center">
                <Link href="/help-center-details" className="h3">
                  Get Started
                </Link>
                <ShieldExclamationIcon className="w-14 h-14 text-primary bg-[var(--primary-light)] rounded-full p-2" />
              </div>
              <ul className="list-disc border-t pt-3 mt-3 border-dashed list-inside marker:text-primary flex flex-col gap-2">
                <li>Gulp and Customization</li>
                <li>Color Scheme and Logo Settings</li>
                <li>Dark mode, RTL Version, and Lazy Load</li>
                <li>Updates and Support</li>
              </ul>
            </div>
            <div className="col-span-12 md:col-span-6 xl:col-span-4 shadow-xl bg-white rounded-2xl p-4 md:p-6 lg:p-8">
              <div className="flex justify-between items-center">
                <Link href="/help-center-details" className="h3">
                  Account Setup
                </Link>
                <UserCircleIcon className="w-14 h-14 text-[#22804A] bg-[#EBFBF2] rounded-full p-2" />
              </div>
              <ul className="list-disc border-t pt-3 mt-3 border-dashed list-inside marker:text-primary flex flex-col gap-2">
                <li>Gulp and Customization</li>
                <li>Color Scheme and Logo Settings</li>
                <li>Dark mode, RTL Version, and Lazy Load</li>
                <li>Updates and Support</li>
              </ul>
            </div>
            <div className="col-span-12 md:col-span-6 xl:col-span-4 shadow-xl bg-white rounded-2xl p-4 md:p-6 lg:p-8">
              <div className="flex justify-between items-center">
                <Link href="/help-center-details" className="h3">
                  Other Topics
                </Link>
                <InformationCircleIcon className="w-14 h-14 text-[#9C742B] bg-[#FFF9ED] rounded-full p-2" />
              </div>
              <ul className="list-disc border-t pt-3 mt-3 border-dashed list-inside marker:text-primary flex flex-col gap-2">
                <li>Gulp and Customization</li>
                <li>Color Scheme and Logo Settings</li>
                <li>Dark mode, RTL Version, and Lazy Load</li>
                <li>Updates and Support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Cta />
      <Faq />
    </>
  );
};

export default page;
