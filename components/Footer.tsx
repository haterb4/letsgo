import { PaperPlane } from "@/public/data/icons";
import logolight from "@/public/img/logos/logo1.png";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-[#091E43]">
      <div className="py-[60px] lg:py-[120px]">
        <div className="container">
          <div className="grid grid-cols-12 gap-6 text-white px-3 xl:px-0">
            <div className="col-span-12 md:col-span-6 xl:col-span-3">
              <Link href="/" className="inline-block mb-6">
                <Image src={logolight} alt="image" className="" />
              </Link>
              <p className="clr-neutral-30 mb-6">
                Real estate can be bought, sold, leased, or rented, and can be a
                valuable investment opportunity. The value of real estate can
                be...
              </p>
              <ul className="flex gap-3 flex-wrap">
                <li>
                  <Link
                    href="#"
                    className="border border-[#3538ED] duration-300 hover:bg-[#3538ED] grid place-content-center p-[10px] rounded-full">
                    <i className="lab la-facebook-f text-xl"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="border border-[#3538ED] duration-300 hover:bg-[#3538ED] grid place-content-center p-[10px] rounded-full">
                    <i className="lab la-twitter text-xl"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="border border-[#3538ED] duration-300 hover:bg-[#3538ED] grid place-content-center p-[10px] rounded-full">
                    <i className="lab la-linkedin-in text-xl"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="border border-[#3538ED] duration-300 hover:bg-[#3538ED] grid place-content-center p-[10px] rounded-full">
                    <i className="lab la-instagram text-xl"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="border border-[#3538ED] duration-300 hover:bg-[#3538ED] grid place-content-center p-[10px] rounded-full">
                    <i className="lab la-dribbble text-xl"></i>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-12 md:col-span-6 xl:col-span-3">
              <h4 className="text-2xl font-semibold mb-6"> Quick Link </h4>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link
                    href="/help-center"
                    className="hover:text-[var(--secondary)] duration-300">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="/offers"
                    className="hover:text-[var(--secondary)] duration-300">
                    Offers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="hover:text-[var(--secondary)] duration-300">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="hover:text-[var(--secondary)] duration-300">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="blog-grid"
                    className="hover:text-[var(--secondary)] duration-300">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-12 md:col-span-6 xl:col-span-3">
              <h4 className="text-2xl font-semibold mb-6"> Contact </h4>
              <ul className="flex flex-col gap-4">
                <li>
                  <div className="flex items-center gap-4">
                    <i className="las la-phone-volume bg-primary text-white text-xl p-2 rounded-full"></i>
                    <Link href="tel:3165550116" className="mb-0 clr-neutral-30">
                      +237 695724963
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-4">
                    <i className="las la-envelope-open bg-[var(--secondary)] text-white text-xl p-2 rounded-full"></i>
                    <Link
                      href="mailto:example@mail.com"
                      className="mb-0 clr-neutral-30">
                      haterb2803@gmail.com
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-4">
                    <i className="las la-map-marker-alt bg-[var(--tertiary)] text-white text-xl p-2 rounded-full"></i>
                    <p className="mb-0 clr-neutral-30">
                      Melen Emia, Yaoundé, Cmr
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-span-12 md:col-span-6 xl:col-span-3">
              <h4 className="text-2xl font-semibold mb-6"> Newsletter </h4>
              <p className="mb-6 clr-neutral-30">
                Subscribe our newsletter to get our latest update & news
              </p>
              <div className="p-2 rounded-full border border-neutral-200">
                <form action="#" className="flex items-center">
                  <input
                    type="text"
                    placeholder="Email address"
                    className="w-full border-0 bg-transparent clr-neutral-30 px-3 py-2 ::placeholder-neutral-30 focus:outline-none"
                  />
                  <button
                    type="button"
                    className="grid place-content-center px-6 py-3 rounded-full bg-[var(--tertiary)]  border-0">
                    <PaperPlane />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-span-12">
            <div className="py-8 border-t border-[#3638bd] text-white">
              <div className="grid grid-cols-12 gap-4 ">
                <div className="col-span-12 lg:col-span-6">
                  <p className="m-0 text-center lg:text-start">
                    Copyright &copy; {new Date().getFullYear()}
                    <span className="text-[var(--tertiary)]"> {"Let's go"}</span>.
                    {/* Designed By
                    <Link href="#" className="text-[var(--secondary)]">
                      {" "}
                      Pixelaxis
                    </Link> */}
                  </p>
                </div>
                <div className="col-span-12 lg:col-span-6">
                  <ul className="flex items-center flex-wrap gap-6 justify-center lg:justify-end">
                    <li>
                      <Link
                        href="/sign-in"
                        className="hover:text-[var(--secondary)] duration-300">
                        Sign in
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/signup"
                        className="hover:text-[var(--secondary)] duration-300">
                        Sign Up
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/faq"
                        className="hover:text-[var(--secondary)] duration-300">
                        FAQ
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
