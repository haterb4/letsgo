"use client";
import { HeartIconOutline } from "@/public/data/icons";
import { HeartIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Tooltip } from "react-tooltip";
import toast, { Toaster } from "react-hot-toast";
const notifyAdd = () => toast.success("Added to Wishlist.");
const notifyRemove = () => toast.error("Removed From Wishlist.");
const tooltipStyle = {
  backgroundColor: "#3539E9",
  color: "#fff",
  borderRadius: "10px",
};

const FeaturedCard = ({ item }: any) => {
  const [favourite, setFavourite] = useState(false);
  const { id, img, name, rating, location, price } = item;
  const handleFavorite = () => {
    setFavourite(!favourite);
    favourite ? notifyRemove() : notifyAdd();
  };
  return (
    <div key={id} className="col-span-12 md:col-span-6 xl:col-span-4">
      <div className="relative rounded-2xl p-3 bg-white">
        <div className="property-card__head">
          <div className="property-card__img">
            <Image
              width={400}
              height={306}
              src={img}
              alt="image"
              className=" w-full rounded-2xl"
            />
          </div>
          <button
            onClick={handleFavorite}
            className="absolute z-10 inline-block text-primary top-6 right-6 rounded-full bg-white p-2.5 ">
            {favourite ? (
              <HeartIcon className="w-5 h-5 text-[var(--tertiary)]" />
            ) : (
              <HeartIconOutline />
            )}
          </button>
        </div>
        <div className="mt-4 p-4">
          <div className="flex justify-between mb-2">
            <Link
              href="/componentshotel-listing-details"
              className="block text-xl font-medium">
              {name}
            </Link>
            <div className="flex items-center shrink-0">
              <i className="text-[var(--tertiary)] text-lg las la-star"></i>
              <span className="block text-[var(--neutral-700)]">{rating}</span>
            </div>
          </div>
          <div className="flex justify-between mb-6">
            <div className="flex items-center gap-1">
              <i className="las la-map-marker-alt text-xl text-[#9C742B]"></i>
              <span className="inline-block"> {location} </span>
            </div>
            <span className="inline-block font-medium">20% OFF</span>
          </div>
          <ul className="flex items-center flex-wrap justify-between gap-1">
            <li>
              <div
                data-tooltip-id="parking"
                className="grid place-content-center w-10 h-10 rounded-full bg-[var(--primary-light)]">
                <Image
                  width={24}
                  height={24}
                  src="/img/icon-car-parking.png"
                  alt="image"
                  className=" w-7 h-7 object-fit-contain"
                />
              </div>
            </li>
            <li>
              <div
                data-tooltip-id="restaurent"
                className="grid place-content-center w-10 h-10 rounded-full bg-[var(--primary-light)]">
                <Image
                  width={24}
                  height={24}
                  src="/img/icon-breakfast.png"
                  alt="image"
                  className=" w-7 h-7 object-fit-contain"
                />
              </div>
            </li>
            <li>
              <div
                data-tooltip-id="room"
                className="grid place-content-center w-10 h-10 rounded-full bg-[var(--primary-light)]">
                <Image
                  width={24}
                  height={24}
                  src="/img/icon-room-service.png"
                  alt="image"
                  className=" w-7 h-7 object-fit-contain"
                />
              </div>
            </li>
            <li>
              <div
                data-tooltip-id="fitness"
                className="grid place-content-center w-10 h-10 rounded-full bg-[var(--primary-light)]">
                <Image
                  width={24}
                  height={24}
                  src="/img/icon-fitness.png"
                  alt="image"
                  className=" w-7 h-7 object-fit-contain"
                />
              </div>
            </li>
            <li>
              <div
                data-tooltip-id="swimming"
                className="grid place-content-center w-10 h-10 rounded-full bg-[var(--primary-light)]">
                <Image
                  width={24}
                  height={24}
                  src="/img/icon-swimming-pool.png"
                  alt="image"
                  className=" w-7 h-7 object-fit-contain"
                />
              </div>
            </li>
            <li>
              <div
                data-tooltip-id="laundry"
                className="grid place-content-center w-10 h-10 rounded-full bg-[var(--primary-light)]">
                <Image
                  width={24}
                  height={24}
                  src="/img/icon-laundry.png"
                  alt="image"
                  className=" w-7 h-7 object-fit-contain"
                />
              </div>
            </li>
            <li>
              <div
                data-tooltip-id="free"
                className="grid place-content-center w-10 h-10 rounded-full bg-[var(--primary-light)]">
                <Image
                  width={24}
                  height={24}
                  src="/img/icon-glob.png"
                  alt="image"
                  className=" w-7 h-7 object-fit-contain"
                />
              </div>
            </li>
          </ul>
          <Tooltip
            id="parking"
            style={tooltipStyle}
            offset={7}
            content="Parking"
          />
          <Tooltip
            id="restaurent"
            style={tooltipStyle}
            offset={7}
            content="Restaurent"
          />
          <Tooltip
            id="room"
            style={tooltipStyle}
            offset={7}
            content="Room Service"
          />
          <Tooltip
            id="fitness"
            style={tooltipStyle}
            offset={7}
            content="Fitness"
          />
          <Tooltip
            id="swimming"
            style={tooltipStyle}
            offset={7}
            content="Swimming"
          />
          <Tooltip
            id="laundry"
            style={tooltipStyle}
            offset={7}
            content="Laundry"
          />
          <Tooltip
            id="free"
            style={tooltipStyle}
            offset={7}
            content="Free Internet"
          />
        </div>
        <div className="border-b border-dash-long mx-3">
          <div className="hr-dashed"></div>
        </div>
        <div className="p-4">
          <div className="flex flex-wrap justify-between items-center">
            <span className="block text-xl font-medium text-primary">
              ${price}
              <span className="inline-block clr-neutral-500 text-base font-normal">
                /per night
              </span>
            </span>
            <Link
              href="/hotel-listing-details"
              className="btn-outline  text-primary">
              Book Now
            </Link>
          </div>
        </div>
      </div>
      <Toaster position="top-right" />
    </div>
  );
};

export default FeaturedCard;
