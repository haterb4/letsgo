"use client";
import Image from "next/image";
import Explore from "@/components/home-2/Explore";
import Counter from "@/components/home-2/Counter";
import Author from "@/components/home-1/Authors";
import Benefit from "@/components/home-1/Benefit";
import Testimonial from "@/components/home-2/Testimonial";
import MobileApp from "@/components/home-2/MobileApp";
import Link from "next/link";
import SubHeadingBtn from "@/components/SubHeadingBtn";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { services } from "@/public/data/allservice";

import { selectRenderingLanguage } from "@/app/store/features/language/languageSlice";
import { ILanguageProvider } from "@/public/languages/pages/home";
import { useAppSelector } from "@/app/store/hooks";
import aboutUsPageTextProvider from "@/public/languages/pages/about";


const Page = () => {
  const pageLanguage = useAppSelector(selectRenderingLanguage)
  const whyChooseUsSection = (
    aboutUsPageTextProvider[pageLanguage] as ILanguageProvider
  ).whyChooseUs as ILanguageProvider
  return (
    <main>
      {/* Why choose us */}
      <div className="py-[60px] md:py-[120px] bg-[var(--bg-2)] relative z-[1] px-3">
        <div className="container">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-6">
              <div className="relative z-[1] text-center text-xxl-start  pb-lg-0">
                <Image
                  width={526}
                  height={633}
                  src="/img/why-happy-woman.jpg"
                  alt="image"
                  className="z-[1] relative"
                />
                <Image
                  width={62}
                  height={62}
                  src="/img/why-choose-el-1.png"
                  alt="image"
                  className="absolute top-[35%] -left-10 hidden xl:block"
                />
                <Image
                  width={201}
                  height={227}
                  src="/img/why-choose-el-2.png"
                  alt="image"
                  className="absolute -left-28 -bottom-28 hidden xl:block"
                />
                <div className="inline-flex items-center gap-4 rounded p-8 bg-primary z-10 absolute top-12 left-0 xxl:-left-24">
                  <div className="w-12 h-12 rounded bg-white grid place-content-center text-primary shrink-0">
                    <i className="las la-thumbs-up text-[32px]"></i>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-white mb-0 h3 text-start">25+</h3>
                    <p className="mb-0 text-sm text-white text-start">
                      years experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <SubHeadingBtn text={whyChooseUsSection.section as string} classes="bg-white" />
              <h2 className="mt-4 h2 mb-6">
                {whyChooseUsSection.title as string}
              </h2>
              <p className="mb-10 clr-neutral-500">
                {whyChooseUsSection.slogan as string}
              </p>
              <ul className="flex flex-col gap-6 mb-10">
                <li>
                  <div className="flex gap-6 align-items-start">
                    <div className="shrink-0">
                      <i className="las text-[40px] la-car text-primary"></i>
                    </div>
                    <div className="flex-grow">
                      <h4 className="mb-3 text-2xl font-semibold">
                        {" "}
                        {(whyChooseUsSection.rent as ILanguageProvider).text as string}{" "}
                      </h4>
                      <p className="mb-0 clr-neutral-500">
                        {(whyChooseUsSection.rent as ILanguageProvider).details as string}
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex gap-6 align-items-start">
                    <div className="shrink-0">
                      <i className="las text-[40px] la-calendar text-[var(--secondary-500)]"></i>
                    </div>
                    <div className="flex-grow">
                      <h4 className="mb-3 text-2xl font-semibold">
                        {" "}
                        {(whyChooseUsSection.book as ILanguageProvider).text as string}{" "}
                      </h4>
                      <p className="mb-0 clr-neutral-500">
                        {(whyChooseUsSection.book as ILanguageProvider).details as string}
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex gap-6 align-items-start">
                    <div className="shrink-0">
                      <i className="las text-[40px] la-wheel text-[#9C742B]"></i>
                    </div>
                    <div className="flex-grow">
                      <h4 className="mb-3 text-2xl font-semibold">
                        {" "}
                        {(whyChooseUsSection.service as ILanguageProvider).text as string}{" "}
                      </h4>
                      <p className="mb-0 clr-neutral-500">
                        {(whyChooseUsSection.service as ILanguageProvider).details as string}
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
              <Link
                href="service"
                className="link inline-flex items-center gap-2 py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-medium">
                <span className="inline-block"> {whyChooseUsSection.more as string} </span>
                <span className="material-symbols-outlined mat-icon font-200">
                  {whyChooseUsSection.trending as string}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Explore properties */}
      <Explore />
      {/* Counter */}
      <Counter />
      {/* Authors */}
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
                  {services.map(({ id, content, icon }: { id: number; content: ILanguageProvider; icon: JSX.Element}) => (
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
                          {(content[pageLanguage] as ILanguageProvider).title as string}{" "}
                        </h4>
                        <p className="mb-10 duration-300 group-hover:text-white">
                          {(content[pageLanguage] as ILanguageProvider).description as string}{" "}
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
      {/* Explore section */}
      <div className="pt-120">
        <Benefit />
      </div>
      {/* Testimonail */}
      <Testimonial />
      {/* Mobile app */}
      <MobileApp />
      {/* Faq  */}
    </main>
  );
};

export default Page;
