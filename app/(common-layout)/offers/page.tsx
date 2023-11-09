"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import Link from "next/link";
import {
  ArrowLongRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

const Page = () => {
  return (
    <div className="container">
      <Swiper
        loop={true}
        navigation={{
          nextEl: ".button-next",
          prevEl: ".button-prev",
        }}
        modules={[Navigation]}
        className="mySwiper">
        <SwiperSlide>
          <div className="bg-[url('/img/offer-bg-1.png')] min-h-[546px] bg-center bg-cover bg-no-repeat text-white px-5 py-16  lg:p-[95px]">
            <h3 className="font-semibold text-3xl mb-4">
              25% Off on Travel Booking
            </h3>
            <h1 className="text-3xl md:text-5xl lg:text-[70px] xl:text-[80px] font-semibold">
              Your Dream <br /> Destination
            </h1>
            <span className="text-2xl mt-4 inline-block">
              Get Special Discount
            </span>
            <div className="flex flex-wrap gap-4 mt-10">
              <Link href="#" className="btn-tertiary font-semibold">
                View All Listings <ArrowLongRightIcon className="w-5 h-5" />
              </Link>
              <div className="flex gap-3 items-center">
                <i className="las la-headset bg-[var(--secondary)] text-black p-4 text-2xl rounded-full"></i>
                <div>
                  <p>Suport us</p>
                  <Link href="tel:242342342" className="text-lg font-semibold">
                    (704) 555-0127
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('/img/offer-bg-2.png')] min-h-[546px] bg-cover bg-left bg-no-repeat text-white px-5 py-16 lg:p-[95px]"></div>
        </SwiperSlide>
        <div className="button-prev bg-white rounded-full p-2 absolute top-[45%] z-[2] left-5 cursor-pointer hover:bg-primary duration-300 hover:text-white shadow-lg">
          <ChevronLeftIcon className="w-5 h-5" />
        </div>
        <div className="button-next bg-white rounded-full p-2 absolute top-[45%] z-[2] right-5 cursor-pointer hover:bg-primary duration-300 hover:text-white shadow-lg">
          <ChevronRightIcon className="w-5 h-5" />
        </div>
      </Swiper>
      <div className="overflow-x-auto my-10 lg:my-14">
        <table className="table-auto w-full text-left">
          <thead>
            <tr>
              <th className="p-3 bg-violet-100">Offer Detials</th>
              <th className="p-3 bg-violet-100">Maximum booking value</th>
              <th className="p-3 bg-violet-100">Applicable Card</th>
              <th className="p-3 bg-violet-100">Coupon Code</th>
              <th className="p-3 bg-violet-100">Validity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border-b">Flat 25% discount for all users</td>
              <td className="p-3 border-b">$565</td>
              <td className="p-3 border-b">JHDIDKD</td>
              <td className="p-3 border-b">LOH125E</td>
              <td className="p-3 border-b">17 June</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="grid grid-cols-12 gap-4 lg:gap-6 mb-10 lg:mb-14">
        <div className="col-span-12 md:col-span-6 p-4 rounded-2xl border border-gray-300 border-dashed lg:p-8">
          <h3 className="h3 mb-4">What do you get?</h3>
          <ul className="list-disc pl-4 flex flex-col gap-3">
            <li>
              Get up with a delicious lunch and a beautiful view from your room.
            </li>
            <li>
              Affronting imprudence do he he everything. Sex lasted dinner
              wanted indeed wished outlaw. Far advanced settling say finished
              raillery.
            </li>
            <li>
              Offered chiefly farther of my no colonel shyness. Such on help ye
              some door if in. Laughter proposal laughing any son law consider.
            </li>
          </ul>
        </div>
        <div className="col-span-12 md:col-span-6 p-4 rounded-2xl border border-gray-300 border-dashed lg:p-8">
          <h3 className="h3 mb-4">Howdo you get in?</h3>
          <ul className="list-disc pl-4 flex flex-col gap-3">
            <li>
              Get up with a delicious lunch and a beautiful view from your room.
            </li>
            <li>
              Affronting imprudence do he he everything. Sex lasted dinner
              wanted indeed wished outlaw. Far advanced settling say finished
              raillery.
            </li>
            <li>
              Offered chiefly farther of my no colonel shyness. Such on help ye
              some door if in. Laughter proposal laughing any son law consider.
            </li>
          </ul>
        </div>
        <div className="col-span-12 md:col-span-6 p-4 rounded-2xl border border-gray-300 border-dashed lg:p-8">
          <h3 className="h3 mb-4">What else do you need to know?</h3>
          <ul className="list-disc pl-4 flex flex-col gap-3">
            <li>
              Get up with a delicious lunch and a beautiful view from your room.
            </li>
            <li>
              Affronting imprudence do he he everything. Sex lasted dinner
              wanted indeed wished outlaw. Far advanced settling say finished
              raillery.
            </li>
            <li>
              Offered chiefly farther of my no colonel shyness. Such on help ye
              some door if in. Laughter proposal laughing any son law consider.
            </li>
          </ul>
        </div>
        <div className="col-span-12 md:col-span-6 p-4 rounded-2xl border border-gray-300 border-dashed lg:p-8">
          <h3 className="h3 mb-4">Terms & Conditions</h3>
          <ul className="list-disc pl-4 flex flex-col gap-3">
            <li>
              Get up with a delicious lunch and a beautiful view from your room.
            </li>
            <li>
              Affronting imprudence do he he everything. Sex lasted dinner
              wanted indeed wished outlaw. Far advanced settling say finished
              raillery.
            </li>
            <li>
              Offered chiefly farther of my no colonel shyness. Such on help ye
              some door if in. Laughter proposal laughing any son law consider.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
