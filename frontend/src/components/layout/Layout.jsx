import React from 'react'
import Navbar from '../navbar/Navbar'
import Cta from '../cta/Cta'
import Footer from '../footer/Footer'

const Layout = ({children}) => {
  return (
     <React.Fragment>
        <Navbar/>
        {children}
        <Cta/>
        <Footer/>
     </React.Fragment>
  )
}

export default Layout