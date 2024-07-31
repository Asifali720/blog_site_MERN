import React from 'react'
import Layout from '../components/layout/Layout'
import Button from '../components/button/Button';

const Error = () => {
  return (
    <Layout>
      <div className='w-full h-screen flex items-center justify-center'>
         <div className='flex flex-col items-center'>
              <h1 className='text-9xl text-[#7C4EE4] font-bold'>404</h1>
              <p className='text-xl font-medium my-3'>Oops! Page Not Found</p>
              <a href="/">
              <Button variant='primary' text='Go Back'/>
              </a>
         </div>
      </div>
    </Layout>
  )
}

export default Error;