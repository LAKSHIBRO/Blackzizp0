import React, { useState } from 'react';
import { TuneRounded, ArrowDropDownRounded, ChevronRight, Info } from '@mui/icons-material';
import bitcoin from '../Assets/Icons/bitcoin coin.png';
import rank from '../Assets/Icons/rank.png';
import CoinCarousel from '../components/CoinCarousel';
import StakingSlider from '../components/StakingSlider';
import { Search, Menu } from '@mui/icons-material';
import commonbg from '../Assets/images/gergeg-01.png';
import AnimatedImage from '../components/AnimatedBG';
import wallet from '../Assets/Icons/bitcoin-wallet.png';
import QR from '../Assets/Icons/generatedQrCode.png';
import FullWidthTabs from '../components/TableTab';





const TransferFunds = () => {
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
                    <h2 className='text-[24px] font-semibold text-white'>Transfer Funds</h2>
                    <h3 className='text-[18px] font-normal text-[#E08E20]'>Dashboard > My Wallet > Transfer Funds </h3>


                    <div className="lg:w-1/3 md:w-full space-y-3 rounded-md border-[1px] border-[#565656] h-auto flex flex-col mt-5 p-5 bg-[#151515]">
                        <div className='flex flex-col mt-5 w-full justify-between items-center p-5 space-y-3'>
                            <span className='text-[16px] text-[#E08E20]'><Info fontSize='large' /></span>
                            <p className='text-white text-center'>Peer to Peer fund transfers are only possible with uplink users.
                                Please note that <span className='text-[#E08E20] font-bold'>5%</span> handling fee will be added with the every transfer</p>
                        </div>
                        <div className='flex flex-col justify-start space-y-2  w-full '>
                            <span className='text-[14px] text-[#ffffff] text-left'>Select User</span>
                            <div className='w-full sm:h-[44px] bg-[#565656] p-2 bg-opacity-10 rounded-[3px] relative flex justify-between items-center'>
                                <select className='bg-transparent outline-none w-full border-none p-2 text-white'>
                                    <option value="10" className='text-[#151515]'>xxx</option>
                                    <option value="20" className='text-[#151515]'>xxx</option>
                                    <option value="30" className='text-[#151515]'>xxx</option>
                                    <option value="40" className='text-[#151515]'>xxx</option>
                                    <option value="50" className='text-[#151515]'>xxx</option>
                                </select>

                            </div>

                        </div>

                        <div className='flex flex-col justify-start space-y-2  w-full '>
                            <span className='text-[14px] text-[#ffffff] text-left'>Transfer Ammount</span>
                            <div className='w-full sm:h-[44px] bg-[#565656] p-2 bg-opacity-10 rounded-[3px] relative flex justify-between items-center'>
                                <input type="text" className='bg-transparent oultine-none w-full border-none p-2 text-white' />

                            </div>

                        </div>

                        <button className='w-full h-[44px] rounded-md font-bold text-[12px] text-[#151515] bg-gradient-to-r from-[#ffd62d] to-[#ffa524]'>Transfer</button>


                    </div>














                </div>
                <div className='w-full h-full absolute object-center -z-20 '>
                    <AnimatedImage />
                </div>
            </div>
        </div>
    );
}

export default TransferFunds;