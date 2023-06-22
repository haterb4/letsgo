import React, {useState} from 'react'
import SearchBar from "@/componnents/SearchBar";
import CheckBoxGroup from "@/componnents/CustomButton/CheckBoxGroup";
import RadioButtonGroup from "@/componnents/CustomButton/RadioButtonGroup";
import {serviceFilters, mainFilters} from "@/fakedata/filters";
import TripCard from "@/componnents/card/TripCard";


const Search = () => {
  const [isOpen, setIsOpen] =  useState(false)
  const open =()=>{
    setIsOpen(val=>!val)
    console.log("isOpen", isOpen)
  }
  const handleRadioChange = (value) => {
    console.log('Selected option:', value);
    
  };

  const handleCheckBoxChange = (selectedOptions) => {
    console.log('Selected options:', selectedOptions);
    
  };

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
     
        <div className="shadow rounded-full w-fit border border-black">
          <SearchBar />
        </div>
      
      <div className="flex flex-col lg:flex-row justify-items-start mt-8">
        <div id="default-sidebar" className={'h-64 w-full overflow-y-auto mb-2 lg:mb-0 lg:h-full lg:w-full lg:overflow-y-hidden transition-transform' } aria-label="Sidebar">
          <div className="h-full px-3 py-4  ">
              <ul className="space-y-2 font-medium">
                <li className="flex flex-row justify-between">
                    <p className="text-gray-300	">Trier par</p>
                    <button className="text-blue-300	">Tout effacer</button>
                </li>
                
                <RadioButtonGroup options={mainFilters} name="mainfilter" onChange={handleRadioChange} />
                
                <li className="h-1 bg-gray-300 rounded"></li>
                
                <CheckBoxGroup options={serviceFilters} onChange={handleCheckBoxChange} />

              </ul>
          </div>
        </div>

        <div className="w-full mx-8">
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">

              <TripCard />
              <TripCard />
              <TripCard />
              <TripCard />
              <TripCard />
              <TripCard />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Search