import SubHeadingBtn from "../SubHeadingBtn";
import service1 from "@/public/img/service-img-1.png";
import service2 from "@/public/img/service-img-2.png";
import service3 from "@/public/img/service-img-3.png";
import Image from "next/image";
import Link from "next/link";
const Services = () => {
  return (
    <section className="bg-[var(--bg-2)] py-[60px] lg:py-[120px]">
      <div className="container">
        <div className="max-w-[570px] mx-auto flex flex-col items-center text-center px-3">
          <SubHeadingBtn text="Services" classes="bg-[var(--primary-light)]" />
          <h2 className="h2 mt-3 leading-tight">See How Placewise Can Help</h2>
          <p className="text-neutral-600 pt-5 pb-8 lg:pb-14">
            Real estate can be bought, sold, leased, or rented, and can be a
            valuable investment opportunity. The value of real estate can be...
          </p>
        </div>
        <div className="grid grid-cols-12 gap-4 px-3 px-xl-0">
          <div className="col-span-12 md:col-span-6 xl:col-span-4 bg-white p-6 xl:p-8 rounded-2xl flex flex-col items-center text-center group hover:bg-primary duration-300">
            <Image src={service1} alt="service image" />
            <h3 className="mt-7 font-semibold text-3xl text-neutral-800 group-hover:text-white duration-300">
              Buy a property
            </h3>
            <p className="mt-3 px-4 mb-10 text-neutral-700 group-hover:text-white duration-300">
              Rent is a payment made by a tenant to a landlord or property owner
            </p>
            <Link
              href="#"
              className="btn-outline group-hover:bg-[var(--tertiary)] duration-300 group-hover:text-neutral-900">
              Find a home
            </Link>
          </div>
          <div className="col-span-12 md:col-span-6 xl:col-span-4 bg-white p-6 xl:p-8 rounded-2xl flex flex-col items-center text-center group hover:bg-primary duration-300">
            <Image src={service2} alt="service image" />
            <h3 className="mt-7 font-semibold text-3xl text-neutral-800 group-hover:text-white duration-300">
              Sell a property
            </h3>
            <p className="mt-3 px-4 mb-10 text-neutral-700 group-hover:text-white duration-300">
              Rent is a payment made by a tenant to a landlord or property owner
            </p>
            <Link
              href="#"
              className="btn-outline group-hover:bg-[var(--tertiary)] duration-300 group-hover:text-neutral-900">
              Place an ad
            </Link>
          </div>
          <div className="col-span-12 md:col-span-6 xl:col-span-4 bg-white p-6 xl:p-8 rounded-2xl flex flex-col items-center text-center group hover:bg-primary duration-300">
            <Image src={service3} alt="service image" />
            <h3 className="mt-7 font-semibold text-3xl text-neutral-800 group-hover:text-white duration-300">
              Rent a property
            </h3>
            <p className="mt-3 px-4 mb-10 text-neutral-700 group-hover:text-white duration-300">
              Rent is a payment made by a tenant to a landlord or property owner
            </p>
            <Link
              href="#"
              className="btn-outline group-hover:bg-[var(--tertiary)] duration-300 group-hover:text-neutral-900">
              Find a rental
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
