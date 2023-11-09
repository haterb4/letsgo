import CheckboxCustom from "@/components/Checkbox";
import CustomRangeSlider from "@/components/RangeSlider";
import { flightList } from "@/public/data/flightlist";
import { flightTypes } from "@/public/data/flighttypes";
import { SearchIcon } from "@/public/data/icons";
import {
  ArrowPathIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="py-[30px] lg:py-[60px]">
      <div className="container">
        <div className="grid grid-cols-12 gap-4 lg:gap-6">
          <div className="col-span-12 lg:col-span-4 order-2 lg:order-1">
            <div className="py-6 px-8 bg-white rounded-2xl shadow-lg">
              <h4 className="mb-0 text-2xl font-semibold"> Filter </h4>
              <div className="border-t border-dashed my-6"></div>
              <div className="flex items-center justify-between rounded-full border bg-[var(--bg-2)] px-5 py-3">
                <input
                  type="text"
                  className="bg-transparent border-0 w-[180px] focus:outline-none"
                  placeholder="Search by flight name"
                />
                <button
                  type="button"
                  className="border-0 bg-transparent p-0 shrink-0 lh-1">
                  <SearchIcon />
                </button>
              </div>
              <div className="border-t border-dashed my-6"></div>
              <p className="mb-4 text-[var(--neutral-700)] text-xl font-medium">
                Category
              </p>
              <ul className="flex flex-wrap items-center gap-3">
                <li>
                  <div className="flex items-center gap-2">
                    <input
                      className="accent-[var(--primary)] scale-125"
                      type="radio"
                      name="property-type"
                      id="rent-category"
                    />
                    <label
                      className="inline-block text-lg font-medium cursor-pointer"
                      htmlFor="rent-category">
                      One Way
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
                    />
                    <label
                      className="inline-block text-lg font-medium cursor-pointer"
                      htmlFor="buy-category">
                      Round Trip
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
                    />
                    <label
                      className="inline-block text-lg font-medium cursor-pointer"
                      htmlFor="sell-category">
                      Multi City
                    </label>
                  </div>
                </li>
              </ul>
              <div className="border-t border-dashed my-6"></div>
              <p className="mb-4 text-[var(--neutral-700)] text-xl font-medium">
                No. of Stops
              </p>
              <ul className="flex flex-col gap-2">
                <li>
                  <CheckboxCustom label="Non Stop" />
                </li>
                <li>
                  <CheckboxCustom label="1 Stop" />
                </li>
                <li>
                  <CheckboxCustom label="2+ Stop" />
                </li>
                <li>
                  <CheckboxCustom label="3+ Stop" />
                </li>
                <li>
                  <CheckboxCustom label="4+ Stop" />
                </li>
              </ul>
              <div className="border-t border-dashed my-6"></div>
              <p className="mb-4 text-[var(--neutral-700)] text-xl font-medium">
                Departure Time
              </p>
              <ul className="flex flex-col gap-3">
                <li className="flex justify-between items-center">
                  <CheckboxCustom label="Early Morning" />
                  <span>12am - 8am</span>
                </li>
                <li className="flex justify-between items-center">
                  <CheckboxCustom label="Morning" />
                  <span>8am - 12pm</span>
                </li>
                <li className="flex justify-between items-center">
                  <CheckboxCustom label="Mid Day" />
                  <span>12pm - 4pm</span>
                </li>
                <li className="flex justify-between items-center">
                  <CheckboxCustom label="Evening Night" />
                  <span>4pm - 8pm</span>
                </li>
                <li className="flex justify-between items-center">
                  <CheckboxCustom label="Night" />
                  <span>8pm - 12am</span>
                </li>
              </ul>
              <div className="border-t border-dashed my-6"></div>
              <p className="mb-4 text-[var(--neutral-700)] text-xl font-medium">
                Pricing scale
              </p>
              <CustomRangeSlider />
              <div className="border-t border-dashed my-6"></div>
              <p className="mb-4 text-[var(--neutral-700)] text-xl font-medium">
                Types of Airlines
              </p>
              <ul className="flex flex-col gap-3">
                {flightTypes.map(({ id, number, title }) => (
                  <li key={id} className="flex justify-between items-center">
                    <CheckboxCustom label={title} />
                    <span>{number}</span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-dashed my-6"></div>
              <Link
                href="#"
                className="btn-outline  flex justify-center gap-2 text-primary">
                <ArrowPathIcon className="w-5 h-5" />
                Read More
              </Link>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8 order-1 lg:order-2">
            <div className="grid grid-cols-1 gap-4 lg:gap-6">
              {flightList.map(
                ({
                  id,
                  arrivalTime,
                  depertureTime,
                  from,
                  img,
                  price,
                  title,
                  to,
                }) => (
                  <div key={id} className="col-span-1">
                    <div className="md:flex bg-white border rounded-2xl mx-3 xl:mx-0">
                      <div className="flex flex-col gap-6 p-4 lg:p-6 flex-grow">
                        <div className="flex flex-col md:flex-row justify-center items-start gap-6">
                          <div className="flex w-full justify-center md:w-auto flex-col gap-3 md:gap-7 text-center md:text-start flex-grow">
                            <div className="grid place-content-center w-16 h-16 rounded-full bg-white shadow-lg mx-auto ms-md-0">
                              <Image
                                width={52}
                                height={27}
                                src={img}
                                alt="image"
                                className=" object-fit-contain"
                              />
                            </div>
                            <p className="mb-0 font-medium">{title}</p>
                          </div>
                          <div className="flex md:flex-col justify-between gap-2 my-6 md:my-0 flex-grow w-full md:w-auto">
                            <span className="block text-primary">From</span>
                            <h4 className="mb-0 text-2xl font-semibold">
                              {depertureTime}
                            </h4>
                            <span className="block text-[var(--neutral-700)]">
                              {from}
                            </span>
                          </div>
                          <div className="flex w-full md:w-auto justify-center flex-col gap-2 text-center flex-grow">
                            <div className="grid place-content-center w-12 h-12 shadow-lg rounded-full mx-auto">
                              <div className="grid place-content-center w-10 h-10 bg-[var(--primary-light)] text-primary rounded-full">
                                <i className="las la-plane-departure text-2xl"></i>
                              </div>
                            </div>
                            <span className="block font-medium">
                              {" "}
                              Non-stop{" "}
                            </span>
                            <span className="block clr-neutral-500">
                              02h 15 min
                            </span>
                          </div>
                          <div className="flex w-full md:w-auto md:flex-col justify-between gap-2 my-6 md:my-0 flex-grow">
                            <span className="block text-primary">To</span>
                            <h4 className="mb-0 text-2xl font-semibold">
                              {arrivalTime}
                            </h4>
                            <span className="block text-[var(--neutral-700)]">
                              {to}
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
                        <div className="md:flex justify-between text-center">
                          <p className="mb-0">
                            Refundable
                            <span className="text-primary">$5 eCash</span>
                          </p>
                          <p className="mb-0 text-red-500">
                            {" "}
                            Only 10 Seat Left{" "}
                          </p>
                          <p className="mb-0"> Flight Details </p>
                        </div>
                      </div>

                      <div className="p-3 lg:p-6 xl:pt-10 xxl:pt-14 bg-[var(--bg-2)] text-center md:text-start rounded-e-2xl">
                        <p className="clr-neutral-200 line-through">$450</p>
                        <div className="flex items-center justify-center justify-content-md-start gap-2 mb-6">
                          <h2 className="mb-0 h2 text-[var(--neutral-700)]">
                            {" "}
                            ${price}
                          </h2>
                          <span className="inline-block text-sm text-primary">
                            20% OFF
                          </span>
                        </div>
                        <Link
                          href="/flight-details"
                          className="btn-outline  flex justify-center text-primary">
                          Book Now
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              )}

              <div className="col-span-1">
                <nav>
                  <ul className="flex gap-3 justify-center">
                    <li className="page-item">
                      <Link
                        className="page-link p-0 w-10 h-10 grid place-content-center lh-1 rounded-full border border-[var(--primary)] text-primary"
                        href="#">
                        <ChevronLeftIcon className="w-5 h-5" />
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link
                        className="page-link p-0 w-10 h-10 grid place-content-center lh-1 rounded-full border border-[var(--primary)] bg-primary text-white"
                        href="#">
                        1
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link
                        className="page-link p-0 w-10 h-10 grid place-content-center lh-1 rounded-full border border-[var(--primary)] text-primary"
                        href="#">
                        2
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link
                        className="page-link p-0 w-10 h-10 grid place-content-center lh-1 rounded-full border border-[var(--primary)] text-primary"
                        href="#">
                        3
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link
                        className="page-link p-0 w-10 h-10 grid place-content-center lh-1 rounded-full border border-[var(--primary)] text-primary"
                        href="#">
                        <ChevronRightIcon className="w-5 h-5" />
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
