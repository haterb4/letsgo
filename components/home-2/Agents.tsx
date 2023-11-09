"use client";
import SubHeadingBtn from "../SubHeadingBtn";
import teamel1 from "@/public/img/team-el-1.png";
import teamel2 from "@/public/img/team-el-2.png";
import teamel3 from "@/public/img/team-el-3.png";
import teamel4 from "@/public/img/team-el-4.png";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import Link from "next/link";
import { teams } from "@/public/data/team";

const Agents = () => {
  return (
    <section className="relative pt-[60px] lg:pt-[120px] bg-[var(--bg-1)] after:bg-white after:absolute after:w-full after:h-[120px] after:bottom-0 after:left-0">
      <Image
        src={teamel1}
        alt="image"
        className="hidden lg:block absolute top-20 left-20"
      />
      <Image
        src={teamel2}
        alt="image"
        className="hidden lg:block absolute top-20 right-24"
      />
      <Image
        src={teamel3}
        alt="image"
        className="hidden lg:block absolute bottom-[30%] left-20"
      />
      <Image
        src={teamel4}
        alt="image"
        className="hidden lg:block absolute left-0 bottom-[120px]"
      />
      <div className="container">
        <div className="max-w-[636px] mx-auto flex flex-col items-center text-center">
          <SubHeadingBtn
            text="Expert Agent"
            classes="bg-[var(--primary-light)]"
          />
          <h2 className="h2 mt-3">Meet Our Experienced Agents</h2>
          <p className="text-neutral-600 pt-5 pb-8 lg:pb-14">
            Real estate can be bought, sold, leased, or rented, and can be a
            valuable investment opportunity. The value of real estate can be...
          </p>
        </div>

        <div className="relative">
          <Swiper
            loop={true}
            slidesPerView="auto"
            spaceBetween={16}
            pagination={{
              el: ".team-pagination",
              type: "bullets",
              clickable: true,
              bulletClass:
                "w-3 h-3 rounded-full bg-gray-300 cursor-pointer duration-300",
              bulletActiveClass: "!bg-[#3538ED] !w-6",
            }}
            breakpoints={{
              320: {
                slidesPerView: 1.1,
                spaceBetween: 10,
                centeredSlides: true,
              },
              450: {
                slidesPerView: 1.4,
                spaceBetween: 10,
                centeredSlides: true,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
                centeredSlides: false,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
              1400: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            modules={[Pagination]}
            className="">
            {teams.map(({ id, img, name, property }) => (
              <SwiperSlide key={id}>
                <div className="text-center p-6 rounded-2xl relative z-[1] after:bg-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-[75%] after:z-[-1] after:rounded-2xl after:duration-300 hover:after:bg-primary group">
                  <div className="w-32 h-32 border-[0.3px] border-[var(--primary)] rounded-full bg-[var(--bg-1)] flex items-center justify-center relative mx-auto">
                    <Image
                      src={img}
                      alt="image"
                      className="w-24 h-24 object-fit-cover rounded-full"
                    />
                    <div className="w-8 h-8 grid place-content-center rounded-full border text-white border-white bg-primary absolute right-0 bottom-0">
                      <i className="las la-check"></i>
                    </div>
                  </div>
                  <h4 className="mb-2 mt-6 text-2xl font-semibold group-hover:text-white">
                    {name}
                  </h4>
                  <p className="mb-6 group-hover:text-white">
                    {property} Properties
                  </p>
                  <ul className="flex justify-center flex-wrap gap-3">
                    <li>
                      <Link
                        href="#"
                        className="grid place-content-center w-10 h-10 text-xl rounded-full bg-[var(--primary-light)] hover:bg-[var(--tertiary)] duration-300 text-primary">
                        <i className="lab la-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="grid place-content-center w-10 h-10 text-xl rounded-full bg-[var(--primary-light)] hover:bg-[var(--tertiary)] duration-300 text-primary">
                        <i className="lab la-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="grid place-content-center w-10 h-10 text-xl rounded-full bg-[var(--primary-light)] hover:bg-[var(--tertiary)] duration-300 text-primary">
                        <i className="lab la-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="grid place-content-center w-10 h-10 text-xl rounded-full bg-[var(--primary-light)] hover:bg-[var(--tertiary)] duration-300 text-primary">
                        <i className="lab la-linkedin-in"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="team-pagination flex justify-center gap-3 mt-8 relative z-40"></div>
        </div>
      </div>

      <div className="z-10 relative mt-[55px] lg:mt-[110px] after:bg-[url('/img/cta-bg.png')] after:absolute after:left-0 3xl:after:left-[12%] 4xl:after:left-[16%] after:w-[98%] after:mx-auto lg:after:w-[84%] after:h-full after:right-0 after:bottom-0 after:bg-[#c2c3f7]">
        <div className="container py-[60px] z-20 relative after:absolute lg:after:bg-[url('/img/cta-img.png')] after:bg-right-bottom after:bg-no-repeat after:w-full after:h-full after:bottom-0">
          <div className="xl:pl-[90px] px-3">
            <SubHeadingBtn text="Call To Action" classes="bg-white" />
            <h2 className="h2 mt-4 mb-8 max-w-[600px]">
              Find your dream trip with our experts
            </h2>
            <div className="max-w-max">
              <Link href="#" className="btn-primary flex items-center gap-2">
                Contact Us
                <i className="las la-long-arrow-alt-right text-xl"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agents;
