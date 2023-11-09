import React, { useState } from "react";
import AnimateHeight from "react-animate-height";

type Props = {
  buttonContent: (open: boolean) => JSX.Element;
  children: JSX.Element | Array<JSX.Element>;
  initialOpen?: boolean;
};
export default function Accordion({
  buttonContent,
  children,
  initialOpen = false,
}: Props) {
  const [open, setOpen] = useState(initialOpen);

  return (
    <div className="relative">
      <button
        className="accordion_button w-full"
        onClick={() => setOpen(!open)}>
        {buttonContent(open)}
      </button>
      <AnimateHeight
        id={"sliding_wrapper"}
        duration={300}
        height={open ? "auto" : 0}>
        {children}
      </AnimateHeight>
    </div>
  );
}
