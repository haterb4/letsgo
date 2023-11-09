import Link from "next/link";
import ctabg2 from "@/public/img/cta-bg-2.png";
import Image from "next/image";
const StartListing = () => {
  return (
    <section className="bg-[#EAFBF1] px-3 xl:px-0">
      <div className="container">
        <div className="grid grid-cols-2">
          <div className="col-span-2 lg:col-span-1  py-[60px] lg:py-[120px] flex items-center">
            <div>
              <h2 className="h2 mb-4 leading-tight">
                Start Listing Or Buying A Property With Placewise
              </h2>
              <p className="mb-8">
                Talk to our experts or Browse through more properties.
              </p>
              <div className="max-w-max">
                <Link className="btn-tertiary" href="#">
                  Get Started{" "}
                  <i className="las la-long-arrow-alt-right text-xl"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1 flex justify-end">
            <Image className="w-full" src={ctabg2} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartListing;
