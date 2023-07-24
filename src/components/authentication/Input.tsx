'use client'

import React from 'react'
interface InputProps {
    type?: string;
    value: string;
    label: string;
    placeholder?: string;
    handleChange: Function;
}
const Input: React.FC<InputProps> = (props) => {
  return (
    <div className='w-full flex flex-col'>
        {props.value && <label htmlFor={props.label} className='capitalize text-sm'>{props.label}</label>}
        <div className='w-full h-[45px] shadow-lg px-2 rounded-md'>
            <input
                type={props.type? props.type : 'text'}
                name={props.label}
                value={props.value}
                id={props.label}
                required
                onChange={(e) => props.handleChange(e.target.value)}
                className='w-full h-full outline-none'
                placeholder={props.placeholder ? props.placeholder : 'type someting'}
            />
        </div>
    </div>
  )
}

export default Input