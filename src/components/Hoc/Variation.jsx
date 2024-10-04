import React from "react";
import { IoIosDesktop } from "react-icons/io";
import { FaRedhat } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";

function Variation() {
  const data = [
    {
      title: "cashd deposit",
      image:
        "https://images.unsplash.com/photo-1686061593213-98dad7c599b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxpbmUlMjBjaGFydHxlbnwwfHwwfHx8MA%3D%3D",
      icons: <IoIosDesktop />,
      total: "3M",
      description: 
        {
          value: "54.3%",
          text: "down last 30 days",
        },


      
    },
    {
        
      title: "Invested Dividents",
      image:
        "https://images.unsplash.com/photo-1686061593213-98dad7c599b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxpbmUlMjBjaGFydHxlbnwwfHwwfHx8MA%3D%3D",
      icons: <FaRedhat />,
      total: "1M",
      description: 
        {
          value: "14.1%",
          text: "Compared to YoY",
        },

    },{

        title: "Withdrawals",
        image:
          "https://images.unsplash.com/photo-1686061593213-98dad7c599b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxpbmUlMjBjaGFydHxlbnwwfHwwfHx8MA%3D%3D",
        icons: <IoDiamondOutline />,
        total: "3M",
        description: 
          {
            value: "21.8%",
            text: "Down by ",
          },
    }
  ];
  return (
    <div className="flex  mx-auto flex-col gap-5">
    <div className="flex gap-10">
    <div className="h-11 border w-28 flex justify-center items-center">
        {" "}
        Variation 1
      </div>
      <div className="bg-blue-700 h-10 flex justify-center items-center rounded-md text-white w-28">
        {" "}
        Variation 2
      </div>
        </div> 
      <div className=" grid grid-cols-3 gap-10  ">
        {data.map((val, i) => {
          return(
            <div key={i} className="shadow-md shadow-gray-500 relative">
            <div className="absolute top-0"><img src={val.image} /></div>
           <div className="relative z-10">
           <div>{val.title}</div>
            <div>{val.icons}</div>
            <div>{val.description.text}</div>
            <div>{val.description.value}</div>
           </div>


</div>
          );
           


         
        })}
      </div>
    </div>
  );
}

export default Variation;
