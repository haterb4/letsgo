"use client";
import Footer from "@/components/Footer";
import MobileMenu from "@/components/MobileMenu";
import Faq from "@/components/home-1/Faq";
import Agents from "@/components/home-2/Agents";
import Counter from "@/components/home-2/Counter";
import Explore from "@/components/home-2/Explore";
import Header2 from "@/components/home-2/Header2";
import Hero from "@/components/home-2/Hero";
import HowItWork from "@/components/home-2/HowItWork";
import MobileApp from "@/components/home-2/MobileApp";
import Property from "@/components/home-2/Property";
import Testimonial from "@/components/home-2/Testimonial";
import Destinations from "@/components/home-4/Destinations";
import Facilities from "@/components/home-6/Facilities";

const page = () => {
  return (
    <>
      <Header2 />
      <MobileMenu />
      <main>
        <Hero />
        <Facilities />
        <Property />
        <HowItWork />
        <Destinations />
        <MobileApp />
        <Explore />
        <Counter />
        <Testimonial />
        <Agents />
        <Faq />
      </main>
      <Footer />
    </>
  );
};

export default page;
