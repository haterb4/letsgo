import Image from "next/image";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import CounterElement from "../CounterElement";

const Counter = () => {
  return (
    <div className="pb-[60px] lg:pb-[120px] lg:pt-[60px] bg-white">
      <div className="container">
        <div className="grid grid-cols-12 gap-5 md:gap-0 justify-between">
          <div className="col-span-12 sm:col-span-6 md:col-span-3">
            <div className="text-center">
              <div className="w-24 h-24 grid place-content-center bg-[var(--primary-light)] rounded-full mx-auto">
                <Image
                  height={64}
                  width={64}
                  src="/img/icon-complete.png"
                  alt="image"
                  className="w-14 h-14 object-fit-contain"
                />
              </div>
              <span className="block mt-6 mb-2 text-2xl md:text-[40px] leading-[125%] font-semibold">
                <span className="counter-up" style={{ visibility: "visible" }}>
                  <CounterElement end={3.6} decimals={1} />
                </span>
                k+
              </span>
              <p className="mb-0 text-[var(--neutral-700)]"> Total Hotels </p>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-3">
            <div className="text-center">
              <div className="w-24 h-24 grid place-content-center bg-[var(--primary-light)] rounded-full mx-auto">
                <Image
                  height={64}
                  width={64}
                  src="/img/icon-happy-chat.png"
                  alt="image"
                  className="w-14 h-14 object-fit-contain"
                />
              </div>
              <span className="block mt-6 mb-2 text-2xl md:text-[40px] leading-[125%] font-semibold">
                <span className="counter-up" style={{ visibility: "visible" }}>
                  <CounterElement end={2.7} decimals={1} />
                </span>
                k+
              </span>
              <p className="mb-0 text-[var(--neutral-700)]">
                Customer Satisfaction
              </p>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-3">
            <div className="text-center">
              <div className="w-24 h-24 grid place-content-center bg-[var(--primary-light)] rounded-full mx-auto">
                <Image
                  height={64}
                  width={64}
                  src="/img/icon-agent.png"
                  alt="image"
                  className="w-14 h-14 object-fit-contain"
                />
              </div>
              <span className="block mt-6 mb-2 text-2xl md:text-[40px] leading-[125%] font-semibold">
                <span className="counter-up" style={{ visibility: "visible" }}>
                  <CounterElement end={457} />
                </span>
                +
              </span>
              <p className="mb-0 text-[var(--neutral-700)]"> Expert Agents </p>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-3">
            <div className="text-center">
              <div className="w-24 h-24 grid place-content-center bg-[var(--primary-light)] rounded-full mx-auto">
                <Image
                  height={64}
                  width={64}
                  src="/img/icon-award.png"
                  alt="image"
                  className="w-14 h-14 object-fit-contain"
                />
              </div>
              <span className="block mt-6 mb-2 text-2xl md:text-[40px] leading-[125%] font-semibold">
                <span className="counter-up" style={{ visibility: "visible" }}>
                  <CounterElement end={78} />
                </span>
                +
              </span>
              <p className="mb-0 text-[var(--neutral-700)]"> Awards Won </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
