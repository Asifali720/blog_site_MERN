import React from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'

const Button = ({onClick, variant, link, text}) => {
  return (
    <>
    {
        variant === 'primary' || variant === 'secondary' || variant === 'tertiary' ? (
            <button onClick={onClick} className={clsx(variant === 'primary'&& 'bg-[#7C4EE4] text-white py-2 px-6 text-sm rounded-md hover:bg-[#6a3dd6]', variant === 'secondary' && 'bg-white border text-sm border-[#7C4EE4] text-[#7C4EE4] py-2 px-6 rounded-md', variant === 'tertiary' && 'bg-white border-[2px] font-semibold text-sm border-[#7C4EE4] text-[#7C4EE4] py-2 px-6 rounded-md')}>{text}</button>
        ):(
            null
        )
    }
    {
        variant === 'link' ? (
            <Link to={link} className='text-sm font-bold text-[#7C4EE4] underline'>{text}</Link>
        ):(
            null
        )
    }
     
    </>
   
  )
}

export default Button