"use client";
import { featuredItems } from "@/public/data/featured";
import FeaturedCardPropertyList from "@/components/FeaturedCardPropertyList";
import CardPagination from "@/components/CardPagination";

const page = () => {
  return (
    <>
      {featuredItems["Bafoussam"].map((item) => (
        <FeaturedCardPropertyList item={item} key={item.id} />
      ))}
      <CardPagination />
    </>
  );
};

export default page;
