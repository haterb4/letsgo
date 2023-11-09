import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface HeadlessListProps {
  initialValue: string;
}

const people = [{ name: "Pending" }, { name: "Publish" }, { name: "Rejected" }];

export default function HeadlessList({ initialValue }: HeadlessListProps) {
  const [selected, setSelected] = useState({ name: initialValue });

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative mt-1">
        <Listbox.Button
          className={`relative w-full cursor-default rounded-lg py-2 pl-3 pr-10 text-left ${
            selected.name == "Pending" && "bg-[#FFF9ED] text-[#9C742B]"
          } ${
            selected.name == "Publish" &&
            "bg-[var(--primary-light)] text-primary"
          } ${selected.name == "Rejected" && "bg-[#EBFBF2] text-[#22804A]"}`}>
          <span className="block truncate">{selected.name}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white z-[5] py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {people.map((person, personIdx) => (
              <Listbox.Option
                key={personIdx}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 px-4 `
                }
                value={person}>
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
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
  );
}
