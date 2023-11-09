import hotelheroel1 from "@/public/img/hotel-hero-el-1.png";
import hotelheroel2 from "@/public/img/hotel-hero-el-2.png";
import hotelheroel3 from "@/public/img/hotel-hero-el-3.png";
import hotelheroel4 from "@/public/img/hotel-hero-el-4.png";
import hotelheroel5 from "@/public/img/hotel-hero-el-5.png";
import videoimg from "@/public/img/video-img.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import SubHeadingBtn from "../SubHeadingBtn";
import LocationEntry from "../home-3/LocationEntry";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import { SearchIcon } from "@/public/data/icons";
import HeroDropdown4 from "../home-1/HeroDropdown4";
import "node_modules/react-modal-video/scss/modal-video.scss";

const Hero = () => {
  const [isOpen, setOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="relative py-[60px] lg:pt-[80px] lg:pb-[100px]">
      <Image
        src={hotelheroel1}
        alt="image"
        className="hidden xl:block absolute bottom-10 right-10"
      />
      <Image
        src={hotelheroel2}
        alt="image"
        className="hidden xl:block absolute bottom-10 left-10"
      />
      <Image
        src={hotelheroel3}
        alt="image"
        className="hidden xl:block absolute top-14 left-[48%]"
      />
      <Image
        src={hotelheroel4}
        alt="image"
        className="hidden xl:block absolute top-[2.75rem] left-[4.87rem]"
      />
      <Image
        src={hotelheroel5}
        alt="image"
        className="hidden xl:block absolute top-[17.5rem] left-[40%]"
      />

      <div className="container px-3 lg:pb-32 relative xl:after:absolute xl:after:bg-[url('/img/hotel-hero-bg.png')] xl:after:bg-[length:600px_500px] xxl:after:bg-auto xl:after:bg-no-repeat after:bg-right 3xl:after:-right-32 xl:after:bottom-4 after:w-full after:h-full xl:after:z-[-1]">
        <span
          onClick={() => setOpen(true)}
          className="video-popup cursor-pointer hidden lg:block absolute top-0 lg:right-4">
          <Image src={videoimg} alt="image" className="" />
        </span>
        <div className="grid grid-cols-12 ">
          <div className="col-span-12 lg:col-span-8 xl:col-span-6">
            <SubHeadingBtn text="Book Your Dream Vacation" classes="bg-white" />

            <h1 className="h1 font-semibold mt-4 mb-6">
              Find the Best Hotel Deals with us
            </h1>
            <p className="mb-10 text-xl">
              Welcome to our hotel booking website, where you can easily find
              the perfect hotel for your next trip.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-5 mt-6 bg-white p-5 rounded-xl shadow-lg">
          <LocationEntry placeholder="Location" />

          <div className="w-full md:w-[48%] xl:w-[22%] flex pr-3 items-center justify-between rounded-full sm:text-sm bg-[var(--bg-1)] border">
            <DatePicker
              selected={startDate}
              placeholderText="Check In"
              onChange={(date: any) => setStartDate(date)}
              className="w-full bg-[var(--bg-1)] p-3 rounded-full focus:outline-none"
            />
            <CalendarDaysIcon className="w-6 h-6 text-gray-600 shrink-0" />
          </div>
          <div className="w-full md:w-[48%] xl:w-[22%] flex pr-3 items-center justify-between rounded-full sm:text-sm bg-[var(--bg-1)] border">
            <DatePicker
              selected={startDate}
              placeholderText="Check Out"
              onChange={(date: any) => setStartDate(date)}
              className="w-full bg-[var(--bg-1)] p-3 rounded-full focus:outline-none"
            />
            <CalendarDaysIcon className="w-6 h-6 text-gray-600 shrink-0" />
          </div>
          <HeroDropdown4 />
          <Link
            href="#"
            className="py-[14px] px-6 w-full flex justify-center xl:w-auto text-white bg-primary rounded-full">
            <SearchIcon />
          </Link>
        </div>
      </div>
      <ModalVideo
        channel="vimeo"
        isOpen={isOpen}
        videoId="115041822"
        onClose={() => setOpen(false)}
      />
    </div>
  );
};

export default Hero;
