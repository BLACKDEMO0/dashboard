import React from "react";
import { AiTwotoneRocket } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiPagesLine } from "react-icons/ri";
import { AiTwotoneAppstore } from "react-icons/ai";
import { IoDiamondOutline } from "react-icons/io5";
import { PiTaxi } from "react-icons/pi";
import { CiViewTable } from "react-icons/ci";
import { IoPieChartOutline } from "react-icons/io5";
import { MdPieChartOutline } from "react-icons/md";
import { LuBarChartHorizontal } from "react-icons/lu";
import { GiChart } from "react-icons/gi";
import { FaRegChartBar } from "react-icons/fa6";
import { FiBarChart2 } from "react-icons/fi";
import { HiOutlineChartPie } from "react-icons/hi2";


function Sidebar() {
  const data = [
    {
      title: "MENU",
      sub: [
        {
          icon: <AiTwotoneRocket />,
          headtitle: "Dashboard",
          subdata: [
            { title: "Analytic" },
            { title: "Commerce" },
            { title: "Sales" },
            { title: "Minimal" },
            { title: "CRM" },
          ],
          arrow: <MdKeyboardArrowDown />,
        },
        {
          icon: <RiPagesLine />,
          headtitle: "Pages",
          subdata: [
            { title: "Login" },
            { title: "Login box" },
            { title: "Register" },
            { title: "Register Boxed" },
            { title: "Forgot Password " },
          ],
          arrow: <MdKeyboardArrowDown />,
        },
        {
          icon: <AiTwotoneAppstore />,
          headtitle: "Application",
          subdata: [
            { title: "Mail Box" },
            { title: "Chart" },
            { title: "FQU Section" },
            { title: "Formus" },
          ],
          arrow: <MdKeyboardArrowDown />,
        },
      ],
    },
    {
      title: "UI COMPONENT",
      sub: [
        {
          icon: <IoDiamondOutline />,
          headtitle: "Elements",
          subdata: [
            { title: "Button" },
            { title: "Dropdown" },
            { title: "icons" },
            { title: "Badges" },
            { title: "Card" },
          ],
          arrow: <MdKeyboardArrowDown />,
        },
        {
          icon: <PiTaxi />,
          headtitle: "Components",
          subdata: [
            { title: "Tabs" },
            { title: "Maps" },
            { title: "Notification" },
            { title: "Modals" },
            { title: "Progress Bar" },
          ],
          arrow: <MdKeyboardArrowDown />,
        },
        {
          icon: <CiViewTable />,

          headtitle: "Table",
          subdata: [
            { title: "Data Table" },
            { title: "Grid Table" },
            { title: "Regular Table" },
          ],
          arrow: <MdKeyboardArrowDown />,
        },
      ],
    },

    {
      title: "DASHBOARD WIDGETS",
      sub: [
        {
          icon:<FaRegChartBar />,
          headtitle: "Chart Box 1",
        },
        {
          icon: <FiBarChart2 />,
          headtitle: "Chart Box 2",
        },
        {
          icon: <GiChart />,
          headtitle: "Chart Box 3",
        },
        {
          icon:<HiOutlineChartPie /> ,
          headtitle: "Profile Box",
        },
      ],
    },

    {
      title: "FORMS",
      sub: [
        {
          icon: <AiTwotoneRocket />,
          headtitle: "Elements",
          subdata: [
            { title: "Control" },
            { title: "Layout" },
            { title: "Validation" },
            { title: "Wizard" },
          ],
          arrow: <MdKeyboardArrowDown />,
        },
        {
          icon: <RiPagesLine />,
          headtitle: "Widgates",
          subdata: [
            { title: "Login" },
            { title: "Login box" },
            { title: "Register" },
            { title: "Register Boxed" },
            { title: "Forgot Password " },
          ],
          arrow: <MdKeyboardArrowDown />,
        },
        {
          title: "MENU",
          sub: [
            {
              icon: <AiTwotoneRocket />,
              headtitle: "Dashboard",
              subdata: [
                { title: "Analytic" },
                { title: "Commerce" },
                { title: "Sales" },
                { title: "Minimal" },
                { title: "CRM" },
              ],
              arrow: <MdKeyboardArrowDown />,
            },
            {
              icon: <RiPagesLine />,
              headtitle: "Pages",
              subdata: [
                { title: "Login" },
                { title: "Login box" },
                { title: "Register" },
                { title: "Register Boxed" },
                { title: "Forgot Password " },
              ],
              arrow: <MdKeyboardArrowDown />,
            },
            {
              icon: <AiTwotoneAppstore />,
              headtitle: "Application",
              subdata: [
                { title: "Mail Box" },
                { title: "Chart" },
                { title: "FQU Section" },
                { title: "Formus" },
              ],
              arrow: <MdKeyboardArrowDown />,
            },
          ],
        },
        // {
        //   title: "DASHBOARD WIDGETS",
        //   sub: [
        //     {
        //        icon:<IoPieChartOutline/>,
        //       headtitle: "Chart Box 1",
        //     },
        //     {
        //       icon: <IoPieChartOutline />,
        //       headtitle: "Chart Box 2",
        //     },
        //     {
        //       icon: <IoPieChartOutline />,
        //       headtitle: "Chart Box 3",
        //     },
        //     {
        //       icon: <IoPieChartOutline />,
        //       headtitle: "Profile Box",
        //     },
        //   ],
        // },
      ],
    },
    {
      title: "CHARTS",
      sub: [
        {
          icon:<IoPieChartOutline/>,
          headtitle: "ChartUS",
        },
        {
          icon: <MdPieChartOutline />,
          headtitle: "Apex Charts",
        },
        {
          icon: <LuBarChartHorizontal />,
          headtitle: "Chart Sparklines",
        },
        {
          icon: <GiChart />,
          headtitle: "Profile Box",
        },
      ],
    },
  ];
  return (
    <div className="h-screen scroll overflow-scroll pb-20">
      {data.map((val, i) => {
        return (
          <div key={i}>
            <div>
              <div className="text-xs text-left py-3 text-blue-700 p-8 font-bold">
                {val.title}
              </div>
              <div>
                {val.sub.map((item, ind) => {
                  return (
                    <div className="px-4 py-2">
                      <div className="flex items-center justify-between">
                        <div className="flex gap-2 items-center">
                          <div className="text-2xl text-gray-500">
                            {item.icon}
                          </div>
                          <div className="text-gray-600">{item.headtitle}</div>
                        </div>
                        <div className="text-gray-500">{item.arrow}</div>
                      </div>

                      <div className="mt-2">
                        {item.subdata &&
                          item.subdata.map((men, inds) => {
                            return (
                              <div className="w-8/12 mx-auto py-2">
                                <div className="text-gray-500">{men.title}</div>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Sidebar;
