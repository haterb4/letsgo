"use client";
import { faqs } from "@/public/data/faq";
import { SearchIcon } from "@/public/data/icons";
import Image from "next/image";
import Link from "next/link";
import AnimateHeight from "react-animate-height";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const Page = () => {
  const [opened, setOpened] = useState<number | null>(1);
  return (
    <div className="py-[30px] bg-[var(--bg-2)] pt-3 px-3">
      <div className="pb-8">
        <div className="container">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 xl:col-span-8">
              <Image
                width={859}
                height={502}
                src="/img/service-details-img-1.jpg"
                alt="image"
                className=" rounded-2xl w-full"
              />
            </div>
            <div className="col-span-12 xl:col-span-4">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-6 xl:col-span-12">
                  <Image
                    width={421}
                    height={240}
                    src="/img/service-details-img-2.jpg"
                    alt="image"
                    className=" rounded-2xl w-full"
                  />
                </div>
                <div className="col-span-12 md:col-span-6 xl:col-span-12">
                  <Image
                    width={421}
                    height={240}
                    src="/img/service-details-img-3.jpg"
                    alt="image"
                    className=" rounded-2xl w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="grid grid-cols-12 gap-4 lg:gap-6">
          <div className="col-span-12 lg:col-span-8">
            <div className="bg-white rounded-2xl p-3 sm:p-4 md:p-6 xl:p-8 mb-6 lg:mb-10">
              <h2 className="mb-6 h2"> Property Management </h2>
              <p className="mb-10">
                Property management is the process of overseeing and managing
                real estate properties on behalf of the property owner. Property
                managers typically handle all aspects of property management,
                including tenant relations, maintenance and repairs, rent
                collection, and financial reporting.
              </p>
              <h3 className="mb-6 h3"> Our Research </h3>
              <ul className="flex flex-col gap-6 mb-10">
                <li>
                  <div className="flex gap-4">
                    <div className="grid place-content-center w-8 h-8 rounded-full bg-[var(--primary-light)] text-primary shrink-0">
                      <i className="las la-check"></i>
                    </div>
                    <div className="flex-grow">
                      <span className="block text-xl font-medium text-[var(--neutral-700)] mb-2">
                        Property value :
                      </span>
                      <p className="mb-0">
                        researching the current and historical value of a
                        property, as well as any trends in the local property
                        market that may affect its value.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex gap-4">
                    <div className="grid place-content-center w-8 h-8 rounded-full bg-[var(--primary-light)] text-primary shrink-0">
                      <i className="las la-check"></i>
                    </div>
                    <div className="flex-grow">
                      <span className="block text-xl font-medium text-[var(--neutral-700)] mb-2">
                        Comparable properties :
                      </span>
                      <p className="mb-0">
                        researching the current and historical value of a
                        property, as well as any trends in the local property
                        market that may affect its value.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex gap-4">
                    <div className="grid place-content-center w-8 h-8 rounded-full bg-[var(--primary-light)] text-primary shrink-0">
                      <i className="las la-check"></i>
                    </div>
                    <div className="flex-grow">
                      <span className="block text-xl font-medium text-[var(--neutral-700)] mb-2">
                        Property history :
                      </span>
                      <p className="mb-0">
                        researching the current and historical value of a
                        property, as well as any trends in the local property
                        market that may affect its value.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
              <h4 className="mb-6 text-2xl font-semibold"> The Challenge </h4>
              <p className="mb-0">
                Property management is the process of overseeing and managing
                real estate properties on behalf of the property owner. Property
                managers typically handle all aspects of property management,
                including tenant relations, maintenance and repairs, rent
                collection, and financial reporting.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-3 sm:p-4 md:p-6 xl:p-8 mb-6 lg:mb-10">
              <h4 className="mb-0 text-2xl font-semibold">
                {" "}
                Do you have any questions about it?{" "}
              </h4>
              <div className="border border-dashed my-6"></div>
              <div className="max-w-[856px] mx-auto flex flex-col gap-4">
                {faqs.map(({ id, ans, question }) => (
                  <div
                    key={id}
                    onClick={() =>
                      setOpened((prev) => (prev == id ? null : id))
                    }
                    className="bg-[var(--secondary-light)] cursor-pointer rounded-xl md:rounded-2xl lg:rounded-[30px] p-3 sm:p-5 md:p-6 lg:px-10">
                    <button className="text-lg select-none md:text-xl w-full font-medium flex items-center text-left justify-between">
                      {question}{" "}
                      <span
                        className={`p-1 bg-[#22814B] duration-300 text-white rounded-full ${
                          opened === id ? "rotate-180" : ""
                        }`}>
                        {id === opened ? (
                          <MinusIcon className="w-6 h-6" />
                        ) : (
                          <PlusIcon className="w-6 h-6" />
                        )}
                      </span>
                    </button>
                    <AnimateHeight
                      duration={300}
                      height={opened == id ? "auto" : 0}>
                      <p className="border-t border-dash-long pt-4 mt-4">
                        {ans}
                      </p>
                    </AnimateHeight>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-3 sm:p-4 md:p-6 xl:p-8">
              <h4 className="mb-0 text-2xl font-semibold"> Need Any Help </h4>
              <div className="border border-dashed my-6"></div>
              <div className="grid grid-cols-12 gap-4 lg:gap-6">
                <div className="col-span-12">
                  <label
                    htmlFor="enter-name"
                    className="text-xl font-medium block mb-3">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full focus:outline-none bg-[var(--bg-2)] border border-neutral-40 rounded-full py-3 px-5"
                    placeholder="Enter Name"
                    id="enter-name"
                  />
                </div>
                <div className="col-span-12">
                  <label
                    htmlFor="enter-email"
                    className="text-xl font-medium block mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full focus:outline-none bg-[var(--bg-2)] border border-neutral-40 rounded-full py-3 px-5"
                    placeholder="Enter Email"
                    id="enter-email"
                  />
                </div>
                <div className="col-span-12">
                  <label
                    htmlFor="card-name"
                    className="text-xl font-medium block mb-3">
                    Message
                  </label>
                  <textarea
                    id=""
                    rows={5}
                    className="w-full focus:outline-none bg-[var(--bg-2)] border border-neutral-40 rounded-3xl py-3 px-5"
                    placeholder="Write you message"></textarea>
                </div>
                <div className="col-span-12">
                  <Link
                    href="#"
                    className="link inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-semibold">
                    <span className="inline-block"> Send Message </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4">
            <div className="bg-white rounded-2xl p-6 mb-6">
              <h4 className="mb-6 font-semibold text-2xl"> Search </h4>
              <div className="flex items-center border border-neutral-40 px-6 py-3 rounded-full">
                <input
                  type="text"
                  className="w-full focus:outline-none text-[var(--neutral-700)] border-0 bg-transparent ::placeholder-neutral-300"
                  placeholder="Type Properties Name"
                />
                <SearchIcon />
              </div>
            </div>
            <div className="bg-white rounded-2xl p-3 sm:p-4 lg:p-6 mb-6">
              <h4 className="mb-6 text-2xl font-semibold"> Services </h4>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link
                    href="#"
                    className="link flex items-center gap-3 duration-300 bg-[var(--bg-2)] hover:bg-primary text-[var(--neutral-700)] hover:text-white py-3 px-5 rounded-full">
                    <span className="grid place-content-center w-8 h-8 bg-white rounded-full shrink-0">
                      <i className="las la-industry text-primary text-xl"></i>
                    </span>
                    <p className="mb-0 text-base sm:text-lg">
                      {" "}
                      Real estate sales{" "}
                    </p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="link flex items-center gap-3 duration-300 bg-[var(--bg-2)] hover:bg-primary text-[var(--neutral-700)] hover:text-white py-3 px-5 rounded-full">
                    <span className="grid place-content-center w-8 h-8 bg-white rounded-full shrink-0">
                      <i className="las la-city text-primary text-xl"></i>
                    </span>
                    <p className="mb-0 text-base sm:text-lg">
                      {" "}
                      Property management{" "}
                    </p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="link flex items-center gap-3 duration-300 bg-[var(--bg-2)] hover:bg-primary text-[var(--neutral-700)] hover:text-white py-3 px-5 rounded-full">
                    <span className="grid place-content-center w-8 h-8 bg-white rounded-full shrink-0">
                      <i className="las la-taxi text-primary text-xl"></i>
                    </span>
                    <p className="mb-0 text-base sm:text-lg">
                      {" "}
                      Home inspection{" "}
                    </p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="link flex items-center gap-3 duration-300 bg-[var(--bg-2)] hover:bg-primary text-[var(--neutral-700)] hover:text-white py-3 px-5 rounded-full">
                    <span className="grid place-content-center w-8 h-8 bg-white rounded-full shrink-0">
                      <i className="las la-building text-primary text-xl"></i>
                    </span>
                    <p className="mb-0 text-base sm:text-lg">
                      {" "}
                      Real estate brokerage{" "}
                    </p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="link flex items-center gap-3 duration-300 bg-[var(--bg-2)] hover:bg-primary text-[var(--neutral-700)] hover:text-white py-3 px-5 rounded-full">
                    <span className="grid place-content-center w-8 h-8 bg-white rounded-full shrink-0">
                      <i className="las la-graduation-cap text-primary text-xl"></i>
                    </span>
                    <p className="mb-0 text-base sm:text-lg">
                      {" "}
                      Education and Training{" "}
                    </p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="link flex items-center gap-3 duration-300 bg-[var(--bg-2)] hover:bg-primary text-[var(--neutral-700)] hover:text-white py-3 px-5 rounded-full">
                    <span className="grid place-content-center w-8 h-8 bg-white rounded-full shrink-0">
                      <i className="las la-sliders-h text-primary text-xl"></i>
                    </span>
                    <p className="mb-0 text-base sm:text-lg">
                      {" "}
                      Consulting services{" "}
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
            <Link
              href="#"
              className="link inline-flex items-center justify-center gap-2 py-4 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-semibold w-full text-center mb-6">
              <span className="inline-block"> Download Brochure </span>
              <i className="las la-download text-2xl"></i>
            </Link>
            <div className="bg-white rounded-2xl p-6 ">
              <h4 className="mb-6 text-2xl font-semibold"> Share it </h4>
              <ul className="flex flex-wrap gap-3">
                <li>
                  <Link
                    href="#"
                    className="link grid place-content-center w-9 h-9 rounded-full bg-[var(--primary-light)] text-primary hover:bg-primary hover:text-white">
                    <i className="lab la-facebook-f text-xl"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="link grid place-content-center w-9 h-9 rounded-full bg-[var(--primary-light)] text-primary hover:bg-primary hover:text-white">
                    <i className="lab la-twitter text-xl"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="link grid place-content-center w-9 h-9 rounded-full bg-[var(--primary-light)] text-primary hover:bg-primary hover:text-white">
                    <i className="lab la-instagram text-xl"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="link grid place-content-center w-9 h-9 rounded-full bg-[var(--primary-light)] text-primary hover:bg-primary hover:text-white">
                    <i className="lab la-linkedin-in text-xl"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="link grid place-content-center w-9 h-9 rounded-full bg-[var(--primary-light)] text-primary hover:bg-primary hover:text-white">
                    <i className="lab la-dribbble text-xl"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
