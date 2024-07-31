import React from 'react'
import { data } from '../../data';
import PostCard from '../post-card/PostCard';

const PostSection = () => {
  return (
     <section className='w-full my-20'>
        <div className='w-full max-w-[1512px] mx-auto px-4 lg:px-16 xl:px-20'>
            <h1 className='text-black font-bold text-3xl mb-10'>Featured Posts</h1>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
               {
                  data.map((items, id)=>{
                    return <PostCard {...items} key={id}/>
                  })
               }
             </div>
        </div>
     </section>
  )
}

export default PostSection;