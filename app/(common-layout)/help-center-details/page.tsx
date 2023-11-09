import {
  ArrowDownTrayIcon,
  HandThumbDownIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <header className="text-white text-center py-[60px] px-3 lg:py-[120px] bg-[var(--dark)]">
        <h1 className="h1 font-semibold mb-7 lg:mb-10">How Can We Help You?</h1>
        <form className="max-w-[526px] mx-auto bg-white rounded-[30px] flex justify-between  p-2 mb-7 lg:mb-10">
          <input
            type="text"
            className="w-full focus:outline-none rounded-[30px] px-3 text-black"
            placeholder="Search Question"
          />
          <button type="submit" className="btn-primary">
            Search
          </button>
        </form>
        <div className="max-w-[680px] mx-auto text-center justify-center gap-3 flex flex-wrap">
          <Link href="#">How Can We Help?</Link>
          <Link href="#">How to upload data to the system?</Link>
          <Link href="#">Installation Guide?</Link>
          <Link href="#">How to view expired tickets?</Link>
          <Link href="#">View All Question</Link>
        </div>
      </header>
      <div className="bg-[var(--bg-2)] relative before:absolute before:w-full before:h-[150px] before:top-0 before:left-0 before:bg-[var(--dark)]">
        <div className="max-w-[1076px] mx-auto px-3 relative z-[1]">
          <div className="rounded-2xl bg-white p-4 md:p-6 lg:p-8 shadow-lg mb-6">
            <h3 className="h3 mb-3">Get Started HTML</h3>
            <ul className="flex gap-3 list-inside marker:text-primary list-disc flex-wrap">
              <li>Last Updated : 7 months ago</li>
              <li>by : Ethan Thompson </li>
            </ul>
            <div className="border-t border-dashed my-5"></div>
            <p className="mb-7 lg:mb-10">
              Start by learning the basic structure and syntax of HTML. HTML
              stands for HyperText Markup Language and is used to create the
              structure of web pages. You can find plenty of resources online
              that provide an introduction to HTML and cover its basic concepts.
            </p>
            <button className="btn-primary font-semibold">
              <ArrowDownTrayIcon className="w-5 h-5" />
              Download HTML
            </button>
          </div>
          <div className="rounded-2xl bg-white p-4 md:p-6 lg:p-8 shadow-lg mb-[30px] lg:mb-[60px]">
            <h3 className="h3 mb-3">Table of Contents</h3>
            <p>Age she way earnestly the fulfilled extremely.</p>
            <p className="my-4 rounded-lg bg-[var(--bg-2)] p-4">
              <span className="text-primary font-medium">Note:</span> She
              offices for highest and replied one venture pasture. Applauded no
              discovery in newspaper allowance am northward.
            </p>
            <p>
              Set up your development environment: You will need a text editor
              to create your HTML files. Many text editors are available, such
              as Sublime Text, Visual Studio Code, or Notepad++. Choose the one
              that works best for you and install it on your computer.
            </p>
            <div className="border-t border-dashed my-5"></div>
            <ul className="list-inside list-disc marker:text-primary mb-4 flex flex-col gap-3">
              <li>
                Affronting imprudence do he he everything. Sex lasted dinner
                wanted indeed wished. Far advanced settling say finished .
              </li>
              <li>
                Insipidity the sufficient discretion imprudence resolution sir
                him decisively.
              </li>
              <li>
                Offered chiefly farther of my no colonel shyness. Such on help
                ye some door if in.
              </li>
              <li>
                First am plate jokes to began to cause a scale. Subjects he
                prospect elegance followed
              </li>
            </ul>
            <div className="border rounded-2xl flex-wrap gap-4 px-5 py-4 flex justify-between items-center">
              <h5 className="text-xl font-semibold">
                Was this article helpful?
              </h5>
              <span>16 out of 32 found this helpful</span>
              <div className="border rounded-3xl p-3 flex gap-3 items-center">
                <button className="flex items-center gap-2">
                  <HandThumbUpIcon className="w-5 h-5" />
                  Yes
                </button>
                |
                <button className="flex items-center gap-2">
                  No
                  <HandThumbDownIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
