import React, { useState, useEffect } from 'react';
import AnimatedImage from '../components/AnimatedBG';
import * as Icons from '@mui/icons-material';





const MyBVPoints = () => {




    const bvPoints = [
        { text: 'Left BV Points', Icon: 'ChevronLeft', bv: '1500'  },
        { text: 'Right BV Points', Icon: 'ChevronRight', bv: '0' },
        { text: 'Total BV Earned', Icon: 'AccountBalanceWallet', bv: '1500' },

    ];

    return (
        <div className='w-full bg-[#1E1E1E] h-full fixed right-0 flex flex-col '>

            <div className='res-body lg:ml-[300px] md:ml-[100px]  flex flex-col'>
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
                    <h2 className='text-[24px] font-semibold text-white'>My BV Points</h2>
                    <h3 className='text-[18px] font-normal text-[#E08E20]'>Dashboard > My BV Points </h3>


                    <div className="w-full justify-center items-center h-auto flex flex-col mt-5 p-5 ">




                        <div className='flex flex-col w-full justify-center items-center space-y-3 relative '>

                            <div className='bvpoints w-full flex flex-wrap gap-5 justify-center'>
                                {bvPoints.map((div, index) => {
                                    const Icon = Icons[div.Icon]; // Get the icon component based on the icon name

                                    return (
                                        <div
                                            key={index}
                                            className={`md:w-2/12 w-full h-[128px] rounded-md border-[1px] cursor-pointer justify-center items-center flex flex-row space-x-5 relative overflow-hidden bg-[#151515]`}
                                        >

                                            <div className='w-[44px] h-[44px] flex justify-center items-center bg-[#E08E20] text-[#E08E20] bg-opacity-10 rounded-full'>
                                                {Icon && <Icon />}
                                            </div>
                                            <div className='z-10  text-white justify-center items-center flec flex-col'>
                                                {div.text}
                                                <h2 className='text-[22px] text-white'>{div.bv} BV</h2>
                                            </div>
                                        </div>


                                    );
                                })}

                            </div>


                        </div>




                    </div>









                </div>
                <div className='w-full h-full absolute object-center -z-20 '>
                    <AnimatedImage />
                </div>
            </div>
        </div>
    );
}

export default MyBVPoints;