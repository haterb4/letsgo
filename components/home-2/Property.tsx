"use client";
import categoryEl from "@/public/img/category-section-el.png";
import Image from "next/image";
import SubHeadingBtn from "../SubHeadingBtn";
import { useState } from "react";
import { Tab } from "@headlessui/react";
import { featuredItems } from "@/public/data/featured";
import FeaturedCardHome2 from "./FeaturedCardHome2";
import Link from "next/link";
import { useAppSelector } from "@/app/store/hooks";
import { selectRenderingLanguage } from "@/app/store/features/language/languageSlice";
import homePageTextProvider, { ILanguageProvider } from "@/public/languages/pages/home";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Property = () => {
  const [categories, setCategories] = useState(featuredItems);
  const pageLanguage = useAppSelector(selectRenderingLanguage)
  const featuredListedTripSection = (
    homePageTextProvider[pageLanguage] as ILanguageProvider
  ).express as ILanguageProvider
  
  return (
    <section className="bg-[var(--bg-2)] py-[60px] lg:py-[120px] relative">
      <Image
        className="absolute hidden lg:block top-12 right-12"
        src={categoryEl}
        alt="img"
      />
      <div className="container">
        <div className="max-w-[570px] mx-auto flex flex-col items-center text-center">
          <SubHeadingBtn text={featuredListedTripSection.section as string} classes="bg-white" />
          <h2 className="h2 mt-3 leading-tight">{featuredListedTripSection.title as string}</h2>
          <p className="text-neutral-600 pt-5 pb-8 lg:pb-14">
          {featuredListedTripSection.slogan as string}
          </p>
        </div>
        <div className="">
          <Tab.Group>
            <div className="flex justify-between flex-wrap items-center mb-6 gap-4 px-3">
              <Tab.List className="flex gap-3 flex-wrap">
                {Object.keys(categories).map((category) => (
                  <Tab
                    key={category}
                    className={({ selected }) =>
                      classNames(
                        "rounded-full px-7 py-4 leading-5 duration-300 font-semibold",
                        selected
                          ? "bg-primary shadow text-white outline-none"
                          : "text-neutral-600 hover:bg-secondary bg-[var(--primary-light)] hover:text-white"
                      )
                    }>
                    {category}
                  </Tab>
                ))}
              </Tab.List>
              <Link href="#" className="btn-outline  flex items-center gap-2">
                View All
                <i className="las la-long-arrow-alt-right text-2xl"></i>
              </Link>
            </div>
            <Tab.Panels className="mt-2">
              {Object.values(categories).map((posts, idx) => (
                <Tab.Panel key={idx} className="grid grid-cols-12 gap-6">
                  {posts.map((post) => (
                    <FeaturedCardHome2 key={post.id} item={post} />
                  ))}
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
          <div className="flex justify-center mt-10">
            <Link
              href="#"
              className="btn-primary flex items-center gap-2 font-medium">
              <i className="las la-hourglass-start text-2xl"></i> {featuredListedTripSection.seeAll as string}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Property;
