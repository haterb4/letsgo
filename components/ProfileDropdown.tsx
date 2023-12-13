import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Image from "next/image";
import { useAppDispatch } from "@/app/store/hooks";
import { clearUser } from "@/app/store/features/token/tokenSlice";
import { useRouter } from "next/navigation";

export default function ProfileDropdown() {
  const dispatch = useAppDispatch()
  const router = useRouter()
  return (
    <div className="text-left z-10">
      <Menu as="div" className="relative inline-block top-1 md:top-[2px]">
        <Menu.Button className="flex justify-center items-center rounded-full focus:outline-none">
          <Image
            className="rounded-full aspect-square"
            src="/img/avatars/driverImg.png"
            width={45}
            height={45}
            alt="profile"
          />
        </Menu.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-300"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95">
          <Menu.Items className="absolute left-[-80px] lg:right-0 lg:left-auto mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 p-3 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                <div className="flex gap-3 pb-3 items-center border-b border-dashed">
                  <Image
                    src="/img/avatars/driverImg.png"
                    alt="profile"
                    className="rounded-full"
                    width={55}
                    height={55}
                  />
                  <div className="flex flex-col">
                    <span className="text-gray-800 text-xl font-semibold">
                      Peter Parker
                    </span>
                    <span className="text-gray-600 text-sm">
                      Los Angeles, CA
                    </span>
                  </div>
                </div>
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-gray-200 text-gray-800" : ""
                    } group flex gap-2 w-full items-center rounded-md px-2 py-2 text-sm mt-2`}>
                    <UserIcon />
                    My Account
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-gray-200 text-gray-800" : ""
                    } group flex gap-2 w-full items-center rounded-md px-2 py-2 text-sm`}>
                    <CalenderIcon />
                    My Bookings
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-gray-200 text-gray-800" : ""
                    } group flex gap-2 w-full items-center rounded-md px-2 py-2 text-sm mb-2 border-b border-dashed`}>
                    <HeartIcon />
                    Wishlist
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-gray-200 text-gray-800" : ""
                    } group flex gap-2 w-full items-center rounded-md px-2 py-2 text-sm mt-2`}>
                    <InfoIcon />
                    Help
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => {
                      dispatch(clearUser())
                      router.push('/sign-in')
                    }}
                    className={`${
                      active ? "bg-gray-200 text-gray-800" : ""
                    } group flex gap-2 w-full items-center rounded-md px-2 py-2 text-sm`}>
                    <LogOutIcon />
                    Log out
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
const UserIcon = () => {
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
        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
      />
    </svg>
  );
};
const CalenderIcon = () => {
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
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
      />
    </svg>
  );
};
const HeartIcon = () => {
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
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
  );
};
const InfoIcon = () => {
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
        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
      />
    </svg>
  );
};
const LogOutIcon = () => {
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
        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
      />
    </svg>
  );
};
