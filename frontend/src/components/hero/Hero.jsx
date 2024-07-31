import React from 'react'
import HeroSideImage from '../../assets/hero-side.png'
import Button from '../button/Button';
import pattern from '../../assets/pattern.png'

const Hero = () => {
  return (
    <section className='w-full bg-[#7c4ee4] relative'>
      <img src={pattern} alt='' className='absolute -top-20 left-0'/>
      <img src={pattern} alt='' className='absolute -bottom-20 right-0 rotate-180'/>

  <div className='w-full max-w-[1512px] mx-auto flex flex-col md:flex-row items-center  lg:gap-16 xl:gap-20 px-4 lg:px-16 xl:px-20 py-20'>
       <div className='w-full md:w-2/4'>
         <span className='block text-white font-bold text-sx mb-10'>Featured Post</span>
         <h1 className='text-white font-bold text-[32px] leading-6 mb-6'>How AI will Change the Future</h1>
         <p className='text-white text-base mb-10'>The future of AI will see home robots having enhanced intelligence, increased capabilities, and becoming more personal and possibly cute. For example, home robots will overcome navigation, direction</p>
         <Button variant='secondary' text='read more'/>
       </div>
       <div className='w-full md:w-2/4'>
         <img src={HeroSideImage} className='w-full object-cover' />
       </div>
    </div>

    </section>
  
  )
}

export default Hero;