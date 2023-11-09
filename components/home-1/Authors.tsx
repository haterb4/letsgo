"use client";
import SubHeadingBtn from "../SubHeadingBtn";
import element1 from "@/public/img/element-1.png";
import element2 from "@/public/img/element-2.png";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import { agents } from "@/public/data/agent";
import AgentCard from "./AgentCard";

const Authors = () => {
  return (
    <section className="bg-white pt-[60px] lg:pt-[120px] px-3 xl:px-0 relative isolate before:absolute before:w-full before:top-[450px] before:bg-[var(--bg-2)] before:left-0 before:h-[550px]">
      <Image
        src={element1}
        className="hidden xl:block absolute left-0 top-[600px] "
        alt="img"
      />
      <Image
        src={element2}
        className="hidden xl:block absolute right-0 top-[710px]"
        alt="img"
      />
      <div className="container">
        <div className="flex justify-between gap-4 mb-8 flex-wrap">
          <div>
            <SubHeadingBtn text="Authors" classes="bg-[var(--primary-light)]" />
            <h2 className="h2 mt-4 mb-3 md:mb-6">Our Featured Authors</h2>
          </div>
          <div className="flex gap-4">
            <div className="prev-btn rounded-full border flex items-center justify-center hover:bg-primary cursor-pointer duration-300 hover:text-white border-[var(--primary)] w-12 h-12 self-center">
              <i className="las la-angle-left text-2xl"></i>
            </div>
            <div className="next-btn rounded-full border flex items-center justify-center hover:bg-primary cursor-pointer duration-300 hover:text-white border-[var(--primary)] w-12 h-12 self-center">
              <i className="las la-angle-right text-2xl"></i>
            </div>
          </div>
        </div>
        <Swiper
          loop={true}
          slidesPerView="auto"
          spaceBetween={24}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          modules={[Navigation]}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
          className="auth-slider">
          {agents.map((item) => (
            <SwiperSlide key={item.id}>
              <AgentCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="z-10 relative mt-[110px] after:bg-[url('/img/cta-bg.png')] after:absolute after:left-0 3xl:after:left-[12%] 4xl:after:left-[16%] after:w-[98%] after:mx-auto lg:after:w-[84%] after:h-full after:right-0 after:bottom-0 after:bg-[#c2c3f7]">
        <div className="container py-[60px] z-20 relative after:absolute lg:after:bg-[url('/img/cta-img.png')] after:bg-right-bottom after:bg-no-repeat after:w-full after:h-full after:bottom-0">
          <div className="xl:pl-[90px] px-3">
            <SubHeadingBtn text="Call To Action" classes="bg-white" />
            <h2 className="h2 mt-4 mb-8 max-w-[600px] leading-snug">
              Find your dream property with our expert help
            </h2>
            <div className="max-w-max">
              <Link href="#" className="btn-primary flex items-center gap-2">
                Contact Us{" "}
                <i className="las la-long-arrow-alt-right text-xl"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authors;
