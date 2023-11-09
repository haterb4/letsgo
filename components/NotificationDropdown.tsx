import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { BellIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

export default function NotificationDropdown() {
  return (
    <div className="text-left z-10">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center rounded-3xl bg-[var(--btn-bg)] p-3 text-sm font-medium text-gray-800 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <NotificationIcon />
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
          <Menu.Items className="absolute left-[-130px] lg:right-0 lg:left-auto mt-2 p-2 w-72 md:w-80 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <h5 className="text-xl font-semibold text-[var(--neutral-700)] mb-1">
                Notifications
              </h5>
              <Menu.Item>
                {({ active }) => (
                  <div
                    className={`${
                      active ? "bg-gray-100 text-gray-600" : "text-gray-800"
                    } group flex gap-3 w-full items-center rounded-md px-2 py-2 cursor-pointer`}>
                    <Image
                      src="/img/user-2.jpg"
                      alt="img"
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div className="flex flex-col">
                      <span className="font-medium leading-6 text-lg text-gray-800">
                        Peter Parker
                      </span>
                      <span className="text-sm text-gray-500 leading-5">
                        New Message alert! @trending{" "}
                      </span>
                      <span className="text-xs text-gray-400">6 Sec ago</span>
                    </div>
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div
                    className={`${
                      active ? "bg-gray-100 text-gray-600" : "text-gray-800"
                    } group flex gap-3 w-full items-center rounded-md px-2 py-2 cursor-pointer`}>
                    <Image
                      src="/img/user-3.jpg"
                      alt="img"
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div className="flex flex-col">
                      <span className="font-medium leading-6 text-lg text-gray-800">
                        Gal Gadot
                      </span>
                      <span className="text-sm text-gray-500 leading-5">
                        Measure actions your users{" "}
                      </span>
                      <span className="text-xs text-gray-400">4 Min ago</span>
                    </div>
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div
                    className={`${
                      active ? "bg-gray-100 text-gray-600" : "text-gray-800"
                    } group flex gap-3 w-full items-center rounded-md px-2 py-2 cursor-pointer`}>
                    <Image
                      src="/img/user-4.jpg"
                      alt="img"
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div className="flex flex-col">
                      <span className="font-medium leading-6 text-lg text-gray-800">
                        Eva green
                      </span>
                      <span className="text-sm text-gray-500 leading-5">
                        New Message alert! @trending{" "}
                      </span>
                      <span className="text-xs text-gray-400">15 Min ago</span>
                    </div>
                  </div>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

const NotificationIcon = () => {
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
        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
      />
    </svg>
  );
};
