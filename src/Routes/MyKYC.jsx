import React, { useState, useEffect } from "react";
import * as Icons from "@mui/icons-material";
import { TuneRounded, ArrowDropDownRounded } from "@mui/icons-material";
import { Switch } from "@material-ui/core";
import FormGroup from "@material-ui/core/FormGroup";
import bitcoin from "../Assets/Icons/bitcoin coin.png";
import rank from "../Assets/Icons/rank.png";
import CoinCarousel from "../components/CoinCarousel";
import StakingSlider from "../components/StakingSlider";
import { Search, Menu } from "@mui/icons-material";
import commonbg from "../Assets/images/gergeg-01.png";
import AnimatedImage from "../components/AnimatedBG";
import ToolTipPositions from "../components/NotificationPopUp";




import FormControlLabel from '@material-ui/core/FormControlLabel';

const MyKYC = () => {


  const [checked, setChecked] = React.useState(false);

  const toggleChecked = () => {
      setChecked((prev) => !prev);
  };



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
          <h2 className="text-[24px] font-semibold text-white">My KYC</h2>
          <h3 className="text-[18px] font-normal text-[#E08E20]">
            Dashboard > My KYC
          </h3>

          <div className="w-full rounded-md border-[1px] border-[#565656] h-auto flex flex-col mt-5 p-5 bg-[#151515]">
            

            <div className="dash-table mt-5 w-full overflow-x-auto">
              <table className="w-full border-[1px] border-[#565656] border-opacity-40">
                <th className="uppercase text-[12px] text-white p-2 border-[#565656] border-r-[1px]  border-opacity-40">
                  KYC TYPE
                </th>
                <th className="uppercase text-[12px] text-white p-2 border-[#565656] border-r-[1px] border-opacity-40">
                  # REQUIRED DOCUMENTS
                </th>
                <th className="uppercase text-[12px] text-white p-2 border-[#565656] border-r-[1px] border-opacity-40">
                  # UPLOADED DOCUMENTS
                </th>
                <th className="uppercase text-[12px] text-white p-2 border-[#565656] border-r-[1px] border-opacity-40">
                  STATUS
                </th>

                <tbody>
                  <tr className="w-full text-center">
                    <td className=" text-[12px] text-white p-2 border-[#565656] border-[1px] border-opacity-40 bg-[#1a1a1a]">
                      National Identity Card
                    </td>
                    <td className=" text-[12px] text-white p-2 border-[#565656] border-[1px] border-opacity-40 bg-[#1a1a1a]">
                      3
                    </td>
                    <td className=" text-[12px] text-white p-2 border-[#565656] border-[1px] border-opacity-40 bg-[#1a1a1a]">
                      3
                    </td>
                    <td className=" text-[12px] text-white p-2 border-[#565656] border-[1px] border-opacity-40 bg-[#1a1a1a] ">
                      <div className="w-[80px] justify-center items-center flex text-[10px] text-[#151515] h-[20px] font-semibold capitalize rounded-sm  bg-gradient-to-r from-[#ffd62d] to-[#ffa524] mx-auto">
                        approved
                      </div>
                    </td>
                  
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* <div className="w-full rounded-md border-[1px] border-[#565656] h-auto flex flex-col mt-5 p-5 bg-[#151515]">
            <div className="w-full justify-start items-center flex flex-row">
              <div className="flex flex-row justify-start items-center space-x-3 w-full ">
                <span className="text-[14px] text-[#ffffff] uppercase">
                  REQUIRED / OPTIONAL KYC ENTRIES
                </span>
              </div>
            </div>

            <div className="dash-table mt-5 w-full overflow-x-auto">
              <table className="w-full border-[1px] border-[#565656] border-opacity-40">
                <th className="uppercase text-[12px] text-white p-2 border-[#565656] border-r-[1px]  border-opacity-40">
                  KYC TYPE
                </th>
                <th className="uppercase text-[12px] text-white p-2 border-[#565656] border-r-[1px] border-opacity-40">
                  # REQUIRED DOCUMENTS
                </th>
                <th className="uppercase text-[12px] text-white p-2 border-[#565656] border-r-[1px] border-opacity-40">
                  STATUS
                </th>
                <tbody>
                  <tr className="w-full text-center">
                    <td className=" text-[12px] text-white p-2 border-[#565656] border-[1px] border-opacity-40 bg-[#1a1a1a] text-left">
                      Driving License
                    </td>
                    <td className=" text-[12px] text-white p-2 border-[#565656] border-[1px] border-opacity-40 bg-[#1a1a1a]">
                      2
                    </td>
                    <td className=" text-[12px] text-white p-2 border-[#565656] border-[1px] border-opacity-40 bg-[#1a1a1a] justify-center items-center">
                      <div className="w-[80px] justify-center items-center flex text-[10px] bg-[#FFFFFF] h-[20px] font-semibold capitalize rounded-sm  text-[#151515] mx-auto">
                        Required
                      </div>
                    </td>

                    <td className=" text-[12px] text-white p-2 border-[#565656] border-[1px] border-opacity-40 bg-[#1a1a1a] justify-center items-center">
                      <button className="w-[80px] justify-center items-center flex text-[10px] text-[#151515] h-[20px] font-semibold capitalize rounded-sm  bg-gradient-to-r from-[#ffd62d] to-[#ffa524] mx-auto">
                        Create Entry
                      </button>
                    </td>
                  </tr>

                  <tr className="w-full text-center">
                    <td className=" text-[12px] text-white p-2 border-[#565656] border-[1px] border-opacity-40 bg-[#1a1a1a] text-left">
                      Passport
                    </td>
                    <td className=" text-[12px] text-white p-2 border-[#565656] border-[1px] border-opacity-40 bg-[#1a1a1a]">
                      2
                    </td>
                    <td className=" text-[12px] text-white p-2 border-[#565656] border-[1px] border-opacity-40 bg-[#1a1a1a] justify-center items-center">
                      <div className="w-[80px] justify-center items-center flex text-[10px] bg-[#FFFFFF] h-[20px] font-semibold capitalize rounded-sm  text-[#151515] mx-auto">
                        Required
                      </div>
                    </td>

                    <td className=" text-[12px] text-white p-2 border-[#565656] border-[1px] border-opacity-40 bg-[#1a1a1a] justify-center items-center">
                      <button className="w-[80px] justify-center items-center flex text-[10px] text-[#151515] h-[20px] font-semibold capitalize rounded-sm  bg-gradient-to-r from-[#ffd62d] to-[#ffa524] mx-auto">
                        Create Entry
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div> */}


          
        </div>
        <div className="w-full h-full absolute object-center -z-20 ">
          <AnimatedImage />
        </div>
      </div>
    </div>
  );
};

export default MyKYC;
