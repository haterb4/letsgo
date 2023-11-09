"use client";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("../../../../components/LeafletMap"), {
  ssr: false,
});

const Page = () => {
  return (
    <div className="col-span-12">
      <Map />
    </div>
  );
};

export default Page;
