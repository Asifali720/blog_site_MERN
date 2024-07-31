import React from 'react'
import bannerPoastImage from '../../assets/post-banner.png'
import Button from '../button/Button';

const TwoColumnPost = () => {
  return (
     <section className='w-full'>
        <div className='w-full max-w-[1512px] mx-auto px-4 lg:px-16 xl:px-20 py-20'>
               <h2 className='text-3xl font-bold mb-10'>Our Recent Post</h2>
            <div className='flex flex-col lg:flex-row justify-center items-center gap-20'>
            <div className='w-full lg:w-2/4 rounded-xl overflow-hidden '>
               <img src={bannerPoastImage} className='w-full h-full min-h-[400px] object-cover'/>
            </div>
            <div className='w-full lg:w-2/4'>
               <h4 className='text-sm font-semibold mb-6'>DEVELOPMENT <span className='text-xs text-gray-400'>16 March 2023</span></h4>
               <h3 className='text-2xl font-bold mb-6'>How to make a Game look more attractive with New VR & AI Technology</h3>
               <p className='mb-10 font-normal text-gray-500'>Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we’re committed to making AI accessible to everyone.
               </p>
               <Button variant='tertiary' text='Read More'/>
            </div>
            </div>

            
        </div>
     </section>
  )
}

export default TwoColumnPost;