import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Tooltip } from "react-tooltip";
import SubHeadingBtn from "../SubHeadingBtn";
import { featuredHotels } from "@/public/data/featuredhotel";
import FeaturedCard from "./FeaturedCard";

const Featured = () => {
  const [data, setData] = useState(featuredHotels);
  const toggleFavourite = (id: number) => {
    setData(
      data.map((item) =>
        item.id == id ? { ...item, favourite: !item.favourite } : item
      )
    );
  };

  return (
    <div className="py-[60px] lg:py-[120px]">
      <div className="px-3">
        <div className="container">
          <div className="flex justify-between items-center gap-3 flex-wrap mb-8 lg:mb-12">
            <div>
              <SubHeadingBtn text="Featured Hotel" classes="bg-white" />
              <h2 className="h2 mb-0 mt-3 max-w-[700px] leading-tight">
                Exploring the Top Hotel Facilities and Amenities
              </h2>
            </div>

            <Link href="/hotel-listing" className="btn-outline  font-semibold">
              See All Hotel
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="grid grid-cols-12 gap-4 lg:gap-6">
          {data.map((item) => (
            <FeaturedCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
