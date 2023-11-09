import Image from "next/image";
import HeroDropdown1 from "./HeroDropdown1";
import HeroDropdown2 from "./HeroDropdown2";
import HeroDropdown3 from "./HeroDropdown3";
import HeroDropdown4 from "./HeroDropdown4";
import Link from "next/link";
import { DownArrow, SearchIcon } from "@/public/data/icons";

const Hero = () => {
  return (
    <section className="relative bg-[var(--bg-1)] border-t lg:border-t-0">
      <Image
        priority
        className="absolute hidden xl:block w-[25%] top-0 right-0"
        src="/img/primary-hero-img-1.jpg"
        width={508}
        height={642}
        alt="image"
      />
      <Image
        priority
        className="absolute hidden lg:block w-[25%] left-0 bottom-0 z-20"
        src="/img/primary-hero-img-2.jpg"
        width={508}
        height={642}
        alt="image"
      />
      <Image
        priority
        className="absolute top-24 scale-50 sm:scale-75 lg:scale-100 lg:top-20 left-2 lg:left-[16%] z-20"
        src="/img/primary-hero-el-3.png"
        width={110}
        height={106}
        alt="image"
      />
      <Image
        priority
        className="absolute top-3 lg:top-24 scale-75 lg:scale-100 right-1 sm:right-3 lg:right-[30%]"
        src="/img/primary-hero-el-4.png"
        width={109}
        height={82}
        alt="image"
      />
      <Image
        priority
        className="absolute left-0 lg:left-[25%] bottom-72"
        src="/img/primary-hero-el-5.png"
        width={41}
        height={45}
        alt="image"
      />
      <Image
        priority
        className="absolute right-2 lg:right-[27%] bottom-72"
        src="/img/primary-hero-el-6.png"
        width={105}
        height={98}
        alt="image"
      />
      <Image
        priority
        className="absolute bottom-4 lg:bottom-8 left-[10%] lg:left-[27%]"
        src="/img/primary-hero-el-7.png"
        width={67}
        height={71}
        alt="image"
      />
      <Image
        priority
        className="absolute bottom-5 scale-75 md:scale-100 lg:bottom-9 right-[3%] lg:right-[15%]"
        src="/img/primary-hero-el-8.png"
        width={183}
        height={163}
        alt="image"
      />
      <div className="pt-[70px] sm:pt-[100px] md:pt-[150px] xl:pt-[180px] pb-16 h-full px-3">
        <div className="container">
          <div className="text-center relative z-30">
            <h1 className="text-[40px] lg:text-[56px] leading-[68px] text-[var(--neutral-700)] font-semibold">
              Easy Way to Find a Perfect <br /> Property
            </h1>
            <p className="text-xl mx-auto max-w-[600px] text-gray-500 mt-4 md:mt-9">
              Explore vast property listings by category with our user-friendly
              search. Find your perfect match!
            </p>
            <div className="z-30 p-4 lg:p-5 rounded-xl shadow-lg bg-white flex items-center flex-wrap gap-3 relative max-w-[1060px] mx-auto mt-12">
              <HeroDropdown1 />
              <HeroDropdown2 />
              <HeroDropdown3 />
              <HeroDropdown4 />
              <Link
                href="#"
                className="py-[14px] px-6 w-full flex justify-center xl:w-auto text-white bg-primary rounded-full">
                <SearchIcon />
              </Link>
            </div>
            <div className="mx-auto mt-16">
              <button className="text-white bg-primary rounded-full p-4 mb-2">
                <Link href="#">
                  <DownArrow />
                </Link>
              </button>
              <br />
              <span className="text-center">More Details</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
