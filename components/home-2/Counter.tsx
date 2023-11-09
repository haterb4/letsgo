"use client";
import counterel from "@/public/img/counter-el.png";
import Image from "next/image";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import CounterElement from "../CounterElement";

const Counter = () => {
  return (
    <section className="py-[60px] lg:py-[120px] bg-[#04052F] relative">
      <Image
        src={counterel}
        className="absolute hidden lg:block bottom-0 left-0"
        alt="el"
      />
      <div className="container">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-6 lg:col-span-4 text-white text-center">
            <div className="text-4xl rounded-full mb-4 bg-primary w-20 h-20 flex items-center justify-center mx-auto">
              <i className="las la-check-square"></i>
            </div>
            <h2 className="h2 text-white mb-2">
              <CounterElement end={15} />k
            </h2>
            <span>Completed Trips</span>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 text-white text-center">
            <div className="text-4xl rounded-full mb-4 bg-[var(--secondary)] w-20 h-20 flex items-center justify-center mx-auto">
              <i className="las la-thumbs-up"></i>
            </div>
            <h2 className="h2 text-white mb-2">
              <CounterElement end={14} />k
            </h2>
            <span>Customer Satisfaction</span>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3 text-white text-center">
            <div className="text-4xl rounded-full mb-4 bg-[var(--tertiary)] w-20 h-20 flex items-center justify-center mx-auto">
              <i className="las la-user-circle"></i>
            </div>
            <h2 className="h2 text-white mb-2">
              <CounterElement end={457} />+
            </h2>
            <span>Users</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
