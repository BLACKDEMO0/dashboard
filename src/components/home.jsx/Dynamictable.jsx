import React from 'react'

function Dynamictable() {
  
  const employees = [
    {
      name: "John Doe",
      position: "Software Engineer",
      office: "New York",
      age: 28,
      startDate: "2020-03-15",
      salary: "$120,000",
    },
    {
      name: "Jane Smith",
      position: "Product Manager",
      office: "San Francisco",
      age: 34,
      startDate: "2018-07-10",
      salary: "$135,000",
    },
    {
      name: "Michael Johnson",
      position: "Data Analyst",
      office: "Chicago",
      age: 29,
      startDate: "2019-09-01",
      salary: "$90,000",
    },
    {
      name: "Emily Davis",
      position: "UX Designer",
      office: "Austin",
      age: 26,
      startDate: "2021-01-20",
      salary: "$85,000",
    },
    {
      name: "John Doe",
      position: "Software Engineer",
      office: "New York",
      age: 28,
      startDate: "2020-03-15",
      salary: "$120,000",
    },
    {
      name: "Jane Smith",
      position: "Product Manager",
      office: "San Francisco",
      age: 34,
      startDate: "2018-07-10",
      salary: "$135,000",
    },
    {
      name: "Michael Johnson",
      position: "Data Analyst",
      office: "Chicago",
      age: 29,
      startDate: "2019-09-01",
      salary: "$90,000",
    },
    {
      name: "Emily Davis",
      position: "UX Designer",
      office: "Austin",
      age: 26,
      startDate: "2021-01-20",
      salary: "$85,000",
    }, {
      name: "John Doe",
      position: "Software Engineer",
      office: "New York",
      age: 28,
      startDate: "2020-03-15",
      salary: "$120,000",
    },
    {
      name: "Jane Smith",
      position: "Product Manager",
      office: "San Francisco",
      age: 34,
      startDate: "2018-07-10",
      salary: "$135,000",
    },
    {
      name: "Michael Johnson",
      position: "Data Analyst",
      office: "Chicago",
      age: 29,
      startDate: "2019-09-01",
      salary: "$90,000",
    },
    {
      name: "Emily Davis",
      position: "UX Designer",
      office: "Austin",
      age: 26,
      startDate: "2021-01-20",
      salary: "$85,000",
    },



    {
      name: "John Doe",
      position: "Software Engineer",
      office: "New York",
      age: 28,
      startDate: "2020-03-15",
      salary: "$120,000",
    },
    {
      name: "Jane Smith",
      position: "Product Manager",
      office: "San Francisco",
      age: 34,
      startDate: "2018-07-10",
      salary: "$135,000",
    },
    {
      name: "Michael Johnson",
      position: "Data Analyst",
      office: "Chicago",
      age: 29,
      startDate: "2019-09-01",
      salary: "$90,000",
    },
    {
      name: "Emily Davis",
      position: "UX Designer",
      office: "Austin",
      age: 26,
      startDate: "2021-01-20",
      salary: "$85,000",
    },
    {
      name: "John Doe",
      position: "Software Engineer",
      office: "New York",
      age: 28,
      startDate: "2020-03-15",
      salary: "$120,000",
    },
    {
      name: "Jane Smith",
      position: "Product Manager",
      office: "San Francisco",
      age: 34,
      startDate: "2018-07-10",
      salary: "$135,000",
    },
    {
      name: "Michael Johnson",
      position: "Data Analyst",
      office: "Chicago",
      age: 29,
      startDate: "2019-09-01",
      salary: "$90,000",
    },
    {
      name: "Emily Davis",
      position: "UX Designer",
      office: "Austin",
      age: 26,
      startDate: "2021-01-20",
      salary: "$85,000",
    },
    {

      name: "John Doe",
      position: "Software Engineer",
      office: "New York",
      age: 28,
      startDate: "2020-03-15",
      salary: "$120,000",
    },
    {
      name: "Jane Smith",
      position: "Product Manager",
      office: "San Francisco",
      age: 34,
      startDate: "2018-07-10",
      salary: "$135,000",
    },
    {
      name: "Michael Johnson",
      position: "Data Analyst",
      office: "Chicago",
      age: 29,
      startDate: "2019-09-01",
      salary: "$90,000",
    },
    {
      name: "Emily Davis",
      position: "UX Designer",
      office: "Austin",
      age: 26,
      startDate: "2021-01-20",
      salary: "$85,000",
    },
  ];
  

  
    
   
  
  return (
    <div className='flex flex-col gap-5 justify-between p-3  '>
    <div className='flex justify-between'>
    <div>DYNAMIC TABLE</div>
      <div className='flex gap-3'>
        <button className='bg-black text-white h-8 w-20 rounded-sm '>Refresh</button>
        <button className='bg-black text-white h-8 w-20 rounded-sm'>Remove</button>
      </div>
    </div>
<div className='overflow-scroll h-96 w-full relative'>
<table className='border-2 border-gray-400'>
        <thead className='sticky z-10 top-0 mb-44 '>
          <tr>
            <th align='left' className='border border-gray-400 p-3'>Name</th>
            <th align='left' className='border border-gray-400 p-3'>Position</th>
            <th align='left' className='border border-gray-400 p-3'>Office</th>
            <th align='left' className='border border-gray-400 p-3'>Age</th>
            <th align='left' className='border border-gray-400 p-3'>Start date</th>
            <th align='left' className='border border-gray-400 p-3'>Salary</th>

          </tr>
        </thead>
        <tbody >
        {employees.map((val, i)=>{
        return (
          <tr className='border-gray-500' key={i}>
            <td className='p-2 border border-gray-400'>{val.name}</td>
            <td className='p-2 border border-gray-400'>{val.position}</td>
            <td className='p-2 border border-gray-400'>{val.office}</td>
            <td className='p-2 border border-gray-400'>{val.age}</td>
            <td className='p-2 border border-gray-400'>{val.startDate}</td>
            <td className='p-2 border border-gray-400'>{val.salary}</td>


          </tr>




        );
        
      })}
      
        </tbody>
        <thead className='sticky bottom-0 z-10 mt-44 ' >
          <tr>
            <th align='left' className='border border-gray-400 p-3'>Name</th>
            <th align='left' className='border border-gray-400 p-3'>Position</th>
            <th align='left' className='border border-gray-400 p-3'>Office</th>
            <th align='left' className='border border-gray-400 p-3'>Age</th>
            <th align='left' className='border border-gray-400 p-3'>Start date</th>
            <th align='left' className='border border-gray-400 p-3'>Salary</th>

          </tr>
          </thead >
      </table>
</div>



































    </div>

  )
}

export default Dynamictable