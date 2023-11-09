// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { useState } from "react";
import { HeartIconOutline } from "@/public/data/icons";
import { HeartIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
const notifyAdd = () => toast.success("Added to Wishlist.");
const notifyRemove = () => toast.error("Removed From Wishlist.");

const CabListingGridCard = ({ item }: any) => {
  const [favourite, setFavourite] = useState(false);
  const { id, img, price, title } = item;
  const handleFavorite = () => {
    setFavourite(!favourite);
    favourite ? notifyRemove() : notifyAdd();
  };
  return (
    <div key={id} className="col-span-12 md:col-span-6 group">
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
              className="swiper property-card-slider">
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
        <div className="p-3 md:p-5">
          <div className="flex justify-between items-center mb-2">
            <Link href="property-details-1" className="text-xl font-medium ">
              {title}
            </Link>
            <span className="flex gap-2 items-center">
              <i className="las la-star text-[var(--tertiary)]"></i>
              <span>4.5</span>
            </span>
          </div>
          <div className="columns-1 md:columns-2">
            <span className="flex items-center gap-2 pt-2">
              <i className="las la-user-friends text-2xl text-[#22804A]"></i> 8
              Peoples
            </span>
            <span className="flex items-center gap-2 pt-2">
              <i className="las la-gas-pump text-2xl text-[#22804A]"></i> Hybrid
            </span>
            <span className="flex items-center gap-2 pt-2">
              <i className="las la-tachometer-alt text-2xl text-[#22804A]"></i>
              6.1km/ 1 Litre
            </span>
            <span className="flex items-center gap-2 pt-2">
              <i className="las la-sync-alt text-2xl text-[#22804A]"></i>
              Automatic
            </span>
          </div>
        </div>
        <div className="property-card__body py-0 mx-5">
          <div className=" border-t border-dashed"></div>
        </div>
        <div className="px-3 md:px-5 pb-5 pt-3">
          <div className="flex flex-wrap justify-between items-center">
            <span className="text-primary text-xl font-medium">
              ${price}
              <span className="text-base text-neutral-700">/month</span>
            </span>
            <Link
              href="property-details-1"
              className="btn-outline  font-semibold">
              Rent Now
            </Link>
          </div>
        </div>
      </div>
      <Toaster position="top-right" />
    </div>
  );
};

export default CabListingGridCard;
