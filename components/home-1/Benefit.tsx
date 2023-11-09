import Image from "next/image";
import SubHeadingBtn from "../SubHeadingBtn";
import categoryEl from "@/public/img/category-section-el.png";

const Benefit = () => {
  return (
    <section className="bg-left bg-contain bg-white lg:bg-[url('/img/benefit-section-bg.jpg')] bg-no-repeat relative">
      <Image
        className="hidden xl:block absolute bottom-10 right-14"
        src={categoryEl}
        alt=""
      />
      <div className="py-[60px] lg:py-[120px]">
        <div className="container">
          <div className="flex justify-end px-3 xl:px-0">
            <div className="max-w-[600px]">
              <div className="flex gap-2">
                <i className="text-[var(--tertiary)] las la-star"></i>
                <i className="text-[var(--tertiary)] las la-star"></i>
                <i className="text-[var(--tertiary)] las la-star"></i>
                <i className="text-[var(--tertiary)] las la-star"></i>
                <i className="text-[var(--tertiary)] las la-star"></i>
              </div>
              <p className="mt-4 text-xl">
                <span className="text-primary">
                  {" "}
                  99.5% Customer Satisfaction{" "}
                </span>{" "}
                based on 23,000+ reviews and 25,000+ Complete Projects.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-4 xl:col-span-5"></div>
            <div className="col-span-12 lg:col-span-8 xl:col-span-7 px-3 sm:px-6 lg:px-16 py-4 lg:py-10 bg-white rounded-2xl mt-12">
              <SubHeadingBtn
                text="Benefits"
                classes="bg-[var(--primary-light)]"
              />
              <h2 className="h2 mt-4 leading-snug mb-5">
                Explore the city of Benefit Happenings
              </h2>
              <p className="text-neutral-600">
                Real estate can be bought, sold, leased, or rented, and can be a
                valuable investment opportunity. The value of real estate can be
              </p>
              <div className="grid grid-cols-12 gap-6 mt-7 lg:mt-10">
                <div className="col-span-12 md:col-span-6 p-6 rounded-xl bg-[var(--bg-2)] flex gap-5">
                  <Image
                    src="/img/benefit-icon-1.png"
                    className="self-start"
                    height={60}
                    width={60}
                    alt="benefit icon"
                  />
                  <div>
                    <h4 className="text-xl font-semibold mb-2">
                      Best Price Guarantee
                    </h4>
                    <p>Best Price Guarantee is a policy offered</p>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-6 p-6 rounded-xl bg-[var(--bg-2)] flex gap-5">
                  <Image
                    src="/img/benefit-icon-2.png"
                    className="self-start"
                    height={60}
                    width={60}
                    alt="benefit icon"
                  />
                  <div>
                    <h4 className="text-xl font-semibold mb-2">
                      Reach millions user
                    </h4>
                    <p>It is possible that the platform allows</p>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-6 p-6 rounded-xl bg-[var(--bg-2)] flex gap-5">
                  <Image
                    src="/img/benefit-icon-3.png"
                    className="self-start"
                    height={60}
                    width={60}
                    alt="benefit icon"
                  />
                  <div>
                    <h4 className="text-xl font-semibold mb-2">
                      Easy & Quick Booking
                    </h4>
                    <p>The goal of Easy & Quick Booking is to</p>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-6 p-6 rounded-xl bg-[var(--bg-2)] flex gap-5">
                  <Image
                    src="/img/benefit-icon-4.png"
                    className="self-start"
                    height={60}
                    width={60}
                    alt="benefit icon"
                  />
                  <div>
                    <h4 className="text-xl font-semibold mb-2">
                      Customer Care 24/7
                    </h4>
                    <p>24/7 Customer Care facility available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefit;
