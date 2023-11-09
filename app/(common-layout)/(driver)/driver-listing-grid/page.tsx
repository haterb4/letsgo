"use client";
import CardPagination from "@/components/CardPagination";
import HotelListingCard from "@/components/HotelListingCard";
import { featuredHotels } from "@/public/data/featuredhotel";

const Page = () => {
  return (
    <>
      {featuredHotels.map((item) => (
        <HotelListingCard key={item.id} item={item} />
      ))}
      <CardPagination />
    </>
  );
};

export default Page;
