import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import Button from '../button/Button'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-4 lg:px-16 xl:px-20 w-full max-w-[1512px] mx-auto'>
     <Link to='/'>
     <img src={logo} className='w-32'/>
     </Link>
     <div className='flex items-center gap-7'>
     <ul className='flex items-center gap-10'>
      <Link to='/'>
      <li className='text-black text-sm hover:text-[#7C4EE4]'>Home</li>
      </Link>
      <Link to='/about'>
      <li className='text-black text-sm hover:text-[#7C4EE4]'>About</li>
      </Link>
      <Link to='/blog'>
      <li className='text-black text-sm hover:text-[#7C4EE4]'>Blogs</li>
      </Link>
     </ul> 
     <Button variant='primary' text='contact us'/>
     </div>
     
    

    </nav>
  )
}

export default Navbar