import Link from "next/link";
import SubHeadingBtn from "../SubHeadingBtn";

const Cta = () => {
  return (
    <div className="z-10 bg-white relative after:bg-[url('/img/cta-bg.png')] after:absolute after:left-0 3xl:after:left-[12%] 4xl:after:left-[16%] after:w-[98%] after:mx-auto lg:after:w-[84%] after:h-full after:right-0 after:bottom-0 after:bg-[#c2c3f7]">
      <div className="container py-[60px] z-20 relative after:absolute lg:after:bg-[url('/img/cta-img.png')] after:bg-right-bottom after:bg-no-repeat after:w-full after:h-full after:bottom-0">
        <div className="xl:pl-[90px] px-3">
          <SubHeadingBtn text="Call To Action" classes="bg-white" />
          <h2 className="h2 mt-4 mb-8 max-w-[600px] leading-snug">
            Find your dream property with our expert help
          </h2>
          <div className="max-w-max">
            <Link href="#" className="btn-primary flex items-center gap-2">
              Contact Us <i className="las la-long-arrow-alt-right text-xl"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
