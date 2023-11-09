"use client";
import { useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const CustomRangeSlider = () => {
  const [value, setValue] = useState([24, 62]);
  const handleChange = (event: any) => {
    setValue(event);
  };
  return (
    <div className="pb-10 pt-4">
      <div className="range-slider">
        <RangeSlider
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
          id="range"
          min={0}
          max={100}
          step={1}
          defaultValue={[24, 62]}
        />
        <div className="flex justify-center gap-4 py-5">
          <span>${value[0]}</span>
          <span>-</span>
          <span>${value[1]}</span>
        </div>
      </div>
    </div>
  );
};

export default CustomRangeSlider;
