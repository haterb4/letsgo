import HomeContact from '@/componnents/home/HomeContact'
import HomeFrequentlyPlace from '@/componnents/home/HomeFrequentlyPlace'
import HomeHero from '@/componnents/home/HomeHero'
import HomeTestimonial from '@/componnents/home/HomeTestimonial'
import HomeWhy from '@/componnents/home/HomeWhy'
import React from 'react'

const Home = () => {
  return (
    <div>
      <HomeHero />
      <HomeFrequentlyPlace />
      <HomeWhy />
      <HomeTestimonial />
      <HomeContact />
    </div>
  )
}

export default Home