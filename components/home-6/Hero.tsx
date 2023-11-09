import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import SubHeadingBtn from "../SubHeadingBtn";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import { SearchIcon } from "@/public/data/icons";
import LocationEntry from "./LocationEntry";
import ClassEntry from "./ClassEntry";
import SelectPeople from "./SelectPeople";

const Hero = () => {
  const [isOpen, setOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="relative px-3 xl:px-0">
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="L61p2uyiMSo"
        onClose={() => setOpen(false)}
      />
      <Image
        width={117}
        height={117}
        src="/img/flight-hero-el-1.png"
        alt="image"
        className="hidden xl:block absolute left-16 top-14"
      />
      <Image
        height={100}
        width={100}
        src="/img/flight-hero-el-2.png"
        alt="image"
        className="hidden xl:block absolute top-[50%] left-[50%]"
      />
      <span
        onClick={() => setOpen(true)}
        style={{ zIndex: 2 }}
        className="cursor-pointer absolute hidden lg:block top-[100px] right-[25%]">
        <Image
          height={80}
          width={80}
          src="/img/video-img.png"
          alt="image"
          className=""
        />
      </span>
      <div className="container relative py-[60px] lg:py-[120px] xl:after:bg-[url('/img/flight-hero-bg.png')] xl:after:bg-no-repeat after:absolute xl:after:w-full xl:after:h-full after:bg-right after:bottom-0 xxl:after:-right-40 after:-z-[1]">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 lg:col-span-8 xl:col-span-6 xxl:col-span-5">
            <SubHeadingBtn
              text="Fly Anywhere with Confidence"
              classes="bg-[var(--primary-light)]"
            />
            <h1 className="h1 mt-4 mb-6 font-semibold">
              Book Your Next Flight with Ease
            </h1>
            <p className="mb-10 text-lg">
              Ready to explore the world? Our flight booking website makes it
              easy to unlock new destinations and experiences.
            </p>
          </div>
        </div>
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
              <label htmlFor="one">One Way</label>
            </div>
            <div className="flex gap-2">
              <input
                type="radio"
                name="way"
                id="round"
                className="scale-125 accent-[var(--primary)]"
              />
              <label htmlFor="round">Round Trip</label>
            </div>
            <div className="flex gap-2">
              <input
                type="radio"
                name="way"
                id="multi"
                className="scale-125 accent-[var(--primary)]"
              />
              <label htmlFor="multi">Multi City</label>
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
            <ClassEntry />
            <SelectPeople />
            <Link
              href="#"
              className="py-[14px] px-6 w-full flex justify-center md:w-auto text-white bg-primary rounded-full">
              <SearchIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
