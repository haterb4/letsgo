"use client";
import { ReactNode, useState, useRef, useEffect } from "react";

type AccordionProps = {
  title: string;
  children: ReactNode;
};

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(`${contentRef.current.scrollHeight}px`);
    }
  }, []);

  const toggleAccordion = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div
      onClick={toggleAccordion}
      className="mb-6 last:mb-0 rounded-3xl px-2 lg:px-10 bg-[#EAFBF1] max-w-[856px]">
      <button
        className={`w-full flex items-center justify-between  focus:outline-none py-3 lg:py-6 ${
          isOpen && "border-b border-dashed border-neutral-400 border-dash-long"
        }`}>
        <span className="text-xl leading-[24px] text-left font-medium">
          {title}
        </span>
        <span className="bg-[#22814B] rounded-full text-white flex items-center justify-center w-8 h-8 text-2xl font-semibold">
          {isOpen ? (
            <i className="las la-minus"></i>
          ) : (
            <i className="las la-plus"></i>
          )}
        </span>
      </button>
      <div
        className="overflow-hidden"
        style={{
          maxHeight: isOpen ? contentHeight : "0px",
          transition: "max-height 0.3s ease-in",
        }}>
        <div ref={contentRef} className="py-4 h-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
