"use client";
import { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { CardIcon } from "@/public/data/icons";

export default function HeroDropdown4() {
  const [value, setValue] = useState(40);

  return (
    <div className="text-left w-full md:w-[48%] xl:w-[22%] relative">
      <div className="py-2 px-6 focus:shadow-xl flex gap-3 items-center sm:text-sm bg-[var(--bg-1)] border rounded-3xl">
        <div className="w-full py-1 flex items-center gap-2">
          <span className="flex items-center gap-1">
            <CardIcon />
            Budget
          </span>
          <span className="absolute top-[-14px] bg-white rounded-2xl py-1 px-5 right-4 shadow text-primary text-xs">
          {value} FCFA
          </span>
          <Slider
            handleStyle={{
              backgroundColor: "var(--primary)",
              borderColor: "var(--primary)",
            }}
            trackStyle={{ backgroundColor: "var(--primary)" }}
            value={value}
            onChange={(value) => setValue(value as number)}
          />
        </div>
      </div>
    </div>
  );
}
