"use client";
import { HeartIconOutline } from "@/public/data/icons";
import { HeartIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Tooltip } from "react-tooltip";
const tooltipStyle = {
  backgroundColor: "#3539E9",
  color: "#fff",
  borderRadius: "10px",
};

const DriverListingCard = ({ item }: any) => {
  const [favorite, setFavorite] = useState(false);
  const { id, img, name, rating, location, price } = item;
  return (
    <div key={id} className="col-span-12 md:col-span-6">
      <div className="relative rounded-2xl p-3 bg-white">
        <div className="property-card__head">
          <div className="property-card__img">
            <Image
              width={400}
              height={306}
              src={img}
              alt="image"
              className="w-full rounded-2xl max-h-[306px]"
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
              <i className="las la-map-marker-alt text-xl text-[var(--tertiary)]"></i>
              <span className="inline-block"> {location} </span>
            </div>
            <span className="inline-block font-medium">20% OFF</span>
          </div>
          
        </div>
        <div className="border-b border-dash-long mx-3">
          <div className="hr-dashed"></div>
        </div>
        <div className="p-4">
          <div className="flex flex-wrap justify-between items-center">
            <span className="block text-xl font-medium text-primary">
              {price}F
              <span className="inline-block clr-neutral-500 text-base font-normal">
                /pooler
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
    </div>
  );
};

export default DriverListingCard;
