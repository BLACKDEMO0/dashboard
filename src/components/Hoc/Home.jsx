import React from "react";
import { IoCarSportOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { IoBagRemoveOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";


function    Home() {
  return (
    <div className="flex justify-between  my-8">
      <div className="flex gap-4">
        <div className="flex items-center shadow-lg rounded-md justify-center text-5xl text-red-400  bg-white h-16 w-16 font-sm">
          <IoCarSportOutline />
        </div>
       <div className="flex flex-col">
       <div className="text-xl">Analytics Dashboard</div>
       <div className="text-gray-400">This is an example dashboard created using build-in elements and components.</div>
       </div>
      </div>



      <div className="flex items-center gap-3">
        <div className="flex justify-center items-center bg-black text-white h-8 w-8 rounded-md"><FaStar /></div>
        <div className="flex justify-center items-center rounded-md text-white py-2 h-fit  gap-2  w-32 bg-blue-400">
            <div><IoBagRemoveOutline /></div>
            <div>Button</div>
            <div><FaAngleDown /></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
