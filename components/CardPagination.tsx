import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const CardPagination = () => {
  return (
    <div className="col-span-12">
      <nav>
        <ul className="flex gap-3 justify-center">
          <li className="page-item">
            <Link
              className="page-link p-0 w-10 h-10 grid place-content-center lh-1 rounded-full border border-[var(--primary)] text-primary"
              href="#">
              <ChevronLeftIcon className="w-5 h-5" />
            </Link>
          </li>
          <li className="page-item">
            <Link
              className="page-link p-0 w-10 h-10 grid place-content-center lh-1 rounded-full border border-[var(--primary)] bg-primary text-white"
              href="#">
              1
            </Link>
          </li>
          <li className="page-item">
            <Link
              className="page-link p-0 w-10 h-10 grid place-content-center lh-1 rounded-full border border-[var(--primary)] text-primary"
              href="#">
              2
            </Link>
          </li>
          <li className="page-item">
            <Link
              className="page-link p-0 w-10 h-10 grid place-content-center lh-1 rounded-full border border-[var(--primary)] text-primary"
              href="#">
              3
            </Link>
          </li>
          <li className="page-item">
            <Link
              className="page-link p-0 w-10 h-10 grid place-content-center lh-1 rounded-full border border-[var(--primary)] text-primary"
              href="#">
              <ChevronRightIcon className="w-5 h-5" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default CardPagination;
