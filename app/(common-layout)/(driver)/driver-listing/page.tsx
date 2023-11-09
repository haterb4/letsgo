"use client";
import CardPagination from "@/components/CardPagination";
import HotelListingList from "@/components/HotelListingList";
import { featuredHotels } from "@/public/data/featuredhotel";
import { Tooltip } from "react-tooltip";

const Page = () => {
  const tooltipStyle = {
    backgroundColor: "#3539E9",
    color: "#fff",
    borderRadius: "10px",
  };
  return (
    <>
      {featuredHotels.map((item) => (
        <HotelListingList key={item.id} item={item} />
      ))}

      <CardPagination />

      <Tooltip
        id="parking"
        style={tooltipStyle}
        offset={10}
        content="Parking"
      />
      <Tooltip
        id="restaurent"
        style={tooltipStyle}
        offset={10}
        content="Restaurent"
      />
      <Tooltip
        id="room"
        style={tooltipStyle}
        offset={10}
        content="Room Service"
      />
      <Tooltip
        id="fitness"
        style={tooltipStyle}
        offset={10}
        content="Fitness"
      />
      <Tooltip
        id="swimming"
        style={tooltipStyle}
        offset={10}
        content="Swimming"
      />
      <Tooltip
        id="laundry"
        style={tooltipStyle}
        offset={10}
        content="Laundry"
      />
      <Tooltip
        id="free"
        style={tooltipStyle}
        offset={10}
        content="Free Internet"
      />
    </>
  );
};

export default Page;
