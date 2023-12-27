import React, { useState, useEffect } from "react";
import AnimatedImage from "../components/AnimatedBG";
import * as Icons from "@mui/icons-material";
import BinaryTable from "../components/BinaryTable";

const MyGenealogy = () => {
  return (
    <div className="w-full bg-[#1E1E1E] h-full fixed right-0 flex flex-col ">
      <div className="res-body lg:ml-[300px] md:ml-[100px]  flex flex-col">
        {/* <div className='sm:h-[77px] bg-[#151515] flex flex-row w-full justify-start items-center space-x-5'>
                <span className='text-[16px] text-[#FFA524]'><Menu /></span>
                        <div className='w-[375px] rounded-[6px] h-[44px] bg-[#1E1E1E]  flex flex-row justify-center items-center'>
                           
                            <input type="text" className='w-[330px] h-full p-2 bg-transparent outline-none text-white ' placeholder='search...' />
                            <div className='h-[44px] w-[44px] bg-[#FFA524] rounded-tr-[6px] rounded-br-[6px] justify-center items-center flex'>
                                <span className='text-[16px] text-[#151515]'><Search /></span>
                            </div>
                        </div>
                </div> */}

        <div
          className="flex flex-col dash-body w-full h-screen sm:p-8 p-3 overflow-y-scroll pt-[66px] "
          id="style-6"
        >
          <h2 className="text-[24px] font-semibold text-white">My Genealogy</h2>
          <h3 className="text-[18px] font-normal text-[#E08E20]">
            Dashboard - My Genealogy
          </h3>

          <div className="w-full items-center flex justify-center h-auto  mt-5 md:p-5 ">
            <BinaryTable />
          </div>
        </div>
        <div className="w-full h-full absolute object-center -z-20 ">
          <AnimatedImage />
        </div>
      </div>
    </div>
  );
};

export default MyGenealogy;
