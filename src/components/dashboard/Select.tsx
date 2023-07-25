'use client'

import React, { useRef, useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'
import { useOnClickOutside } from 'usehooks-ts'
interface SelectProps {
    items: string[] | number[],
    onChange: Function
    showUp?: boolean
}
const Select = (props: SelectProps) => {
  const [isToggled, setIsToggled] = useState(false)
  const [value, SetValue] = useState<number | string>(props.items[0])
  const ref = useRef(null)
  const handleClickOutside = () => {
    setIsToggled(false)
  }
  useOnClickOutside(ref, handleClickOutside)
  return (
    <div ref={ref} className='flex bg-neutral-100 text-neutral-500 rounded-lg p-2 relative'>
        <div className='flex items-center'>
            <p>{!isNaN(Number.parseInt(value.toString())) && 'Show' } {value}</p>
            <button
                onClick={() => setIsToggled((previous) => !previous)}
                className='ml-3'
            >
                <BiChevronDown size={16}/>
            </button>
        </div>
        {isToggled && 
        (<div className={`w-full absolute ${props.showUp ? 'bottom-12' : 'top-10'} left-0 rounded-lg py-2 bg-neutral-200 border z-40`}>
            {props.items.map((item, index) => {
                return (
                    <button
                        key={index}
                        onClick={ () => {
                            SetValue(item)
                            props.onChange(item)
                            handleClickOutside()
                        }}
                        className='w-full px-2 py-1 text-left'
                    >{!isNaN(Number.parseInt(item.toString())) && 'Show' } {item}</button>
                )
            })}
        </div>)}
    </div>
  )
}

export default Select