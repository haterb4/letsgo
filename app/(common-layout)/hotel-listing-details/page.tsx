"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Tooltip } from "react-tooltip";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Link from "next/link";
import { useState } from "react";
import { Tab } from "@headlessui/react";
import { CheckIcon, StarIcon } from "@heroicons/react/20/solid";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
  ArrowsRightLeftIcon,
  CalendarDaysIcon,
  ChatBubbleLeftEllipsisIcon,
  ChatBubbleLeftRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ClockIcon,
  HandThumbUpIcon,
  HeartIcon,
  MapPinIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import HotelDetailsFeaturedRoom from "@/components/HotelDetailsFeaturedRoom";
import CheckboxCustom from "@/components/Checkbox";
const featuredHotelData = [
  {
    id: 1,
    img: "/img/featured-hotel-7.jpg",
    title: "Luxury Room",
    price: 256,
    favourite: false,
  },
  {
    id: 2,
    img: "/img/featured-hotel-8.jpg",
    title: "Luxury Room",
    price: 256,
    favourite: false,
  },
  {
    id: 3,
    img: "/img/featured-hotel-9.jpg",
    title: "Luxury Room",
    price: 256,
    favourite: false,
  },
];
function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
const Page = () => {
  const [data, setData] = useState(featuredHotelData);
  const tooltipStyle = {
    backgroundColor: "#3539E9",
    color: "#fff",
    borderRadius: "10px",
  };
  return (
    <main>
      <div className="bg-[var(--bg-2)]">
        <div className="container-fluid p-0">
          <div>
            <div className="col-span-12">
              <Swiper
                loop={true}
                slidesPerView="auto"
                spaceBetween={16}
                centeredSlides={true}
                centeredSlidesBounds={true}
                navigation={{
                  nextEl: ".btn-next",
                  prevEl: ".btn-prev",
                }}
                breakpoints={{
                  576: {
                    slidesPerView: 2.25,
                  },
                  768: {
                    slidesPerView: 2.5,
                  },
                  1200: {
                    slidesPerView: 3.25,
                  },
                }}
                modules={[Navigation]}
                className="swiper property-gallery-slider">
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <Link
                      href="/img/hotel-gallery-1.jpg"
                      className="link block property-gallery">
                      <Image
                        width={618}
                        height={600}
                        src="/img/hotel-gallery-1.jpg"
                        alt="image"
                        className=" rounded-2xl"
                      />
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <Link
                      href="/img/hotel-gallery-2.jpg"
                      className="link block property-gallery">
                      <Image
                        width={618}
                        height={600}
                        src="/img/hotel-gallery-2.jpg"
                        alt="image"
                        className=" rounded-2xl"
                      />
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <Link
                      href="/img/hotel-gallery-3.jpg"
                      className="link block property-gallery">
                      <Image
                        width={618}
                        height={600}
                        src="/img/hotel-gallery-3.jpg"
                        alt="image"
                        className=" rounded-2xl"
                      />
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <Link
                      href="/img/hotel-gallery-3.jpg"
                      className="link block property-gallery">
                      <Image
                        width={618}
                        height={600}
                        src="/img/hotel-gallery-3.jpg"
                        alt="image"
                        className=" rounded-2xl"
                      />
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <Link
                      href="/img/hotel-gallery-1.jpg"
                      className="link block property-gallery">
                      <Image
                        width={618}
                        height={600}
                        src="/img/hotel-gallery-1.jpg"
                        alt="image"
                        className=" rounded-2xl"
                      />
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <Link
                      href="/img/hotel-gallery-2.jpg"
                      className="link block property-gallery">
                      <Image
                        width={618}
                        height={600}
                        src="/img/hotel-gallery-2.jpg"
                        alt="image"
                        className=" rounded-2xl"
                      />
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <Link
                      href="/img/hotel-gallery-3.jpg"
                      className="link block property-gallery">
                      <Image
                        width={618}
                        height={600}
                        src="/img/hotel-gallery-3.jpg"
                        alt="image"
                        className=" rounded-2xl"
                      />
                    </Link>
                  </SwiperSlide>
                </div>
                <button className="btn-prev absolute top-[45%] left-4 z-[1] bg-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-primary hover:text-white duration-300">
                  <ChevronLeftIcon className="w-5 h-5" />
                </button>
                <button className="btn-next absolute top-[45%] right-4 z-[1] bg-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-primary hover:text-white duration-300">
                  <ChevronRightIcon className="w-5 h-5" />
                </button>
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[var(--bg-2)] py-[30px] lg:py-[60px] px-3">
        <div className="container">
          <div className="grid grid-cols-12 gap-4 lg:gap-6">
            <div className="col-span-12 xl:col-span-8">
              <div className="section-space--sm">
                <div className="p-3 sm:p-4 lg:p-6 bg-white rounded-2xl mb-10">
                  <div className="flex items-center justify-between flex-wrap gap-3 mb-8">
                    <h2 className="mt-4 h2 mb-0"> Burj Al Arab </h2>
                    <ul className="flex gap-3 items-center">
                      <li>
                        <Link
                          href="#"
                          className="link w-8 h-8 grid place-content-center bg-[var(--primary-light)] text-primary rounded-full hover:bg-primary hover:text-white">
                          <HeartIcon className="h-5 w-5" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="link w-8 h-8 grid place-content-center bg-[var(--primary-light)] text-primary rounded-full hover:bg-primary hover:text-white">
                          <ArrowsRightLeftIcon className="w-5 h-5" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="link w-8 h-8 grid place-content-center bg-[var(--primary-light)] text-primary rounded-full hover:bg-primary hover:text-white">
                          <ShareIcon className="w-5 h-5" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <ul className="flex flex-wrap items-center justify-between gap-4 gap-md-0">
                    <li>
                      <div className="flex items-center gap-2">
                        <MapPinIcon className="w-5 h-5 text-[var(--secondary-500)]" />
                        <p className="mb-0"> 3890 Poplar Dr. </p>
                      </div>
                    </li>
                    <li className="text-primary text-lg">•</li>
                    <li>
                      <p className="mb-0">
                        ID: <span className="text-primary">12546</span>
                      </p>
                    </li>
                    <li className="text-primary text-lg">•</li>
                    <li>
                      <div className="flex items-center gap-1">
                        <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                        <p className="mb-0"> 4.5(66) </p>
                      </div>
                    </li>
                    <li className="text-primary text-lg">•</li>
                    <li>
                      <p className="mb-0">
                        <span className="clr-neutral-500">Published:</span> Feb
                        9, 23
                      </p>
                    </li>
                  </ul>
                  <div className="border border-dashed my-8"></div>
                  <ul className="flex items-center flex-wrap gap-3">
                    <li>
                      <span className="block text-lg font-medium">
                        Facilities -
                      </span>
                    </li>
                    <li>
                      <div
                        data-tooltip-id="parking"
                        className="grid place-content-center w-10 h-10 rounded-full bg-[var(--bg-2)] text-primary">
                        <Image
                          width={28}
                          height={28}
                          src="/img/icon-car-parking.png"
                          alt="image"
                          className=" w-7 h-7 object-fit-contain"
                        />
                      </div>
                    </li>
                    <li>
                      <div
                        data-tooltip-id="restaurent"
                        className="grid place-content-center w-10 h-10 rounded-full bg-[var(--bg-2)] text-primary">
                        <Image
                          width={28}
                          height={28}
                          src="/img/icon-breakfast.png"
                          alt="image"
                          className=" w-7 h-7 object-fit-contain"
                        />
                      </div>
                    </li>
                    <li>
                      <div
                        data-tooltip-id="room"
                        className="grid place-content-center w-10 h-10 rounded-full bg-[var(--bg-2)] text-primary">
                        <Image
                          width={28}
                          height={28}
                          src="/img/icon-room-service.png"
                          alt="image"
                          className=" w-7 h-7 object-fit-contain"
                        />
                      </div>
                    </li>
                    <li>
                      <div
                        data-tooltip-id="fitness"
                        className="grid place-content-center w-10 h-10 rounded-full bg-[var(--bg-2)] text-primary">
                        <Image
                          width={28}
                          height={28}
                          src="/img/icon-fitness.png"
                          alt="image"
                          className=" w-7 h-7 object-fit-contain"
                        />
                      </div>
                    </li>
                    <li>
                      <div
                        data-tooltip-id="swimming"
                        className="grid place-content-center w-10 h-10 rounded-full bg-[var(--bg-2)] text-primary">
                        <Image
                          width={28}
                          height={28}
                          src="/img/icon-swimming-pool.png"
                          alt="image"
                          className=" w-7 h-7 object-fit-contain"
                        />
                      </div>
                    </li>
                    <li>
                      <div
                        data-tooltip-id="laundry"
                        className="grid place-content-center w-10 h-10 rounded-full bg-[var(--bg-2)] text-primary">
                        <Image
                          width={28}
                          height={28}
                          src="/img/icon-laundry.png"
                          alt="image"
                          className=" w-7 h-7 object-fit-contain"
                        />
                      </div>
                    </li>
                    <li>
                      <div
                        data-tooltip-id="free"
                        className="grid place-content-center w-10 h-10 rounded-full bg-[var(--bg-2)] text-primary">
                        <Image
                          width={28}
                          height={28}
                          src="/img/icon-glob.png"
                          alt="image"
                          className=" w-7 h-7 object-fit-contain"
                        />
                      </div>
                    </li>
                  </ul>
                  <Tooltip
                    id="parking"
                    style={tooltipStyle}
                    offset={7}
                    content="Parking"
                  />
                  <Tooltip
                    id="restaurent"
                    style={tooltipStyle}
                    offset={7}
                    content="Restaurent"
                  />
                  <Tooltip
                    id="room"
                    style={tooltipStyle}
                    offset={7}
                    content="Room Service"
                  />
                  <Tooltip
                    id="fitness"
                    style={tooltipStyle}
                    offset={7}
                    content="Fitness"
                  />
                  <Tooltip
                    id="swimming"
                    style={tooltipStyle}
                    offset={7}
                    content="Swimming"
                  />
                  <Tooltip
                    id="laundry"
                    style={tooltipStyle}
                    offset={7}
                    content="Laundry"
                  />
                  <Tooltip
                    id="free"
                    style={tooltipStyle}
                    offset={7}
                    content="Free Internet"
                  />
                </div>
                <div className="p-3 sm:p-4 lg:p-6 bg-white rounded-2xl mb-10">
                  <h4 className="mb-5 text-2xl font-semibold"> Description </h4>
                  <p className="mb-5 clr-neutral-500">
                    The Burj Al Arab is a luxurious 7-star hotel located in
                    Dubai, United Arab Emirates. It is known for its distinctive
                    sail-shaped silhouette and its iconic status as one of the
                    world&apos;s most luxurious hotels. The hotel offers a
                    variety of amenities and services, including private butler
                    service, luxurious suites, a spa, several restaurants and
                    bars, and access to the hotel&apos;s private beach.
                  </p>
                  <Link
                    href="#"
                    className="link flex items-center gap-2 text-primary">
                    <span className="font-semibold inline-block">
                      Read More
                    </span>
                    <ArrowLongRightIcon className="w-5 h-5" />
                  </Link>
                </div>
                <div className="p-3 sm:p-4 lg:p-6 bg-white rounded-2xl mb-10">
                  <h4 className="mb-5 text-2xl font-semibold"> Services </h4>
                  <div className="mb-10">
                    <div className="grid grid-cols-12 gap-4 lg:gap-6">
                      <div className="col-span-12 md:col-span-4 lg:col-span-3">
                        <ul className="flex flex-col gap-4">
                          <li>
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[var(--primary-light)]">
                                <i className="las la-check text-lg text-primary"></i>
                              </div>
                              <span className="inline-block">Dry cleaning</span>
                            </div>
                          </li>
                          <li>
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[var(--primary-light)]">
                                <i className="las la-check text-lg text-primary"></i>
                              </div>
                              <span className="inline-block">
                                Special service
                              </span>
                            </div>
                          </li>
                          <li>
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[var(--primary-light)]">
                                <i className="las la-check text-lg text-primary"></i>
                              </div>
                              <span className="inline-block"> Concierge </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="col-span-12 md:col-span-4 lg:col-span-3">
                        <ul className="flex flex-col gap-4">
                          <li>
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[var(--primary-light)]">
                                <i className="las la-check text-lg text-primary"></i>
                              </div>
                              <span className="inline-block">
                                Personalization
                              </span>
                            </div>
                          </li>
                          <li>
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[var(--primary-light)]">
                                <i className="las la-check text-lg text-primary"></i>
                              </div>
                              <span className="inline-block">Room Service</span>
                            </div>
                          </li>
                          <li>
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[var(--primary-light)]">
                                <i className="las la-check text-lg text-primary"></i>
                              </div>
                              <span className="inline-block">Waiting Area</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="col-span-12 md:col-span-4 lg:col-span-3">
                        <ul className="flex flex-col gap-4">
                          <li>
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[var(--primary-light)]">
                                <i className="las la-check text-lg text-primary"></i>
                              </div>
                              <span className="inline-block">
                                Doctor on Call
                              </span>
                            </div>
                          </li>
                          <li>
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[var(--primary-light)]">
                                <i className="las la-check text-lg text-primary"></i>
                              </div>
                              <span className="inline-block"> Debit Card </span>
                            </div>
                          </li>
                          <li>
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[var(--primary-light)]">
                                <i className="las la-check text-lg text-primary"></i>
                              </div>
                              <span className="inline-block"> Heating </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="col-span-12 md:col-span-4 lg:col-span-3">
                        <ul className="flex flex-col gap-4">
                          <li>
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[var(--primary-light)]">
                                <i className="las la-check text-lg text-primary"></i>
                              </div>
                              <span className="inline-block"> Alarm </span>
                            </div>
                          </li>
                          <li>
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[var(--primary-light)]">
                                <i className="las la-check text-lg text-primary"></i>
                              </div>
                              <span className="inline-block"> Pets Allow </span>
                            </div>
                          </li>
                          <li>
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[var(--primary-light)]">
                                <i className="las la-check text-lg text-primary"></i>
                              </div>
                              <span className="inline-block">Spa Massage</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <Link href="#" className="btn-outline  font-semibold">
                    Read More
                  </Link>
                </div>
                <div className="p-3 sm:p-4 lg:p-6 bg-white rounded-2xl mb-10">
                  <h4 className="mb-5 text-2xl font-semibold"> Advantages </h4>
                  <ul className="flex flex-col gap-4 mb-5">
                    <li>
                      <div className="flex gap-4">
                        <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[var(--primary-light)]">
                          <i className="las la-check text-lg text-primary"></i>
                        </div>
                        <span className="inline-block">
                          World-class luxury: The hotel is known for its opulent
                          design and over-the-top luxury.
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-4">
                        <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[var(--primary-light)]">
                          <i className="las la-check text-lg text-primary"></i>
                        </div>
                        <span className="inline-block">
                          Unmatched service: The hotel prides itself on its
                          personalized service and attention to detail.
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-4">
                        <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[var(--primary-light)]">
                          <i className="las la-check text-lg text-primary"></i>
                        </div>
                        <span className="inline-block">
                          Exclusive amenities: Burj Al Arab offers a range of
                          exclusive amenities, including a private beach, an
                          outdoor pool, and a spa.
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-4">
                        <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[var(--primary-light)]">
                          <i className="las la-check text-lg text-primary"></i>
                        </div>
                        <span className="inline-block">
                          Incredible views: The hotel is located on a man-made
                          island, which offers incredible views of the Dubai
                          skyline and the Arabian Gulf.
                        </span>
                      </div>
                    </li>
                  </ul>
                  <Link
                    href="#"
                    className="link flex items-center gap-2 text-primary">
                    <span className="font-semibold inline-block">
                      Read More
                    </span>
                    <ArrowLongRightIcon className="w-5 h-5" />
                  </Link>
                </div>

                <div className="p-3 sm:p-4 lg:p-6 bg-white rounded-2xl mb-10">
                  <h4 className="mb-5 text-2xl font-semibold">
                    {" "}
                    Featured Room{" "}
                  </h4>
                  <ul className="flex flex-col gap-4">
                    {data.map((item) => (
                      <HotelDetailsFeaturedRoom key={item.id} item={item} />
                    ))}
                  </ul>
                </div>
                <div className="p-3 sm:p-4 lg:p-6 bg-white rounded-2xl mb-10">
                  <h4 className="mb-5 text-2xl font-semibold">
                    {" "}
                    Hotel Policies{" "}
                  </h4>
                  <ul className="flex flex-col gap-4 mb-5">
                    <li>
                      <div className="flex gap-4">
                        <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[var(--primary-light)]">
                          <i className="las la-check text-lg text-primary"></i>
                        </div>
                        <span className="inline-block">
                          Check-in and check-out: Check-in time is 3:00 PM, and
                          check-out time is 12:00 PM
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-4">
                        <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[var(--primary-light)]">
                          <i className="las la-check text-lg text-primary"></i>
                        </div>
                        <span className="inline-block">
                          Children policy: Children of all ages are welcome at
                          Hotel. The hotel offers a range of amenities and
                          activities for children, including a kids club and
                          babysitting services.
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-4">
                        <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[var(--primary-light)]">
                          <i className="las la-check text-lg text-primary"></i>
                        </div>
                        <span className="inline-block">
                          Smoking policy: Our Hotel is a non-smoking hotel.
                          Smoking is prohibited in all rooms and public areas.
                          Violators may be subject to a cleaning fee.
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="flex gap-4">
                        <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[var(--primary-light)]">
                          <i className="las la-check text-lg text-primary"></i>
                        </div>
                        <span className="inline-block">
                          Pet policy: Pets are not allowed at Hotel,with the
                          exception of guide dogs.
                        </span>
                      </div>
                    </li>
                  </ul>
                  <Link
                    href="#"
                    className="link flex items-center gap-2 text-primary">
                    <span className="font-semibold inline-block">
                      Read More
                    </span>
                    <ArrowLongRightIcon className="w-5 h-5" />
                  </Link>
                </div>

                <div className="p-3 sm:p-4 lg:p-6 bg-white rounded-2xl mb-10">
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <Link
                      href="#"
                      className="link flex items-center clr-neutral-500 hover:text-primary gap-1 order-1">
                      <ArrowLongLeftIcon className="w-5 h-5" />
                      <span className="inline-block font-semibold">
                        Prev Hotel
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
                        Next Hotel
                      </span>
                      <ArrowLongRightIcon className="w-5 h-5" />
                    </Link>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-3 sm:p-4 lg:py-8 lg:px-5 mb-10 lg:mb-14">
                  <div className="flex items-center gap-4 justify-between flex-wrap mb-10">
                    <div className="flex items-center gap-2">
                      <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                      <h3 className="mb-0 h3"> 4.7 (21 reviews) </h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="mb-0 clr-neutral-500 shrink-0">
                        {" "}
                        Sort By :{" "}
                      </p>
                      <div className="border rounded-full pr-3">
                        <select className="w-full bg-transparent px-5 py-3 focus:outline-none ">
                          <option>Latest</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[var(--bg-2)] rounded-2xl p-3 sm:p-4 lg:p-6 mb-8">
                    <div className="flex items-center flex-wrap justify-between gap-4 ">
                      <div className="flex gap-5 items-center">
                        <div className="w-15 h-15 shrink-0 rounded-full overflow-hidden">
                          <Image
                            width={60}
                            height={60}
                            src="/img/user-1.jpg"
                            alt="image"
                            className=" w-full h-full object-fit-cover"
                          />
                        </div>
                        <div className="flex-grow">
                          <h5 className="mb-1 font-semibold"> Kiss Laura </h5>
                          <p className="mb-0 clr-neutral-500">
                            {" "}
                            Product Designer{" "}
                          </p>
                        </div>
                      </div>
                      <div className="text-sm-end">
                        <p className="mb-1"> 09:01 am </p>
                        <p className="mb-0"> Mar 03, 2023 </p>
                      </div>
                    </div>
                    <div className="border border-dashed my-6"></div>
                    <div className="flex gap-1 mb-3">
                      <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                      <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                      <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                      <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                      <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                    </div>
                    <p className="mb-0 clr-neutral-500">
                      I highly recommend [real estate agent&apos;s name] as a
                      professional and knowledgeable real estate agent. They
                      provided valuable guidance throughout the selling process
                    </p>
                    <div className="border border-dashed my-6"></div>
                    <div className="flex flex-wrap items-center gap-10 mb-6">
                      <div className="flex items-center gap-2 text-primary">
                        <HandThumbUpIcon className="w-5 h-5" />
                        <span className="inline-block"> 178 </span>
                      </div>
                      <div className="flex items-center gap-2 text-primary">
                        <ChatBubbleLeftRightIcon className="w-5 h-5" />
                        <span className="inline-block"> Reply </span>
                      </div>
                    </div>
                    <div className="flex gap-5 items-center">
                      <div className="w-15 h-15 shrink-0 rounded-full overflow-hidden">
                        <Image
                          width={60}
                          height={60}
                          src="/img/user-2.jpg"
                          alt="image"
                          className=" w-full h-full object-fit-cover"
                        />
                      </div>
                      <div className="flex-grow">
                        <input
                          className="border text-base py-4 px-5 rounded-full focus:outline-none w-full"
                          type="text"
                          placeholder="Join the discussion"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-[var(--bg-2)] rounded-2xl p-3 sm:p-4 lg:p-6 mb-8">
                    <div className="flex items-center flex-wrap justify-between gap-4">
                      <div className="flex gap-5 items-center">
                        <div className="w-15 h-15 shrink-0 rounded-full overflow-hidden">
                          <Image
                            width={60}
                            height={60}
                            src="/img/user-3.jpg"
                            alt="image"
                            className=" w-full h-full object-fit-cover"
                          />
                        </div>
                        <div className="flex-grow">
                          <h5 className="mb-1 font-semibold">
                            {" "}
                            Kristin Watson{" "}
                          </h5>
                          <p className="mb-0 clr-neutral-500">
                            {" "}
                            Product Designer{" "}
                          </p>
                        </div>
                      </div>
                      <div className="text-sm-end">
                        <p className="mb-1"> 09:01 am </p>
                        <p className="mb-0"> Mar 03, 2023 </p>
                      </div>
                    </div>
                    <div className="border border-dashed my-6"></div>
                    <div className="flex gap-1 mb-3">
                      <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                      <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                      <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                      <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                      <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                    </div>
                    <p className="mb-0 clr-neutral-500">
                      I highly recommend [real estate agent&apos;s name] as a
                      professional and knowledgeable real estate agent. They
                      provided valuable guidance throughout the selling process
                    </p>
                    <div className="border border-dashed my-6"></div>
                    <div className="flex flex-wrap items-center gap-10">
                      <div className="flex items-center gap-2 text-primary">
                        <HandThumbUpIcon className="w-5 h-5" />
                        <span className="inline-block"> 178 </span>
                      </div>
                      <div className="flex items-center gap-2 text-primary">
                        <ChatBubbleLeftRightIcon className="w-5 h-5" />
                        <span className="inline-block"> Reply </span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[var(--bg-2)] rounded-2xl p-3 sm:p-4 lg:p-6 mb-8">
                    <div className="flex items-center flex-wrap justify-between gap-4">
                      <div className="flex gap-5 items-center">
                        <div className="w-15 h-15 shrink-0 rounded-full overflow-hidden">
                          <Image
                            width={60}
                            height={60}
                            src="/img/user-4.jpg"
                            alt="image"
                            className=" w-full h-full object-fit-cover"
                          />
                        </div>
                        <div className="flex-grow">
                          <h5 className="mb-1 font-semibold">
                            {" "}
                            Marvin McKinney{" "}
                          </h5>
                          <p className="mb-0 clr-neutral-500">
                            {" "}
                            Product Designer{" "}
                          </p>
                        </div>
                      </div>
                      <div className="text-sm-end">
                        <p className="mb-1"> 09:01 am </p>
                        <p className="mb-0"> Mar 03, 2023 </p>
                      </div>
                    </div>
                    <div className="border border-dashed my-6"></div>
                    <div className="flex gap-1 mb-3">
                      <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                      <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                      <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                      <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                      <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                    </div>
                    <p className="mb-0 clr-neutral-500">
                      I highly recommend [real estate agent&apos;s name] as a
                      professional and knowledgeable real estate agent. They
                      provided valuable guidance throughout the selling process
                    </p>
                    <div className="border border-dashed my-6"></div>
                    <div className="flex flex-wrap items-center gap-10">
                      <div className="flex items-center gap-2 text-primary">
                        <HandThumbUpIcon className="w-5 h-5" />
                        <span className="inline-block"> 178 </span>
                      </div>
                      <div className="flex items-center gap-2 text-primary">
                        <ChatBubbleLeftRightIcon className="w-5 h-5" />
                        <span className="inline-block"> Reply </span>
                      </div>
                    </div>
                  </div>
                  <Link
                    href="#"
                    className="featured-tab link font-semibold clr-primary-400 inline-block py-3 px-6 bg-[var(--primary-light)] hover:bg-primary hover:text-white rounded-full active">
                    See All Reviews
                  </Link>
                </div>

                <div className="mb-10 lg:mb-14">
                  <div className="bg-white rounded-2xl py-8 px-5">
                    <h4 className="mb-0 text-2xl font-semibold">
                      Write a review
                    </h4>
                    <div className="border border-dashed my-6"></div>
                    <p className="text-xl font-medium mb-3">Rating *</p>
                    <div className="flex gap-1 mb-3">
                      <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                      <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                      <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                      <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                      <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                    </div>
                    <form action="#">
                      <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12">
                          <label
                            htmlFor="review-name"
                            className="text-xl font-medium block mb-3">
                            Name *
                          </label>
                          <input
                            type="text"
                            className="w-full bg-[var(--bg-1)] border border-neutral-40 rounded-full py-3 px-5 focus:outline-none"
                            placeholder="Enter Name.."
                            id="review-name"
                          />
                        </div>
                        <div className="col-span-12">
                          <label
                            htmlFor="review-email"
                            className="text-xl font-medium block mb-3">
                            Email *
                          </label>
                          <input
                            type="text"
                            className="w-full bg-[var(--bg-1)] border border-neutral-40 rounded-full py-3 px-5 focus:outline-none"
                            placeholder="Enter Email.."
                            id="review-email"
                          />
                        </div>
                        <div className="col-span-12">
                          <label
                            htmlFor="review-review"
                            className="text-xl font-medium block mb-3">
                            Review *
                          </label>
                          <textarea
                            id="review-review"
                            rows={5}
                            className="bg-[var(--bg-1)] border rounded-2xl py-3 px-5 w-full focus:outline-none"></textarea>
                        </div>
                        <div className="col-span-12">
                          <Link href="#" className="btn-primary">
                            Submit Review
                          </Link>
                        </div>
                      </div>
                    </form>
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
                    <Tab.Panels className="tab-content mb-6 lg:mb-8">
                      <Tab.Panel>
                        <div className="grid grid-cols-1 gap-3">
                          <div className="col-span-1">
                            <div className="w-full flex">
                              <input
                                type="text"
                                className="w-[80%] md:w-[90%] focus:outline-none bg-[var(--bg-2)] border border-r-0 border-neutral-40 rounded-s-full rounded-end-0 py-3 px-5"
                                placeholder="Location"
                              />
                              <span className="input-group-text bg-[var(--bg-2)] border border-l-0 border-neutral-40 rounded-e-full py-[14px] text-gray-500 pe-4 ps-0">
                                <i className="las text-2xl la-map-marker-alt"></i>
                              </span>
                            </div>
                          </div>
                          <div className="col-span-1">
                            <div className="w-full flex">
                              <input
                                type="text"
                                className="w-[80%] md:w-[90%] focus:outline-none bg-[var(--bg-2)] border border-r-0 border-neutral-40 rounded-s-full rounded-end-0 py-3 px-5"
                                placeholder="Checkin"
                              />
                              <span className="input-group-text bg-[var(--bg-2)] border border-l-0 border-neutral-40 rounded-e-full py-[14px] text-gray-500 pe-4 ps-0">
                                <i className="las text-2xl la-calendar-alt"></i>
                              </span>
                            </div>
                          </div>
                          <div className="col-span-1">
                            <div className="w-full flex">
                              <input
                                type="text"
                                className="w-[80%] md:w-[90%] focus:outline-none bg-[var(--bg-2)] border border-r-0 border-neutral-40 rounded-s-full rounded-end-0 py-3 px-5"
                                placeholder="Checkout"
                              />
                              <span className="input-group-text bg-[var(--bg-2)] border border-l-0 border-neutral-40 rounded-e-full py-[14px] text-gray-500 pe-4 ps-0">
                                <i className="las text-2xl la-clock"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <p className="mb-0 clr-neutral-500"> Base Price </p>
                          <p className="mb-0 font-medium"> $360 </p>
                        </div>
                        <div className="flex items-center justify-between mb-4">
                          <p className="mb-0 clr-neutral-500"> State Tax </p>
                          <p className="mb-0 font-medium"> $70 </p>
                        </div>
                        <div className="flex items-center justify-between mb-4">
                          <p className="mb-0 clr-neutral-500"> Night Charge </p>
                          <p className="mb-0 font-medium"> $170 </p>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="mb-0 clr-neutral-500">
                            {" "}
                            Convenience Fee{" "}
                          </p>
                          <p className="mb-0 font-medium"> $15 </p>
                        </div>
                        <div className="hr-dashed my-4"></div>
                        <div className="flex items-center justify-between">
                          <p className="mb-0 clr-neutral-500"> Total </p>
                          <p className="mb-0 font-medium"> $1025 </p>
                        </div>
                      </Tab.Panel>
                      <Tab.Panel>
                        <form className="flex flex-col gap-5">
                          <input
                            type="text"
                            placeholder="Name..."
                            className="w-full rounded-full bg-[var(--bg-1)] border focus:outline-none py-2 px-3 md:py-3 md:px-4"
                            required
                          />
                          <input
                            type="email"
                            placeholder="Email..."
                            className="w-full rounded-full bg-[var(--bg-1)] border focus:outline-none py-2 px-3 md:py-3 md:px-4"
                            required
                          />
                          <textarea
                            rows={6}
                            placeholder="Message..."
                            className="w-full rounded-3xl bg-[var(--bg-1)] border focus:outline-none py-2 px-3 md:py-3 md:px-4"></textarea>
                          <CheckboxCustom label="I agree with Terms of Service and Privacy Statement" />
                        </form>
                      </Tab.Panel>
                    </Tab.Panels>
                  </Tab.Group>

                  <Link
                    href="#"
                    className="link inline-flex items-center gap-2 py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-medium w-full justify-center mb-6">
                    <span className="inline-block"> Proceed Booking </span>
                  </Link>
                  <ul className="flex justify-center gap-3 flex-wrap">
                    <li>
                      <Image
                        width={83}
                        height={34}
                        src="/img/paypal.png"
                        alt="image"
                        className=""
                      />
                    </li>
                    <li>
                      <Image
                        width={83}
                        height={34}
                        src="/img/payoneer.png"
                        alt="image"
                        className=""
                      />
                    </li>
                    <li>
                      <Image
                        width={83}
                        height={34}
                        src="/img/visa.png"
                        alt="image"
                        className=""
                      />
                    </li>
                    <li>
                      <Image
                        width={83}
                        height={34}
                        src="/img/master-card.png"
                        alt="image"
                        className=""
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-white rounded-2xl py-8 px-6">
                <div className="w-32 h-32 border border-[var(--primary)] rounded-full bg-white p-4 grid place-content-center relative mx-auto mb-10">
                  <Image
                    width={96}
                    height={96}
                    src="/img/team-1.jpg"
                    alt="image"
                    className="rounded-full"
                  />
                  <div className="w-8 h-8 grid place-content-center rounded-full border-2 white text-white bg-primary absolute bottom-0 right-0">
                    <CheckIcon className="w-5 h-5" />
                  </div>
                </div>
                <h4 className="text-center text-2xl font-semibold mb-4">
                  {" "}
                  Savannah Nguyen{" "}
                </h4>
                <ul className="flex items-center gap-3 justify-center flex-wrap mb-7">
                  <li>
                    <p className="mb-0">
                      ID: <span className="text-primary">235</span>
                    </p>
                  </li>
                  <li className="text-primary text-lg">•</li>
                  <li>
                    <p className="mb-0"> Property: 24 </p>
                  </li>
                  <li className="text-primary text-lg">•</li>
                  <li>
                    <div className="flex gap-1 items-center">
                      <i className="las la-star text-[var(--tertiary)]"></i>
                      <p className="mb-0"> 4.8 </p>
                    </div>
                  </li>
                </ul>
                <ul className="flex justify-center flex-wrap gap-3">
                  <li>
                    <Link
                      href="#"
                      className="link grid place-content-center duration-300 w-9 h-9 rounded-full bg-[var(--primary-light)] text-primary hover:bg-primary hover:text-white">
                      <i className="lab la-facebook-f text-xl"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="link grid place-content-center duration-300 w-9 h-9 rounded-full bg-[var(--primary-light)] text-primary hover:bg-primary hover:text-white">
                      <i className="lab la-twitter text-xl"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="link grid place-content-center duration-300 w-9 h-9 rounded-full bg-[var(--primary-light)] text-primary hover:bg-primary hover:text-white">
                      <i className="lab la-instagram text-xl"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="link grid place-content-center duration-300 w-9 h-9 rounded-full bg-[var(--primary-light)] text-primary hover:bg-primary hover:text-white">
                      <i className="lab la-linkedin-in text-xl"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="link grid place-content-center duration-300 w-9 h-9 rounded-full bg-[var(--primary-light)] text-primary hover:bg-primary hover:text-white">
                      <i className="lab la-dribbble text-xl"></i>
                    </Link>
                  </li>
                </ul>
                <div className="border border-dashed my-7"></div>
                <ul className="flex flex-col gap-4 mb-10 max-text-30 mx-auto">
                  <li>
                    <div className="flex items-center gap-2">
                      <CalendarDaysIcon className="w-5 h-5 text-primary" />
                      <p className="mb-0"> Joined in June 2018 </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-2">
                      <ChatBubbleLeftEllipsisIcon className="w-5 h-5 text-[var(--secondary)]" />
                      <p className="mb-0"> Response rate - 100% </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-2">
                      <ClockIcon className="w-5 h-5 text-[var(--tertiary)]" />
                      <p className="mb-0"> Fast response </p>
                    </div>
                  </li>
                </ul>
                <div className="text-center">
                  <Link href="#" className="btn-outline  font-semibold">
                    See Host Profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
