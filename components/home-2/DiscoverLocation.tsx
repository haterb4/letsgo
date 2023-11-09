"use client";
import SubHeadingBtn from "../SubHeadingBtn";
import Image from "next/image";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
// import ModalVideo from 'react-modal-video';
import { useState } from "react";
import { locationSlider } from "@/public/data/locationSlider";
import { PlayIcon } from "@/public/data/icons";
import ReactPlayer from "react-player";

const Play = () => {
  return (
    <span className="bg-[var(--tertiary)] w-14 hidden group-hover:grid place-items-center h-14 rounded-full z-10 duration-300 cursor-pointer">
      <PlayIcon />
    </span>
  );
};

const DiscoverLocation = () => {
  const [isPlaying, setIsPlaying] = useState(0);
  return (
    <section className="bg-[var(--bg-2)] py-[60px] lg:py-[120px] relative after:bg-white after:absolute after:h-[30%] after:w-full after:isolate after:bottom-0 after:left-0 ">
      <div className="container">
        <div className="max-w-[570px] mx-auto flex flex-col items-center text-center">
          <SubHeadingBtn
            text="Travel To Your Destination"
            classes="bg-[var(--primary-light)]"
          />
          <h2 className="h2 mt-3 ">Most Visited Places</h2>
          <p className="text-neutral-600 pt-5 pb-8 lg:pb-14">
            Real estate can be bought, sold, leased, or rented, and can be a
            valuable investment opportunity. The value of real estate can be...
          </p>
        </div>
      </div>
      <div className="container-fluid p-md-0">
        <div className="row g-md-0">
          <div className="col-span-12">
            <div className="location-slider-container">
              <Swiper
                loop={true}
                slidesPerView="auto"
                spaceBetween={16}
                centeredSlides={true}
                centeredSlidesBounds={true}
                pagination={{
                  el: ".location-pagination",
                  type: "bullets",
                  clickable: true,
                  bulletClass:
                    "w-3 h-3 rounded-full bg-gray-300 cursor-pointer duration-300",
                  bulletActiveClass: "!bg-[#3538ED] !w-6",
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 5,
                  },
                  320: {
                    slidesPerView: 1.1,
                    spaceBetween: 10,
                  },
                  450: {
                    slidesPerView: 1.4,
                    spaceBetween: 10,
                  },
                  520: {
                    slidesPerView: 1.8,
                    spaceBetween: 15,
                  },
                  620: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                  },
                  768: {
                    slidesPerView: 2.5,
                    spaceBetween: 24,
                  },
                  992: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                  },
                  1200: {
                    slidesPerView: 3.5,
                    spaceBetween: 24,
                  },
                  1400: {
                    slidesPerView: 4.5,
                    spaceBetween: 24,
                  },
                }}
                modules={[Pagination]}
                className="swiper location-slider">
                {locationSlider.map(({ id, img, location, properties }) => (
                  <SwiperSlide key={id}>
                    <div
                      className={`relative rounded-2xl h-full ${
                        isPlaying !== id &&
                        "before:w-full before:absolute before:h-full before:bottom-0 before:left-0 before:bg-gradient-to-t before:rounded-b-2xl before:from-[#091E42] before:to-transparent hover:after:w-full hover:after:absolute hover:after:h-[65%] hover:after:bottom-0 hover:after:left-0 hover:after:bg-gradient-to-t hover:after:rounded-b-2xl hover:after:from-[var(--primary)] hover:after:to-transparent hover:after:opacity-60"
                      } group`}>
                      <div
                        className="!rounded-2xl z-40 overflow-hidden"
                        onClick={() => setIsPlaying(id)}>
                        <ReactPlayer
                          url="https://www.youtube.com/shorts/DWjjwo6yKJQ"
                          width={410}
                          height={616}
                          controls
                          style={{ borderRadius: "16px", zIndex: "40" }}
                          light={img}
                          playIcon={<Play />}
                          playing={true}
                        />
                      </div>
                      {isPlaying !== id && (
                        <div className="absolute left-0 bottom-0 w-full text-white p-6 z-20">
                          <div className="flex items-center justify-between w-full">
                            <Link
                              href="property-details-1"
                              className="link flex flex-col gap-1 text-white flex-grow">
                              <span className="block text-xl font-semibold">
                                {location}
                              </span>
                              <span className="block text-sm">
                                {properties} Property
                              </span>
                            </Link>
                            <Link
                              href="property-details-1"
                              className="grid place-content-center w-9 h-9 border hover:bg-primary text-white duration-300 rounded-full shrink-0">
                              <i className="las la-angle-right"></i>
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="location-pagination flex justify-center gap-3 mt-8 relative z-40"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverLocation;
