"use client";
import CardPagination from "@/components/CardPagination";
import DriverListingCard from "@/components/DriverListingCard";
import { featuredDrivers } from "@/public/data/featuredhotel";

const Page = () => {
  return (
    <>
      {featuredDrivers.map((item) => (
        <DriverListingCard key={item.id} item={item} />
      ))}
      <CardPagination />
    </>
  );
};

export default Page;
