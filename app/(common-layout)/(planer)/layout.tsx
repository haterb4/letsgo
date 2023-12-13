"use client";
import CheckboxCustom from "@/components/Checkbox";
import CustomRangeSlider from "@/components/RangeSlider";
import { hotelamenities } from "@/public/data/hotelamenities";
import { hoteltypes } from "@/public/data/hoteltypes";
import { SearchIcon } from "@/public/data/icons";
import { StarIcon } from "@heroicons/react/20/solid";
import {
  ArrowPathIcon,
  ListBulletIcon,
  MapPinIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  return (
    <>
      <div className="py-[30px] lg:py-[60px] bg-[var(--bg-2)] px-3">
        <div className="container">
          <div className="grid grid-cols-12 gap-4 lg:gap-6">
            <div className="col-span-12 lg:col-span-4 order-2 order-lg-1">
              <div className="p-3 sm:p-4 lg:py-6 lg:px-8 bg-white rounded-2xl shadow-lg">
                <h4 className="mb-0 text-2xl font-semibold"> Filter </h4>
                <div className="border-t border-dashed my-6"></div>
                <div className="flex items-center justify-between rounded-full border border-neutral-40 bg-[var(--bg-2)] px-5 py-3">
                  <input
                    type="text"
                    className="w-full bg-transparent border-0 focus:outline-none"
                    placeholder="Search by car name"
                  />
                  <button
                    type="button"
                    className="border-0 bg-transparent p-0 lh-1">
                    <SearchIcon />
                  </button>
                </div>
                <div className="border-t border-dashed my-6"></div>
                <p className="mb-4 text-[var(--neutral-700)] text-xl font-medium">
                  Services
                </p>
                <ul className="flex flex-col gap-3">
                  {hoteltypes.map((hotel) => (
                    <li
                      key={hotel.id}
                      className="flex items-center justify-between">
                      <CheckboxCustom label={hotel.name} />
                      <span>{hotel.number}</span>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-dashed my-6"></div>
                <p className="mb-4 text-[var(--neutral-700)] text-xl font-medium">
                  Pricing scale
                </p>
                <CustomRangeSlider />
                <div className="border-t border-dashed my-6"></div>
                <p className="mb-4 text-[var(--neutral-700)] text-xl font-medium">
                  Star Category
                </p>
                <ul className="flex flex-col gap-3">
                  <li className="flex justify-between items-center">
                    <CheckboxCustom
                      label="5 Star"
                      img={
                        <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                      }
                    />
                    <span>425</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <CheckboxCustom
                      label="4 Star"
                      img={
                        <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                      }
                    />
                    <span>325</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <CheckboxCustom
                      label="3 Star"
                      img={
                        <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                      }
                    />
                    <span>205</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <CheckboxCustom
                      label="2 Star"
                      img={
                        <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                      }
                    />
                    <span>65</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <CheckboxCustom
                      label="1 Star"
                      img={
                        <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                      }
                    />
                    <span>21</span>
                  </li>
                </ul>
                <div className="border-t border-dashed my-6"></div>
                <p className="mb-4 text-[var(--neutral-700)] text-xl font-medium">
                  Amenities
                </p>
                <ul className="flex flex-col gap-3">
                  {hotelamenities.map((item) => (
                    <li
                      key={item.id}
                      className="flex justify-between items-center">
                      <CheckboxCustom
                        label={item.title}
                        img={
                          <Image
                            height={24}
                            width={24}
                            src={item.img}
                            alt="Icon"
                          />
                        }
                      />
                      <span>{item.number}</span>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-dashed my-6"></div>
                <p className="mb-4 text-[var(--neutral-700)] text-xl font-medium">
                  Payment type
                </p>
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-12">
                    <ul className="flex flex-col gap-2">
                      <li>
                        <CheckboxCustom label="Pay Now" />
                      </li>
                      <li>
                        <CheckboxCustom label="Pay at Counter" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="border-t border-dashed my-6"></div>
                <Link
                  href="#"
                  className="btn btn-outline w-full font-semibold text-primary flex justify-center items-center gap-2">
                  <ArrowPathIcon className="w-5 h-5" />
                  Reset Filters
                </Link>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-8 order-1 lg:order-2">
              <div className="grid grid-cols-12 gap-4 lg:gap-6">
                <div className="col-span-12">
                  <div className="bg-white rounded-lg py-2 px-6 shadow-lg">
                    <ul className="flex justify-between items-center flex-wrap gap-3 ">
                      <li className="hidden xl:block">
                        <p className="mb-0 clr-neutral-500">
                          Showing 5 of 20 Results
                        </p>
                      </li>
                      {/* <li className="flex-grow">
                        <ul className="flex flex-wrap justify-center justify-content-lg-start justify-content-xl-center gap-4">
                          <li>
                            <Link
                              href="/planer-listing-grid"
                              className={`link flex items-center gap-2 clr-neutral-500 hover:text-primary ${
                                path === "/planer-listing-grid" && "text-primary"
                              }`}>
                              <Squares2X2Icon className="w-5 h-5" />
                              <span className="inline-block font-medium">
                                Grid
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/planer-listing"
                              className={`link flex items-center gap-2 clr-neutral-500 hover:text-primary ${
                                path === "/planer-listing" && "text-primary"
                              }`}>
                              <ListBulletIcon className="w-5 h-5" />
                              <span className="inline-block font-medium">
                                List
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/planer-listing-map"
                              className={`link flex items-center gap-2 clr-neutral-500 hover:text-primary ${
                                path === "/planer-listing-map" && "text-primary"
                              }`}>
                              <MapPinIcon className="w-5 h-5" />
                              <span className="inline-block font-medium">
                                Map
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </li> */}
                      <li className="hidden lg:flex items-center">
                        <p className="mb-0 clr-neutral-500 flex-grow whitespace-nowrap">
                          Sort By :
                        </p>
                        <select className="w-full bg-transparent px-5 py-2 focus:outline-none border-0">
                          <option>latest</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </li>
                    </ul>
                  </div>
                </div>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
