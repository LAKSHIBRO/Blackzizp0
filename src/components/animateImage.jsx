import React from "react";
import center from "../Assets/images/center.png";
import GoldBitCoin from "../Assets/images/goldbitcoin.png";
import InfinityCoin from "../Assets/images/infinityCoin.png";
import midRing from "../Assets/images/mid-ring.png";
import midRingtwo from "../Assets/images/mid-ring-2.png";
import outterMid from "../Assets/images/outter-mid.png";
import outterMid2 from "../Assets/images/outter2.png";


const AnimateImage = () => {

    return(
        <div className="flex w-full h-full  justify-center items-center relative ">

                        
                <div className="mid-ring-wrapper relative md:w-[1380px] md:h-[1380px]">
                    <img src={outterMid} alt="" className="center-ring object-cover w-full h-full opacity-20 rotating-outter-ring"/>
                    
                        <div className="mid-ring-wrapper absolute md:w-[780px] md:h-[780px] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                            <img src={midRing} alt="" className="center-ring object-cover w-full h-full opacity-5 rotating-mid-ring-two"/>


                            <div className="mid-ring-wrapper absolute md:w-[480px] md:h-[480px] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                                <img src={midRingtwo} alt="" className="center-ring object-cover w-full h-full opacity-20 rotating-mid-ring"/>


                                <div className="center-ring-wrapper absolute md:w-[280px] md:h-[280px] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                                    <img src={center} alt="" className="center-ring object-cover w-full h-full opacity-10 rotating-center-ring"/>
                                    <div className="gold-bit-coin md:w-[180px] md:h-[180px] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                                        <img src={InfinityCoin} alt="" className="object-cover w-full h-full "/>
                                    </div>
                                </div>

                            </div> 

                        </div> 

                </div>

        </div>
    );
}

export default AnimateImage;