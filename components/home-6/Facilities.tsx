import Image from "next/image";
import Link from "next/link";
import SubHeadingBtn from "../SubHeadingBtn";
import { facilities } from "@/public/data/facilities";

const Facilities = () => {
  return (
    <div className="bg-white py-[60px] lg:py-[120px] px-3">
      <div className="container">
        <div className="max-w-[630px] mx-auto flex flex-col items-center text-center">
          <SubHeadingBtn text="Trip Facilities" classes="bg-white" />
          <h2 className="h2 mt-3 leading-tight">
            Travel in Comfort with Trip Facilities
          </h2>
          <p className="text-neutral-600 pt-5 pb-8 lg:pb-14">
            At Flight Facilities, we believe that your journey should be just as
            enjoyable as your destination.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-4 lg:gap-6">
          {facilities.map(({ id, description, imgSrc, title }) => (
            <div key={id} className="col-span-12 md:col-span-4 xl:col-span-3">
              <div className="rounded-2xl p-6 xl:p-8 text-center hover:shadow-[rgba(149,157,165,0.2)_0px_8px_24px] duration-300">
                <Image
                  height={60}
                  width={60}
                  src={imgSrc}
                  alt="image"
                  className=" mx-auto mb-6"
                />
                <h4 className="mb-4 text-2xl font-semibold">{title}</h4>
                <p className="mb-0">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 lg:mt-14 text-center">
        <Link href="flight-list" className="btn-outline  text-primary">
          See All Facilities
        </Link>
      </div>
    </div>
  );
};

export default Facilities;
