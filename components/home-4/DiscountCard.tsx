import discountimg1 from "@/public/img/discount-img-1.jpg";
import discountimg2 from "@/public/img/discount-img-2.jpg";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import Link from "next/link";

const DiscountCard = () => {
  return (
    <div className="bg-white relative after:bg-[var(--bg-1)] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[50%] px-3">
      <div className="container">
        <div className="row">
          <div className="col-span-12">
            <Swiper
              loop={true}
              slidesPerView="auto"
              spaceBetween={24}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
              }}
              className="swiper discount-slider">
              <SwiperSlide>
                <div className="rounded-2xl relative z-[1] min-h-[200px]">
                  <Image
                    src={discountimg1}
                    alt="image"
                    className="rounded-2xl w-full min-h-[200px] "
                  />
                  <div className="absolute top-0 left-0 p-3 sm:p-6 lg:p-8 xl:p-10">
                    <span className="text-3xl xl:text-[40px] text-white font-semibold inline-block mb-3 xl:mb-5 xxl:mb-8">
                      25% OFF
                    </span>
                    <p className="mb-3 xl:mb-10 text-lg xl:text-2xl text-white max-w-xs ">
                      Explore The World Tour Hotel Booking
                    </p>
                    <Link
                      href="/hotel-listing"
                      className="inline-block py-3 px-6 font-semibold rounded-lg bg-white text-primary">
                      Book Now
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="rounded-2xl relative z-[1] min-h-[200px]">
                  <Image
                    src={discountimg2}
                    alt="image"
                    className="rounded-2xl w-full min-h-[200px] "
                  />
                  <div className="absolute top-0 left-0 p-3 sm:p-6 lg:p-8 xl:p-10">
                    <span className="text-3xl xl:text-[40px] text-white font-semibold inline-block mb-3 xl:mb-5 xxl:mb-8">
                      25% OFF
                    </span>
                    <p className="mb-3 xl:mb-10 text-lg xl:text-2xl text-white max-w-xs ">
                      Book Your Valuable Dream Vacation Today
                    </p>
                    <Link
                      href="/hotel-listing"
                      className="inline-block py-3 px-6 font-semibold rounded-lg bg-white text-primary">
                      Book Now
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountCard;
