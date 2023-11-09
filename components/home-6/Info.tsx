import Image from "next/image";
import SubHeadingBtn from "../SubHeadingBtn";

const Info = () => {
  return (
    <div className="py-[60px] lg:py-[120px] px-3 xl:px-0">
      <div className="container">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 lg:col-span-1">
            <SubHeadingBtn
              text="Air, Sleep, Dream"
              classes="bg-[var(--primary-light)]"
            />
            <h2 className="h2 mt-4 mb-6">Whatever you can get from us</h2>
            <p className="mb-14">
              If you&apos;re looking to book a flight, there are many online
              travel agencies and airline websites that offer flight booking
              services.
            </p>
            <ul className="list">
              <li className="flex gap-4">
                <div className="grid place-content-center shrink-0 w-12 h-12 rounded-full bg-primary mb-6 text-lg font-semibold text-white">
                  01
                </div>
                <div>
                  <h4 className="text-2xl font-semibold mb-3">
                    Find flight bookings that suit a flexible itinerary
                  </h4>
                  <p className="mb-0">
                    Our airline offers a variety of flights with flexible
                    scheduling options, making it easy for you to plan your trip
                    around your schedule
                  </p>
                </div>
              </li>
              <li>
                <div className="border-dashed border my-8"></div>
              </li>
              <li className="flex gap-4">
                <div className="grid place-content-center shrink-0 w-12 h-12 rounded-full bg-[var(--secondary)] mb-6 text-lg font-semibold text-white">
                  02
                </div>
                <div>
                  <h4 className="text-2xl font-semibold mb-3">
                    Flight Booking with more confidence
                  </h4>
                  <p className="mb-0">
                    When it comes to booking your next flight, it&apos;s
                    important to feel confident in your decision.
                  </p>
                </div>
              </li>
              <li>
                <div className="border-dashed border my-8"></div>
              </li>
              <li className="flex gap-4">
                <div className="grid place-content-center shrink-0 w-12 h-12 rounded-full bg-[var(--tertiary)] mb-6 text-lg font-semibold text-white">
                  03
                </div>
                <div>
                  <h4 className="text-2xl font-semibold mb-3">
                    See what are the benefits of flight booking
                  </h4>
                  <p className="mb-0">
                    Booking your flights in advance has many benefits that can
                    make your travel experience smoother and more enjoyable.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-span-2 lg:col-span-1 flex justify-end items-center">
            <Image
              width={526}
              height={602}
              src="/img/info-img.png"
              alt="image"
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
