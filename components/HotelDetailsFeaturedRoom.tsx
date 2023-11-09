import { HeartIconOutline } from "@/public/data/icons";
import { HeartIcon, StarIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const HotelDetailsFeaturedRoom = ({ item }: any) => {
  const [favorite, setFavorite] = useState(false);
  const { id, img, price, title } = item;
  return (
    <li key={id}>
      <div className="p-2 rounded-2xl flex flex-col md:flex-row bg-[var(--bg-2)]">
        <div className="relative">
          <div className="rounded-2xl">
            <Image
              width={348}
              height={305}
              src={img}
              alt="image"
              className=" w-full rounded-2xl"
            />
          </div>
          <button
            onClick={() => setFavorite(!favorite)}
            className="absolute z-10 inline-block text-primary top-6 right-6 rounded-full bg-white p-2.5 ">
            {favorite ? (
              <HeartIcon className="w-5 h-5 text-[var(--tertiary)]" />
            ) : (
              <HeartIconOutline />
            )}
          </button>
        </div>
        <div className="p-2 sm:p-4 flex-grow">
          <div className="property-card__body">
            <div className="flex justify-between mb-2">
              <Link
                href="hotel-listing-details"
                className="link block flex-grow text-[var(--neutral-700)] hover:text-primary text-xl font-medium">
                {title}
              </Link>
              <div className="flex items-center shrink-0">
                <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                <span className="block text-[var(--neutral-700)]">4.8</span>
              </div>
            </div>
            <p className="mb-4">Free Cancellation after 5 hours of booking</p>
            <ul className="columns-1 sm:columns-2">
              <li className="py-2 sm:py-3">
                <div className="flex items-center gap-2">
                  <Image
                    width={24}
                    height={24}
                    src="/img/icon-ac-secondary.png"
                    alt="image"
                    className="w-6 h-6 object-fit-contain"
                  />
                  <span className="block">Air Condition</span>
                </div>
              </li>
              <li className="py-2 sm:py-3">
                <div className="flex items-center gap-2">
                  <Image
                    width={24}
                    height={24}
                    src="/img/icon-wifi-secondary.png"
                    alt="image"
                    className="w-6 h-6 object-fit-contain"
                  />
                  <span className="block"> Wifi </span>
                </div>
              </li>
              <li className="py-2 sm:py-3">
                <div className="flex items-center gap-2">
                  <Image
                    width={24}
                    height={24}
                    src="/img/icon-bed-secondary.png"
                    alt="image"
                    className="w-6 h-6 object-fit-contain"
                  />
                  <span className="block">Deluxe Bed Suite</span>
                </div>
              </li>
              <li className="py-2 sm:py-3">
                <div className="flex items-center gap-2">
                  <Image
                    width={24}
                    height={24}
                    src="/img/icon-kitchen-secondary.png"
                    alt="image"
                    className="w-6 h-6 object-fit-contain"
                  />
                  <span className="block"> Kitchen </span>
                </div>
              </li>
            </ul>
          </div>
          <div className="property-card__body py-0 pt-4">
            <div className="hr-dashed"></div>
          </div>
          <div className="property-card__body">
            <div className="flex flex-wrap justify-between items-center">
              <span className="block text-xl font-medium text-primary">
                ${price}
                <span className="inline-block text-gray-600 text-base font-normal">
                  /per night
                </span>
              </span>
              <Link
                href="hotel-listing-details"
                className="btn-outline  font-semibold">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default HotelDetailsFeaturedRoom;
