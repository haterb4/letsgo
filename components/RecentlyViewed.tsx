"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { featuredItems } from "@/public/data/featured";
import FeaturedCardHome1 from "./home-1/FeaturedCardHome1";

const RecentlyViewed = () => {
  return (
    <div className="py-[30px] lg:py-[50px] xl:pt-0 relative">
      <div className="container">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12">
            <div className="grid grid-cols-12 gap-4 items-center pt-10 px-3">
              <div className="col-span-12 md:col-span-6">
                <h2 className="h2 mb-0"> Recently viewed </h2>
              </div>
              <div className="col-span-12 md:col-span-6">
                <div className="flex md:justify-end gap-4">
                  <div className="prev-btn rounded-full border text-primary flex items-center justify-center hover:bg-primary cursor-pointer duration-300 hover:text-white border-[var(--primary)] w-12 h-12 self-center">
                    <i className="las la-angle-left text-2xl"></i>
                  </div>
                  <div className="next-btn rounded-full border text-primary flex items-center justify-center hover:bg-primary cursor-pointer duration-300 hover:text-white border-[var(--primary)] w-12 h-12 self-center">
                    <i className="las la-angle-right text-2xl"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12">
            <Swiper
              loop={true}
              slidesPerView="auto"
              spaceBetween={24}
              navigation={{
                nextEl: ".next-btn",
                prevEl: ".prev-btn",
              }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 16,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
              }}
              modules={[Navigation]}
              className="px-5">
              {featuredItems["Bafoussam"].map((item) => (
                <SwiperSlide
                  key={item.id}
                  className="swiper-slide py-5 md:py-10">
                  <FeaturedCardHome1 item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentlyViewed;
