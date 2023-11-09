"use client";
import { featuredItems } from "@/public/data/featured";
import PropertyListCard from "@/components/PropertyListCard";
import CardPagination from "@/components/CardPagination";

const Page = () => {
  return (
    <>
      {featuredItems.Bafoussam.map((item) => (
        <PropertyListCard item={item} key={item.id} />
      ))}

      <CardPagination />
    </>
  );
};

export default Page;
