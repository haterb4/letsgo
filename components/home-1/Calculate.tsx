import SubHeadingBtn from "../SubHeadingBtn";
import Link from "next/link";

const Calculate = () => {
  return (
    <section className="relative bg-white pt-[60px] lg:py-[120px]">
      <div className="lg:bg-[url('/img/calculate-section-bg.png')] bg-no-repeat bg-[contain] bg-right-bottom">
        <div className="container">
          <div className="grid grid-cols-12 items-center gap-6">
            <div className="col-span-12 lg:col-span-6 flex items-center h-full">
              <div className="lg:py-[70px] px-3 xl:px-0">
                <SubHeadingBtn
                  text="Calculate"
                  classes="bg-[var(--primary-light)]"
                />
                <h2 className="h2 xl:pr-8 mt-4 mb-6 leading-snug">
                  Calculate the cost of your property
                </h2>
                <p>
                  Are you curious about the current market value of your
                  property? Our innovative online tool can help! With just a few
                  clicks, you can get an instant
                </p>
                <div className="max-w-max mt-8">
                  <Link
                    href="#"
                    className="btn-primary flex items-center gap-2 justify-start">
                    <i className="las la-calculator"></i> Calculate
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              {/* <Image className="object-contain" src={calculateBg} alt="img" /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculate;
