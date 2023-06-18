import HomeContact from '@/componnents/home/HomeContact'
import HomeFrequentlyPlace from '@/componnents/home/HomeFrequentlyPlace'
import HomeHero from '@/componnents/home/HomeHero'
import HomeTestimonial from '@/componnents/home/HomeTestimonial'
import HomeWhy from '@/componnents/home/HomeWhy'
import React from "react";

export default function Page() {
  return (
    <div className="homediv">
      <HomeHero />
      <HomeFrequentlyPlace />
      <HomeWhy />
      <HomeTestimonial />
      <HomeContact />
    </div>
  );
}

