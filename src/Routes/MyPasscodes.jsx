import React, { useState } from 'react';
import { TuneRounded, ArrowDropDownRounded } from '@mui/icons-material';
import bitcoin from '../Assets/Icons/bitcoin coin.png';
import rank from '../Assets/Icons/rank.png';
import CoinCarousel from '../components/CoinCarousel';
import StakingSlider from '../components/StakingSlider';
import { Search, Menu } from '@mui/icons-material';
import commonbg from '../Assets/images/gergeg-01.png';
import AnimatedImage from '../components/AnimatedBG';



const MyPasscode = () => {
    return (
        <div className='w-full bg-[#1E1E1E] h-full fixed right-0 flex flex-col '>

            <div className='res-body lg:ml-[300px] md:ml-[100px] flex flex-col'>
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
                    <h2 className='text-[24px] font-semibold text-white'>My Passcodes</h2>
                    <h3 className='text-[18px] font-normal text-[#E08E20]'>Dashboard > My Passcodes</h3>


                    <div className="w-full rounded-md border-[1px] border-[#565656] h-auto flex flex-col mt-5 p-5 bg-[#151515]">


                        <div className='w-full justify-end items-center flex flex-row'>
                            <div className='flex flex-row justify-start items-center space-x-3 w-full '>
                                <button className='w-[128px] h-[44px] rounded-md bg-gradient-to-r from-[#ffd62d] to-[#ffa524] text-[#151515] font-bold text-[0.8rem] uppercase'>Add New</button>
                            </div>


                            <div className='flex flex-row justify-center items-center space-x-3'>
                                <span className='text-white font-normal text-[12px] '>Search</span>
                                <div className='sm:w-[200px] sm:h-[44px] bg-[#565656] bg-opacity-10 rounded-[3px] relative flex justify-between items-center'>
                                    <input type="text" className='bg-transparent oultine-none sm:w-[200px] border-none p-2 text-white' />
                                </div>
                            </div>
                        </div>



                        <div className='dash-table mt-5 w-full'>
                            <table className='w-full border-[1px] border-[#565656] '>
                                <th className='uppercase text-[12px] text-white p-2 border-[#565656] border-r-[1px]  border-opacity-40'>PASSCODE</th>
                                <th className='uppercase text-[12px] text-white p-2 border-[#565656] border-r-[1px] border-opacity-40'>TYPE</th>
                                <th className='uppercase text-[12px] text-white p-2 border-[#565656] border-r-[1px] border-opacity-40'>PASSCODE VALUE</th>
                                <th className='uppercase text-[12px] text-white p-2 border-[#565656] border-r-[1px] border-opacity-40'>TRANSFERRED AT</th>
                                <th className='uppercase text-[12px] text-white p-2 border-[#565656] border-r-[1px] border-opacity-40'>CREATED AT</th>
                                <th className='uppercase text-[12px] text-white p-2' >ACTION</th>

                                <tbody>
                                <tr className='w-full'>
                                        <td className=' text-[12px] text-white p-2 border-[#565656] border-[1px] border-opacity-40 bg-[#1a1a1a]'>xxxxxx</td>
                                        <td className=' text-[12px] text-white p-2 border-[#565656] border-[1px] border-opacity-40 bg-[#1a1a1a]'>xxxxxx</td>
                                        <td className=' text-[12px] text-white p-2 border-[#565656] border-[1px] border-opacity-40 bg-[#1a1a1a]'>xxxxxx</td>
                                        <td className=' text-[12px] text-white p-2 border-[#565656] border-[1px] border-opacity-40 bg-[#1a1a1a]'>xxxxxx</td>
                                        <td className=' text-[12px] text-white p-2 border-[#565656] border-[1px] border-opacity-40 bg-[#1a1a1a] justify-center  items-center'>
                                        xxxxxx
                                        </td>
                                        <td className=' text-[12px] text-white p-2 border-[#565656] border-[1px] border-opacity-40 bg-[#1a1a1a] justify-center  items-center'>
                                        xxxxxx
                                        </td>
                                    </tr>
                                    
                                </tbody>
                            </table>


                        </div>

                       

                       

                    </div>






                </div>
                <div className='w-full h-full absolute object-center -z-20 '>
                    <AnimatedImage/>
                </div>
            </div>
        </div>
    );
}

export default MyPasscode;