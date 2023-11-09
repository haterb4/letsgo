"use client";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon, HomeIcon } from "@/public/data/icons";
import { UserIcon } from "@heroicons/react/24/outline";

const people = [
  { name: "Guest" },
  { name: "01" },
  { name: "02" },
  { name: "03" },
  { name: "04" },
  { name: "05" },
];

export default function GuestDropdown() {
  const [selected, setSelected] = useState(people[0]);

  return (
    <div className="text-left w-full md:w-[48%] xl:w-[22%]">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          <Listbox.Button className="relative w-full cursor-default py-3 px-4 focus:shadow-xl flex gap-3 items-center sm:text-sm bg-[var(--bg-1)] border rounded-3xl">
            <span className="block truncate">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center pr-2">
              <UserIcon className="h-5 w-5" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <Listbox.Options className="z-40 absolute mt-1 max-h-60 w-full overflow-auto rounded-xl bg-white text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {people.map((person, personIdx) => (
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
