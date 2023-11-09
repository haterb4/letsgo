import { useState } from "react";
import LocationEntry from "./LocationEntry";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CalendarDaysIcon, ClockIcon } from "@heroicons/react/24/outline";
import { SearchIcon } from "@/public/data/icons";
import Link from "next/link";

const Hero = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <section className="bg-[url('/img/hero-bg.jpg')] bg-cover bg-no-repeat py-[60px] lg:py-[120px] px-3">
      <div className="container">
        <div className="bg-white rounded-xl p-3 md:p-5">
          <div className="flex gap-5 text-lg">
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
          </div>
          <div className="flex flex-wrap gap-5 mt-6">
            <LocationEntry placeholder="Pickup Location" />
            <LocationEntry placeholder="Drop Location" />
            <div className="w-full md:w-[48%] xl:w-[22%] flex pr-3 items-center justify-between rounded-full sm:text-sm bg-[var(--bg-1)] border">
              <DatePicker
                selected={startDate}
                onChange={(date: any) => setStartDate(date)}
                className="w-full bg-[var(--bg-1)] p-3 rounded-full focus:outline-none"
              />
              <CalendarDaysIcon className="w-6 h-6 text-gray-600 shrink-0" />
            </div>
            <div className="w-full md:w-[48%] xl:w-[22%] pr-3 flex items-center justify-between rounded-full sm:text-sm bg-[var(--bg-1)] border">
              <DatePicker
                selected={startDate}
                onChange={(date: any) => setStartDate(date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                className="w-full bg-[var(--bg-1)] p-3 rounded-full focus:outline-none"
                dateFormat="h:mm aa"
              />
              <ClockIcon className="w-6 h-6 text-gray-600 shrink-0" />
            </div>
            <Link
              href="#"
              className="py-[14px] px-6 w-full flex justify-center xl:w-auto text-white bg-primary rounded-full">
              <SearchIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
