import Link from "next/link";
import SubHeadingBtn from "../SubHeadingBtn";
import { featuredCars } from "@/public/data/featuredCar";
import FeaturedCardHome3 from "./FeaturedCardHome3";

const Featured = () => {
  return (
    <section className="py-[60px] lg:py-[120px]">
      <div className="container">
        <div className="max-w-[570px] mx-auto flex flex-col items-center text-center px-3">
          <SubHeadingBtn text="Featured Cars" classes="bg-white" />
          <h2 className="h2 mt-3 leading-tight">
            Affordable Car Rentals for Any Occasion
          </h2>
          <p className="text-neutral-600 pt-5 pb-8 lg:pb-14">
            Real estate can be bought, sold, leased, or rented, and can be a
            valuable investment opportunity. The value of real estate can be...
          </p>
        </div>

        <div className="grid grid-cols-12 gap-4 xl:gap-6">
          {featuredCars.map((item) => (
            <FeaturedCardHome3 key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <Link href="cab-listing" className="btn-outline  text-primary">
          See All Cars
        </Link>
      </div>
    </section>
  );
};

export default Featured;
