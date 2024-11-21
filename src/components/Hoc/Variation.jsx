import React from "react";
import { IoIosDesktop } from "react-icons/io";
import { FaRedhat } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";

function Variation() {
  const data = [
    {
      poisa: "1M",
      title: "cash deposit",
      image:
        "https://images.unsplash.com/photo-1686061593213-98dad7c599b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxpbmUlMjBjaGFydHxlbnwwfHwwfHx8MA%3D%3D",
      icons: <IoIosDesktop />,
      total: "3M",
      description: {
        value: "54.3%",
        text: "down last 30 days",
      },
    },
    {
      poisa: "3M",
      title: "Invested Dividents",
      image:
        "https://images.unsplash.com/photo-1686061593213-98dad7c599b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxpbmUlMjBjaGFydHxlbnwwfHwwfHx8MA%3D%3D",
      icons: <FaRedhat />,
      total: "1M",
      description: {
        value: "14.1%",
        text: "Compared to YoY",
      },
    },
    {
      poisa: "$276",
      title: "Withdrawals",
      image:
        "https://images.unsplash.com/photo-1686061593213-98dad7c599b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxpbmUlMjBjaGFydHxlbnwwfHwwfHx8MA%3D%3D",
      icons: <IoDiamondOutline />,
      total: "3M",
      description: {
        value: "21.8%",
        text: "Down by ",
      },
    },
  ];
  return (
    <div className="flex h-fit  mx-auto flex-col gap-5">
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
      <div className=" grid grid-cols-3 h-72 gap-10  ">
        {data.map((val, i) => {
          return (
            <div key={i} className="shadow-md shadow-gray-500 h-32 relative">
              <div className="absolute top-0">
                <img className="bg-slate-500" src={val.image} />
              </div>
              <div className="relative text-center  flex flex-col gap-1 top-5 z-10">
                <div
                  className={`flex justify-center text-4xl ${
                    i == 0
                      ? "text-yellow-500"
                      : i == 1
                      ? "text-green-500 "
                      : "text-red-500"
                  } `}
                >
                  {val.icons}
                </div>
                <div className="text-3xl text-gray-600">{val.poisa}</div>
                <div
                  className={`font-semibold ${
                    i == 0
                      ? "text-yellow-500"
                      : i == 1
                      ? "text-green-500 "
                      : "text-red-500"
                  } `}
                >
                  {val.title}
                </div>

                <div className="flex text-center justify-center items-center gap-2">
                  <div className="text-red-600">{val.description.value}</div>
                  <div>{val.description.text}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Variation;
