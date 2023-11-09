import SubHeadingBtn from "../SubHeadingBtn";

const HowItWork = () => {
  return (
    <section className="bg-white py-[60px] lg:py-[120px] px-3 xl:px-0">
      <div className="container">
        <div className="max-w-[570px] mx-auto flex flex-col items-center text-center">
          <SubHeadingBtn
            text="Working Process"
            classes="bg-[var(--primary-light)]"
          />
          <h2 className="h2 mt-3 ">How Its Work</h2>
          <p className="text-neutral-600 pt-5 pb-8 lg:pb-14">
            Real estate can be bought, sold, leased, or rented, and can be a
            valuable investment opportunity. The value of real estate can be...
          </p>
        </div>
        <div className="grid grid-cols-12 gap-4 lg:gap-6">
          <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-[var(--bg-1)] p-6 lg:p-8 rounded-2xl text-center flex flex-col items-center">
            <div className="relative mb-4 lg:mb-6">
              <i className="las la-map-marker-alt bg-[#585BF0] text-white p-6 text-5xl rounded-full"></i>
            </div>
            <h4 className="text-[32px] leading-[38px] font-semibold mb-3">
              Choose Location
            </h4>
            <p>
              Rent-A-Car, we pride ourselves on providing excellent customer
              service and reliable
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-[var(--bg-1)] p-6 lg:p-8 rounded-2xl text-center flex flex-col items-center">
            <div className="relative mb-4 lg:mb-6">
              <i className="las la-calendar-alt bg-[#585BF0] text-white p-6 text-5xl rounded-full"></i>
            </div>
            <h4 className="text-[32px] leading-[38px] font-semibold mb-3">
              Pick-Up Date
            </h4>
            <p>
              Rent-A-Car, we pride ourselves on providing excellent customer
              service and reliable
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-[var(--bg-1)] p-6 lg:p-8 rounded-2xl text-center flex flex-col items-center">
            <div className="relative mb-4 lg:mb-6">
              <i className="las la-car-side bg-[#585BF0] text-white p-6 text-5xl rounded-full"></i>
            </div>
            <h4 className="text-[32px] leading-[38px] font-semibold mb-3">
              Book Your Car
            </h4>
            <p>
              Rent-A-Car, we pride ourselves on providing excellent customer
              service and reliable
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
