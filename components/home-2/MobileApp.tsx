"use client"

import googlePlay from "@/public/img/playstore-btn.png";
import appStore from "@/public/img/appstore-btn.png";
import SubHeadingBtn from "../SubHeadingBtn";
import Image from "next/image";
import Link from "next/link";
import { selectRenderingLanguage } from "@/app/store/features/language/languageSlice";
import homePageTextProvider, { ILanguageProvider } from "@/public/languages/pages/home";
import { useAppSelector } from "@/app/store/hooks";

const MobileApp = () => {
  const pageLanguage = useAppSelector(selectRenderingLanguage)
  const mobileAppSection = (
    homePageTextProvider[pageLanguage] as ILanguageProvider
  ).mobileApp as ILanguageProvider
  return (
    <section className="bg-white p-3">
      <div className="container relative drop-shadow-lg shadow bg-white rounded-2xl py-[60px] lg:py-[120px] lg:after:bg-[url('/img/mobile/mobile-app.png')] after:bg-right after:bg-cover after:bg-no-repeat after:absolute after:h-full after:w-[42%] after:top-0 after:-right-32 after:rounded-r-3xl after:rounded-[50%] after:scale-[1.2] overflow-hidden">
        <div className="grid grid-cols-2">
          <div className="col-span-2 lg:col-span-1 pl-4 md:pl-10 lg:pl-20 xl:pl-28">
            <SubHeadingBtn
              text="Mobile App"
              classes="bg-[var(--primary-light)]"
            />
            <h2 className="h2 mt-3">{mobileAppSection.title as string}</h2>
            <p className="text-neutral-600 pt-5 pb-8 lg:pb-14">
              {mobileAppSection.description as string}
            </p>
            <div className="flex flex-wrap gap-6">
              <Link
                href="#"
                className="inline-block py-3 px-4 rounded-md bg-[var(--tertiary)]">
                <Image src={googlePlay} alt="img" />
              </Link>
              <Link
                href="#"
                className="inline-block py-3 px-4 rounded-md bg-[var(--secondary)]">
                <Image src={appStore} alt="img" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;
