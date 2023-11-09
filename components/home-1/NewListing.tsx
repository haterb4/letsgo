"use client";
import React, { useState } from "react";
import SubHeadingBtn from "../SubHeadingBtn";
import { Tab } from "@headlessui/react";
import { newlistings } from "@/public/data/newlisting";
import listingImg1 from "@/public/img/listing-img-1.jpg";
import listingImg2 from "@/public/img/listing-img-2.jpg";
import listingImg3 from "@/public/img/listing-img-3.jpg";
import listingImg4 from "@/public/img/listing-img-4.jpg";

import Image from "next/image";
import Link from "next/link";
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
const NewListing = () => {
  const [categories, setCategories] = useState(newlistings);
  return (
    <section className="bg-white py-[60px] lg:py-[120px]">
      <div className="container">
        <Tab.Group>
          <div className="flex justify-between items-center gap-4 flex-wrap px-3 mb-8">
            <div>
              <SubHeadingBtn
                text="New Listing"
                classes="bg-[var(--primary-light)]"
              />
              <h2 className="h2 mt-3">New Listings Added Today</h2>
            </div>
            <Tab.List className="flex gap-3 flex-wrap">
              {Object.keys(categories).map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      "rounded-full px-7 py-4 leading-5 duration-300 font-semibold",
                      selected
                        ? "bg-primary shadow text-white outline-none"
                        : "text-neutral-600 hover:bg-primary bg-[var(--primary-light)] hover:text-white"
                    )
                  }>
                  {category}
                </Tab>
              ))}
            </Tab.List>
          </div>
          <Tab.Panels className="mt-2 px-3 xl:px-0">
            {Object.values(categories).map((posts, idx) => (
              <Tab.Panel
                key={idx}
                className="flex flex-wrap gap-6 justify-center">
                <div className="max-w-[416px] rounded-2xl relative group">
                  <Image
                    src={listingImg1}
                    alt="listingimg"
                    className="rounded-2xl"
                  />
                  <div className="absolute w-full h-full p-5 rounded-2xl top-0 left-0 flex flex-col justify-between before:w-full before:absolute before:h-full before:bottom-0 before:left-0 before:bg-gradient-to-t before:rounded-b-2xl before:from-slate-800 before:to-transparent group-hover:after:w-full group-hover:after:absolute group-hover:after:h-full group-hover:after:bottom-0 group-hover:after:left-0 group-hover:after:bg-gradient-to-t group-hover:after:rounded-b-2xl group-hover:after:from-[var(--primary)] group-hover:after:to-transparent group-hover:after:opacity-60">
                    <div>
                      <span className="absolute inline-block px-5 py-2 top-5 left-5 bg-[var(--secondary)] rounded-full">
                        Verified
                      </span>
                      <span className="absolute inline-block px-5 py-2 top-5 right-5 bg-[var(--tertiary)] rounded-full">
                        New
                      </span>
                    </div>
                    <div className="z-10">
                      <div className="flex justify-between mb-3">
                        <span className="text-white">For Rental</span>
                        <span className="text-[var(--tertiary)] text-xl">
                          $5,256{" "}
                          <span className="text-white text-base">/month</span>
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-4 md:gap-1 justify-between items-center">
                        <div>
                          <h3 className="text-white text-2xl font-medium">
                            Luxury Studio
                          </h3>
                          <span className="text-white">
                            <i className="las la-map-marker-alt text-[var(--tertiary)]"></i>{" "}
                            United States
                          </span>
                        </div>
                        <Link
                          href="#"
                          className="btn-outline-secondary group-hover:bg-[var(--secondary)] group-hover:text-neutral-900">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="max-w-[416px] rounded-2xl relative h-[270px] overflow-hidden md:max-h-[240px] group">
                    <Image
                      src={listingImg2}
                      alt="listingimg"
                      className="rounded-2xl scale-150 md:scale-100"
                    />
                    <div className="absolute w-full h-full p-5 rounded-2xl top-0 left-0 flex flex-col justify-between before:w-full before:absolute before:h-full before:bottom-0 before:left-0 before:bg-gradient-to-t before:rounded-b-2xl before:from-slate-800 before:to-transparent group-hover:after:w-full group-hover:after:absolute group-hover:after:h-full group-hover:after:bottom-0 group-hover:after:left-0 group-hover:after:bg-gradient-to-t group-hover:after:rounded-b-2xl group-hover:after:from-[var(--primary)] group-hover:after:to-transparent group-hover:after:opacity-60">
                      <div>
                        <span className="absolute inline-block px-5 py-2 top-5 right-5 bg-[var(--tertiary)] rounded-full">
                          New
                        </span>
                      </div>
                      <div className="z-10">
                        <div className="flex justify-between mb-3">
                          <span className="text-white">For Rental</span>
                          <span className="text-[var(--tertiary)] text-xl">
                            $5,256{" "}
                            <span className="text-white text-base">/month</span>
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-4 md:gap-1 justify-between items-center">
                          <div>
                            <h3 className="text-white text-2xl font-medium">
                              Luxury Studio
                            </h3>
                            <span className="text-white">
                              <i className="las la-map-marker-alt text-[var(--tertiary)]"></i>{" "}
                              United States
                            </span>
                          </div>
                          <Link
                            href="#"
                            className="btn-outline-secondary group-hover:bg-[var(--secondary)] group-hover:text-neutral-900">
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="max-w-[416px] rounded-2xl relative overflow-hidden h-[270px] md:max-h-[240px] group">
                    <Image
                      src={listingImg3}
                      alt="listingimg"
                      className="rounded-2xl scale-150 md:scale-100"
                    />
                    <div className="absolute w-full h-full p-5 rounded-2xl top-0 left-0 flex flex-col justify-between before:w-full before:absolute before:h-full before:bottom-0 before:left-0 before:bg-gradient-to-t before:rounded-b-2xl before:from-slate-800 before:to-transparent group-hover:after:w-full group-hover:after:absolute group-hover:after:h-full group-hover:after:bottom-0 group-hover:after:left-0 group-hover:after:bg-gradient-to-t group-hover:after:rounded-b-2xl group-hover:after:from-[var(--primary)] group-hover:after:to-transparent group-hover:after:opacity-60">
                      <div>
                        <span className="absolute inline-block px-5 py-2 top-5 right-5 bg-[var(--tertiary)] rounded-full">
                          New
                        </span>
                      </div>
                      <div className="z-10">
                        <div className="flex justify-between mb-3">
                          <span className="text-white">For Rental</span>
                          <span className="text-[var(--tertiary)] text-xl">
                            $5,256{" "}
                            <span className="text-white text-base">/month</span>
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-4 md:gap-1 justify-between items-center">
                          <div>
                            <h3 className="text-white text-2xl font-medium">
                              Luxury Studio
                            </h3>
                            <span className="text-white">
                              <i className="las la-map-marker-alt text-[var(--tertiary)]"></i>{" "}
                              United States
                            </span>
                          </div>
                          <Link
                            href="#"
                            className="btn-outline-secondary group-hover:bg-[var(--secondary)] group-hover:text-neutral-900">
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="max-w-[416px] rounded-2xl relative group">
                  <Image
                    src={listingImg4}
                    alt="listingimg"
                    className="rounded-2xl"
                  />
                  <div className="absolute w-full h-full p-5 rounded-2xl top-0 left-0 flex flex-col justify-between before:w-full before:absolute before:h-full before:bottom-0 before:left-0 before:bg-gradient-to-t before:rounded-b-2xl before:from-slate-800 before:to-transparent group-hover:after:w-full group-hover:after:absolute group-hover:after:h-full group-hover:after:bottom-0 group-hover:after:left-0 group-hover:after:bg-gradient-to-t group-hover:after:rounded-b-2xl group-hover:after:from-[var(--primary)] group-hover:after:to-transparent group-hover:after:opacity-60">
                    <div>
                      <span className="absolute inline-block px-5 py-2 top-5 left-5 bg-[var(--secondary)] rounded-full">
                        Verified
                      </span>
                      <span className="absolute inline-block px-5 py-2 top-5 right-5 bg-[var(--tertiary)] rounded-full">
                        New
                      </span>
                    </div>
                    <div className="z-10">
                      <div className="flex justify-between mb-3">
                        <span className="text-white">For Rental</span>
                        <span className="text-[var(--tertiary)] text-xl">
                          $5,256{" "}
                          <span className="text-white text-base">/month</span>
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-4 md:gap-1 justify-between items-center">
                        <div>
                          <h3 className="text-white text-2xl font-medium">
                            Luxury Studio
                          </h3>
                          <span className="text-white">
                            <i className="las la-map-marker-alt text-[var(--tertiary)]"></i>{" "}
                            United States
                          </span>
                        </div>
                        <Link
                          href="#"
                          className="btn-outline-secondary group-hover:bg-[var(--secondary)] group-hover:text-neutral-900">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
        <div className="flex justify-center mt-10">
          <Link href="#" className="btn-outline flex items-center gap-2">
            View All <i className="las la-long-arrow-alt-right text-2xl"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewListing;
