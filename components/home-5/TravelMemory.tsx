import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import SubHeadingBtn from "../SubHeadingBtn";
const images = [
  "/img/memory-slider-img-3.png",
  "/img/memory-slider-img-2.png",
  "/img/memory-slider-img.jpg",
];

const TravelMemory = () => {
  return (
    <div className="bg-white py-[60px] lg:py-[120px] px-3">
      <div className="container">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-6 grid grid-cols-12">
            <div className="col-span-12 lg:col-span-10 relative">
              <Swiper
                loop={true}
                slidesPerView={1}
                spaceBetween={24}
                navigation={{
                  nextEl: ".btn-next",
                  prevEl: ".btn-prev",
                }}
                modules={[Navigation]}
                className="swiper blog-details-slider">
                {images.map((item) => (
                  <SwiperSlide key={item} className="swiper-slide">
                    <Image
                      width={526}
                      height={794}
                      src={item}
                      alt="image"
                      className=" w-full rounded-2xl"
                    />
                  </SwiperSlide>
                ))}
                <div className="absolute bottom-0 right-0 px-4 sm:px-6 lg:px-10 py-2 sm:py-4 lg:py-6 bg-primary z-10 flex gap-3 text-white rounded-tl-2xl rounded-br-2xl">
                  <div className="btn-prev border border-white w-10 h-10 flex items-center justify-center rounded-full text-2xl hover:bg-white hover:text-neutral-800 duration-300 cursor-pointer">
                    <i className="las la-angle-left"></i>
                  </div>
                  <div className="btn-next border border-white w-10 h-10 flex items-center justify-center rounded-full text-2xl hover:bg-white hover:text-neutral-800 duration-300 cursor-pointer">
                    <i className="las la-angle-right"></i>
                  </div>
                </div>
              </Swiper>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <SubHeadingBtn
              text="Travel's Memories"
              classes="bg-[var(--primary-light)]"
            />
            <h2 className="h2 mt-4 mb-6 leading-tight">
              Make Lasting Memories Around the World Tour
            </h2>
            <p className="mb-14">
              We also believe in providing our travelers with unique and
              authentic experiences that you won&apos;t find in guidebooks or on
              standard tours.
            </p>
            <ul className="list">
              <li>
                <div className="grid place-content-center w-9 h-9 rounded-md bg-primary mb-6 text-lg font-semibold text-white">
                  01
                </div>
                <h4 className="text-2xl font-semibold mb-3">
                  Find Trips That Fit Your Flexible Lifestyle
                </h4>
                <p className="mb-0">
                  That&apos;s why we offer a range of tours that are designed to
                  fit your flexible lifestyle.
                </p>
              </li>
              <li>
                <div className="border-dashed border my-8"></div>
              </li>
              <li>
                <div className="grid place-content-center w-9 h-9 rounded-md bg-[var(--secondary)] mb-6 text-lg font-semibold text-white">
                  02
                </div>
                <h4 className="text-2xl font-semibold mb-3">
                  Expert-Guided Travel with Placewise
                </h4>
                <p className="mb-0">
                  we believe that travel should be a source of joy and
                  inspiration, not stress & worry
                </p>
              </li>
              <li>
                <div className="border-dashed border my-8"></div>
              </li>
              <li>
                <div className="grid place-content-center w-9 h-9 rounded-md bg-[var(--tertiary)] mb-6 text-lg font-semibold text-white">
                  03
                </div>
                <h4 className="text-2xl font-semibold mb-3">
                  Discover the True Cost of Your Trip
                </h4>
                <p className="mb-0">
                  We believe that transparency is key to building trust with our
                  travelers.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelMemory;
