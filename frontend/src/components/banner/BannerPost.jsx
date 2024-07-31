import React from 'react'
import BannerPostImage from '../../assets/post-banner.png'
import Button from '../button/Button';

const BannerPost = () => {
  return (
    <section className='w-full'>
        <div className='w-full max-w-[1512px] mx-auto relative  mt-20 mb-[140px] px-20'>
            <div className='max-w-[1200px] relative'>
            <img src={BannerPostImage} className='w-full object-cover' />
            <div className='bg-white p-6 rounded-2xl w-full max-w-[900px] lg:absolute right-0 -bottom-20'> 
              <h4 className='text-sm font-semibold mb-6'>DEVELOPMENT <span className='text-xs text-gray-400'>16 March 2023</span></h4>
              <h1 className='text-3xl font-bold mb-6'>How to make a Game look more attractive with New VR & AI Technology</h1>
              <p className='mb-10 font-normal text-gray-500'>Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we’re committed to making AI accessible to everyone.
              </p>
              <Button variant='tertiary' text='Read More'/>
            </div>
            </div>
            
        </div>
    </section>
  )
}

export default BannerPost;