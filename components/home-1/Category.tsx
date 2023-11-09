import Image from "next/image";
import categoryEl from "@/public/img/category-section-el.png";
import SubHeadingBtn from "../SubHeadingBtn";
import { categoryData } from "@/public/data/category";
import Link from "next/link";
import { ArrowUpRight } from "@/public/data/icons";

const Category = () => {
  return (
    <section className="bg-white py-[60px] lg:py-[120px] relative px-3">
      <Image
        className="absolute hidden lg:block top-12 left-12"
        src={categoryEl}
        alt="img"
      />
      <div className="container">
        <div className="max-w-[570px] mx-auto flex flex-col items-center text-center">
          <SubHeadingBtn text="Category" classes="bg-[var(--primary-light)]" />
          <h2 className="h2 mt-3">Choose Our Category</h2>
          <p className="text-neutral-600 pt-5 pb-8 lg:pb-14">
            Real estate can be bought, sold, leased, or rented, and can be a
            valuable investment opportunity. The value of real estate can be...
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {categoryData.map(({ id, desc, icon, title, color }) => (
            <div
              key={id}
              className="border rounded-xl max-w-[306px] cursor-pointer group duration-300">
              <div className="p-8 bg-white group-hover:bg-primary rounded-t-xl group-hover:text-white duration-300">
                <i
                  className={`${icon} text-7xl group-hover:text-white duration-300 ${
                    color == "blue" && "text-primary"
                  } ${color == "green" && "text-[#22814B]"} ${
                    color == "brown" && "text-[#9C742B]"
                  }`}></i>
                <h4 className="font-semibold text-xl pt-2 pb-3 text-neutral-700 group-hover:text-white">
                  {title}
                </h4>
                <p>{desc}</p>
              </div>
              <div className="bg-[var(--bg-1)] p-8 rounded-b-xl group-hover:bg-[#212391] group-hover:text-white duration-300">
                <Link href="#">
                  Read More <i className="las la-arrow-right"></i>
                </Link>
              </div>
            </div>
          ))}
          <div className="flex justify-center items-center relative">
            <div className="w-[290px] h-[290px] rounded-full bg-[#ADEDC8] flex items-center justify-center p-5 cursor-pointer relative overflow-hidden">
              <div className="text-center">
                <h2 className="h2 mb-2">25+</h2>
                <p>
                  Explore Properties and <br /> Invest with Confidence
                </p>
                <Link
                  href="#"
                  className="rounded-full bg-white mt-4 p-6 inline-block text-black">
                  <ArrowUpRight />
                </Link>
              </div>
              <div className="h-[197px] w-[197px] rounded-full absolute -right-20 -bottom-16 bg-[#72E0A0]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
