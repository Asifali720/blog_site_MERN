import React from 'react'
import logo from '../../assets/logo.png'
import drimble from '../../assets/Dribbble.png'
import instagram from '../../assets/Instagram.png'
import twitter from '../../assets/Twitter.png'
import behance from '../../assets/Behance.png'
const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <footer className='w-full bg-white px-20'>
     <div className='w-full max-w-[1512px] mx-auto py-14 border-b border-b-[#7C4EE4] flex items-center justify-center'>
      <div className='flex flex-col items-center justify-center'>
         <img src={logo} className='w-32 mb-10'/>
         <ul className='flex items-center justify-center gap-20 mb-10'>
            <li>
              <a href="/">
                Home
              </a>
              </li>
            <li>
              <a href="/blog">
              Blog
              </a>
              </li>
            <li>
              <a href="/about">
              About</a>
              </li>
            <li>
              <a href="/contact-us">
              Contact Us
              </a>
              </li>
         </ul>
         <div className='flex items-center justify-center gap-4 w-full'>
          <img src={drimble} alt=""  className='w-14 h-14 rounded-full'/>
          <img src={instagram} alt="" className='w-14 h-14 rounded-full'/>
          <img src={twitter} alt="" className='w-14 h-14 rounded-full'/>
          <img src={behance} alt="" className='w-14 h-14 rounded-full'/>
         </div>
      </div>
     </div>
     <p className='text-center py-6'>Copyright Ideapeel Inc ©{year}. All Rights Reserved</p>
    </footer>
  )
}

export default Footer