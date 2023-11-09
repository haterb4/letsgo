import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="py-[30px] lg:py-[60px] bg-[var(--bg-2)] px-3">
      <div className="container">
        <div className="grid grid-cols-12 gap-4 lg:gap-6">
          <div className="col-span-12 lg:col-span-8">
            <div className="pb-lg-0">
              <div className="bg-white rounded-2xl p-3 sm:p-4 lg:p-6 mb-6">
                <h3 className="mb-0 h3"> Your Booking Info </h3>
                <div className="border border-dashed my-6"></div>
                <div className="grid grid-cols-12 gap-4 md:gap-3 mb-8">
                  <div className="col-span-12 md:col-span-4">
                    <div className="border border-neutral-40 rounded-2xl bg-[var(--bg-1)] py-4 px-4 px-xxl-8">
                      <div className="flex items-center justify-between gap-3 mb-1">
                        <span className="clr-neutral-400 inline-block text-sm">
                          Booking date
                        </span>
                        <i className="text-2xl las la-edit"></i>
                      </div>
                      <p className="mb-0 text-lg font-medium">
                        Feb 17 - Feb 25
                      </p>
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-4">
                    <div className="border border-neutral-40 rounded-2xl bg-[var(--bg-1)] py-4 px-8">
                      <div className="flex items-center justify-between gap-3 mb-1">
                        <span className="clr-neutral-400 inline-block text-sm">
                          Adults
                        </span>
                        <i className="text-2xl las la-edit"></i>
                      </div>
                      <p className="mb-0 text-lg font-medium"> 5 </p>
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-4">
                    <div className="border border-neutral-40 rounded-2xl bg-[var(--bg-1)] py-4 px-8">
                      <div className="flex items-center justify-between gap-3 mb-1">
                        <span className="clr-neutral-400 inline-block text-sm">
                          Children
                        </span>
                        <i className="text-2xl las la-edit"></i>
                      </div>
                      <p className="mb-0 text-lg font-medium"> 0 </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap border items-center rounded-2xl">
                  <div className="rounded-2xl p-2">
                    <Image
                      width={347}
                      height={243}
                      src="/img/featured-img-1.jpg"
                      alt="image"
                      className=" w-full rounded-2xl"
                    />
                  </div>

                  <div className="p-4">
                    <div className="property-card__body">
                      <Link
                        href="hotel-listing-details"
                        className="link block text-[var(--neutral-700)] hover:text-primary text-xl font-medium mb-5">
                        Regal North Hills - 4150
                      </Link>
                      <div className="flex justify-between gap-3">
                        <div className="flex items-center gap-1">
                          <i className="las la-map-marker-alt text-xl text-[#22804A]"></i>
                          <span className="inline-block"> United States </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <i className="las la-star text-xl text-[var(--tertiary)]"></i>
                          <span className="inline-block clr-neutral-500">
                            4.5(66)
                          </span>
                        </div>
                      </div>
                      <div className="border border-dashed my-6"></div>
                      <ul className="flex flex-wrap gap-6">
                        <li>
                          <span className="material-symbols-outlined mat-icon clr-neutral-600 inline-block mb-1">
                            home_work
                          </span>
                          <span className="block text-sm"> 3 Room </span>
                        </li>
                        <li>
                          <span className="material-symbols-outlined mat-icon clr-neutral-600 inline-block mb-1">
                            bed
                          </span>
                          <span className="block text-sm"> 5 Bed </span>
                        </li>
                        <li>
                          <span className="material-symbols-outlined mat-icon clr-neutral-600 inline-block mb-1">
                            bathtub
                          </span>
                          <span className="block text-sm"> 1 Bath </span>
                        </li>
                        <li>
                          <span className="material-symbols-outlined mat-icon clr-neutral-600 inline-block mb-1">
                            drag_pan
                          </span>
                          <span className="block text-sm"> 732 sft </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-3 sm:p-4 lg:p-6 mb-6">
                <h4 className="mb-3 text-2xl font-semibold">
                  {" "}
                  Billing address{" "}
                </h4>
                <div className="flex flex-wrap gap-4 justify-between items-center">
                  <p className="mb-0">
                    Transaction ID:
                    <span className="text-primary">25246584</span>
                  </p>
                  <p className="mb-0">
                    Total Payable Amount:
                    <span className="text-primary">$1115</span>
                  </p>
                </div>
                <div className="border border-dashed my-6"></div>
                <div className="grid grid-cols-12 gap-4 lg:gap-6">
                  <div className="col-span-12 md:col-span-6">
                    <input
                      type="text"
                      className="w-full bg-[var(--bg-1)] focus:outline-none border border-neutral-40 rounded-full py-3 px-5"
                      placeholder="Enter Name"
                    />
                  </div>
                  <div className="col-span-12 md:col-span-6">
                    <input
                      type="email"
                      className="w-full bg-[var(--bg-1)] focus:outline-none border border-neutral-40 rounded-full py-3 px-5"
                      placeholder="Enter Email"
                    />
                  </div>
                  <div className="col-span-12 md:col-span-6">
                    <input
                      type="text"
                      className="w-full bg-[var(--bg-1)] focus:outline-none border border-neutral-40 rounded-full py-3 px-5"
                      placeholder="Enter Phone Number"
                    />
                  </div>
                  <div className="col-span-12 md:col-span-6">
                    <div className="rounded-full border bg-[var(--bg-1)] pr-4">
                      <select
                        className="w-full bg-transparent px-5 py-3 focus:outline-none"
                        aria-label="Default select example">
                        <option>USA</option>
                        <option value="1">New York</option>
                        <option value="2">Chicago</option>
                        <option value="3">Atlanta</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-span-12">
                    <textarea
                      rows={5}
                      className="w-full bg-[var(--bg-1)] border border-neutral-40 rounded-3xl focus:outline-none py-3 px-6"
                      placeholder="Enter Address"></textarea>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-3 sm:p-4 lg:p-6">
                <h4 className="mb-6 text-2xl font-semibold">
                  {" "}
                  Payment methods{" "}
                </h4>
                <ul className="flex flex-wrap items-center gap-6">
                  <li>
                    <div className="flex items-center gap-2">
                      <input
                        className="accent-[var(--primary)] scale-125"
                        type="radio"
                        name="property-type"
                        id="credit-card"
                      />
                      <label
                        className="inline-block text-lg font-medium cursor-pointer"
                        htmlFor="credit-card">
                        Credit card
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-2">
                      <input
                        className="accent-[var(--primary)] scale-125"
                        type="radio"
                        name="property-type"
                        id="debit-card"
                      />
                      <label
                        className="inline-block text-lg font-medium cursor-pointer"
                        htmlFor="debit-card">
                        Debit card
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-2">
                      <input
                        className="accent-[var(--primary)] scale-125"
                        type="radio"
                        name="property-type"
                        id="paypal"
                      />
                      <label
                        className="inline-block text-lg font-medium cursor-pointer"
                        htmlFor="paypal">
                        PayPal
                      </label>
                    </div>
                  </li>
                </ul>
                <div className="border border-dashed my-6"></div>
                <div className="grid grid-cols-12 gap-4 lg:gap-6">
                  <div className="col-span-12">
                    <label
                      htmlFor="card-number"
                      className="text-xl font-medium block mb-3">
                      Card number
                    </label>
                    <input
                      type="text"
                      className="w-full bg-[var(--bg-1)] focus:outline-none border border-neutral-40 rounded-full py-3 px-5"
                      placeholder="2456 1665 5155 5151"
                      id="card-number"
                    />
                  </div>
                  <div className="col-span-12 md:col-span-6">
                    <label
                      htmlFor="expiry-date"
                      className="text-xl font-medium block mb-3">
                      Expiry date
                    </label>
                    <input
                      type="text"
                      className="w-full bg-[var(--bg-1)] focus:outline-none border border-neutral-40 rounded-full py-3 px-5"
                      placeholder="DD/MM/YY"
                      id="expiry-date"
                    />
                  </div>
                  <div className="col-span-12 md:col-span-6">
                    <label
                      htmlFor="cvc"
                      className="text-xl font-medium block mb-3">
                      CVC / CVV
                    </label>
                    <input
                      type="text"
                      className="w-full bg-[var(--bg-1)] focus:outline-none border border-neutral-40 rounded-full py-3 px-5"
                      placeholder="3 digits"
                      id="cvc"
                    />
                  </div>
                  <div className="col-span-12">
                    <label
                      htmlFor="card-name"
                      className="text-xl font-medium block mb-3">
                      Name on card
                    </label>
                    <input
                      type="text"
                      className="w-full bg-[var(--bg-1)] focus:outline-none border border-neutral-40 rounded-full py-3 px-5"
                      placeholder="Jab Archur"
                      id="card-name"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <div className="bg-white rounded-2xl p-3 sm:p-4 lg:p-6 mb-6">
              <h4 className="mb-6 text-2xl font-semibold">
                {" "}
                Enter Promo Code{" "}
              </h4>
              <div className="p-2 rounded-full border border-neutral-40 bg-[var(--bg-2)] mb-4">
                <form action="#" className="flex items-center">
                  <input
                    type="text"
                    placeholder="Promo Code"
                    className="w-full border-0 bg-transparent text-[var(--neutral-700)] px-3 py-2 ::placeholder-neutral-600 focus:outline-none"
                  />
                  <button
                    type="button"
                    className="grid place-content-center px-6 py-3 rounded-full bg-primary text-white border-0 text-sm">
                    Apply
                  </button>
                </form>
              </div>
              <span className="block text-[var(--neutral-700)]">
                20% Off Discount
              </span>
            </div>
            <div className="bg-white rounded-2xl p-3 sm:p-4 lg:p-6 border">
              <h4 className="mb-0 text-2xl font-semibold">Order Summary</h4>
              <div className="border border-dashed my-8"></div>
              <ul className="gap-4">
                <li className="flex items-center justify-between flex-wrap">
                  <p className="mb-0">Subtotal</p>
                  <p className="mb-0 font-medium">$1015</p>
                </li>
                <li className="flex items-center justify-between flex-wrap">
                  <p className="mb-0">Service charge</p>
                  <p className="mb-0 font-medium">10%</p>
                </li>
                <li className="flex items-center justify-between flex-wrap">
                  <p className="mb-0">Tax</p>
                  <p className="mb-0 font-medium">5%</p>
                </li>
                <li className="flex items-center justify-between flex-wrap">
                  <p className="mb-0">Promo Code</p>
                  <p className="mb-0 font-medium">20% off</p>
                </li>
              </ul>
              <div className="border border-dashed my-8"></div>
              <div className="flex items-center justify-between flex-wrap mb-6">
                <p className="mb-0">Payable Now</p>
                <p className="mb-0 font-medium">1115</p>
              </div>
              <Link
                href="#"
                className="link inline-flex items-center gap-2 py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-medium w-full justify-center">
                <span className="inline-block"> Payment </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
