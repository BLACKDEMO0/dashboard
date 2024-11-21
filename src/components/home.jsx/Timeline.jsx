import React from 'react'
import { CgMenuGridO } from "react-icons/cg";


function Timeline() {
    const data = [
        {
            questiion:'All Hands Meeting',
            ans:'Yet another one, at 15:00 PM'
        },
        {
            questiion:'Build the production release',
            ans:'Something not important'
        },
        {
            questiion:'All Hands Meeting',
            ans:'Yet another one, at 15:00 PM'
        },
        {
            questiion:'Build the production release',
            ans:'Something not important'
        },
        {
            questiion:'Build the production release',
            ans:'Yet another one, at 15:00 PM'
        },
        {
            questiion:'All Hands Meeting',
            ans:'Something not important'
        },
    ]
  return (
  <div>
      <div className='flex h-fit p-3  justify-between'>
        <div>TIMELINE EXAMPLE</div>
        <div><CgMenuGridO /></div>
    </div>
    {data.map((val, i)=>{
        return (
            < div className='p-3 border-gray-500' key={i}>
                <div>{val.questiion}</div>
                <div className='text-green-400 text-sm'>{val.ans}</div>
                
            </div>
            
           
           
            
        );
    })}
  </div>
  )
}   

export default Timeline