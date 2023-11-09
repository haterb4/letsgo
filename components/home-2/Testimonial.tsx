"use client";
import SubHeadingBtn from "../SubHeadingBtn";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import testimonialImg from "@/public/img/testimonial-img.jpg";

// import required modules
import { Navigation } from "swiper";
import { agents } from "@/public/data/agent";

const Authors = () => {
  return (
    <section className="bg-white py-[60px] lg:py-[120px] px-3 xl:px-0 relative">
      <div className="container">
        <div className="flex justify-between gap-4 mb-8 flex-wrap">
          <div>
            <SubHeadingBtn
              text="Testimonial"
              classes="bg-[var(--primary-light)]"
            />
            <h2 className="h2 mt-4 md:mb-6">Our Satisfied Customers Says</h2>
          </div>
          <div className="flex gap-4">
            <div className="prev-btn rounded-full border flex items-center text-primary justify-center hover:bg-primary cursor-pointer duration-300 hover:text-white border-[var(--primary)] w-12 h-12 self-center">
              <i className="las la-angle-left text-2xl"></i>
            </div>
            <div className="next-btn rounded-full border flex items-center text-primary justify-center hover:bg-primary cursor-pointer duration-300 hover:text-white border-[var(--primary)] w-12 h-12 self-center">
              <i className="las la-angle-right text-2xl"></i>
            </div>
          </div>
        </div>
        <Swiper
          loop={true}
          slidesPerView="auto"
          spaceBetween={16}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          breakpoints={{
            992: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
          }}
          modules={[Navigation]}
          className="auth-slider">
          {agents.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="p-2 sm:p-5 rounded-2xl border bg-white">
                <div className="bg-[var(--bg-1)] rounded-2xl p-3 sm:p-5 lg:p-8">
                  <div className="flex items-center gap-1 flex-wrap mb-3 text-2xl text-[var(--tertiary)]">
                    <i className="las la-star"></i>
                    <i className="las la-star"></i>
                    <i className="las la-star"></i>
                    <i className="las la-star"></i>
                    <i className="las la-star-half-alt"></i>
                  </div>
                  <p className="text-lg md:text-xl mb-0">
                    I had an excellent experience working with [real estate
                    agent/agency name] to buy/sell my property. From start to
                    finish, their professionalism and expertise
                  </p>
                  <div className="border-b border-dashed my-4 lg:my-8"></div>
                  <div className="inline-flex items-center gap-5">
                    <div className="w-15 h-15 rounded-full overflow-hidden shrink-0">
                      <Image
                        src={testimonialImg}
                        alt="img"
                        className=" w-full h-full objec-fit-cover"
                      />
                    </div>
                    <div className="flex-grow">
                      <span className="block text-xl font-semibold mb-1 text-start">
                        Jenny Wilson
                      </span>
                      <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined mat-icon clr-tertiary-400">
                          distance
                        </span>
                        <span className="inline-block"> Canada </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Authors;
