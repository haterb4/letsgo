import whychooseimg2 from "@/public/img/why-choose-img-2.png";
import Image from "next/image";
import Link from "next/link";
import SubHeadingBtn from "../SubHeadingBtn";
import { BoltIcon } from "@heroicons/react/24/outline";

const WhyChoose = () => {
  return (
    <section className="py-[60px] lg:py-[120px] bg-white relative z-[1] px-3">
      <div className="container">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-6">
            <div className="relative z-[1] text-center xxl:text-start pb-lg-0">
              <Image src={whychooseimg2} alt="image" className="" />
              <div className="flex items-center gap-4 rounded-md p-3 md:p-6 bg-primary absolute left-1 xl:-left-10 top-1 xl:top-10 text-white">
                <div className="w-12 h-12 rounded bg-white grid place-content-center text-primary text-3xl shrink-0">
                  <i className="las la-thumbs-up"></i>
                </div>
                <div className="flex-grow">
                  <h3 className="text-3xl mb-0 text-start font-semibold">
                    25+
                  </h3>
                  <p className="mb-0 text-sm text-white text-start">
                    years experience
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div className="max-w-[570px]">
              <SubHeadingBtn text="Why choose us" classes="bg-white" />
              <h2 className="h2 mt-3 leading-tight">
                The Ultimate Car Sharing Experience
              </h2>
              <p className="text-neutral-600 pt-5 pb-8 lg:pb-14">
                Real estate can be bought, sold, leased, or rented, and can be a
                valuable investment opportunity. The value of real estate can
                be...
              </p>
            </div>
            <ul className="flex flex-col gap-6 mb-10">
              <li>
                <div className="flex gap-6 align-items-start">
                  <div className="shrink-0">
                    <BoltIcon className="h-[60px] w-[60px] text-primary" />
                    {/* <i className="las la-bolt text-[60px] text-primary"></i> */}
                  </div>
                  <div className="flex-grow">
                    <h4 className="mb-3 text-2xl font-semibold">
                      Advance Booking
                    </h4>
                    <p className="mb-0 clr-neutral-500">
                      Happiness prosperous impression had conviction For every
                      delay in they Extremity now.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex gap-6 align-items-start">
                  <div className="shrink-0">
                    <i className="las la-leaf text-[60px] text-[var(--secondary)]"></i>
                  </div>
                  <div className="flex-grow">
                    <h4 className="mb-3 text-2xl font-semibold">
                      Economical Trip
                    </h4>
                    <p className="mb-0 clr-neutral-500">
                      Extremity now strangers contained breakfast him discourse
                      additions Sincerity.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex gap-6 align-items-start">
                  <div className="shrink-0">
                    <i className="las la-life-ring text-[60px] text-[#9C742B]"></i>
                  </div>
                  <div className="flex-grow">
                    <h4 className="mb-3 text-2xl font-semibold">
                      Secure and Safer
                    </h4>
                    <p className="mb-0 clr-neutral-500">
                      Perpetual extremity now strangers contained breakfast him
                      discourse additions.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
            <Link
              href="about-us"
              className="btn-primary inline-flex items-center gap-2">
              Read More <i className="las la-long-arrow-alt-right text-xl"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
