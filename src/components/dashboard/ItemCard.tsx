import Image from 'next/image'
import React from 'react'
interface ItemCardProps {
  title: string;
  value: string;
  iconUri: string;
}
const ItemCard: React.FC<ItemCardProps> = (props) => {
  return (
    <div className='w-full Input-shadow rounded-[32px]'>
      <div className='w-full h-[152px] rounded-[32px] bg-gradient-to-r from-[rgba(224,227,249,0.70)] to-[rgba(222,225,246,0.00)] flex  items-center px-4 gap-3'>
        <div className='w-[100px] mi-w-[100px] h-[100px] relative'>
          <Image src={props.iconUri} fill alt='volant' />
        </div>
        <div className='flex flex-col'>
          <h1 className='uppercase text-xl'>{props.title}</h1>
          <h2 className='font-bold text-3xl'>{props.value}</h2>
        </div>
      </div>
    </div>
  )
}

export default ItemCard
