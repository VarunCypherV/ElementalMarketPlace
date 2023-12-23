import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'


function Layouts({children}) {
  return (
    <div>
        <NavBar/>
        <div>
            {children}
        </div>
        <Footer/>
    </div>
  )
}

export default Layouts

