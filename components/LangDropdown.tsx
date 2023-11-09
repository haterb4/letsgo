import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import {
  ChevronDownIcon,
  GlobeAltIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/20/solid";
import { AppCurrencies, AppLanguages } from "@/public/data/languages";
import { useAppDispatch } from "@/app/store/hooks";
import { setRenderingLanguage } from "@/app/store/features/language/languageSlice";

interface ILangDropdown {
  lang?: boolean
}
export default function LangDropdown(props: ILangDropdown) {
  const dispatch = useAppDispatch();
  return (
    <div className="w-[80px] text-left z-10">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-3xl bg-[var(--btn-bg)] px-4 py-3 text-sm font-medium text-gray-700 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <span className="flex gap-2">
              {props.lang === true
              ? <GlobeIcon />
              : <DollarIcon />
              }
            </span>
            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-gray-700"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-300"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95">
          <Menu.Items className="absolute left-0 border lg:right-0 lg:left-auto p-2 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {props.lang == true ? AppLanguages.map((wraper, index) => (
              <div className="px-1 py-1 flex gap-2" key={index}>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => {
                        dispatch(setRenderingLanguage("french"))
                      }}
                      className={`${
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                      } bg-gray-100 group flex flex-col w-full rounded-md px-2 py-2 text-sm`}>
                      <span className="text-gray-800 text-base">{wraper.lang1.lang}</span>
                      <span className="text-gray-500 text-xs">{wraper.lang1.country}</span>
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => {
                        dispatch(setRenderingLanguage("english"))
                      }}
                      className={`${
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                      } group flex flex-col w-full rounded-md px-2 py-2 text-sm`}>
                      <span className="text-gray-800 text-base">{wraper.lang2.lang}</span>
                      <span className="text-gray-500 text-xs">{wraper.lang2.country}</span>
                    </button>
                  )}
                </Menu.Item>
              </div>
            ))
            : AppCurrencies.map((wraper, index) => (
              <div className="px-1 py-1 flex gap-2" key={index}>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                      } bg-gray-100 group flex flex-col w-full rounded-md px-2 py-2 text-sm`}>
                      <span className="text-gray-800 text-base">{wraper.curr1.symbol} {wraper.curr1.name}</span>
                      <span className="text-gray-500 text-xs">{wraper.curr1.country}</span>
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                      } group flex flex-col w-full rounded-md px-2 py-2 text-sm`}>
                      <span className="text-gray-800 text-base">{wraper.curr2.symbol} {wraper.curr1.name}</span>
                      <span className="text-gray-500 text-xs">{wraper.curr2.country}</span>
                    </button>
                  )}
                </Menu.Item>
              </div>
            ))
            }
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
const GlobeIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-5 h-5">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
      />
    </svg>
  );
};
const DollarIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-5 h-5">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};
