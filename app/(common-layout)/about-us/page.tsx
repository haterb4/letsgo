"use client";
import Image from "next/image";
import Explore from "@/components/home-2/Explore";
import Counter from "@/components/home-2/Counter";
import Author from "@/components/home-1/Authors";
import Benefit from "@/components/home-1/Benefit";
import Testimonial from "@/components/home-2/Testimonial";
import MobileApp from "@/components/home-2/MobileApp";
import Link from "next/link";
import SubHeadingBtn from "@/components/SubHeadingBtn";

const page = () => {
  return (
    <main>
      {/* Why choose us */}
      <div className="py-[60px] md:py-[120px] bg-[var(--bg-2)] relative z-[1] px-3">
        <div className="container">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-6">
              <div className="relative z-[1] text-center text-xxl-start  pb-lg-0">
                <Image
                  width={526}
                  height={633}
                  src="/img/why-choose-img.png"
                  alt="image"
                  className="z-[1] relative"
                />
                <Image
                  width={62}
                  height={62}
                  src="/img/why-choose-el-1.png"
                  alt="image"
                  className="absolute top-[35%] -left-10 hidden xl:block"
                />
                <Image
                  width={201}
                  height={227}
                  src="/img/why-choose-el-2.png"
                  alt="image"
                  className="absolute -left-28 -bottom-28 hidden xl:block"
                />
                <div className="inline-flex items-center gap-4 rounded p-8 bg-primary z-10 absolute top-12 left-0 xxl:-left-24">
                  <div className="w-12 h-12 rounded bg-white grid place-content-center text-primary shrink-0">
                    <i className="las la-thumbs-up text-[32px]"></i>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-white mb-0 h3 text-start">25+</h3>
                    <p className="mb-0 text-sm text-white text-start">
                      years experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <SubHeadingBtn text="Why choose us" classes="bg-white" />
              <h2 className="mt-4 h2 mb-6">
                Elevate Your Living Experience with Our Best Properties
              </h2>
              <p className="mb-10 clr-neutral-500">
                Real estate can be bought, sold, leased, or rented, and can be a
                valuable investment opportunity. The value of real estate can
                be...
              </p>
              <ul className="flex flex-col gap-6 mb-10">
                <li>
                  <div className="flex gap-6 align-items-start">
                    <div className="shrink-0">
                      <i className="las text-[40px] la-building text-primary"></i>
                    </div>
                    <div className="flex-grow">
                      <h4 className="mb-3 text-2xl font-semibold">
                        {" "}
                        Buy a Property{" "}
                      </h4>
                      <p className="mb-0 clr-neutral-500">
                        Selling a property&quot; refers to the process of
                        transferring the ownership
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex gap-6 align-items-start">
                    <div className="shrink-0">
                      <i className="las text-[40px] la-store text-[var(--secondary-500)]"></i>
                    </div>
                    <div className="flex-grow">
                      <h4 className="mb-3 text-2xl font-semibold">
                        {" "}
                        Rent a Property{" "}
                      </h4>
                      <p className="mb-0 clr-neutral-500">
                        Renting a property typically refers to the process of
                        paying a landlord
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex gap-6 align-items-start">
                    <div className="shrink-0">
                      <i className="las text-[40px] la-city text-[#9C742B]"></i>
                    </div>
                    <div className="flex-grow">
                      <h4 className="mb-3 text-2xl font-semibold">
                        {" "}
                        Sell a Property{" "}
                      </h4>
                      <p className="mb-0 clr-neutral-500">
                        Selling a property typically refers to the process of
                        transferring
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
              <Link
                href="service"
                className="link inline-flex items-center gap-2 py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-medium">
                <span className="inline-block"> Read More </span>
                <span className="material-symbols-outlined mat-icon font-200">
                  trending_flat
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Explore properties */}
      <Explore />
      {/* Counter */}
      <Counter />
      {/* Authors */}
      <Author />
      {/* Explore section */}
      <div className="pt-120">
        <Benefit />
      </div>
      {/* Testimonail */}
      <Testimonial />
      {/* Mobile app */}
      <MobileApp />
      {/* Faq  */}
    </main>
  );
};

export default page;
