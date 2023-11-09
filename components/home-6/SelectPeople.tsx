import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

export default function SelectPeople() {
  const [adult, setAdult] = useState(1);
  const [children, setChildren] = useState(0);
  return (
    <Menu
      as="div"
      className="relative inline-block text-left w-full md:w-[48%] xxl:w-[17%] shrink-0 justify-between rounded-3xl border bg-[var(--bg-1)]">
      <Menu.Button className="inline-flex justify-between w-full text-sm font-medium text-gray-700 px-4 py-3">
        <span>
          {adult} Adults - {children} Children
        </span>
        <ChevronDownIcon
          className="h-5 w-5 text-gray-500 shrink-0"
          aria-hidden="true"
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
        <Menu.Items className="absolute left-0 top-10 border lg:right-0 w-[280px] lg:left-auto p-2 mt-2 origin-top-right rounded-md bg-white shadow-lg">
          <div className="py-1 flex gap-2 w-full flex-col">
            <div className="flex justify-between items-center w-full px-2 pb-1">
              <div>
                <h5 className="font-medium text-lg">Adults</h5>
                <span className="text-xs">Ages 13 or above</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setAdult(adult > 1 ? adult - 1 : adult)}
                  className="border h-8 w-8 rounded-full flex items-center justify-center hover:border-gray-800 duration-300">
                  <MinusIcon className="h-5 w-5 text-gray-600" />
                </button>
                <span>{adult}</span>
                <button
                  onClick={() => setAdult(adult + 1)}
                  className="border h-8 w-8 rounded-full flex items-center justify-center hover:border-gray-800 duration-300">
                  <PlusIcon className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center w-full px-2 pb-1">
              <div>
                <h5 className="font-medium text-lg">Children</h5>
                <span className="text-xs">Ages 0 to 12</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() =>
                    setChildren(children ? children - 1 : children)
                  }
                  className="border h-8 w-8 rounded-full flex items-center justify-center hover:border-gray-800 duration-300">
                  <MinusIcon className="h-5 w-5 text-gray-600" />
                </button>
                <span>{children}</span>
                <button
                  onClick={() => setChildren(children + 1)}
                  className="border h-8 w-8 rounded-full flex items-center justify-center hover:border-gray-800 duration-300">
                  <PlusIcon className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
