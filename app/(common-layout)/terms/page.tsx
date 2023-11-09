"use client";
import { Tab } from "@headlessui/react";
function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
const page = () => {
  return (
    <div className="bg-[var(--bg-2)]">
      <header className="text-white text-center py-[60px] px-3 lg:py-[120px] bg-[var(--dark)]">
        <h1 className="h1 font-semibold mb-4 lg:mb-6">Terms Of Service</h1>
        <p>
          Please read these Terms of Service carefully before Booking our
          Service
        </p>
      </header>
      <div className="bg-[var(--bg-2)] relative before:absolute before:w-full before:h-[150px] before:top-0 before:left-0 before:bg-[var(--dark)] mb-[60px] lg:mb-[120px]">
        <div className="container px-3 relative z-[1] p-5 md:p-8 lg:p-10 rounded-2xl bg-white">
          <Tab.Group>
            <Tab.List className="flex gap-4 lg:gap-6 flex-wrap">
              <Tab
                className={({ selected }) =>
                  classNames(
                    "focus:outline-none bg-[#EBEBFD] text-primary rounded-2xl flex gap-2 items-center font-medium py-3 px-6",
                    selected ? "text-white bg-primary" : ""
                  )
                }>
                <i className="las la-hotel"></i>Hotel
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "focus:outline-none bg-[#EBEBFD] text-primary rounded-2xl flex gap-2 items-center font-medium py-3 px-6",
                    selected ? "text-white bg-primary" : ""
                  )
                }>
                <i className="las la-plane-departure"></i>Flight
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "focus:outline-none bg-[#EBEBFD] text-primary rounded-2xl flex gap-2 items-center font-medium py-3 px-6",
                    selected ? "text-white bg-primary" : ""
                  )
                }>
                <i className="las la-globe"></i>Tour
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "focus:outline-none bg-[#EBEBFD] text-primary rounded-2xl flex gap-2 items-center font-medium py-3 px-6",
                    selected ? "text-white bg-primary" : ""
                  )
                }>
                <i className="las la-car"></i>Cabs
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "focus:outline-none bg-[#EBEBFD] text-primary rounded-2xl flex gap-2 items-center font-medium py-3 px-6",
                    selected ? "text-white bg-primary" : ""
                  )
                }>
                <i className="las la-building"></i>Real Estate
              </Tab>
            </Tab.List>
            <div className="border border-t border-dashed my-4 lg:my-6 xl:my-8"></div>
            <Tab.Panels>
              <Tab.Panel>
                <h3 className="h3">
                  Role of Placewise and Limitation of Liability of Hotel
                </h3>
                <p className="mt-4">
                  The role of booking in a website is to allow users to make
                  reservations or appointments for a particular product or
                  service offered. This may include hotel bookings, flight
                  reservations, event tickets, restaurant reservations, or any
                  other service that requires advance booking.
                </p>
                <div className="border border-t border-dashed my-4 lg:my-6 xl:my-8"></div>
                <ul className="marker:text-primary list-disc list-inside flex flex-col gap-3">
                  <li>
                    This is a family farmhouse, hence we request you to not
                    indulge.
                  </li>
                  <li>
                    Drinking and smoking within controlled limits are permitted
                    at the farmhouse but please do not or ruckus at the house.
                  </li>
                  <li>
                    Drugs and intoxicating illegal products are banned and not
                    to be brought to the house or consumed.
                  </li>
                </ul>
                <div className="flex flex-wrap gap-6 mt-5 lg:mt-8">
                  <button className="btn-primary">
                    I agree with the terms
                  </button>
                  <button className="btn-outline">Not right now</button>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <h3 className="h3">
                  Role of Placewise and Limitation of Liability of Flight
                </h3>
                <p className="mt-4">
                  The role of booking in a website is to allow users to make
                  reservations or appointments for a or service offered by the
                  website. This may include hotel bookings, flight reservations,
                  event tickets, restaurant reservations, or any other service
                  that requires advance booking.
                </p>
                <div className="border border-t border-dashed my-4 lg:my-6 xl:my-8"></div>
                <ul className="marker:text-primary list-disc list-inside flex flex-col gap-3">
                  <li>
                    This is a family farmhouse, hence we request you to not
                    indulge.
                  </li>
                  <li>
                    Drinking and smoking within limits are permitted at the
                    farmhouse but please do not create a mess or ruckus at the
                    house.
                  </li>
                  <li>
                    Drugs and intoxicating illegal products are banned and not
                    to be brought to the house or consumed.
                  </li>
                </ul>
                <div className="flex flex-wrap gap-6 mt-5 lg:mt-8">
                  <button className="btn-primary">
                    I agree with the terms
                  </button>
                  <button className="btn-outline">Not right now</button>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <h3 className="h3">
                  Role of Placewise and Limitation of Liability of Tour
                </h3>
                <p className="mt-4">
                  The role of booking in a website is to allow users to make
                  reservations or a particular product or service offered by the
                  website. This may include hotel bookings, flight reservations,
                  event tickets, restaurant reservations, or any other service
                  that requires advance booking.
                </p>
                <div className="border border-t border-dashed my-4 lg:my-6 xl:my-8"></div>
                <ul className="marker:text-primary list-disc list-inside flex flex-col gap-3">
                  <li>
                    This is a family farmhouse, we request you to not indulge.
                  </li>
                  <li>
                    Drinking and smoking within controlled limits are permitted
                    at the farmhouse but please do a mess or ruckus at the
                    house.
                  </li>
                  <li>
                    Drugs and intoxicating illegal products banned and not to be
                    brought to the house or consumed.
                  </li>
                </ul>
                <div className="flex flex-wrap gap-6 mt-5 lg:mt-8">
                  <button className="btn-primary">
                    I agree with the terms
                  </button>
                  <button className="btn-outline">Not right now</button>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <h3 className="h3">
                  Role of Placewise and Limitation of Liability of Cabs
                </h3>
                <p className="mt-4">
                  The role of booking in a website is to allow users to make
                  reservations or for a particular product or service offered by
                  the website. This may include hotel bookings, flight
                  reservations, event tickets, restaurant reservations, or any
                  other service that requires advance booking.
                </p>
                <div className="border border-t border-dashed my-4 lg:my-6 xl:my-8"></div>
                <ul className="marker:text-primary list-disc list-inside flex flex-col gap-3">
                  <li>
                    This is a family farmhouse, hence we request you to not
                    indulge.
                  </li>
                  <li>
                    Drinking and smoking within controlled limits are permitted
                    at the farmhouse but please do not create a mess or ruckus
                    at the house.
                  </li>
                  <li>
                    Drugs and intoxicating illegal products are banned and not
                    to be brought to the house or consumed.
                  </li>
                </ul>
                <div className="flex flex-wrap gap-6 mt-5 lg:mt-8">
                  <button className="btn-primary">
                    I agree with the terms
                  </button>
                  <button className="btn-outline">Not right now</button>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <h3 className="h3">
                  Role of Placewise and Limitation of Liability of Real Estate
                </h3>
                <p className="mt-4">
                  The role of booking in a website is to allow users to make
                  reservations or appointments for a particular product or
                  service offered by the website. This may include hotel
                  bookings, flight reservations, event tickets, restaurant
                  reservations, or any other service that requires advance
                  booking.
                </p>
                <div className="border border-t border-dashed my-4 lg:my-6 xl:my-8"></div>
                <ul className="marker:text-primary list-disc list-inside flex flex-col gap-3">
                  <li>
                    This is a family farmhouse, hence we request not indulge.
                  </li>
                  <li>
                    Drinking and smoking within controlled limits are permitted
                    at the farmhouse but please do mess or ruckus at the house.
                  </li>
                  <li>
                    Drugs and intoxicating illegal products are banned and not
                    to be brought to the house or consumed.
                  </li>
                </ul>
                <div className="flex flex-wrap gap-6 mt-5 lg:mt-8">
                  <button className="btn-primary">
                    I agree with the terms
                  </button>
                  <button className="btn-outline">Not right now</button>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
};

export default page;
