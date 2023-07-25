'use client'

import React, { useEffect, useState } from 'react'
import { Select } from '@/components'
import { AiOutlineLeft, AiOutlineRight, AiOutlinePrinter } from 'react-icons/ai'
import { CiSearch } from 'react-icons/ci'
import { FiEdit, FiEye } from 'react-icons/fi'
import { BiSolidUserPlus } from 'react-icons/bi'
import { BsTrash } from 'react-icons/bs'
import Image from 'next/image'
interface TableProps {
    filters?: string [] | number [];
    items?: {
        labels?: string []
        values?: any []
    } 

}
const ItemsTable: React.FC<TableProps> = (props) => {
  const [searchKey, setSearchKey] = useState('')
  const [activeFilter, setActiveFilter] = useState(-1)
  const [itemsToShow, setItemsToShow] = useState(3)
  useEffect(() =>{
    setSearchKey(searchKey)
  }, [searchKey])
  const grid = props.items?.labels?.length
  return (
    <div className='w-full flex flex-col justify-between rounded-lg border p-4 gap-4 shadow-md'>
      <div className='flex items-center justify-between gap-8'>
        <div className='w-[70%] h-[50px] border rounded-lg bg-zinc-50 flex items-center'>
          <input
            type="search"
            name="searhItem"
            id="searchItem"
            value={searchKey}
            className='h-full w-full rounded-lg bg-transparent px-2 outline-none'
            onChange={(e) => setSearchKey(e.target.value)}
        />
          <button className='h-[54px] w-[54px] flex justify-center items-center'><CiSearch size={24} /></button>
        </div>
        <div className='flex items-center gap-3'>
          <button className='flex justify-center items-center uppercase gap-1 h-[50px] w-[150px] rounded-lg bg-[#FE9261] text-white'><AiOutlinePrinter scale={32} /> Print list </button>
          <button className='flex justify-center items-center uppercase gap-1 h-[50px] w-[150px] rounded-lg bg-[#2D3A96] text-white'><BiSolidUserPlus scale={32} /> add vehicle </button>
        </div>
      </div>
      <div className='w-full flex flex-col gap-3'>
        <div className='flex items-center gap-3'>
          <h1>quick sort by:</h1>
          <div className='flex items-center gap-2'>
            {props.filters?.map((filter, index) => {
                return (
                    <button
                        key={index}
                        className={`py-1 px-3 border rounded-3xl hover:border-[#FE9261] ${index === activeFilter && 'border-[#FE9261]'}`}
                        onClick={() => {
                            setActiveFilter(index)
                            //logic function
                        }}
                    >{filter}</button>
                )
            })}
          </div>
        </div>
        <div className='w-full border rounded-3xl p-4 overflow-x-scroll'>
          <div className='w-fit pr-1 flex flex-col gap-2'>
            <header className='flex items-center gap-8 border-b-2 py-2 w-fit pr-2'>
                <h1 className='min-w-[100px] font-bold pl-2'>N°</h1>
                {props.items?.labels?.map((label, index) => {
                    return (
                        <h1 key={index} className='min-w-[250px] font-bold'>{label}</h1>
                    )
                })}
            </header>
            <div className='w-full flex flex-col'>
                {Array(itemsToShow).fill(0).map((item, index) => {
                    return (
                        <div key={index} className={`w-full flex justify-between items-center ${(index + 1) % 2 === 0 && 'bg-[#EEF0FF]'} py-2 hover:bg-[#6875CE] hover:text-white`}>
                            <div className='min-w-[100px] flex items-center justify-between'>
                                <h2 className='font-bold pl-2'>{index+1}</h2>
                                <div className='flex items-center gap-2'>
                                    <button><FiEdit /></button>
                                    <button><FiEye /></button>
                                    <button><BsTrash /></button>
                                </div>
                            </div>
                            <div className='w-[250px] flex gap-2 items-center'>
                                <div className='w-[50px] h-[50px] rounded-full relative'>
                                    <Image src={'/images/avatars/avatar.png'} fill alt='user avatar' />
                                </div>
                                <h1>Prosper Jackson</h1>
                            </div>
                            <div className='w-[250px]'>Item</div>
                            <div className='w-[250px]'>Item</div>
                            <div className='w-[250px]'>Item</div>
                            <div className='w-[250px]'>Item</div>
                            <div className='w-[250px]'>Item</div>
                            <div className='w-[250px]'>Item</div>
                            <div className='w-[250px]'>Item</div>
                            <div className='w-[250px]'>Item</div>
                        </div>
                    )
                })}
            </div>
          </div>
        </div>
      </div>
      <div className='w-full flex justify-between items-center'>
        <h4>Showing 1-3 of 3</h4>
        <div className='flex items-center gap-4'>
          <button className='w-[150px] flex justify-center items-center gap-3 border py-2 border-[#2D3A96] text-[#2D3A96] uppercase rounded-md '><AiOutlineLeft /> Previous</button>
          <div className='flex items-center gap-2'>
            <button className='w-8 h-8 flex justify-center items-center rounded bg-[#FE9261] text-white hover:bg-[#FE9261] hover:text-white'>1</button>
            <button className='w-8 h-8 flex justify-center items-center rounded hover:bg-[#FE9261] hover:text-white'>2</button>
            <button className='w-8 h-8 flex justify-center items-center rounded hover:bg-[#FE9261] hover:text-white'>...</button>
            <button className='w-8 h-8 flex justify-center items-center rounded hover:bg-[#FE9261] hover:text-white'>10</button>
          </div>
          <button className='w-[150px] flex justify-center items-center gap-3 border py-2 border-[#2D3A96] text-[#2D3A96] uppercase rounded-md '>Next <AiOutlineRight /></button>
        </div>
        <div className='flex items-center gap-2'>
          <h4 className='capitalize'>Drivers per page</h4>
          <div>
            <Select items={[3, 5, 12, 15, 20]} showUp onChange={(value: number) => {
                setItemsToShow(value)
            }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemsTable