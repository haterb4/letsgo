"use client";
import Accordion from "@/components/home-1/Accordion";
import { faqs } from "@/public/data/faq";
import { Tab, Transition } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
import AnimateHeight from "react-animate-height";
function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const Page = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [opened, setOpened] = useState<number | null>(1);
  return (
    <div className="py-[60px] lg:py-[120px] bg-white px-3">
      <div className="container">
        <Tab.Group selectedIndex={tabIndex} onChange={setTabIndex}>
          <div className="grid grid-cols-12 gap-4 justify-content-xxl-between">
            <div className="col-span-12 lg:col-span-4 xxl:col-span-3">
              <div className="bg-[var(--bg-2)] rounded-2xl p-3 md:p-6 mb-6">
                <Tab.List>
                  {[
                    "01. Family House",
                    "02. Town House",
                    "03. Single Family",
                    "04. Modern Studio",
                    "05. Office",
                    "06. Apartment",
                  ].map((item) => (
                    <Tab
                      key={item}
                      className={({ selected }) =>
                        classNames(
                          "focus:outline-none flex gap-2 items-center font-medium py-3 px-5",
                          selected
                            ? "text-white bg-primary font-medium rounded-full w-full"
                            : ""
                        )
                      }>
                      {item}
                    </Tab>
                  ))}
                </Tab.List>
              </div>
              <div className="px-6 py-10 rounded-2xl faq-banner overflow-hidden relative isolate bg-[url('/img/faq-banner-img.jpg')] bg-cover bg-center bg-no-repeat after:absolute after:inset-0 after:bg-gradient-to-b after:from-[rgba(38,41,166,.4)] after:via-[rgba(38,41,166,.8)] after:to-[#2629a6] after:transform after:rotate-180  after:-translate-y-0 after:scale-x-1 after:scale-y--1 after:z-[-1] after:translate-x-0">
                <h4 className="mb-10 text-2xl font-semibold text-white">
                  Find Your Dream Property - Contact Us
                </h4>
                <Link
                  href="#"
                  className="link py-3 px-6 bg-white rounded-full font-semibold text-primary">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-8 flex flex-col content-end">
              <Tab.Panels className="tab-content">
                {[0, 1, 2, 3, 4, 5].map((item) => (
                  <Tab.Panel key={item}>
                    <Transition
                      enter="transition-opacity duration-75"
                      enterFrom="opacity-0"
                      show={tabIndex == item}
                      enterTo="opacity-100"
                      leave="transition-opacity duration-150"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0">
                      <div className="flex flex-col gap-4">
                        {faqs.map(({ id, ans, question }) => (
                          <div
                            key={id}
                            className="bg-[var(--secondary-light)] rounded-xl md:rounded-2xl lg:rounded-[30px] p-3 sm:p-5 md:p-6 lg:px-10">
                            <button
                              className="text-lg select-none md:text-xl w-full font-medium flex items-center text-left justify-between"
                              onClick={() =>
                                setOpened((prev) => (prev == id ? null : id))
                              }>
                              {question}{" "}
                              <span
                                className={`p-1 bg-[#22814B] duration-300 text-white rounded-full ${
                                  opened === id ? "rotate-180" : ""
                                }`}>
                                {id === opened ? (
                                  <MinusIcon className="w-5 md:w-6 h-5 md:h-6" />
                                ) : (
                                  <PlusIcon className="w-5 md:w-6 h-5 md:h-6" />
                                )}
                              </span>
                            </button>
                            <AnimateHeight
                              duration={300}
                              height={opened == id ? "auto" : 0}>
                              <p className="border-t border-dash-long pt-4 mt-4">
                                {ans}
                              </p>
                            </AnimateHeight>
                          </div>
                        ))}
                      </div>
                    </Transition>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </div>
          </div>
        </Tab.Group>
      </div>
    </div>
  );
};

export default Page;
