"use client"
import Image from "next/image";
import Link from "next/link";
import SubHeadingBtn from "../SubHeadingBtn";
import { facilities } from "@/public/data/facilities";
import { useAppSelector } from "@/app/store/hooks";
import { selectRenderingLanguage } from "@/app/store/features/language/languageSlice";
import homePageTextProvider, { ILanguageKey, ILanguageProvider } from "@/public/languages/pages/home";

const Facilities = () => {
  const pageLanguage = useAppSelector(selectRenderingLanguage)
  const facilitiesSection = (
    homePageTextProvider[pageLanguage] as ILanguageProvider
  ).facilities as ILanguageProvider
  return (
    <div className="bg-white py-[60px] lg:py-[120px] px-3">
      <div className="container">
        <div className="max-w-[630px] mx-auto flex flex-col items-center text-center">
          <SubHeadingBtn text={facilitiesSection.section as string} classes="bg-white" />
          <h2 className="h2 mt-3 leading-tight">
          {facilitiesSection.title as string}
          </h2>
          <p className="text-neutral-600 pt-5 pb-8 lg:pb-14">
            {facilitiesSection.slogan as string}
          </p>
        </div>
        <div className="grid grid-cols-12 gap-4 lg:gap-6">
          {facilities.map(({ id, content, imgSrc }: {id: number; content: ILanguageProvider; imgSrc: string}, index) => {
            const facilitie = content[pageLanguage] as ILanguageProvider
            return(
              <div key={id} className="col-span-12 md:col-span-4 xl:col-span-3">
                <div className="rounded-2xl p-6 xl:p-8 text-center hover:shadow-[rgba(149,157,165,0.2)_0px_8px_24px] duration-300">
                  <Image
                    height={60}
                    width={60}
                    src={imgSrc}
                    alt="image"
                    className=" mx-auto mb-6"
                  />
                  <h4 className="mb-4 text-2xl font-semibold">{facilitie.title as string}</h4>
                  <p className="mb-0">{facilitie.description as string}</p>
                </div>
              </div>
            )}
          )}
        </div>
      </div>
      <div className="mt-8 lg:mt-14 text-center">
        <Link href="flight-list" className="btn-outline  text-primary">
        {facilitiesSection.seeAll as string}
        </Link>
      </div>
    </div>
  );
};

export default Facilities;
