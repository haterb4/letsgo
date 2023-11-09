"use client";
import faq1 from "@/public/img/faq-el-1.png";
import faq2 from "@/public/img/faq-el-2.png";
import Image from "next/image";
import SubHeadingBtn from "../SubHeadingBtn";
import { faqs } from "@/public/data/faq";
import { useState } from "react";
import AnimateHeight from "react-animate-height";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

const Faq = () => {
  const [opened, setOpened] = useState<number | null>(1);
  return (
    <section className="relative bg-white py-[60px] lg:py-[120px]">
      <Image
        src={faq1}
        className="hidden lg:block absolute top-10 right-10"
        alt="faq el"
      />
      <Image
        src={faq2}
        className="hidden lg:block absolute bottom-0 left-0"
        alt="faq el"
      />
      <div className="container">
        <div className="max-w-[570px] mx-auto flex flex-col items-center text-center px-3">
          <SubHeadingBtn text="FAQs" classes="bg-[var(--primary-light)]" />
          <h2 className="h2 mt-3 leading-snug">
            If you have any questions, we have the answers
          </h2>
          <p className="text-neutral-600 pt-5 pb-8 lg:pb-14">
            Real estate can be bought, sold, leased, or rented, and can be a
            valuable investment opportunity. The value of real estate can be
          </p>
        </div>
        <div className="max-w-[856px] flex flex-col gap-4 lg:gap-6 mx-auto px-3 xl:px-0">
          {faqs.map(({ id, ans, question }) => (
            <div
              key={id}
              onClick={() => setOpened((prev) => (prev == id ? null : id))}
              className="bg-[var(--secondary-light)] rounded-xl md:rounded-2xl lg:rounded-[30px] p-3 sm:p-5 md:p-6 lg:px-10 cursor-pointer">
              <button className="text-lg select-none md:text-xl w-full font-medium flex items-center text-left justify-between">
                {question}{" "}
                <span
                  className={`p-1 bg-[#22814B] duration-300 text-white rounded-full ${
                    opened === id ? "rotate-180" : ""
                  }`}>
                  {id === opened ? (
                    <MinusIcon className="w-6 h-6" />
                  ) : (
                    <PlusIcon className="w-6 h-6" />
                  )}
                </span>
              </button>
              <AnimateHeight duration={300} height={opened == id ? "auto" : 0}>
                <p className="border-t border-dash-long pt-4 mt-4">{ans}</p>
              </AnimateHeight>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
