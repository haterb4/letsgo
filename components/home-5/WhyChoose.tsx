import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import SubHeadingBtn from "../SubHeadingBtn";

const WhyChoose = () => {
  return (
    <section className="py-[60px] lg:py-[120px] relative">
      <div className="px-3">
        <div className="container ">
          <div className="max-w-[570px] mx-auto flex flex-col items-center text-center">
            <SubHeadingBtn
              text="Why choose us"
              classes="bg-[var(--primary-light)]"
            />
            <h2 className="h2 mt-3 leading-tight">
              Why Choose Us for Your Next Adventure
            </h2>
            <p className="text-neutral-600 pt-5 pb-8 lg:pb-14">
              If you&apos;re looking for an unforgettable travel experience, we
              believe that our tour company is the perfect choice
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-span-12">
            <Swiper
              loop={true}
              slidesPerView="auto"
              spaceBetween={8}
              navigation={{
                nextEl: ".btn-next",
                prevEl: ".btn-prev",
              }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 3,
                },
              }}
              modules={[Navigation]}
              className="swiper choice-slider">
              <SwiperSlide className="px-3 my-5">
                <div className="border rounded-2xl hover:shadow-[rgba(149,157,165,0.2)_0px_8px_24px] hover:border-none p-6 xl:p-8 text-center duration-300">
                  <Image
                    width={60}
                    height={60}
                    src="/img/duotone-home.png"
                    alt="image"
                    className=" mx-auto mb-6"
                  />
                  <h4 className="mb-4 text-2xl font-semibold"> Best guide </h4>
                  <p className="mb-0">
                    Our expert tour guide knows the best about traveling they
                    will guide you all time
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="px-3 my-5">
                <div className="border rounded-2xl hover:shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] hover:border-none p-6 xl:p-8 text-center duration-300">
                  <Image
                    width={60}
                    height={60}
                    src="/img/duotone-discount.png"
                    alt="image"
                    className=" mx-auto mb-6"
                  />
                  <h4 className="mb-4 text-2xl font-semibold">
                    Lots of Discount
                  </h4>
                  <p className="mb-0">
                    We realize ideas from simple to complex, everything becomes
                    easy to use
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="px-3 my-5">
                <div className="border rounded-2xl hover:shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] hover:border-none p-6 xl:p-8 text-center duration-300">
                  <Image
                    width={60}
                    height={60}
                    src="/img/duotone-support.png"
                    alt="image"
                    className=" mx-auto mb-6"
                  />
                  <h4 className="mb-4 text-2xl font-semibold">Support 24/7</h4>
                  <p className="mb-0">
                    Our customer experience team is available around the clock
                    to ques your ans
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="flex justify-center gap-4 mt-10">
              <div className="btn-prev w-11 h-11 rounded-full border border-[var(--primary)] duration-300 text-2xl text-primary flex items-center justify-center hover:bg-primary hover:text-white cursor-pointer">
                <i className="las la-angle-left"></i>
              </div>
              <div className="btn-next w-11 h-11 rounded-full border border-[var(--primary)] duration-300 text-2xl text-primary flex items-center justify-center hover:bg-primary hover:text-white cursor-pointer">
                <i className="las la-angle-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
