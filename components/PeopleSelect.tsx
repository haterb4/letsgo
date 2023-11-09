import {
  MinusCircleIcon,
  MinusIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

const PeopleSelect = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  const [num, setNum] = useState(1);
  const increase = () => setNum(num + 1);
  const decrease = () => {
    if (num) {
      setNum(num - 1);
    }
  };
  return (
    <div className="flex items-center bg-[var(--bg-2)] gap-3 py-4 px-8 rounded-full border border-neutral-40 mb-4">
      <div className="flex-grow">
        <p className="mb-1">{title}</p>
        <p className="mb-0 text-xs clr-neutral-400"> {subtitle}</p>
      </div>
      <div className="shrink-0">
        <div className="flex items-center gap-2">
          <button onClick={decrease} type="button" className="text-primary">
            <MinusCircleIcon className="w-6 h-6" />
          </button>
          <span>{num}</span>
          <button onClick={increase} type="button" className="text-primary">
            <PlusCircleIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PeopleSelect;
