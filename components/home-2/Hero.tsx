"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import LocationEntry from "../home-6/LocationEntry";
import DatePicker from "react-datepicker";
import HeroDropdown4 from "@/components/home-1/HeroDropdown4";
import "react-datepicker/dist/react-datepicker.css";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import SelectPeople from "../home-6/SelectPeople";
import { SearchIcon } from "@/public/data/icons";
import logo from "@/public/img/logos/logo1.png";
import { selectRenderingLanguage } from "@/app/store/features/language/languageSlice";
import { useAppSelector } from "@/app/store/hooks";
import homePageTextProvider from "@/public/languages/pages/home";

const Hero = () => {
  // const [active, setActive] = useState("rent");
  const [startDate, setStartDate] = useState(new Date());
  const pageLanguage = useAppSelector(selectRenderingLanguage)
  return (
    <section className="bg-[url('/img/secondary-hero-bg.jpg')] bg-cover bg-no-repeat relative isolate bg-[50%] top-0 min-h-screen after:w-full after:absolute after:h-full after:bottom-0 after:left-0 after:bg-gradient-to-t after:rounded-b-2xl after:from-[#04052f5b] after:to-[#04052f5b]">
      <div className="container grid place-items-center py-20 lg:pb-[180px] lg:pt-[260px]">
        <div className="max-w-[1200px] mx-auto z-10 relative px-3 xl:px-0">
          <Image src={logo} className="p-2 lg:hidden" alt="logo" />
          <h1 className="h1 text-white font-semibold mb-10 lg:mr-36">
            {homePageTextProvider[pageLanguage].title}
          </h1>
          <div className="bg-white rounded-xl p-3 md:p-5">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 text-lg">
              <div className="flex gap-2">
                <input
                  type="radio"
                  name="way"
                  id="one"
                  defaultChecked={true}
                  className="scale-125 accent-[var(--primary)]"
                />
                <label htmlFor="one">Normal</label>
              </div>
              <div className="flex gap-2">
                <input
                  type="radio"
                  name="way"
                  id="round"
                  className="scale-125 accent-[var(--primary)]"
                />
                <label htmlFor="round">VIP</label>
              </div>
              <div className="flex gap-2">
                <input
                  type="radio"
                  name="way"
                  id="multi"
                  className="scale-125 accent-[var(--primary)]"
                />
                <label htmlFor="multi">Emergency</label>
              </div>
            </div>
            <div className="flex flex-wrap gap-5 mt-6">
              <LocationEntry placeholder="From" />
              <LocationEntry placeholder="To" />
              <div className="w-full md:w-[48%] xxl:w-[17%] flex pl-2 pr-3 items-center justify-between rounded-full sm:text-sm bg-[var(--bg-1)] border">
                <DatePicker
                  selected={startDate}
                  onChange={(date: any) => setStartDate(date)}
                  placeholderText="Depart Date"
                  className="w-full bg-[var(--bg-1)] p-2 rounded-full focus:outline-none"
                />
                <CalendarDaysIcon className="w-5 h-5 text-gray-600 shrink-0" />
              </div>
              {/* <ClassEntry /> */}
              <SelectPeople />
              <HeroDropdown4 />
              <Link
                href="#"
                className="py-[14px] px-6 w-full flex justify-center items-center md:w-auto md:h-auto text-white bg-primary rounded-full">
                <SearchIcon />
              </Link>
            </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
