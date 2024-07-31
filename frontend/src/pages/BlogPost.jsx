import React from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../components/layout/Layout';
import { data } from '../data';
import PostCard from '../components/post-card/PostCard';

const BlogPost = () => {
  const { name } = useParams();
  const post = data.find(function (item){
    return item.name.toLowerCase() === name.toString().toLowerCase()
  })

  return (
    <Layout>
  <div className='w-full max-w-[1512px] mx-auto px-4 lg:px-16 xl:px-20 my-20'>
    <div className='mb-10 px-4 lg:px-28'>
    <h4 className='text-sm font-bold mb-6'>{post?.category} <span className='text-xs text-gray-400'>{post?.date}</span></h4>
    <h1 className='text-black font-bold text-3xl'>{post?.name}</h1>
    </div>
    
    <img src={post?.Image} alt="" className='w-full rounded-xl mb-10'/>
    <div className='px-4 lg:px-28'>
      <p className='text-base font-normal mt-4 text-gray-500'>{post?.body}</p>
    </div>
    <h2 className='text-3xl font-bold my-10'>Featured Post</h2>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
    {
      data.map((items, id)=>{
        return <PostCard {...items} key={id}/>
      })
    }
    </div>
    
  </div>
  </Layout>
  )
}

export default BlogPost