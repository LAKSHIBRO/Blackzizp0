import React from "react";
import bitcoin from '../Assets/Icons/bitcoin coin.png';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import AAVE from '../Assets/Icons/aave-coin.png';
import BTC from "../Assets/Icons/btc-coin.png";
import ETH from "../Assets/Icons/eth-coin.png";
import LTC from "../Assets/Icons/ltc-coin.png";
import ADA from "../Assets/Icons/ada-coin.png";
import XRP from "../Assets/Icons/xrp-coin.png";
import BNB from "../Assets/Icons/bnb-coin.png";
import DODGE from "../Assets/Icons/doge-coin.png";
import TRON from "../Assets/Icons/tron-coin.png";
import LINK from "../Assets/Icons/chainlink-coin.png";
import SNX from "../Assets/Icons/synthetics-coin.png";
import FIL from "../Assets/Icons/file-coin.png";
import MATIC from "../Assets/Icons/polygon-coin.png";
import SXP from "../Assets/Icons/swipe-coin.png";



const CoinCarousel = () => {


    const coinList = [
        { name: 'AAVE', image: AAVE, price: 30.00 },
        { name: 'BTC', image: BTC, price: 30.00 },
        { name: 'ETH', image: ETH, price: 30.00 },
        { name: 'LTC', image: LTC, price: 30.00 },
        { name: 'ADA', image: ADA, price: 30.00 },
        { name: 'XRP', image: XRP, price: 30.00 },
        { name: 'BNB', image: BNB, price: 30.00 },
        { name: 'DODGE', image: DODGE, price: 30.00 },
        { name: 'TRON', image: TRON, price: 30.00 },
        { name: 'LINK', image: LINK, price: 30.00 },
        { name: 'SNX', image: SNX, price: 30.00 },
        { name: 'FIL', image: FIL, price: 30.00 },
        { name: 'MATIC', image: MATIC, price: 30.00 },
        { name: 'SXP', image: SXP, price: 30.00 },

    ]


    const CustomButtonGroupAsArrows = ({ next, previous }) => {
        return (
            <div
                style={{
                    textAlign: "right",
                }}
                className="absolute w-full justify-between"
            >
                <div className="w-full justify-between flex relative items-center">
                    <button onClick={previous} className="w-[40px] h-[40px]  text-[#E08E20] rounded-full cursor-pointer z-50 -left-3 absolute "><KeyboardArrowLeft /></button>
                    <button onClick={next} className="w-[40px] h-[40px]  text-[#E08E20] rounded-full cursor-pointer ml-3 z-50 -right-3 absolute"><KeyboardArrowRight /></button>
                </div>

            </div>
        );
    };



    return (


        <div
            className="z-50"
            style={{
                position: 'relative'

            }}
        >




            <Carousel
                additionalTransfrom={0}
                arrows={false}
                autoPlay
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                //   containerClass="container-with-dots"
                containerClass="container-padding-bottom"
                //   customTransition="all 30s linear"
                customButtonGroup={<CustomButtonGroupAsArrows />}
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite={true}
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 4,
                        partialVisibilityGutter: 40
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 2,
                        partialVisibilityGutter: 30
                    }
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >


                {coinList.map((coin, index) => {


                    return (

                        <div
                            key={index}
                            className='res-crypt-card crypt-card sm:w-[348px] sm:h-[124px]  rounded-[6px] flex flex-row lg:ml-[26px] justify-between items-center relative'>
                            <div className="coin-box sm:w-[124px] sm:h-[124px] w-[124px] h-[124px] z-20 ">
                                <img src={coin.image} alt="" className="object-cover w-full h-full z-20" />
                            </div>
                            <div className='crpt-info flex flex-col p-3 bg-[#151515] w-[224px] text-right'>
                                <h3 className='text-white text-[14px]'>{coin.name}</h3>
                                <h4 className='text-white text-[18px]'>USDT {coin.price}</h4>
                            </div>
                            <div className='crpt-back-bar flex flex-col p-3 bg-[#151515] w-full absolute md:h-[56px] h-[44px] -z-10'></div>

                        </div>
                    );



                })}

            </Carousel>
        </div>
    );
}

export default CoinCarousel;