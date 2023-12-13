"use client";
import Author from "@/components/home-1/Authors";
import Faq from "@/components/home-1/Faq";
import MobileApp from "@/components/home-2/MobileApp";
import Featured from "@/components/home-3/Featured";
import Hero from "@/components/home-3/Hero";
import WhyChoose from "@/components/home-3/WhyChoose";
import WorkingProcess from "@/components/home-3/WorkingProcess";

const page = () => {
  return (
    <>
      <Hero />
      <WorkingProcess />
      <Featured />
      <WhyChoose />
      <MobileApp />
      <Author />
      <Faq />
    </>
  );
};

export default page;
