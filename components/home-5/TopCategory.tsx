import Image from "next/image";
import Link from "next/link";
import SubHeadingBtn from "../SubHeadingBtn";
import { topcategories } from "@/public/data/topCategory";

const TopCategory = () => {
  return (
    <section className="bg-white">
      <div className="max-w-[1578px] bg-[var(--bg-1)] rounded-2xl mx-auto px-3 px-lg-0">
        <div className="container py-[60px] lg:py-[120px] ">
          <div className="flex flex-col items-center justify-center text-center mb-8 lg:mb-12">
            <SubHeadingBtn
              text="Top Categories"
              classes="bg-[var(--primary-light)]"
            />
            <h2 className="h2 mt-4 mb-0"> Discover the categories of tours </h2>
          </div>
          <div className="container">
            <div className="grid grid-cols-12 gap-4 lg:gap-6">
              {topcategories.map(({ id, img, places, title }) => (
                <div
                  key={id}
                  className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-2">
                  <Link href="tour-listing-grid" className="link block">
                    <Image
                      width={196}
                      height={196}
                      src={img}
                      alt="image"
                      className="w-full rounded-xl"
                    />
                  </Link>
                  <h4 className="mt-6 mb-2 text-center">
                    <Link
                      href="tour-listing-grid"
                      className="inline-block text-2xl font-semibold hover:text-primary">
                      {title}
                    </Link>
                  </h4>
                  <p className="mb-0 text-center">{places}k Places</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopCategory;
