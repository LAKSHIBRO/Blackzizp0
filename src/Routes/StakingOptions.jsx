import React, { useState } from 'react';
import { TuneRounded, ArrowDropDownRounded,ChevronRight } from '@mui/icons-material';
import bitcoin from '../Assets/Icons/bitcoin coin.png';
import rank from '../Assets/Icons/rank.png';
import CoinCarousel from '../components/CoinCarousel';
import StakingSlider from '../components/StakingSlider';
import {Search,Menu } from '@mui/icons-material';
import commonbg from '../Assets/images/gergeg-01.png';
import AnimatedImage from '../components/AnimatedBG';



const StakingOptions = () => {
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

                <div className='flex flex-col dash-body w-full h-screen p-8 overflow-y-scroll' id="style-6">
                    <h2 className='text-[24px] font-semibold text-white'>Staking Option List</h2>
                    <h3 className='text-[18px] font-normal text-[#E08E20]'>Dashboard > Staking </h3>


                    <div className="lg:w-1/3 md:w-full rounded-md border-[1px] border-[#565656] h-auto flex flex-col mt-5 p-5 bg-[#151515]">
                        <div className='flex flex-col mt-5 w-full space-y-5'>
                            <span className='text-white text-[14px] uppercase'>Select Maturity Years</span>
                            <div className='w-full rounded-[6px] h-[44px] bg-[#565656] bg-opacity-30 border-[1px] border-[#565656] flex flex-row justify-center items-center'>

                                <input type="text" className='w-[80%] h-full p-2 bg-transparent outline-none text-white' />
                                <div className=' h-[44px] w-[10%] rounded-bl-[6px] rounded-tl-[6px] justify-center items-center flex'>
                                    <span className='text-[16px] text-[#FFA524]'></span>
                                </div>
                            </div>
                        </div>


                        <div className='flex flex-col mt-5 w-full space-y-5'>
                            <span className='text-white text-[14px] uppercase'>Select Maturity Type</span>
                            <div className='w-full rounded-[6px] h-[44px] bg-[#565656] bg-opacity-30 border-[1px] border-[#565656] flex flex-row justify-center items-center'>

                                <input type="text" className='w-[80%] h-full p-2 bg-transparent outline-none text-white' />
                                <div className=' h-[44px] w-[10%] rounded-bl-[6px] rounded-tl-[6px] justify-center items-center flex'>
                                    <span className='text-[16px] text-[#FFA524]'></span>
                                </div>
                            </div>
                        </div>


                        <div className='w-full flex flex-row mt-5 space-x-5'>
                            <button className='text-[10px] font-semibold text-[#151515] uppercase bg-[#FFA524] w-[120px] h-[32px] rounded-md'>Filter Options</button>
                            <button className='text-[10px] font-semibold text-[#151515] uppercase bg-[#FFA524] w-[120px] h-[32px] rounded-md'>clear form</button>
                        </div>

                    </div>


                    <div className='mt-[54px] w-full h-auto py-5 pb-5 border-collapse border-t-[1px] border-[#565656] border-b-[1px] '>

                        <StakingSlider />

                    </div>

                    <div className='mt-[54px] w-full h-auto py-5 pb-5 border-collapse  border-[#565656] border-b-[1px]'>

                        <StakingSlider />

                    </div>

                    <div className='mt-[54px] w-full h-auto py-5 pb-5 border-collapse  border-[#565656] border-b-[1px] '>

                        <StakingSlider />

                    </div>

                    <div className='mt-[54px] w-full h-auto py-5 pb-5 border-collapse  border-[#565656] border-b-[1px] mb-[128px]'>

                        <StakingSlider />

                    </div>




                </div>
                <div className='w-full h-full absolute object-center -z-20 '>
                    <AnimatedImage/>
                </div>
            </div>
        </div>
    );
}

export default StakingOptions;