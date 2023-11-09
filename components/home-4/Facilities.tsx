import Image from "next/image";
import Link from "next/link";
import SubHeadingBtn from "../SubHeadingBtn";
import { facilities } from "@/public/data/facility";

const Facilities = () => {
  return (
    <section className="bg-white relative py-[60px] lg:py-[120px] px-3">
      <div className="container">
        <div className="max-w-[570px] mx-auto flex flex-col items-center text-center">
          <SubHeadingBtn
            text="Hotel Facilities"
            classes="bg-[var(--primary-light)]"
          />
          <h2 className="h2 mt-3 leading-tight">
            Exploring the Top Hotel Facilities and Amenities
          </h2>
          <p className="text-neutral-600 pt-5 pb-8 lg:pb-14">
            Real estate can be bought, sold, leased, or rented, and can be a
            valuable investment opportunity. The value of real estate can be...
          </p>
        </div>
        <div className="grid grid-cols-12 gap-4 xl:gap-6">
          {facilities.map(({ id, description, imgSrc, title }) => (
            <div
              key={id}
              className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
              <div className="shadow-[rgba(0,0,0,0.1)_0px_4px_12px] rounded-xl bg-white p-4 lg:p-8 group hover:bg-primary duration-300">
                <div className="grid place-content-center w-20 h-20 rounded-full bg-[var(--primary-light)] mb-6">
                  <Image
                    width={54}
                    height={54}
                    src={imgSrc}
                    alt="image"
                    className=""
                  />
                </div>
                <h4 className="mb-3 text-2xl font-semibold group-hover:text-white duration-300">
                  {title}
                </h4>
                <p className="mb-0 group-hover:text-white duration-300">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <Link href="/service" className="btn-outline  text-primary">
          See All Facilities
        </Link>
      </div>
    </section>
  );
};

export default Facilities;
