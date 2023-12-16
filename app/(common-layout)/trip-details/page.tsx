"use client";
import { Tab } from "@headlessui/react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowsRightLeftIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
const page = () => {
  return (
    <div className="bg-[var(--bg-2)] py-[30px] lg:py-[60px] px-3">
      <div className="container">
        <div className="grid grid-cols-12 gap-4 lg:gap-6">
          <div className="col-span-12 xl:col-span-8">
            <div className="section-space--sm">
              <div className="bg-white rounded-2xl p-3 sm:p-4 lg:py-8 lg:px-5">
                <div className="p-3 sm:p-4 lg:p-6 bg-[var(--bg-1)] rounded-2xl border border-neutral-40 mb-10">
                  <div className="flex items-center justify-between gap-4 mb-10">
                    <h2 className="mb-0 h2 flex items-center flex-wrap gap-4 text-[var(--neutral-700)]">
                      <span> New York </span>
                      <ArrowsRightLeftIcon className="w-8 h-8" />
                      <span> London </span>
                    </h2>
                    <span className="inline-block clr-neutral-600">
                      15 March, 2023
                    </span>
                  </div>
                  <div className="flight-card bg-white border-dashed rounded-2xl">
                    <div className="flex flex-col gap-6 p-4 lg:p-6 flex-grow">
                      <div className="flex flex-col md:flex-row justify-center items-start gap-6">
                        <div className="flex w-full justify-center md:w-auto flex-col gap-3 md:gap-7 text-center md:text-start flex-grow">
                          <div className="grid place-content-center w-16 h-16 rounded-full bg-white shadow-lg mx-auto ms-md-0">
                            <Image
                              width={52}
                              height={27}
                              src="/img/brand-11.png"
                              alt="image"
                              className=" object-fit-contain"
                            />
                          </div>
                          <p className="mb-0 font-medium">Delta Air Lines</p>
                        </div>
                        <div className="flex md:flex-col justify-between gap-2 my-6 md:my-0 flex-grow w-full md:w-auto">
                          <span className="block text-primary">From</span>
                          <h4 className="mb-0 text-2xl font-semibold">
                            12:10 am
                          </h4>
                          <span className="block text-[var(--neutral-700)]">
                            Ebolowa
                          </span>
                        </div>
                        <div className="flex w-full md:w-auto justify-center flex-col gap-2 text-center flex-grow">
                          <div className="grid place-content-center w-12 h-12 shadow-lg rounded-full mx-auto">
                            <div className="grid place-content-center w-10 h-10 bg-[var(--primary-light)] text-primary rounded-full">
                              <i className="las la-car text-2xl"></i>
                            </div>
                          </div>
                          <span className="block font-medium"> Non-stop </span>
                          <span className="block clr-neutral-500">
                            02h 15 min
                          </span>
                        </div>
                        <div className="flex w-full md:w-auto md:flex-col justify-between gap-2 my-6 md:my-0 flex-grow">
                          <span className="block text-primary">To</span>
                          <h4 className="mb-0 text-2xl font-semibold">
                            07:20 am
                          </h4>
                          <span className="block text-[var(--neutral-700)]">
                            Yaoundé
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-wrap justify-center text-center gap-3 rounded-xl bg-[#F7F7FE] p-3">
                        <p className="mb-0">
                          Airplane :
                          <span className="text-amber-700">Boeing 787</span>
                        </p>
                        <p className="text-primary">•</p>
                        <p className="mb-0">
                          Travel Class:
                          <span className="text-primary">Economy</span>
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-6 p-4 lg:p-6 flex-grow">
                      <div className="flex flex-col md:flex-row justify-center items-start gap-6">
                        <div className="flex w-full justify-center md:w-auto flex-col gap-3 md:gap-7 text-center md:text-start flex-grow">
                          <div className="grid place-content-center w-16 h-16 rounded-full bg-white shadow-lg mx-auto ms-md-0">
                            <Image
                              width={52}
                              height={27}
                              src="/img/brand-11.png"
                              alt="image"
                              className=" object-fit-contain"
                            />
                          </div>
                          <p className="mb-0 font-medium">Delta Air Lines</p>
                        </div>
                        <div className="flex md:flex-col justify-between gap-2 my-6 md:my-0 flex-grow w-full md:w-auto">
                          <span className="block text-primary">From</span>
                          <h4 className="mb-0 text-2xl font-semibold">
                            12:10 am
                          </h4>
                          <span className="block text-[var(--neutral-700)]">
                            Yaoundé
                          </span>
                        </div>
                        <div className="flex w-full md:w-auto justify-center flex-col gap-2 text-center flex-grow">
                          <div className="grid place-content-center w-12 h-12 shadow-lg rounded-full mx-auto">
                            <div className="grid place-content-center w-10 h-10 bg-[var(--primary-light)] text-primary rounded-full">
                              <i className="las la-car text-2xl"></i>
                            </div>
                          </div>
                          <span className="block font-medium"> Non-stop </span>
                          <span className="block clr-neutral-500">
                            02h 15 min
                          </span>
                        </div>
                        <div className="flex w-full md:w-auto md:flex-col justify-between gap-2 my-6 md:my-0 flex-grow">
                          <span className="block text-primary">To</span>
                          <h4 className="mb-0 text-2xl font-semibold">
                            07:20 am
                          </h4>
                          <span className="block text-[var(--neutral-700)]">
                            Ebolowa
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-wrap justify-center text-center gap-3 rounded-xl bg-[#F7F7FE] p-3">
                        <p className="mb-0">
                          Airplane :
                          <span className="text-amber-700">Boeing 787</span>
                        </p>
                        <p className="text-primary">•</p>
                        <p className="mb-0">
                          Travel Class:
                          <span className="text-primary">Economy</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-3 sm:p-4 lg:p-6 bg-[var(--bg-2)] rounded-2xl border border-neutral-40 mb-10">
                  <h4 className="mb-0 text-2xl font-semibold">
                    {" "}
                    Important Information{" "}
                  </h4>
                  <div className="hr-dashed my-5"></div>
                  <h6 className="mb-4"> Passengers traveling </h6>
                  <ul className="list-disc pl-4 gap-3 mb-8">
                    <li>
                      Travel dates: You will need to select the dates you plan
                      to travel, including your departure
                    </li>
                    <li>
                      Destination: You will also need to select your
                      destination, including the airport you plan to fly into
                    </li>
                    <li>
                      Number of travelers: You will need to specify the number
                      of travelers in your party, including adults
                    </li>
                    <li>
                      Class of travel: You will need to choose the class of
                      travel you prefer, such as eco or first class.
                    </li>
                    <li>
                      Flight times: You will be able to select the flight times
                      that work best for you
                    </li>
                    <li>
                      Price: You will be shown the price of the flight, which
                      may include taxes and fees.
                    </li>
                    <li>
                      Payment: You will need to provide payment information to
                      book your flight
                    </li>
                    <li>
                      Confirmation: Once you have completed your booking, you
                      should receive a confirmation email
                    </li>
                  </ul>
                  <h6 className="mb-4"> Guidelines </h6>
                  <ul className="pl-4 list-disc gap-3 mb-8">
                    <li>
                      Bring all necessary documentation, including your passport
                      or ID card, visa (if required)
                    </li>
                    <li>
                      Check the baggage allowance for your flight and pack
                      accordingly.
                    </li>
                    <li>
                      Check in online or at the airport, following the
                      airline&apos;s guidelines for check-in times
                    </li>
                    <li>
                      Go through security screening and follow the guidelines
                      for liquids, gels, in your carry-on luggage.
                    </li>
                    <li>
                      Board your flight when your boarding group is called,
                      following the instructions of the airline staff.
                    </li>
                    <li>
                      During the flight, follow the instructions of the flight
                      crew and stay in your seat with your seat belt fastened
                      when the seat belt sign is on.
                    </li>
                  </ul>
                  <Link
                    href="#"
                    className="link flex items-center gap-2 text-primary">
                    <span className="font-semibold inline-block">
                      Read More
                    </span>
                    <ArrowRightIcon className="w-5 h-5" />
                  </Link>
                </div>
                <div className="p-3 sm:p-4 lg:p-6 bg-[var(--bg-2)] rounded-2xl border border-neutral-40 mb-10">
                  <h4 className="mb-4 text-2xl font-semibold">
                    {" "}
                    Cancellation Info{" "}
                  </h4>
                  <p className="mb-0">
                    To cancel your flight, you will typically need to contact
                    the airline directly. The specific process for cancelling
                    your flight will vary depending on the airline&apos;s
                    policies
                  </p>
                </div>
                <div className="p-3 sm:p-4 lg:p-6 bg-[var(--bg-2)] rounded-2xl border border-neutral-40 mb-10">
                  <h4 className="mb-0 text-2xl font-semibold">
                    {" "}
                    Traveler Details{" "}
                  </h4>
                  <div className="hr-dashed my-5"></div>
                  <form action="#" className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 md:col-span-6">
                      <label className="block font-medium text-[var(--neutral-700)] text-lg mb-3">
                        First Name
                      </label>
                      <input
                        className="w-full focus:outline-none text-base py-3 px-5 rounded-full"
                        type="text"
                        placeholder="Enter First Name"
                      />
                    </div>
                    <div className="col-span-12 md:col-span-6">
                      <label className="block font-medium text-[var(--neutral-700)] text-lg mb-3">
                        Last Name
                      </label>
                      <input
                        className="w-full focus:outline-none text-base py-3 px-5 rounded-full"
                        type="text"
                        placeholder="Enter Last Name"
                      />
                    </div>
                    <div className="col-span-12 md:col-span-6">
                      <label className="block font-medium text-[var(--neutral-700)] text-lg mb-3">
                        Email
                      </label>
                      <input
                        className="w-full focus:outline-none text-base py-3 px-5 rounded-full"
                        type="email"
                        placeholder="Enter Email"
                      />
                    </div>
                    <div className="col-span-12 md:col-span-6">
                      <label className="block font-medium text-[var(--neutral-700)] text-lg mb-3">
                        Phone
                      </label>
                      <input
                        className="w-full focus:outline-none text-base py-3 px-5 rounded-full"
                        type="text"
                        placeholder="Enter Phone"
                      />
                    </div>
                    <div className="col-span-12 md:col-span-6">
                      <label className="block font-medium text-[var(--neutral-700)] text-lg mb-3">
                        Date Of Birth
                      </label>
                      <input
                        className="w-full focus:outline-none text-base py-3 px-5 rounded-full"
                        type="date"
                        placeholder="Select date of birth"
                      />
                    </div>
                    <div className="col-span-12 md:col-span-6">
                      <label className="block font-medium text-[var(--neutral-700)] text-lg mb-3">
                        Nationality
                      </label>
                      <div className="property-search__select property-search__col rounded-full flex items-center gap-2 px-6 flex-grow bg-white">
                        <select
                          className="w-full bg-transparent px-5 py-3 focus:outline-none"
                          aria-label="Default select example">
                          <option>Location</option>
                          <option value="1">New York</option>
                          <option value="2">Chicago</option>
                          <option value="3">Atlanta</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-span-12">
                      <label className="block font-medium text-[var(--neutral-700)] text-lg mb-3">
                        Passport Number
                      </label>
                      <input
                        className="w-full focus:outline-none text-base py-3 px-5 rounded-full"
                        type="text"
                        placeholder="Passport Number"
                      />
                    </div>
                    <div className="col-span-12 md:col-span-6">
                      <label className="block font-medium text-[var(--neutral-700)] text-lg mb-3">
                        Issuing Country
                      </label>
                      <input
                        className="w-full focus:outline-none text-base py-3 px-5 rounded-full"
                        type="text"
                        placeholder="Country Name"
                      />
                    </div>
                    <div className="col-span-12 md:col-span-6">
                      <label className="block font-medium text-[var(--neutral-700)] text-lg mb-3">
                        Passport Expiry
                      </label>
                      <input
                        className="w-full focus:outline-none text-base py-3 px-5 rounded-full"
                        type="text"
                        placeholder="Passport Date"
                      />
                    </div>
                    <div className="col-span-12">
                      <Link
                        href="#"
                        className="link flex items-center gap-2 text-primary">
                        <span className="font-semibold inline-block">
                          Add New Adult
                        </span>
                        <ArrowRightIcon className="w-5 h-5" />
                      </Link>
                    </div>
                  </form>
                </div>
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <Link
                    href="#"
                    className="link flex items-center clr-neutral-500 hover:text-primary gap-1 order-1">
                    <ArrowLeftIcon className="w-5 h-5" />
                    <span className="inline-block font-semibold">
                      Previous Flight
                    </span>
                  </Link>
                  <ul className="flex flex-wrap gap-3 justify-center order-3 flex-grow md:order-2">
                    <li>
                      <Link
                        href="#"
                        className="link grid place-content-center w-9 h-9 rounded-full bg-[var(--primary-light)] text-primary hover:bg-primary hover:text-white">
                        <i className="lab text-xl la-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="link grid place-content-center w-9 h-9 rounded-full bg-[var(--primary-light)] text-primary hover:bg-primary hover:text-white">
                        <i className="lab text-xl la-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="link grid place-content-center w-9 h-9 rounded-full bg-[var(--primary-light)] text-primary hover:bg-primary hover:text-white">
                        <i className="lab text-xl la-linkedin-in"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="link grid place-content-center w-9 h-9 rounded-full bg-[var(--primary-light)] text-primary hover:bg-primary hover:text-white">
                        <i className="lab text-xl la-dribbble"></i>
                      </Link>
                    </li>
                  </ul>
                  <Link
                    href="#"
                    className="link flex items-center clr-neutral-500 hover:text-primary gap-1 order-2">
                    <span className="inline-block font-semibold">
                      Next Flight
                    </span>
                    <ArrowRightIcon className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 xl:col-span-4">
            <div className="pb-0 mb-6 relative">
              <div className="bg-white rounded-2xl py-8 px-6">
                <p className="mb-3 text-lg font-medium"> Price </p>
                <div className="flex items-start gap-2 mb-6">
                  <div className="flex gap-3 items-center">
                    <i className="las la-tag text-2xl"></i>
                    <p className="mb-0"> From </p>
                    <h3 className="h3 mb-0"> $399 </h3>
                  </div>
                  <i className="las la-info-circle text-2xl"></i>
                </div>

                <Tab.Group>
                  <Tab.List className="flex gap-3 about-tab mb-7">
                    <Tab
                      className={({ selected }) =>
                        classNames(
                          "focus:outline-none",
                          selected ? "text-primary font-medium" : ""
                        )
                      }>
                      Booking Form
                    </Tab>{" "}
                    <span>|</span>
                    <Tab
                      className={({ selected }) =>
                        classNames(
                          "focus:outline-none",
                          selected ? "text-primary font-medium" : ""
                        )
                      }>
                      Enquiry Form
                    </Tab>
                  </Tab.List>
                  <Tab.Panels className="tab-content mb-8">
                    <Tab.Panel>
                      <div className="flex items-center justify-between mb-4">
                        <p className="mb-0 clr-neutral-500"> Base Price </p>
                        <p className="mb-0 font-medium"> 360F </p>
                      </div>
                      <div className="flex items-center justify-between mb-4">
                        <p className="mb-0 clr-neutral-500"> State Tax </p>
                        <p className="mb-0 font-medium"> 70F </p>
                      </div>
                      <div className="flex items-center justify-between mb-4">
                        <p className="mb-0 clr-neutral-500"> Night Charge </p>
                        <p className="mb-0 font-medium"> 170F </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="mb-0 clr-neutral-500">
                          {" "}
                          Convenience Fee{" "}
                        </p>
                        <p className="mb-0 font-medium"> 15F </p>
                      </div>
                      <div className="hr-dashed my-4"></div>
                      <div className="flex items-center justify-between mb-10">
                        <p className="mb-0 clr-neutral-500"> Total </p>
                        <p className="mb-0 font-medium"> 1025F </p>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div className="flex items-center justify-between mb-4">
                        <p className="mb-0 clr-neutral-500"> Base Price </p>
                        <p className="mb-0 font-medium"> 570F </p>
                      </div>
                      <div className="flex items-center justify-between mb-4">
                        <p className="mb-0 clr-neutral-500"> State Tax </p>
                        <p className="mb-0 font-medium"> 90F </p>
                      </div>
                      <div className="flex items-center justify-between mb-4">
                        <p className="mb-0 clr-neutral-500"> Night Charge </p>
                        <p className="mb-0 font-medium"> 2300F </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="mb-0 clr-neutral-500">
                          {" "}
                          Convenience Fee{" "}
                        </p>
                        <p className="mb-0 font-medium"> 24F </p>
                      </div>
                      <div className="hr-dashed my-4"></div>
                      <div className="flex items-center justify-between mb-10">
                        <p className="mb-0 clr-neutral-500"> Total </p>
                        <p className="mb-0 font-medium"> 1025F CFA </p>
                      </div>
                    </Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
                <Link
                  href="#"
                  className="link inline-flex items-center gap-2 py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-medium w-full justify-center mb-6">
                  <span className="inline-block"> Proceed Booking </span>
                </Link>
                <ul className="flex justify-center gap-6">
                  <li>
                    <div className="flex items-center gap-2">
                      <button className="w-7 h-7 rounded-full bg-[var(--primary-light)] text-primary grid place-content-center">
                        <HeartIcon className="w-5 h-5" />
                      </button>
                      <span className="inline-block text-sm clr-neutral-500">
                        Save To Wish List
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-2">
                      <button className="w-7 h-7 rounded-full bg-[var(--primary-light)] text-primary grid place-content-center">
                        <ArrowsRightLeftIcon className="w-5 h-5" />
                      </button>
                      <span className="inline-block text-sm clr-neutral-500">
                        Compare
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
