"use client";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@/public/data/icons";
type OptionType = {
  name: string;
};
type OptionTypes = {
  options: OptionType[];
};

export default function SelectUI({ options }: OptionTypes) {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="text-left w-full">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          <Listbox.Button className="relative w-full cursor-default py-3 px-3 lg:px-6 flex gap-3 items-center sm:text-sm bg-white border rounded-[5px]">
            <span className="block">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
              <ChevronDownIcon />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-200"
            leaveFrom="opacity-200"
            leaveTo="opacity-0">
            <Listbox.Options className="z-40 absolute mt-1 max-h-60 w-full overflow-auto rounded-[5px] bg-white text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {options.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none pl-4 py-2 pr-4 ${
                      active ? "bg-gray-200 text-gray-700" : "text-gray-700"
                    }`
                  }
                  value={person}>
                  {({ selected }) => (
                    <>
                      <span
                        className={`truncate flex gap-3 items-center text-base ${
                          selected ? "font-medium" : "font-normal"
                        }`}>
                        {person.name}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
