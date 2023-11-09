// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import { HeartIconOutline } from "@/public/data/icons";
import Image from "next/image";
import { useState } from "react";
import { HeartIcon } from "@heroicons/react/20/solid";
import toast, { Toaster } from "react-hot-toast";
const notifyAdd = () => toast.success("Added to Wishlist.");
const notifyRemove = () => toast.error("Removed From Wishlist.");
const FeaturedCardHome1 = ({ item }: any) => {
  const [favourite, setFavourite] = useState(false);
  const handleFavorite = () => {
    setFavourite(!favourite);
    favourite ? notifyRemove() : notifyAdd();
  };
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
  return (
    <div
      key={id}
      className="col-span-12 md:col-span-6 xl:col-span-4 px-3 xl:px-0">
      <div className="bg-white shadow-xl rounded-2xl p-2">
        <div className="rounded-2xl relative group">
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
              className="swiper property-card-slider group">
              {img.map((img: any, i: any) => (
                <SwiperSlide key={i} className="swiper-slide">
                  <div className="property-card__img">
                    <Image
                      width={400}
                      height={280}
                      src={img}
                      alt="image"
                      className="rounded-2xl w-full"
                    />
                  </div>
                </SwiperSlide>
              ))}
              <div className="swiper-pagination property-card-pagination"></div>
              <div className="swiper-button-prev !opacity-0 group-hover:!opacity-100 duration-300 property-card-prev"></div>
              <div className="swiper-button-next !opacity-0 group-hover:!opacity-100 duration-300 property-card-next"></div>
            </Swiper>
          ) : (
            <div className="property-card__img">
              <Image
                width={400}
                height={280}
                src={img[0]}
                alt="image"
                className="rounded-2xl w-full"
              />
            </div>
          )}

          <Link
            href="/property-list"
            className="absolute top-4 z-10 inline-block text-primary left-4 bg-white rounded-full py-2 px-4">
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
          {popular && (
            <span className="absolute">
              <span className="inline-block py-2.5 px-9 text-sm font-medium rounded-t rounded-br bg-primary relative -left-4 bottom-5 text-white z-10 before:bg-[#2628A6] before:absolute before:w-2 before:h-2 before:rounded-bl-md before:-bottom-2 before:left-0 ">
                Popular
              </span>
            </span>
          )}
        </div>
        <div className="p-2 sm:p-4 lg:p-5">
          <div className="flex items-center gap-1 mb-4 mt-5 sm:mt-3">
            <i className="las la-map-marker-alt text-lg text-[#9C742B]"></i>
            <span className="inline-block">{address} </span>
          </div>
          <Link
            href="property-details-1"
            className="text-base sm:text-xl font-medium text-neutral-700 mb-4">
            {title}
          </Link>
          <ul className="flex flex-wrap divide-x divide-dashed justify-between mt-5">
            <li className="flex flex-col px-1 sm:px-4 gap-2">
              <i className="las la-city text-xl"></i>
              <span className="block"> {rooms} Room </span>
            </li>
            <li className="flex flex-col px-1 sm:px-4 gap-2">
              <i className="las la-bed text-xl"></i>
              <span className="block"> {bed} Bed </span>
            </li>
            <li className="flex flex-col px-1 sm:px-4 gap-2">
              <i className="las la-bath text-xl"></i>
              <span className="block"> {bath} Bath </span>
            </li>
            <li className="flex flex-col px-1 sm:px-4 gap-2">
              <i className="las la-arrows-alt text-xl"></i>
              <span className="block"> {area} sft </span>
            </li>
          </ul>
        </div>
        <div className="property-card__body py-0 mx-5">
          <div className=" border-t border-dashed"></div>
        </div>
        <div className="px-2 sm:px-5 pb-5 pt-3">
          <div className="flex flex-wrap justify-between items-center">
            <span className="text-primary text-xl font-medium">
              ${price}
              <span className="text-base text-neutral-700"> /month </span>
            </span>
            <Link href="property-details-1" className="btn-outline">
              Read More
            </Link>
          </div>
        </div>
      </div>
      <Toaster position="top-right" />
    </div>
  );
};

export default FeaturedCardHome1;
