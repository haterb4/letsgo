import { destinations } from "@/public/data/destinations";
import Image from "next/image";
import Link from "next/link";
import SubHeadingBtn from "../SubHeadingBtn";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

const Featured = () => {
  return (
    <div className="py-[60px] lg:py-[120px] px-3">
      <div className="container">
        <div className="max-w-[630px] mx-auto flex flex-col items-center text-center">
          <SubHeadingBtn text="Popular Destinations" classes="bg-white" />
          <h2 className="h2 mt-3 leading-tight">
            Fly to popular destinations around the world
          </h2>
          <p className="text-neutral-600 pt-5 pb-8 lg:pb-14">
            Are you ready to plan your next adventure? Look no further than our
            list of popular destinations to fly to around the world
          </p>
        </div>
        <div className="grid grid-cols-12 gap-4 lg:gap-6">
          {destinations.map(
            ({ id, img, desc, destination, fights, rating }) => (
              <div key={id} className="col-span-12 md:col-span-6 xl:col-span-4">
                <div className="rounded-2xl bg-white p-2">
                  <div className="relative">
                    <Image
                      width={400}
                      height={306}
                      src={img}
                      alt="image"
                      className="w-full rounded-2xl"
                    />
                    <div className="bg-white p-2 rounded-full absolute top-3 right-3">
                      <InformationCircleIcon className="w-6 h-6 text-gray-500" />
                    </div>
                  </div>
                  <div className="p-2 sm:p-4">
                    <div className="flex justify-between mb-2">
                      <Link
                        href="flight-details"
                        className="block flex-grow text-xl font-medium">
                        {destination}
                      </Link>
                      <div className="flex gap-1 items-center shrink-0">
                        <i className="las la-star text-[var(--tertiary)]"></i>
                        <span className="block">{rating}</span>
                      </div>
                    </div>
                    <p className="mb-0">{desc}</p>
                  </div>
                  <div className="border-b border-dash-long my-2 mx-2 sm:mx-4">
                    <div className="hr-dashed"></div>
                  </div>
                  <div className="p-2 sm:p-4">
                    <div className="flex flex-wrap justify-between items-center">
                      <span className="flex items-center gap-3">
                        <Image
                          width={24}
                          height={24}
                          src="/img/icon-plane.png"
                          alt="image"
                          className="shrink-0"
                        />
                        <span className="inline-block text-sm md:text-base">
                          Daily {fights} Flight
                        </span>
                      </span>
                      <Link
                        href="flight-details"
                        className="btn-outline  text-primary">
                        See All Flight
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <div className="flex justify-center mt-8 lg:mt-14">
        <Link href="flight-list" className="btn-outline  text-primary">
          See All Destinations
        </Link>
      </div>
    </div>
  );
};

export default Featured;
