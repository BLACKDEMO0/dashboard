import React from 'react'
import Navitems from '../navigation/Navitems'
import Home from './home'
import Variation from './Variation'
import Sidebar from './sidebar'
import Complete_result from '../complete_result'
import Dynamictable from '../home.jsx/dynamictable'
import Timeline from '../home.jsx/Timeline'

function Layout() {
  return (
    <div className=' h-screen overflow-hidden'>
        <div className='h-14 bg-white'>
        <Navitems />
        </div>
        <div className='grid grid-cols-12 w-full h-full'>
            <div className='bg-white-500 col-span-2'>
            <Sidebar/>
              
            </div>
            <div className='col-span-10 px-10 py-6 bg-gray-100 overflow-scroll '>
            <Home/>
      <Variation/>

      <div className='pb-24'>
        <Complete_result /> 

      <div className='grid grid-cols-5  gap-10 pt-10'>
        <div className=' col-span-2  bg-slate-200'><Timeline/></div>
        <div className=' col-span-3  bg-slate-200'><Dynamictable/></div>
      </div>
      </div>


            </div>
        </div>
        {/* <div>
             <div><Chartlist/></div> 
             <div><Tasklist/></div>

             
            </div> */}
    </div>
  )
}

  export default Layout