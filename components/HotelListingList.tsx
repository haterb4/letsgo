import { HeartIconOutline } from "@/public/data/icons";
import { HeartIcon, StarIcon } from "@heroicons/react/20/solid";
import { MapPinIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const HotelListingList = ({ item }: any) => {
  const [favorite, setFavorite] = useState(false);
  const { id, img, location, price, rating, name } = item;
  return (
    <div key={id} className="col-span-12">
      <div className="flex flex-col lg:flex-row p-2 rounded-2xl bg-white hover:shadow-lg duration-300 border">
        <div className="relative">
          <div className="rounded-2xl">
            <Image
              width={369}
              height={282}
              src={img}
              alt="image"
              className="w-full rounded-2xl max-h-[282px] max-w[369px]"
            />
          </div>
          <button
            onClick={() => setFavorite(!favorite)}
            className="absolute z-10 inline-block text-primary top-3 sm:top-6 right-3 sm:right-6 rounded-full bg-white p-2.5 ">
            {favorite ? (
              <HeartIcon className="w-5 h-5 text-[var(--tertiary)]" />
            ) : (
              <HeartIconOutline />
            )}
          </button>
        </div>
        <div className="flex-grow p-2 sm:p-3 lg:p-4 xxl:py-6 xxl:px-8">
          <div className="property-card__body">
            <div className="flex justify-between mb-2">
              <Link
                href="/hotel-listing-details"
                className="link block flex-grow text-[var(--neutral-700)] hover:text-primary text-xl font-medium">
                {name}
              </Link>
              <div className="flex items-center shrink-0">
                <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                <span className="block text-[var(--neutral-700)]">
                  {rating}
                </span>
              </div>
            </div>
            <div className="flex justify-between mb-6">
              <div className="flex items-center gap-1">
                <MapPinIcon className="w-5 h-5 text-[#9C742B]" />
                <span className="inline-block"> {location} </span>
              </div>
              <span className="inline-block font-medium clr-secondary-400">
                20% OFF
              </span>
            </div>
            {/* <ul className="flex items-center flex-wrap gap-3">
              <li>
                <div
                  data-tooltip-id="parking"
                  className="grid place-content-center w-10 h-10 rounded-full bg-[var(--bg-2)] text-primary">
                  <Image
                    width={28}
                    height={28}
                    src="/img/icon-car-parking.png"
                    alt="image"
                    className=" w-7 h-7 object-fit-contain"
                  />
                </div>
              </li>
              <li>
                <div
                  data-tooltip-id="restaurent"
                  className="grid place-content-center w-10 h-10 rounded-full bg-[var(--bg-2)] text-primary">
                  <Image
                    width={28}
                    height={28}
                    src="/img/icon-breakfast.png"
                    alt="image"
                    className=" w-7 h-7 object-fit-contain"
                  />
                </div>
              </li>
              <li>
                <div
                  data-tooltip-id="room"
                  className="grid place-content-center w-10 h-10 rounded-full bg-[var(--bg-2)] text-primary">
                  <Image
                    width={28}
                    height={28}
                    src="/img/icon-room-service.png"
                    alt="image"
                    className=" w-7 h-7 object-fit-contain"
                  />
                </div>
              </li>
              <li>
                <div
                  data-tooltip-id="fitness"
                  className="grid place-content-center w-10 h-10 rounded-full bg-[var(--bg-2)] text-primary">
                  <Image
                    width={28}
                    height={28}
                    src="/img/icon-fitness.png"
                    alt="image"
                    className=" w-7 h-7 object-fit-contain"
                  />
                </div>
              </li>
              <li>
                <div
                  data-tooltip-id="swimming"
                  className="grid place-content-center w-10 h-10 rounded-full bg-[var(--bg-2)] text-primary">
                  <Image
                    width={28}
                    height={28}
                    src="/img/icon-swimming-pool.png"
                    alt="image"
                    className=" w-7 h-7 object-fit-contain"
                  />
                </div>
              </li>
              <li>
                <div
                  data-tooltip-id="laundry"
                  className="grid place-content-center w-10 h-10 rounded-full bg-[var(--bg-2)] text-primary">
                  <Image
                    width={28}
                    height={28}
                    src="/img/icon-laundry.png"
                    alt="image"
                    className=" w-7 h-7 object-fit-contain"
                  />
                </div>
              </li>
              <li>
                <div
                  data-tooltip-id="free"
                  className="grid place-content-center w-10 h-10 rounded-full bg-[var(--bg-2)] text-primary">
                  <Image
                    width={28}
                    height={28}
                    src="/img/icon-glob.png"
                    alt="image"
                    className=" w-7 h-7 object-fit-contain"
                  />
                </div>
              </li>
            </ul> */}
            <div>Voyagez en toute tranquilité avec les meilleures convivialités du voyage</div>
          </div>
          <div className="my-5 xl:my-7">
            <div className="border border-dashed"></div>
          </div>
          <div className="flex flex-wrap justify-between items-center">
            <span className="block text-xl font-medium text-primary">
              <span>{price} </span> 
              <span className="inline-block clr-neutral-500 text-base font-normal">
                destinations
              </span>
            </span>
            <Link
              href="/hotel-listing-details"
              className="btn-outline  font-semibold">
              View More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelListingList;
