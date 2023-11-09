"use client";
import {
  CalendarDaysIcon,
  ChatBubbleLeftRightIcon,
  EyeIcon,
  HandThumbUpIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { StarIcon } from "@heroicons/react/20/solid";
import { SearchIcon } from "@/public/data/icons";

const page = () => {
  return (
    <div className="py-[60px] lg:py-[60px] bg-[var(--bg-2)] px-3">
      <div className="container">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12">
            <div className="flex gap-2 items-center">
              <CalendarDaysIcon className="w-5 h-5" />
              <p className="mb-0"> 12 Jan, 2023 </p>
            </div>
            <h2 className="h2 font-semibold my-6">
              The Wall Street Journal&apos;s Real Estate
            </h2>
            <ul className="flex flex-wrap items-center mb-10 gap-3 gap-md-0">
              <li>
                <div className="flex gap-2 items-center">
                  <UserCircleIcon className="w-5 h-5" />
                  <p className="mb-0">
                    By
                    <Link
                      href="#"
                      className="link text-[var(--neutral-700)] hover:text-primary">
                      Admin
                    </Link>
                  </p>
                </div>
              </li>
              <li className="text-primary">•</li>
              <li>
                <div className="flex gap-2 items-center">
                  <EyeIcon className="w-5 h-5" />
                  <p className="mb-0"> 1.6k </p>
                </div>
              </li>
              <li className="text-primary">•</li>
              <li>
                <div className="flex gap-2 items-center">
                  <ChatBubbleLeftRightIcon className="w-5 h-5" />
                  <Link href="#" className="mb-0">
                    {" "}
                    32 Comments{" "}
                  </Link>
                </div>
              </li>
            </ul>
            <Swiper
              loop={true}
              slidesPerView={1}
              spaceBetween={24}
              navigation={{
                nextEl: ".btn-next",
                prevEl: ".btn-prev",
              }}
              modules={[Navigation]}
              className="swiper blog-details-slider mb-10">
              <SwiperSlide>
                <Image
                  width={1296}
                  height={600}
                  src="/img/blog-details-img-1.jpg"
                  alt="image"
                  className="w-full rounded-2xl"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={1296}
                  height={600}
                  src="/img/blog-details-img-1.jpg"
                  alt="image"
                  className="w-full rounded-2xl"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={1296}
                  height={600}
                  src="/img/blog-details-img-1.jpg"
                  alt="image"
                  className="w-full rounded-2xl"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={1296}
                  height={600}
                  src="/img/blog-details-img-1.jpg"
                  alt="image"
                  className="w-full rounded-2xl"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={1296}
                  height={600}
                  src="/img/blog-details-img-1.jpg"
                  alt="image"
                  className="w-full rounded-2xl"
                />
              </SwiperSlide>

              <div className="absolute bottom-0 right-0 p-3 sm:p-4 md:p-5 lg:px-10 lg:py-6 bg-primary z-10 flex gap-3 text-white rounded-tl-2xl rounded-br-2xl">
                <div className="btn-prev border border-white w-10 h-10 flex items-center justify-center rounded-full text-2xl hover:bg-white hover:text-neutral-800 duration-300 cursor-pointer">
                  <i className="las la-angle-left"></i>
                </div>
                <div className="btn-next border border-white w-10 h-10 flex items-center justify-center rounded-full text-2xl hover:bg-white hover:text-neutral-800 duration-300 cursor-pointer">
                  <i className="las la-angle-right"></i>
                </div>
              </div>
            </Swiper>
            <div className="container">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 lg:col-span-8">
                  <div className="bg-white rounded-2xl p-3 sm:p-4 lg:p-6 mb-10">
                    <h2 className="h2 mb-8">
                      The Wall Street Journal&apos;s Real Estate
                    </h2>
                    <p className="clr-neutral-500 mb-6">
                      This section provides daily news on real estate, covering
                      trends in the residential and commercial markets, and
                      updates on mortgage rates and home prices. The Wall Street
                      Journal&apos;s Real Estate section is a part of the
                      newspaper that covers news and analysis related to the
                      real estate industry.
                    </p>
                    <p className="clr-neutral-500 mb-10">
                      It provides information on residential and commercial
                      properties, market trends, financing options, property
                      management, and other related topics. The Real Estate
                      section is a valuable resource for investors, property
                      owners, and anyone interested in the real estate market.
                      The Wall Street Journal&apos;s Real Estate section is
                      known for its in-depth reporting and analysis, and its
                      articles are widely read and highly regarded in the
                      industry.
                    </p>
                    <figure className="p-6 bg-[var(--bg-2)] mb-10">
                      <blockquote className="blockquote text-lg">
                        <p>
                          I had a great experience working with to sell my home.
                          They were very professional, knowledgeable, and
                          responsive throughout the entire process.
                        </p>
                      </blockquote>
                      <figcaption className="blockquote-footer mt-4">
                        Someone famous in
                        <cite title="Source Title">Courtney Henry</cite>
                      </figcaption>
                    </figure>
                    <h3 className="mb-8 h3">
                      The Guideline for Journal Real Estate
                    </h3>
                    <div className="grid grid-cols-12 gap-4">
                      <div className="col-span-12 xl:col-span-6">
                        <ul className="flex flex-col gap-5">
                          <li>
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[var(--primary-light)]">
                                <i className="las la-check text-lg text-primary"></i>
                              </div>
                              <span className="inline-block text-lg font-medium">
                                Determine your budget
                              </span>
                            </div>
                          </li>
                          <li>
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[var(--primary-light)]">
                                <i className="las la-check text-lg text-primary"></i>
                              </div>
                              <span className="inline-block text-lg font-medium">
                                Get pre-approved for a mortgage
                              </span>
                            </div>
                          </li>
                          <li>
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[var(--primary-light)]">
                                <i className="las la-check text-lg text-primary"></i>
                              </div>
                              <span className="inline-block text-lg font-medium">
                                Choose a reputable real estate agent
                              </span>
                            </div>
                          </li>
                          <li>
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[var(--primary-light)]">
                                <i className="las la-check text-lg text-primary"></i>
                              </div>
                              <span className="inline-block text-lg font-medium">
                                Research the market
                              </span>
                            </div>
                          </li>
                          <li>
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[var(--primary-light)]">
                                <i className="las la-check text-lg text-primary"></i>
                              </div>
                              <span className="inline-block text-lg font-medium">
                                Conduct a home inspection
                              </span>
                            </div>
                          </li>
                          <li>
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[var(--primary-light)]">
                                <i className="las la-check text-lg text-primary"></i>
                              </div>
                              <span className="inline-block text-lg font-medium">
                                Review the contract carefully
                              </span>
                            </div>
                          </li>
                          <li>
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[var(--primary-light)]">
                                <i className="las la-check text-lg text-primary"></i>
                              </div>
                              <span className="inline-block text-lg font-medium">
                                Consider additional costs
                              </span>
                            </div>
                          </li>
                          <li>
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[var(--primary-light)]">
                                <i className="las la-check text-lg text-primary"></i>
                              </div>
                              <span className="inline-block text-lg font-medium">
                                Plan for the future
                              </span>
                            </div>
                          </li>
                          <li>
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[var(--primary-light)]">
                                <i className="las la-check text-lg text-primary"></i>
                              </div>
                              <span className="inline-block text-lg font-medium">
                                Location is key
                              </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="col-span-12 xl:col-span-6">
                        <Image
                          width={384}
                          height={441}
                          src="/img/blog-details-img-2.jpg"
                          alt="image"
                          className=""
                        />
                      </div>
                    </div>
                    <h4 className="mt-10 mb-6 text-2xl font-semibold">
                      {" "}
                      Overview{" "}
                    </h4>
                    <p className="clr-neutral-500 mb-10">
                      Overall, The Wall Street Journal&apos;s Real Estate
                      section is a valuable resource for anyone interested in
                      the real estate market. Its in-depth reporting and
                      analysis provide insights into the trends and
                      opportunities in the industry, and its articles are widely
                      read and highly regarded by real estate professionals and
                      investors.
                    </p>
                    <Image
                      width={792}
                      height={441}
                      src="/img/blog-details-img-3.jpg"
                      alt="image"
                      className="w-full rounded-2xl mb-10"
                    />
                    <h5 className="mb-6 text-xl"> Advantage </h5>
                    <p className="mb-10 clr-neutral-500">
                      Overall, The Wall Street Journal&apos;s Real Estate
                      section is a valuable resource for anyone interested in
                      the real estate market. Its in-depth reporting and
                      analysis provide insights into the trends and
                      opportunities in the industry, and its articles are widely
                      read and highly regarded by real estate professionals and
                      investors.
                    </p>
                    <div className="hr-dashed mb-6"></div>
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <ul className="flex items-center flex-wrap gap-3">
                        <li>
                          <p className="mb-0 font-medium text-lg text-primary">
                            Tag -
                          </p>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="link inline-block text-center px-4 py-2 border border-neutral-40 rounded-full bg-white clr-neutral-500 hover:bg-primary hover:text-white text-sm">
                            Real Estate
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="link inline-block text-center px-4 py-2 border border-neutral-40 rounded-full bg-white clr-neutral-500 hover:bg-primary hover:text-white text-sm">
                            Building
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="link inline-block text-center px-4 py-2 border border-neutral-40 rounded-full bg-white clr-neutral-500 hover:bg-primary hover:text-white text-sm">
                            House
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="link inline-block text-center px-4 py-2 border border-neutral-40 rounded-full bg-white clr-neutral-500 hover:bg-primary hover:text-white text-sm">
                            Resort
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="link inline-block text-center px-4 py-2 border border-neutral-40 rounded-full bg-white clr-neutral-500 hover:bg-primary hover:text-white text-sm">
                            Studio
                          </Link>
                        </li>
                      </ul>
                      <ul className="flex items-center flex-wrap gap-3">
                        <li>
                          <p className="mb-0 font-medium text-lg text-primary">
                            Share -
                          </p>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="link grid place-content-center w-9 h-9 rounded-full border border-[var(--primary)] text-primary hover:bg-primary hover:text-white">
                            <i className="text-xl lab la-facebook-f"></i>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="link grid place-content-center w-9 h-9 rounded-full border border-[var(--primary)] text-primary hover:bg-primary hover:text-white">
                            <i className="text-xl lab la-twitter"></i>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="link grid place-content-center w-9 h-9 rounded-full border border-[var(--primary)] text-primary hover:bg-primary hover:text-white">
                            <i className="text-xl lab la-linkedin-in"></i>
                          </Link>
                        </li>
                      </ul>
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
                        <div className="border rounded-full">
                          <select className="w-full bg-transparent px-5 py-3 focus:outline-none">
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
                        provided valuable guidance throughout the selling
                        process
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
                        provided valuable guidance throughout the selling
                        process
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
                        provided valuable guidance throughout the selling
                        process
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

                  <div>
                    <div className="bg-white rounded-2xl p-3 sm:p-4 lg:py-8 lg:px-5">
                      <h4 className="mb-0 text-2xl font-semibold">
                        Write a review
                      </h4>
                      <div className="border border-dashed my-6"></div>
                      <p className="text-xl mb-3 font-medium">Rating *</p>
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
                <div className="col-span-12 lg:col-span-4">
                  <div className="bg-white rounded-2xl p-3 sm:p-4 lg:p-6 mb-6">
                    <h4 className="mb-6 text-2xl font-semibold"> Search </h4>
                    <div className="flex items-center border border-neutral-40 px-6 py-3 rounded-full">
                      <input
                        type="text"
                        className="w-full text-[var(--neutral-700)] border-0 focus:outline-none bg-transparent ::placeholder-neutral-300"
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
                  <div className="bg-white rounded-2xl p-3 sm:p-4 lg:p-6 mb-6">
                    <h4 className="mb-6 text-2xl font-semibold">
                      {" "}
                      Recent Posts{" "}
                    </h4>
                    <div className="flex gap-6">
                      <div className="w-20 h-20 rounded-2xl shrink-0">
                        <Image
                          width={80}
                          height={60}
                          src="/img/recent-post-1.jpg"
                          alt="image"
                          className="w-full rounded-2xl"
                        />
                      </div>
                      <div className="flex-grow">
                        <h5 className="mb-0">
                          <Link
                            href="blog-details"
                            className="link text-[var(--neutral-700)] hover:text-primary">
                            US Pending Home Sales Drop for Second
                          </Link>
                        </h5>
                        <p className="mb-0 clr-neutral-500"> 23 Mar, 2023 </p>
                      </div>
                    </div>
                    <div className="border border-dashed my-6"></div>
                    <div className="flex gap-6">
                      <div className="w-20 h-20 rounded-2xl shrink-0">
                        <Image
                          width={80}
                          height={60}
                          src="/img/recent-post-2.jpg"
                          alt="image"
                          className="w-full rounded-2xl"
                        />
                      </div>
                      <div className="flex-grow">
                        <h5 className="mb-0">
                          <Link
                            href="blog-details"
                            className="link text-[var(--neutral-700)] hover:text-primary">
                            Home Prices in Canada Surge to Record Highs
                          </Link>
                        </h5>
                        <p className="mb-0 clr-neutral-500"> 23 Mar, 2023 </p>
                      </div>
                    </div>
                    <div className="border border-dashed my-6"></div>
                    <div className="flex gap-6">
                      <div className="w-20 h-20 rounded-2xl shrink-0">
                        <Image
                          width={80}
                          height={60}
                          src="/img/recent-post-3.jpg"
                          alt="image"
                          className="w-full rounded-2xl"
                        />
                      </div>
                      <div className="flex-grow">
                        <h5 className="mb-0">
                          <Link
                            href="blog-details"
                            className="link text-[var(--neutral-700)] hover:text-primary">
                            New York City Renters Return in Droves
                          </Link>
                        </h5>
                        <p className="mb-0 clr-neutral-500"> 23 Mar, 2023 </p>
                      </div>
                    </div>
                    <div className="border border-dashed my-6"></div>
                    <div className="flex gap-6">
                      <div className="w-20 h-20 rounded-2xl shrink-0">
                        <Image
                          width={80}
                          height={60}
                          src="/img/recent-post-4.jpg"
                          alt="image"
                          className="w-full rounded-2xl"
                        />
                      </div>
                      <div className="flex-grow">
                        <h5 className="mb-0">
                          <Link
                            href="blog-details"
                            className="link text-[var(--neutral-700)] hover:text-primary">
                            New York City&apos;s Luxury Real Estate Market
                          </Link>
                        </h5>
                        <p className="mb-0 clr-neutral-500"> 23 Mar, 2023 </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-2x p-3 sm:p-4 lg:p-6">
                    <h4 className="mb-6 text-2xl font-semibold">
                      {" "}
                      Popular Tag{" "}
                    </h4>
                    <ul className="flex flex-wrap gap-3">
                      <li>
                        <Link
                          href="#"
                          className="link inline-block text-center px-4 py-2 border border-neutral-40 rounded-full bg-white clr-neutral-500 hover:bg-primary hover:text-white">
                          Real Estate
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="link inline-block text-center px-4 py-2 border border-neutral-40 rounded-full bg-white clr-neutral-500 hover:bg-primary hover:text-white">
                          Building
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="link inline-block text-center px-4 py-2 border border-neutral-40 rounded-full bg-white clr-neutral-500 hover:bg-primary hover:text-white">
                          Apartment
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="link inline-block text-center px-4 py-2 border border-neutral-40 rounded-full bg-white clr-neutral-500 hover:bg-primary hover:text-white">
                          House
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="link inline-block text-center px-4 py-2 border border-neutral-40 rounded-full bg-white clr-neutral-500 hover:bg-primary hover:text-white">
                          Resort
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="link inline-block text-center px-4 py-2 border border-neutral-40 rounded-full bg-white clr-neutral-500 hover:bg-primary hover:text-white">
                          Studio
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="link inline-block text-center px-4 py-2 border border-neutral-40 rounded-full bg-white clr-neutral-500 hover:bg-primary hover:text-white">
                          New
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
