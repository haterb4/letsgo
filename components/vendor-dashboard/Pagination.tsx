import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const Pagination = () => {
  return (
    <div className="flex justify-between items-center gap-3 pt-5 lg:pt-7 flex-wrap">
      <span>Showing 1 to 7 of 20 entries</span>
      <ul className="flex gap-2 flex-wrap">
        <li className="border border-primary w-10 h-10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white duration-300">
          <Link href="#">
            <ChevronLeftIcon className="w-5 h-5" />
          </Link>
        </li>
        <li className="border bg-primary text-white border-primary w-10 h-10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white duration-300">
          <Link href="#">1</Link>
        </li>
        <li className="border border-primary w-10 h-10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white duration-300">
          <Link href="#">2</Link>
        </li>
        <li className="border border-primary w-10 h-10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white duration-300">
          <Link href="#">3</Link>
        </li>
        <li className="border border-primary w-10 h-10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white duration-300">
          <Link href="#">...</Link>
        </li>
        <li className="border border-primary bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white duration-300">
          <Link href="#">
            <ChevronRightIcon className="w-5 h-5" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
