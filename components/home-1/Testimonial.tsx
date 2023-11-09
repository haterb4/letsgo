"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";
import testimonial1 from "@/public/img/testimonial-el-1.png";
import testimonial2 from "@/public/img/testimonial-el-2.png";
import testimonial3 from "@/public/img/testimonial-el-3.png";
import testimonialImg from "@/public/img/testimonial-img.jpg";
import Image from "next/image";
import SubHeadingBtn from "../SubHeadingBtn";

const Testimonial = () => {
  return (
    <section className="bg-white py-[60px] lg:py-[120px] relative px-3">
      <Image
        src={testimonial1}
        alt="image"
        className="hidden lg:block absolute top-10 left-10"
      />
      <Image
        src={testimonial2}
        alt="image"
        className="hidden lg:block absolute top-0 right-0"
      />
      <Image
        src={testimonial3}
        alt="image"
        className="hidden lg:block absolute right-10 top-[60%]"
      />
      <div className="container">
        <div className="max-w-[570px] mx-auto flex flex-col items-center text-center">
          <SubHeadingBtn
            text="Testimonial"
            classes="bg-[var(--primary-light)]"
          />
          <h2 className="h2 mt-3 leading-tight">
            Reviews of our satisfied customers
          </h2>
          <p className="text-neutral-600 pt-5 pb-8 lg:pb-14">
            Real estate can be bought, sold, leased, or rented, and can be a
            valuable investment opportunity. The value of real estate can be
          </p>
        </div>
        <div className="relative">
          <div className="testimonial-prev absolute top-[40%] left-2 lg:left-10 hover:bg-primary text-primary cursor-pointer z-10 hover:text-white duration-300 rounded-full h-12 w-12 border border-[var(--primary)] flex items-center justify-center">
            <i className="las la-angle-left text-2xl"></i>
          </div>
          <div className="testimonial-next absolute top-[40%] right-2 lg:right-10 hover:bg-primary text-primary cursor-pointer z-10 hover:text-white duration-300 rounded-full h-12 w-12 border border-[var(--primary)] flex items-center justify-center">
            <i className="las la-angle-right text-2xl"></i>
          </div>

          <Swiper
            loop={true}
            slidesPerView={1}
            spaceBetween={24}
            navigation={{
              nextEl: ".testimonial-next",
              prevEl: ".testimonial-prev",
            }}
            modules={[Navigation]}
            className="max-w-[856px] bg-[#EBEBFD] rounded-xl px-3 lg:px-5 xl:px-10 py-3 xl:py-8 text-center mx-3">
            <SwiperSlide className="py-7">
              <div className="rounded-2xl bg-[var(--primary-light)] text-center">
                <i className="las la-quote-left text-7xl text-primary"></i>
                <div className="flex justify-center gap-1">
                  <i className="las la-star text-[var(--tertiary)]"></i>
                  <i className="las la-star text-[var(--tertiary)]"></i>
                  <i className="las la-star text-[var(--tertiary)]"></i>
                  <i className="las la-star text-[var(--tertiary)]"></i>
                  <i className="las la-star text-[var(--tertiary)]"></i>
                </div>
                <p className="text-lg md:text-2xl px-14 mt-5">
                  {" "}
                  I recently had the pleasure of working with [Agent /
                  Brokerage] in my search for a new home/property. From start to
                  finish, my experience was exceptional{" "}
                </p>
                <div className="flex gap-5 justify-center mt-8">
                  <div className="w-15 h-15 rounded-full">
                    <Image
                      src={testimonialImg}
                      alt="img"
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <span className="block text-2xl font-medium">
                      {" "}
                      Jerome Bell{" "}
                    </span>
                    <span className="clr-neutral-500 text-start">
                      {" "}
                      Account Manager{" "}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="py-7">
              <div>
                <i className="las la-quote-left text-7xl text-primary"></i>
                <div className="flex justify-center gap-1">
                  <i className="las la-star text-[var(--tertiary)]"></i>
                  <i className="las la-star text-[var(--tertiary)]"></i>
                  <i className="las la-star text-[var(--tertiary)]"></i>
                  <i className="las la-star text-[var(--tertiary)]"></i>
                  <i className="las la-star text-[var(--tertiary)]"></i>
                </div>
                <p className="text-lg md:text-2xl px-14 mt-5">
                  {" "}
                  I recently had the pleasure of working with [Agent /
                  Brokerage] in my search for a new home/property. From start to
                  finish, my experience was exceptional{" "}
                </p>
                <div className="flex gap-5 justify-center mt-8">
                  <div className="w-15 h-15 rounded-full">
                    <Image
                      src={testimonialImg}
                      alt="img"
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <span className="block text-2xl font-medium">
                      {" "}
                      Jerome Bell{" "}
                    </span>
                    <span className="clr-neutral-500 text-start">
                      {" "}
                      Account Manager{" "}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="py-7">
              <div>
                <i className="las la-quote-left text-7xl text-primary"></i>
                <div className="flex justify-center gap-1">
                  <i className="las la-star text-[var(--tertiary)]"></i>
                  <i className="las la-star text-[var(--tertiary)]"></i>
                  <i className="las la-star text-[var(--tertiary)]"></i>
                  <i className="las la-star text-[var(--tertiary)]"></i>
                  <i className="las la-star text-[var(--tertiary)]"></i>
                </div>
                <p className="text-lg md:text-2xl px-14 mt-5">
                  {" "}
                  I recently had the pleasure of working with [Agent /
                  Brokerage] in my search for a new home/property. From start to
                  finish, my experience was exceptional{" "}
                </p>
                <div className="flex gap-5 justify-center mt-8">
                  <div className="w-15 h-15 rounded-full">
                    <Image
                      src={testimonialImg}
                      alt="img"
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <span className="block text-2xl font-medium">
                      {" "}
                      Jerome Bell{" "}
                    </span>
                    <span className="clr-neutral-500 text-start">
                      {" "}
                      Account Manager{" "}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
