"use client";
import Faq from "@/components/home-1/Faq";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import brand1 from "@/public/img/brand-1.png";
import brand2 from "@/public/img/brand-2.png";
import brand3 from "@/public/img/brand-3.png";
import branh2 from "@/public/img/brand-4.png";
import brand5 from "@/public/img/brand-5.png";
import brand6 from "@/public/img/brand-6.png";
import brand7 from "@/public/img/brand-7.png";
import brand8 from "@/public/img/brand-8.png";
import brand9 from "@/public/img/brand-9.png";
import Link from "next/link";
import { useState } from "react";
import SubHeadingBtn from "@/components/SubHeadingBtn";
import { Switch } from "@headlessui/react";
import { ArrowRightIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { services } from "@/public/data/allservice";
import Explore from "@/components/home-2/Explore";
import Counter from "@/components/home-2/Counter";

const Page = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <main>
      <div className="py-[60px] lg:py-[120px] bg-[var(--bg-2)] overflow-hidden px-3">
        <div className="max-w-[570px] mx-auto flex flex-col items-center text-center">
          <SubHeadingBtn
            text="Pricing Plan"
            classes="bg-[var(--primary-light)]"
          />
          <h2 className="h2 mt-3">Choose Our Pricing Plan</h2>
          <p className="text-neutral-600 pt-5 pb-8 lg:pb-14">
            {`Rev up your journey with our tailored driver plans. Explore competitive pricing options that put you in the driver's seat of your earning potential. Discover the plan that accelerates your success.`}
          </p>
        </div>
        <div className="mb-10">
          <div className="container">
            <div className="row">
              <div className="col-span-12">
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <div className="flex items-center gap-4">
                    <span className="inline-block text-xl font-medium clr-neutral-500">
                      Monthly
                    </span>
                    <Switch
                      checked={enabled}
                      onChange={setEnabled}
                      className={`${enabled ? "bg-primary" : "bg-[#EBEBFD]"}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}>
                      <span className="sr-only">Use setting</span>
                      <span
                        aria-hidden="true"
                        className={`${
                          enabled
                            ? "translate-x-9 bg-white"
                            : "bg-primary translate-x-0"
                        }
            pointer-events-none inline-block h-[34px] w-[34px]  transform rounded-full shadow-lg ring-0 transition duration-200 ease-in-out`}
                      />
                    </Switch>
                  </div>
                  <span className="block font-medium">
                    Yearly <span className="clr-primary-400">(Save 30%)</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="grid grid-cols-12 g-3 md:gap-0 overflow-hidden">
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <div className="bg-white p-6">
                <div className="text-center">
                  <div className="grid place-content-center w-20 h-20 rounded-full bg-[var(--bg-2)] mb-3 mx-auto">
                    <Image
                      width={56}
                      height={56}
                      src="/img/pricing-icon-1.png"
                      alt="image"
                      className=""
                    />
                  </div>
                  <p className="mb-0 text-2xl font-medium text-primary">
                    Basic
                  </p>
                  <div className="border border-dashed mt-8 mb-4"></div>
                  <h1 className="h2 clr-primary-400 mb-2"> $19.00 </h1>
                  <p className="mb-0"> Per month </p>
                  <div className="border border-dashed mt-4 mb-8"></div>
                  <ul className="flex flex-col gap-4 max-text-30 mx-auto mb-8">
                    <li className="flex items-center text-2xl gap-2">
                      <i className="las la-check-circle text-[var--primary)]"></i>
                      <p className="mb-0 text-lg text-start">
                        Administrative support
                      </p>
                    </li>
                    <li className="flex items-center text-2xl gap-2">
                      <i className="las la-check-circle text-[var--primary)]"></i>
                      <p className="mb-0 text-lg text-start"> Legal support </p>
                    </li>
                    <li className="flex items-center text-2xl gap-2">
                      <i className="las la-check-circle text-[var--primary)]"></i>
                      <p className="mb-0 text-lg text-start">
                        Technology support
                      </p>
                    </li>
                    <li className="flex items-center text-2xl gap-2">
                      <i className="las la-times-circle text-[#ED5050]"></i>
                      <p className="mb-0 text-lg text-start">
                        Marketing support
                      </p>
                    </li>
                    <li className="flex items-center text-2xl gap-2">
                      <i className="las la-times-circle text-[#ED5050]"></i>
                      <p className="mb-0 text-lg text-start">
                        Hotline support 24/7
                      </p>
                    </li>
                  </ul>
                  <Link href="#" className="btn-outline  font-semibold">
                    Choose Plan
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <div className="bg-primary p-6 ">
                <div className="text-center">
                  <div className="grid place-content-center w-20 h-20 rounded-full bg-[var(--tertiary)] mb-3 mx-auto">
                    <Image
                      width={56}
                      height={56}
                      src="/img/pricing-icon-2.png"
                      alt="image"
                      className=""
                    />
                  </div>
                  <p className="mb-0 text-2xl font-medium text-[var(--tertiary)]">
                    Standard
                  </p>
                  <div className="border border-dashed mt-8 mb-4"></div>
                  <h1 className="h2 text-[var(--tertiary)] mb-2"> $19.00 </h1>
                  <p className="mb-0 text-white"> Per month </p>
                  <div className="border border-dashed mt-4 mb-8"></div>
                  <ul className="flex flex-col gap-4 max-text-30 mx-auto mb-8">
                    <li className="flex items-center text-2xl gap-2">
                      <i className="las la-check-circle text-[var(--tertiary)]"></i>
                      <p className="mb-0 text-lg text-white text-start">
                        Administrative support
                      </p>
                    </li>
                    <li className="flex items-center text-2xl gap-2">
                      <i className="las la-check-circle text-[var(--tertiary)]"></i>
                      <p className="mb-0 text-lg text-white text-start">
                        Legal support
                      </p>
                    </li>
                    <li className="flex items-center text-2xl gap-2">
                      <i className="las la-check-circle text-[var(--tertiary)]"></i>
                      <p className="mb-0 text-lg text-white text-start">
                        Technology support
                      </p>
                    </li>
                    <li className="flex items-center text-2xl gap-2">
                      <i className="las la-times-circle text-[#ED5050]"></i>
                      <p className="mb-0 text-lg text-white text-start">
                        Marketing support
                      </p>
                    </li>
                    <li className="flex items-center text-2xl gap-2">
                      <i className="las la-times-circle text-[#ED5050]"></i>
                      <p className="mb-0 text-lg text-white text-start">
                        Hotline support 24/7
                      </p>
                    </li>
                  </ul>
                  <Link href="#" className="btn-outline  bg-[var(--tertiary)]">
                    Choose Plan
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <div className="bg-white p-6">
                <div className="text-center">
                  <div className="grid place-content-center w-20 h-20 rounded-full bg-[var(--bg-2)] mb-3 mx-auto">
                    <Image
                      width={56}
                      height={56}
                      src="/img/pricing-icon-3.png"
                      alt="image"
                      className=""
                    />
                  </div>
                  <p className="mb-0 text-2xl font-medium text-primary">
                    Basic
                  </p>
                  <div className="border border-dashed mt-8 mb-4"></div>
                  <h1 className="h2 clr-primary-400 mb-2"> $19.00 </h1>
                  <p className="mb-0"> Per month </p>
                  <div className="border border-dashed mt-4 mb-8"></div>
                  <ul className="flex flex-col gap-4 max-text-30 mx-auto mb-8">
                    <li className="flex items-center text-2xl gap-2">
                      <i className="las la-check-circle text-[var--primary)]"></i>
                      <p className="mb-0 text-lg text-start">
                        Administrative support
                      </p>
                    </li>
                    <li className="flex items-center text-2xl gap-2">
                      <i className="las la-check-circle text-[var--primary)]"></i>
                      <p className="mb-0 text-lg text-start"> Legal support </p>
                    </li>
                    <li className="flex items-center text-2xl gap-2">
                      <i className="las la-check-circle text-[var--primary)]"></i>
                      <p className="mb-0 text-lg text-start">
                        Technology support
                      </p>
                    </li>
                    <li className="flex items-center text-2xl gap-2">
                      <i className="las la-times-circle text-[#ED5050]"></i>
                      <p className="mb-0 text-lg text-start">
                        Marketing support
                      </p>
                    </li>
                    <li className="flex items-center text-2xl gap-2">
                      <i className="las la-times-circle text-[#ED5050]"></i>
                      <p className="mb-0 text-lg text-start">
                        Hotline support 24/7
                      </p>
                    </li>
                  </ul>
                  <Link href="#" className="btn-outline  font-semibold">
                    Choose Plan
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-[60px] lg:pt-[120px]">
          <div className="container">
            <div className="grid grid-cols-1">
              <div className="col-span-1">
                <div className="xl:flex xl:items-center gap-xl-6">
                  <h5 className="mb-0 flex items-center gap-3 shrink-0">
                    Meet Our Valued Partner
                    <ArrowRightIcon className="w-5 h-5" />
                  </h5>
                  <Swiper
                    loop={true}
                    slidesPerView="auto"
                    spaceBetween={20}
                    breakpoints={{
                      375: {
                        slidesPerView: 2,
                      },
                      768: {
                        slidesPerView: 3,
                      },
                      992: {
                        slidesPerView: 4,
                      },
                      1200: {
                        slidesPerView: 6,
                        centeredSlides: true,
                        centeredSlidesBounds: true,
                      },
                      1920: {
                        slidesPerView: 7,
                        centeredSlides: true,
                        centeredSlidesBounds: true,
                      },
                    }}
                    className="min-[1900px]:!mr-[-400px]">
                    <SwiperSlide className="swiper-slide">
                      <Image src={brand1} alt="image" className="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <Image src={brand2} alt="image" className="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <Image src={brand3} alt="image" className="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <Image src={branh2} alt="image" className="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <Image src={brand5} alt="image" className="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <Image src={brand6} alt="image" className="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <Image src={brand7} alt="image" className="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <Image src={brand8} alt="image" className="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <Image src={brand9} alt="image" className="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <Image src={brand1} alt="image" className="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <Image src={brand5} alt="image" className="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <Image src={brand6} alt="image" className="" />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /Pricing Plan --> */}
      {/* <!-- Service --> */}
      <div className="py-[60px] lg:py-[120px] px-3">
        <div className="container">
          <div className="max-w-[570px] mx-auto flex flex-col items-center text-center">
            <SubHeadingBtn
              text="Services"
              classes="bg-[var(--primary-light)]"
            />
            <h2 className="h2 mt-3">Our Services System</h2>
            <p className="text-neutral-600 pt-5 pb-8 lg:pb-14">
              {`Elevate your experience with our comprehensive services. From seamless bookings to personalized assistance, we're dedicated to enhancing every step of your journey. Explore a world of convenience tailored just for you.`}
            </p>
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-12">
              <div className="relative">
                <Swiper
                  loop={true}
                  slidesPerView="auto"
                  spaceBetween={24}
                  pagination={{
                    el: ".team-pagination",
                    type: "bullets",
                    clickable: true,
                    bulletClass:
                      "w-3 h-3 rounded-full bg-gray-300 cursor-pointer duration-300",
                    bulletActiveClass: "!bg-[#3538ED] !w-6",
                  }}
                  breakpoints={{
                    768: {
                      slidesPerView: 2,
                    },
                    992: {
                      slidesPerView: 3,
                    },
                  }}
                  modules={[Navigation, Pagination]}
                  className="swiper service-slider">
                  {services.map(({ id, description, icon, title }) => (
                    <SwiperSlide
                      key={id}
                      className="col-span-12 md:col-span-6 lg:col-span-4 group duration-300 border rounded-2xl">
                      <Link
                        href="/service-details"
                        className={`duration-300 inline-block bg-white group-hover:bg-primary rounded-2xl p-6 xl:px-10 xl:py-15`}>
                        <span
                          className={`w-20 h-20 grid place-content-center rounded-full  ${
                            id == 1 || id == 6 || id == 8 ? "bg-[#EBEBFD]" : ""
                          } ${
                            id == 2 || id == 4 || id == 9 ? "bg-[#EBFBF2]" : ""
                          } ${
                            id == 3 || id == 5 || id == 7 ? "bg-[#FFF9ED]" : ""
                          }`}>
                          {icon}
                        </span>
                        <h4 className="mt-6 mb-4 duration-300 text-2xl font-semibold group-hover:text-white">
                          {" "}
                          {title}{" "}
                        </h4>
                        <p className="mb-10 duration-300 group-hover:text-white">
                          {description}{" "}
                        </p>
                        <span className="group-hover:bg-[var(--tertiary)] duration-300 grid place-content-center w-12 h-12 rounded-full border border-[var(--primary)] text-primary transition">
                          <ArrowUpRightIcon className="w-5 h-5" />
                        </span>
                      </Link>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="team-pagination flex justify-center gap-3 mt-8 relative z-40"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /Service --> */}
      {/* <!-- Explore Property --> */}
      <Explore />
      <Counter />
      {/* Faq */}
      <Faq />
    </main>
  );
};

export default Page;
