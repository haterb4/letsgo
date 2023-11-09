"use client";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import { useState } from "react";
import { HeartIcon } from "@heroicons/react/24/solid";
import { HeartIconOutline } from "@/public/data/icons";
import toast, { Toaster } from "react-hot-toast";
const notifyAdd = () => toast.success("Added to Wishlist.");
const notifyRemove = () => toast.error("Removed From Wishlist.");
const PropertyListCard = ({ item }: any) => {
  const [favourite, setFavourite] = useState(false);
  const {
    id,
    address,
    area,
    bath,
    bed,
    img,
    popular,
    price,
    rooms,
    title,
    type,
  } = item;
  const handleFavorite = () => {
    setFavourite(!favourite);
    favourite ? notifyRemove() : notifyAdd();
  };
  return (
    <div key={id} className="col-span-12 group">
      <div className="bg-white grid grid-cols-12 rounded-2xl p-2">
        <div className="rounded-2xl col-span-12 md:col-span-5 relative group">
          {img.length > 1 ? (
            <Swiper
              loop={true}
              pagination={{
                el: ".property-card-pagination",
                clickable: true,
              }}
              navigation={{
                nextEl: ".property-card-next",
                prevEl: ".property-card-prev",
              }}
              modules={[Navigation, Pagination]}
              className="h-full">
              {img.map((img: any, i: any) => (
                <SwiperSlide key={i} className="h-full">
                  <Image
                    width={270}
                    height={280}
                    src={img}
                    alt="image"
                    className="rounded-2xl object-cover w-full h-full"
                  />
                </SwiperSlide>
              ))}
              <div className="swiper-pagination property-card-pagination"></div>
              <div className="swiper-button-prev !opacity-0 group-hover:!opacity-100 duration-300 property-card-prev"></div>
              <div className="swiper-button-next !opacity-0 group-hover:!opacity-100 duration-300 property-card-next"></div>
            </Swiper>
          ) : (
            <div className="h-full">
              <Image
                width={270}
                height={280}
                src={img[0]}
                alt="image"
                className="rounded-2xl object-cover w-full h-full"
              />
            </div>
          )}

          <Link
            href="/property-list"
            className="absolute top-4 z-10 inline-block text-primary left-4 bg-white rounded-full py-2 px-2 sm:px-3 md:px-4">
            For {type}
          </Link>
          <button
            onClick={handleFavorite}
            className="absolute z-10 inline-block text-primary top-4 right-4 rounded-full bg-white p-2.5 ">
            {favourite ? (
              <HeartIcon className="w-5 h-5 text-[var(--tertiary)]" />
            ) : (
              <HeartIconOutline />
            )}
          </button>
        </div>
        <div className="col-span-12 md:col-span-7">
          <div>
            <div className="flex items-center pt-3 gap-1 mb-3 pl-4 mt-2">
              <i className="las la-map-marker-alt text-lg text-[#9C742B]"></i>
              <span className="inline-block">{address}</span>
            </div>
            <Link
              href="property-details-1"
              className="text-xl font-medium text-neutral-700 pl-4">
              {title.substr(0, 20)}
            </Link>
            <ul className="flex flex-wrap divide-x divide-dashed justify-between mt-5 pl-3 mb-5">
              <li className="flex flex-col px-2 gap-1">
                <i className="las la-city text-xl"></i>
                <span className="block">{rooms} Room</span>
              </li>
              <li className="flex flex-col px-1 xxl:px-2 gap-1">
                <i className="las la-bed text-xl"></i>
                <span className="block"> {bed} Bed </span>
              </li>
              <li className="flex flex-col px-1 xxl:px-2 gap-1">
                <i className="las la-bath text-xl"></i>
                <span className="block"> {bath} Bath </span>
              </li>
              <li className="flex flex-col px-1 xxl:px-2 gap-1">
                <i className="las la-arrows-alt text-xl"></i>
                <span className="block"> {area} sft </span>
              </li>
            </ul>
          </div>
          <div className="mx-3 md:mx-5">
            <div className=" border-t border-dash-long"></div>
          </div>
          <div className="px-3 sm:px-4 md:px-5 pb-5 pt-4">
            <div className="flex flex-wrap gap-3 justify-between items-center">
              <span className="text-primary text-xl font-medium">
                ${price}
                <span className="text-base text-neutral-700">/month</span>
              </span>
              <Link href="/property-details-1" className="btn-outline ">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Toaster position="top-right" />
    </div>
  );
};
export default PropertyListCard;
