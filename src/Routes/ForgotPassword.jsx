import React, { useState, useEffect } from 'react';
import bg from '../Assets/images/loginbg.png';
import { Person, Lock, RemoveRedEye, Search, Phone } from '@mui/icons-material';
import { Routes, Route, useNavigate } from 'react-router-dom';
import CryptoBubbleChart from '../components/CryptoBubble';
import AnimateImage from "../components/animateImage";
import logo from "../Assets/images/logo.png";

const ForgotPassword = () => {

    const navigate = useNavigate();

    const navigateToDashboard = () => {
        navigate('/Dashboard');
    };
    const navigatetoLogin = () => {
        navigate('/');
    }



    const [countdown, setCountdown] = useState(60);

    useEffect(() => {
        const interval = setInterval(() => {
            if (countdown > 0) {
                setCountdown(countdown - 1);
            } else {
                clearInterval(interval);
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [countdown]);

    // Format the countdown to display as "mm:ss"
    const formattedCountdown = `${Math.floor(countdown / 60)
        .toString()
        .padStart(2, '0')}:${(countdown % 60).toString().padStart(2, '0')}`;


    return (
        <div className='w-full h-screen overflow-hidden fixed dlex justify-center items-center bg-gradient-to-br from-[#2d2d2d] via-[#151517] to-[#131314]'>
            <div className='flex w-full justify-between items-center h-full relative'>


                <div className='form-container md:w-[90%] lg:h-auto w-[90%] sm:w-[80%] mx-auto flex lg:flex-row flex-col rounded-[6px] z-10 relative justify-center items-center'>

                    <div className='lg:w-1/3 h-full flex flex-col p-8 rounded-br-[6px] rounded-tr-[6px] w-full'>
                        <div className="relative ">
                            <img src={logo} alt="" className="object-contain w-full" />
                        </div>
                        <h2 className='text-white text-[1.2rem] font-semibold'>Reset Your Passowrd</h2>
                        <h3 className='text-white text-[12px]'>Please enter the correct username</h3>

                        <div className='flex flex-col mt-5 w-full space-y-5'>
                            <span className='text-white text-[14px] uppercase'>username</span>
                            <div className='w-full rounded-[6px] h-[44px] bg-[#151515] border-[1px] border-[#FFA524] flex flex-row justify-center items-center'>
                                <div className='bg-[#FFA524] h-[44px] w-[44px] rounded-bl-[6px] rounded-tl-[6px] justify-center items-center flex'>
                                    <span className='text-[16px] text-[#151515]'><Person /></span>
                                </div>
                                <input type="text" className='w-full h-full p-2 bg-transparent outline-none text-white' />

                            </div>
                        </div>

                        <div className='w-full flex flex-row  space-x-5'>
                            <div className='flex flex-col mt-5 w-full space-y-5'>
                                <span className='text-white text-[14px] uppercase'>Contact</span>

                                <div className='flex flex-row space-x-5 w-full '>
                                    <div className=' flex justify-center items-center w-2/3'>
                                        <div className='w-full rounded-[6px] h-[44px] bg-[#151515] border-[1px] border-[#FFA524] flex flex-row justify-center items-center'>
                                            <div className='bg-[#FFA524] h-[44px] w-[44px] rounded-bl-[6px] rounded-tl-[6px] justify-center items-center flex'>
                                                <span className='text-[16px] text-[#151515]'><Phone /></span>
                                            </div>
                                            <input type="text" className='w-full h-full p-2 bg-transparent outline-none text-white' />

                                        </div>
                                    </div>

                                    <div className='w-1/3 '>
                                        <button
                                            onClick={navigateToDashboard}
                                            className='w-full rounded-[6px] uppercase text-[#151515] font-semibold h-[44px] bg-gradient-to-r from-[#FFA524] to-[#FFDC4A] flex flex-row justify-center items-center '>
                                            send code
                                        </button>
                                    </div>

                                </div>

                            </div>

                        </div>


                        <div className='w-full flex flex-row  space-x-5'>
                            <div className='flex flex-col mt-5 w-full space-y-5'>
                                <span className='text-white text-[14px] uppercase'>Enter 4 digit code</span>

                                <div className='flex flex-col w-full '>
                                    <div className=' flex justify-start items-center flex-row space-x-3'>
                                        <div className='w-[32px] rounded-[6px] h-[32px] bg-[#151515] border-[1px] border-[#FFA524] flex flex-row justify-center items-center'>
                                            <input type="text" className='w-full h-full p-2 bg-transparent outline-none text-white' />
                                        </div>
                                        <div className='w-[32px] rounded-[6px] h-[32px] bg-[#151515] border-[1px] border-[#FFA524] flex flex-row justify-center items-center'>
                                            <input type="text" className='w-full h-full p-2 bg-transparent outline-none text-white' />
                                        </div>
                                        <div className='w-[32px] rounded-[6px] h-[32px] bg-[#151515] border-[1px] border-[#FFA524] flex flex-row justify-center items-center'>
                                            <input type="text" className='w-full h-full p-2 bg-transparent outline-none text-white' />
                                        </div>
                                        <div className='w-[32px] rounded-[6px] h-[32px] bg-[#151515] border-[1px] border-[#FFA524] flex flex-row justify-center items-center'>
                                            <input type="text" className='w-full h-full p-2 bg-transparent outline-none text-white' />
                                        </div>
                                    </div>
                                    <div>
                                        <span className='text-[#565656] text-[12px]'>Code expires in {formattedCountdown}</span>
                                    </div>
                                </div>

                            </div>

                        </div>





                        {/* <div className='flex flex-col mt-5 w-full space-y-5'>
                            <span className='text-white text-[14px] uppercase'>Password</span>
                            <div className='w-full rounded-[6px] h-[44px] bg-[#151515] border-[1px] border-[#FFA524] flex flex-row justify-center items-center'>
                                <div className='bg-[#FFA524] h-[44px] w-[10%] rounded-bl-[6px] rounded-tl-[6px] justify-center items-center flex'>
                                    <span className='text-[16px] text-[#151515]'><Lock/></span>
                                </div>
                                <input type="text" className='w-[80%] h-full p-2 bg-transparent outline-none text-white' />
                                <div className=' h-[44px] w-[10%] rounded-bl-[6px] rounded-tl-[6px] justify-center items-center flex'>
                                    <span className='text-[16px] text-[#FFA524]'><RemoveRedEye/></span>
                                </div>
                            </div>
                        </div> */}




                        <div className='flex flex-col mt-5'>

                            <span className='text-[14px]  text-white'>Already have an account? <span className='text-[14px]  text-[#FFA524] cursor-pointer' onClick={navigatetoLogin}>Login</span></span>
                        </div>




                    </div>

                    <div className="lg:w-2/3 h-screen rounded-bl-[6px] rounded-tl-[6px] hidden lg:flex flex-col  justify-center items-center">

                    </div>

                </div>

                <div className="lg:w-3/4 h-screen rounded-bl-[6px] rounded-tl-[6px] hidden lg:flex flex-col  justify-center items-center absolute right-0">
                    <AnimateImage />

                </div>
                {/* <div className='flex flex-row w-full justify-between items-center h-full absolute -z-10 opacity-50'>
                    <img src={bg} alt="" className='object-cover rotate-180' />
                    <img src={bg} alt="" className='object-cover' />
                    
                </div> */}

            </div>
        </div>
    );
}

export default ForgotPassword;