"use client";
import CheckboxCustom from "@/components/Checkbox";
import CustomRangeSlider from "@/components/RangeSlider";
import { amenities } from "@/public/data/propertyamenities";
import {
  ArrowPathIcon,
  ListBulletIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
type RadioOption = "rent" | "buy" | "sell";
export default function Layout({ children }: { children: React.ReactNode }) {
  const [Option, setOption] = useState<RadioOption>("rent");
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOption(event.target.value as RadioOption);
  };
  const path = usePathname();
  return (
    <div className="py-[30px] lg:py-[60px] bg-[var(--bg-2)] px-3">
      <div className="container">
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <div className="col-span-12 md:col-span-4">
            <div className="p-4 lg:py-6 lg:px-8 bg-white rounded-2xl shadow-lg">
              <h4 className="mb-0 text-2xl font-semibold"> Filter </h4>
              <div className="border-b border-dashed my-6 opacity-50"></div>
              <div className="flex items-center justify-between rounded-full border bg-[var(--bg-1)] px-5 py-3">
                <input
                  type="text"
                  className="w-full bg-transparent focus:outline-none"
                  placeholder="Keywords..."
                />
                <button
                  type="button"
                  className="border-0 bg-transparent p-0 lh-1">
                  <MagnifyingGlassIcon className="w-5 h-5" />
                </button>
              </div>
              <div className="border-t border-dashed my-6 opacity-50"></div>
              <p className="mb-4 text-xl font-medium"> Category </p>
              <ul className="flex items-center gap-6">
                <li>
                  <div className="flex items-center gap-2">
                    <input
                      className="accent-[var(--primary)] scale-125"
                      type="radio"
                      name="property-type"
                      id="rent-category"
                      value={"rent"}
                      onChange={handleOptionChange}
                      checked={Option === "rent"}
                    />
                    <label
                      className="inline-block text-lg font-medium cursor-pointer"
                      htmlFor="rent-category">
                      Rent
                    </label>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2">
                    <input
                      className="accent-[var(--primary)] scale-125"
                      type="radio"
                      name="property-type"
                      id="buy-category"
                      value={"buy"}
                      onChange={handleOptionChange}
                      checked={Option === "buy"}
                    />
                    <label
                      className="inline-block text-lg font-medium cursor-pointer"
                      htmlFor="buy-category">
                      Buy
                    </label>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2">
                    <input
                      className="accent-[var(--primary)] scale-125"
                      type="radio"
                      name="property-type"
                      id="sell-category"
                      value={"sell"}
                      onChange={handleOptionChange}
                      checked={Option === "sell"}
                    />
                    <label
                      className="inline-block text-lg font-medium cursor-pointer"
                      htmlFor="sell-category">
                      Sell
                    </label>
                  </div>
                </li>
              </ul>
              <div className="border-t border-dashed my-6"></div>
              <p className="mb-4 text-[var(--neutral-700)] text-xl font-medium">
                Select Types
              </p>
              <ul className="flex flex-col gap-4">
                <li>
                  <div className="rounded-full border bg-[var(--bg-1)] pr-4">
                    <select
                      className="w-full bg-transparent px-5 py-3 focus:outline-none"
                      aria-label="Default select example">
                      <option value="">Property Types</option>
                      <option value="1">New York</option>
                      <option value="2">Chicago</option>
                      <option value="3">Atlanta</option>w-full bg-transparent
                      px-5 py-3 focus:outline-none
                    </select>
                  </div>
                </li>
                <li>
                  <div className="rounded-full border bg-[var(--bg-1)] pr-4">
                    <select
                      className="w-full bg-transparent px-5 py-3 focus:outline-none"
                      aria-label="Default select example">
                      <option value="">Property City</option>
                      <option value="1">New York</option>
                      <option value="2">Chicago</option>
                      <option value="3">Atlanta</option>
                    </select>
                  </div>
                </li>
                <li>
                  <div className="rounded-full border bg-[var(--bg-1)] pr-4">
                    <select
                      className="w-full bg-transparent px-5 py-3 focus:outline-none"
                      aria-label="Default select example">
                      <option value="">Property Area</option>
                      <option value="1">New York</option>
                      <option value="2">Chicago</option>
                      <option value="3">Atlanta</option>
                    </select>
                  </div>
                </li>
                <li>
                  <div className="rounded-full border bg-[var(--bg-1)] pr-4">
                    <select
                      className="w-full bg-transparent px-5 py-3 focus:outline-none"
                      aria-label="Default select example">
                      <option value="">Rooms Number</option>
                      <option value="1">New York</option>
                      <option value="2">Chicago</option>
                      <option value="3">Atlanta</option>
                    </select>
                  </div>
                </li>
              </ul>
              <div className="border-t border-dashed my-6"></div>
              <p className="mb-4 text-[var(--neutral-700)] text-xl font-medium">
                Pricing scale
              </p>

              <CustomRangeSlider />

              <div className="border-t border-dashed my-6"></div>
              <p className="mb-4 text-[var(--neutral-700)] text-xl font-medium">
                Amenities
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:gird-cols-1 xl:grid-cols-2 gap-4">
                {amenities.map((amenity) => (
                  <CheckboxCustom key={amenity} label={amenity} />
                ))}
              </div>
              <div className="border-t border-dashed my-6"></div>
              <Link
                href="#"
                className="btn-outline flex justify-center items-center gap-2 text-primary font-semibold w-full text-center">
                <ArrowPathIcon className="w-6 h-6" />
                Reset Filters
              </Link>
            </div>
          </div>
          <div className="col-span-12 md:col-span-8">
            <div className="grid grid-cols-12 gap-4 xl:gap-6">
              <div className="col-span-12">
                <div className="bg-white rounded-lg py-2 px-6 shadow-lg">
                  <ul className="flex justify-between items-center flex-wrap gap-3 ">
                    <li className="hidden xl:block">
                      <p className="mb-0 clr-neutral-500">
                        Showing 5 of 20 Results
                      </p>
                    </li>
                    <li className="flex-grow">
                      <ul className="flex flex-wrap justify-center justify-content-lg-start justify-content-xl-center gap-4">
                        <li>
                          <Link
                            href="property-grid"
                            className={`link flex items-center gap-2 clr-neutral-500 hover:text-primary ${
                              path === "/property-grid" && "text-primary"
                            }`}>
                            <Squares2X2Icon className="w-5 h-5" />
                            <span className="inline-block font-medium">
                              Grid
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="property-list"
                            className={`link flex items-center gap-2 clr-neutral-500 hover:text-primary ${
                              path === "/property-list" && "text-primary"
                            }`}>
                            <ListBulletIcon className="w-5 h-5" />
                            <span className="inline-block font-medium">
                              List
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="property-map"
                            className={`link flex items-center gap-2 clr-neutral-500 hover:text-primary ${
                              path === "/property-map" && "text-primary"
                            }`}>
                            <MapPinIcon className="w-5 h-5" />
                            <span className="inline-block font-medium">
                              Map
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </li>
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
  );
}
