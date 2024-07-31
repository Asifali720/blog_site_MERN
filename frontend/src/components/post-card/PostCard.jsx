import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../button/Button';

const PostCard = ({name, Image, short, category, date}) => {
  return (
    <div className='w-full'>
      <img src={Image} alt=""  className='rounded-lg w-full'/>
      <h4 className='text-sm font-bold mt-4'>{category} <span className='text-xs text-gray-400'>{date}</span></h4> 
      <h3 className='text-2xl font-bold mt-2'>{name}</h3>
      <p className='text-base font-normal mt-4 text-gray-500'>{short}</p>
      <Button variant='link' link={`/blog/${name}`} text='Read More...'/>   
    </div>
  )
}

export default PostCard;