import React, { useState, useEffect } from 'react';
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
import * as Icons from '@mui/icons-material';
import BTC from '../Assets/Icons/btc.png';
import USDT from '../Assets/Icons/usdt.png';
import ETH from '../Assets/Icons/ethereium.png';
import LTC from '../Assets/Icons/litcoin.png';
import ADA from '../Assets/Icons/ada.png';





const MyWithdrawals = () => {

    const [selectedOption, setSelectedOption] = useState(null);

    const handleDivClick = (index) => {
        setSelectedOption(index);

    };






    const wmDivs = [
        { text: 'USDT', Icon: 'CurrencyBitcoin', image: USDT, bg: '#15d5b8' },
        { text: 'Bitcoin', Icon: 'CurrencyBitcoin', image: BTC, bg: '#ffd62d' },
        { text: 'Etherium', Icon: 'CurrencyBitcoin', image: ETH, bg: '#7594de' },
        { text: 'Ada', Icon: 'CurrencyBitcoin', image: ADA, bg: '#5d87bf' },
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

                <div className='flex flex-col dash-body w-full h-screen p-8 overflow-y-scroll' id="style-6">
                    <h2 className='text-[24px] font-semibold text-white'>Transfer Funds</h2>
                    <h3 className='text-[18px] font-normal text-[#E08E20]'>Dashboard > My Wallet > Transfer Funds </h3>


                    <div className="w-full rounded-md border-[1px] border-[#565656] h-auto flex flex-col mt-5 p-5 bg-[#151515]">

                        <div className='flex flex-col mt-5 w-full justify-start space-y-3 relative'>
                            <h2 className='text-[20px] text-white font-semibold uppercase'>Withdrawal Request</h2>
                            <div className='flex flex-col mt-3'>
                                <h2 className="text-[20px] font-normal text-[#ffffff]">Current Balance</h2>
                                <h2 className="text-[20px] font-normal text-[#E08E20]">USDT 100.56</h2>
                            </div>
                        </div>

                        <div className='flex flex-col justify-start space-y-2  w-full relative mt-5'>
                            <span className='text-[14px] text-[#ffffff] text-left'>Withdrawal Ammount</span>
                            <div className='w-full sm:h-[44px] bg-[#565656] p-2 bg-opacity-10 rounded-[3px] relative flex justify-between items-center'>
                                <input type="text" className='bg-transparent oultine-none w-full border-none p-2 text-white' />

                            </div>
                        </div>


                        <div className='flex flex-col w-full justify-start space-y-3 relative mt-[56px]'>
                            <h2 className='text-[20px] text-white font-semibold uppercase'>select withdrawal method</h2>

                            <div className='w-full flex flex-wrap gap-5 justify-center'>
                                {wmDivs.map((div, index) => {
                                    const Icon = Icons[div.Icon]; // Get the icon component based on the icon name

                                    return (
                                        <div
                                            key={index}
                                            className={`wm w-2/12 h-[128px] rounded-md border-[1px] cursor-pointer justify-center items-center flex flex-col relative overflow-hidden`}
                                            style={{
                                                borderColor: selectedOption === index ? div.bg : '#565656',
                                                color: selectedOption === index ? div.bg : 'white',
                                            }}
                                            onClick={() => handleDivClick(index)}
                                        >
                                            <div className="coin-icon w-[80px] h-[80px] relative z-10">
                                                <img src={div.image} alt="" className="w-full h-full object-cover z-10" />
                                            </div>
                                            <div className='z-10 font-bold'>
                                                {div.text}
                                            </div>

                                            <div
                                                key={index}
                                                className="bg-trans h-[50px] w-[50px] rounded-full absolute z-0 -bottom-[55px] -right-[55px]"
                                                style={{ backgroundColor: div.bg }}>

                                            </div>
                                        </div>


                                    );
                                })}

                            </div>

                            <div className='w-3/12 h-[32px] rounded-md bg-white flex justify-center items-center mt-5'>
<h2 className='text-[10px] font-bold capitalize'>5% will be added to every withdrawal request.</h2>
                            </div>
                        </div>

                        <button className='w-full h-[44px] mt-5 rounded-md font-bold text-[16px] text-[#151515] bg-gradient-to-r from-[#ffd62d] to-[#ffa524]'>Withdraw</button>


                    </div>

                    <div className='w-full p-5 bg-[#1A1A1A] mt-8 mb-[128px] rounded-[14px]'>
                        <div className='table-top-row w-full flex flex-row justify-between items-center'>
                            <div className='flex flex-row justify-center items-center space-x-3'>
                                <span className='text-[14px] text-[#E08E20]'><TuneRounded /></span>
                                <div className='sm:w-[144px] sm:h-[44px] bg-[#565656] bg-opacity-10 rounded-[3px] relative flex justify-between items-center'>
                                    <input type="text" className='bg-transparent oultine-none sm:w-[108px] border-none p-2 text-white' />
                                    <span className='text-[10px] text-[#E08E20]'><ArrowDropDownRounded /></span>
                                </div>
                                <span className='text-white font-normal text-[12px] '>entries</span>
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
                                <th className='uppercase text-[12px] text-white p-2 border-[#565656] border-r-[1px]  border-opacity-40'>WITHDRAWAL REQUEST TYPE</th>
                                <th className='uppercase text-[12px] text-white p-2 border-[#565656] border-r-[1px] border-opacity-40'>AMOUNT</th>
                                <th className='uppercase text-[12px] text-white p-2 border-[#565656] border-r-[1px] border-opacity-40'>REMARKS</th>
                                <th className='uppercase text-[12px] text-white p-2 border-[#565656] border-r-[1px] border-opacity-40'>REVERSIBLE</th>
                                <th className='uppercase text-[12px] text-white p-2 border-[#565656] border-r-[1px] border-opacity-40'>ACTION DATE</th>
                                <th className='uppercase text-[12px] text-white p-2 border-[#565656] border-r-[1px] border-opacity-40'>WITHDRAWAL STATUS</th>
                                <th className='uppercase text-[12px] text-white p-2' >CREATED AT</th>

                                <tbody>
                
                                </tbody>
                            </table>


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

export default MyWithdrawals;