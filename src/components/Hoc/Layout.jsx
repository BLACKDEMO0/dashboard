import React from 'react'
import Navitems from '../navigation/Navitems'
import Home from './home'
import Variation from './Variation'

function Layout() {
  return (
    <div className='bg-red-500 h-screen overflow-hidden'>
        <div className='h-14 bg-white'>
        <Navitems />
        </div>
        <div className='grid grid-cols-12 w-full h-full'>
            <div className='bg-yellow-500 col-span-2'>
              
              
            </div>
            <div className='col-span-10 px-10 py-6 bg-gray-100 overflow-scroll '>
            <Home/>
      <Variation/>


            </div>
        </div>
    </div>
  )
}

export default Layout