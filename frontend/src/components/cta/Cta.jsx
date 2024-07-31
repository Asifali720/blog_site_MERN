import React from 'react'
import pattern from '../../assets/pattern.png'

const Cta = () => {
  return (
    <section className='bg-[#7C4EE4] w-full relative overflow-hidden'>
       <img src={pattern} alt='' className='absolute -top-10 left-0'/>
       <img src={pattern} alt='' className='absolute -bottom-20 right-0 rotate-180'/>
      <div className='w-full max-w-[750px] mx-auto py-20'>
          <h2 className='text-white font-bold text-3xl text-center mb-10'>Get our stories delivered From us to your inbox weekly.</h2>
          <form action="" className='flex items-center justify-center gap-1 mb-6'>
            <input type="email" name="" id="" className='border border-white  py-2 px-6 text-sm rounded-md'  placeholder='Your email'/>
            <button className='border border-white text-white py-2 px-6 text-sm rounded-md'>Get started</button>
          </form>
          <p className='text-white/70 text-xs text-center w-full max-w-[320px] mx-auto'>Get a response tomorrow if you submit by 9pm today. If we received after 9pm will get a reponse the following day.</p>
      </div>
    </section>
  )
}

export default Cta;