import { Navbar, PlaceSelector, SearchForm } from '@/componnents'
import React from 'react'

const Home = () => {
  return (
    <div className='w-full min-h-screen pt-4 page-bg'>
      <Navbar />
      <div className='w-full  flex justify-between items-start'>
        <div className='w-80 mt-8 ml-16'>
          <SearchForm />
        </div>
        <div className='w-full h-full flex justify-center items-center'>
          <div className='mt-12'>
            <PlaceSelector />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home