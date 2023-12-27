import React from "react";
import bitcoin from '../Assets/Icons/bitcoin coin.png';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const  StakingSlider = () => {


    const CustomButtonGroupAsArrows = ({ next, previous }) => {
        return (
          <div
            style={{
              textAlign: "right",
            }}
            className="absolute w-full justify-between"
          > 
          <div className="w-full justify-between flex relative items-center">
            <button onClick={previous} className="w-[40px] h-[40px]  text-[#E08E20] rounded-full cursor-pointer z-50 -left-3 absolute "><KeyboardArrowLeft/></button>
            <button onClick={next} className="w-[40px] h-[40px]  text-[#E08E20] rounded-full cursor-pointer ml-3 z-50 -right-3 absolute"><KeyboardArrowRight/></button>
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
//   customTransition="all 10s linear"
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
  slidesToSlide={2}
  swipeable
>


<div className='p-5  w-[310px] justify-center items-center flex relative'>
                            <div className='w-[280px] h-[412px] flex flex-col bg-[#151515] border-[1px] border-[#565656] rounded-bl-[6px] rounded-br-[6px] rounded-tr-[6px]  relative shadow-black shadow-xl'>
                                <div className='p-5 w-full justify-center items-center'>
                                    <h3 className='text-[12px] text-white text-center'>BROWN STAKE MONTHLY PAY  <br />
                                        1-YEAR <br /> <span className='text-[#FFA524]'>MATURITY [18%]</span>
                                    </h3>
                                </div>

                                <div className='p-5 flex justify-center items-center h-[66px] bg-[#D9D9D9]'>
                                    <h3 className='text-[24px]'>$5000 <span className='text-[14px]'>/ Investment</span></h3>
                                </div>


                                <div className='p-5 w-full justify-center items-center'>
                                    <h3 className='text-[12px] text-white text-center'>Eligible For Users Who Invested Above <br /><span className='text-[#FFA524]'>USDT 5000 </span>In Total
                                    </h3>
                                </div>

                                <div className='p-5 w-full justify-between items-center flex flex-row'>
                                    <h3 className='text-[12px] text-white text-center'>Investing Value</h3>
                                    <h3 className='text-[12px] text-white text-center'>USDT 5000</h3>
                                </div>

                                <div className='p-5 w-full justify-between items-center flex flex-row'>
                                    <h3 className='text-[12px] text-white text-center'>Maturity in</h3>
                                    <h3 className='text-[12px] text-white text-center'>12 Months</h3>
                                </div>

                                <div className=' w-full justify-center items-center flex '>
                                    <button className='bg-[#FFA524] rounded-md text-[#151515] font-semibold text-[12px] uppercase sm:w-[120px] sm:h-[44px] border-[1px] border-[#FFA524]'>
                                        buy now
                                    </button>
                                </div>

                                <div className='w-[32px] h-[105px] bg-[#FFA524] flex justify-center items-center absolute -left-[32px]'>
                                        <h3 className='text-[14px] text-[#151515] text-center -rotate-90 uppercase'>MONTHLY</h3>
                                </div>


                            </div>
                        </div>



                        <div className='p-5  w-[310px] justify-center items-center flex relative'>
                            <div className='w-[280px] h-[412px] flex flex-col bg-[#151515] border-[1px] border-[#565656] rounded-bl-[6px] rounded-br-[6px] rounded-tr-[6px]  relative shadow-black shadow-xl'>
                                <div className='p-5 w-full justify-center items-center'>
                                    <h3 className='text-[12px] text-white text-center'>BROWN STAKE MONTHLY PAY  <br />
                                        1-YEAR <br /> <span className='text-[#FFA524]'>MATURITY [18%]</span>
                                    </h3>
                                </div>

                                <div className='p-5 flex justify-center items-center h-[66px] bg-[#D9D9D9]'>
                                    <h3 className='text-[24px]'>$5000 <span className='text-[14px]'>/ Investment</span></h3>
                                </div>


                                <div className='p-5 w-full justify-center items-center'>
                                    <h3 className='text-[12px] text-white text-center'>Eligible For Users Who Invested Above <br /><span className='text-[#FFA524]'>USDT 5000 </span>In Total
                                    </h3>
                                </div>

                                <div className='p-5 w-full justify-between items-center flex flex-row'>
                                    <h3 className='text-[12px] text-white text-center'>Investing Value</h3>
                                    <h3 className='text-[12px] text-white text-center'>USDT 5000</h3>
                                </div>

                                <div className='p-5 w-full justify-between items-center flex flex-row'>
                                    <h3 className='text-[12px] text-white text-center'>Maturity in</h3>
                                    <h3 className='text-[12px] text-white text-center'>12 Months</h3>
                                </div>

                                <div className=' w-full justify-center items-center flex '>
                                    <button className='bg-[#FFA524] rounded-md text-[#151515] font-semibold text-[12px] uppercase sm:w-[120px] sm:h-[44px] border-[1px] border-[#FFA524]'>
                                        buy now
                                    </button>
                                </div>

                                <div className='w-[32px] h-[105px] bg-[#FFA524] flex justify-center items-center absolute -left-[32px]'>
                                        <h3 className='text-[14px] text-[#151515] text-center -rotate-90 uppercase'>MONTHLY</h3>
                                </div>


                            </div>
                        </div>



                        <div className='p-5  w-[310px] justify-center items-center flex relative'>
                            <div className='w-[280px] h-[412px] flex flex-col bg-[#151515] border-[1px] border-[#565656] rounded-bl-[6px] rounded-br-[6px] rounded-tr-[6px]  relative shadow-black shadow-xl'>
                                <div className='p-5 w-full justify-center items-center'>
                                    <h3 className='text-[12px] text-white text-center'>BROWN STAKE MONTHLY PAY  <br />
                                        1-YEAR <br /> <span className='text-[#FFA524]'>MATURITY [18%]</span>
                                    </h3>
                                </div>

                                <div className='p-5 flex justify-center items-center h-[66px] bg-[#D9D9D9]'>
                                    <h3 className='text-[24px]'>$5000 <span className='text-[14px]'>/ Investment</span></h3>
                                </div>


                                <div className='p-5 w-full justify-center items-center'>
                                    <h3 className='text-[12px] text-white text-center'>Eligible For Users Who Invested Above <br /><span className='text-[#FFA524]'>USDT 5000 </span>In Total
                                    </h3>
                                </div>

                                <div className='p-5 w-full justify-between items-center flex flex-row'>
                                    <h3 className='text-[12px] text-white text-center'>Investing Value</h3>
                                    <h3 className='text-[12px] text-white text-center'>USDT 5000</h3>
                                </div>

                                <div className='p-5 w-full justify-between items-center flex flex-row'>
                                    <h3 className='text-[12px] text-white text-center'>Maturity in</h3>
                                    <h3 className='text-[12px] text-white text-center'>12 Months</h3>
                                </div>

                                <div className=' w-full justify-center items-center flex '>
                                    <button className='bg-[#FFA524] rounded-md text-[#151515] font-semibold text-[12px] uppercase sm:w-[120px] sm:h-[44px] border-[1px] border-[#FFA524]'>
                                        buy now
                                    </button>
                                </div>

                                <div className='w-[32px] h-[105px] bg-[#FFA524] flex justify-center items-center absolute -left-[32px]'>
                                        <h3 className='text-[14px] text-[#151515] text-center -rotate-90 uppercase'>MONTHLY</h3>
                                </div>


                            </div>
                        </div>



                        <div className='p-5  w-[310px] justify-center items-center flex relative'>
                            <div className='w-[280px] h-[412px] flex flex-col bg-[#151515] border-[1px] border-[#565656] rounded-bl-[6px] rounded-br-[6px] rounded-tr-[6px]  relative shadow-black shadow-xl'>
                                <div className='p-5 w-full justify-center items-center'>
                                    <h3 className='text-[12px] text-white text-center'>BROWN STAKE MONTHLY PAY  <br />
                                        1-YEAR <br /> <span className='text-[#FFA524]'>MATURITY [18%]</span>
                                    </h3>
                                </div>

                                <div className='p-5 flex justify-center items-center h-[66px] bg-[#D9D9D9]'>
                                    <h3 className='text-[24px]'>$5000 <span className='text-[14px]'>/ Investment</span></h3>
                                </div>


                                <div className='p-5 w-full justify-center items-center'>
                                    <h3 className='text-[12px] text-white text-center'>Eligible For Users Who Invested Above <br /><span className='text-[#FFA524]'>USDT 5000 </span>In Total
                                    </h3>
                                </div>

                                <div className='p-5 w-full justify-between items-center flex flex-row'>
                                    <h3 className='text-[12px] text-white text-center'>Investing Value</h3>
                                    <h3 className='text-[12px] text-white text-center'>USDT 5000</h3>
                                </div>

                                <div className='p-5 w-full justify-between items-center flex flex-row'>
                                    <h3 className='text-[12px] text-white text-center'>Maturity in</h3>
                                    <h3 className='text-[12px] text-white text-center'>12 Months</h3>
                                </div>

                                <div className=' w-full justify-center items-center flex '>
                                    <button className='bg-[#FFA524] rounded-md text-[#151515] font-semibold text-[12px] uppercase sm:w-[120px] sm:h-[44px] border-[1px] border-[#FFA524]'>
                                        buy now
                                    </button>
                                </div>

                                <div className='w-[32px] h-[105px] bg-[#FFA524] flex justify-center items-center absolute -left-[32px]'>
                                        <h3 className='text-[14px] text-[#151515] text-center -rotate-90 uppercase'>MONTHLY</h3>
                                </div>


                            </div>
                        </div>



                        <div className='p-5  w-[310px] justify-center items-center flex relative'>
                            <div className='w-[280px] h-[412px] flex flex-col bg-[#151515] border-[1px] border-[#565656] rounded-bl-[6px] rounded-br-[6px] rounded-tr-[6px]  relative shadow-black shadow-xl'>
                                <div className='p-5 w-full justify-center items-center'>
                                    <h3 className='text-[12px] text-white text-center'>BROWN STAKE MONTHLY PAY  <br />
                                        1-YEAR <br /> <span className='text-[#FFA524]'>MATURITY [18%]</span>
                                    </h3>
                                </div>

                                <div className='p-5 flex justify-center items-center h-[66px] bg-[#D9D9D9]'>
                                    <h3 className='text-[24px]'>$5000 <span className='text-[14px]'>/ Investment</span></h3>
                                </div>


                                <div className='p-5 w-full justify-center items-center'>
                                    <h3 className='text-[12px] text-white text-center'>Eligible For Users Who Invested Above <br /><span className='text-[#FFA524]'>USDT 5000 </span>In Total
                                    </h3>
                                </div>

                                <div className='p-5 w-full justify-between items-center flex flex-row'>
                                    <h3 className='text-[12px] text-white text-center'>Investing Value</h3>
                                    <h3 className='text-[12px] text-white text-center'>USDT 5000</h3>
                                </div>

                                <div className='p-5 w-full justify-between items-center flex flex-row'>
                                    <h3 className='text-[12px] text-white text-center'>Maturity in</h3>
                                    <h3 className='text-[12px] text-white text-center'>12 Months</h3>
                                </div>

                                <div className=' w-full justify-center items-center flex '>
                                    <button className='bg-[#FFA524] rounded-md text-[#151515] font-semibold text-[12px] uppercase sm:w-[120px] sm:h-[44px] border-[1px] border-[#FFA524]'>
                                        buy now
                                    </button>
                                </div>

                                <div className='w-[32px] h-[105px] bg-[#FFA524] flex justify-center items-center absolute -left-[32px]'>
                                        <h3 className='text-[14px] text-[#151515] text-center -rotate-90 uppercase'>MONTHLY</h3>
                                </div>


                            </div>
                        </div>


                        <div className='p-5  w-[310px] justify-center items-center flex relative'>
                            <div className='w-[280px] h-[412px] flex flex-col bg-[#151515] border-[1px] border-[#565656] rounded-bl-[6px] rounded-br-[6px] rounded-tr-[6px]  relative shadow-black shadow-xl'>
                                <div className='p-5 w-full justify-center items-center'>
                                    <h3 className='text-[12px] text-white text-center'>BROWN STAKE MONTHLY PAY  <br />
                                        1-YEAR <br /> <span className='text-[#FFA524]'>MATURITY [18%]</span>
                                    </h3>
                                </div>

                                <div className='p-5 flex justify-center items-center h-[66px] bg-[#D9D9D9]'>
                                    <h3 className='text-[24px]'>$5000 <span className='text-[14px]'>/ Investment</span></h3>
                                </div>


                                <div className='p-5 w-full justify-center items-center'>
                                    <h3 className='text-[12px] text-white text-center'>Eligible For Users Who Invested Above <br /><span className='text-[#FFA524]'>USDT 5000 </span>In Total
                                    </h3>
                                </div>

                                <div className='p-5 w-full justify-between items-center flex flex-row'>
                                    <h3 className='text-[12px] text-white text-center'>Investing Value</h3>
                                    <h3 className='text-[12px] text-white text-center'>USDT 5000</h3>
                                </div>

                                <div className='p-5 w-full justify-between items-center flex flex-row'>
                                    <h3 className='text-[12px] text-white text-center'>Maturity in</h3>
                                    <h3 className='text-[12px] text-white text-center'>12 Months</h3>
                                </div>

                                <div className=' w-full justify-center items-center flex '>
                                    <button className='bg-[#FFA524] rounded-md text-[#151515] font-semibold text-[12px] uppercase sm:w-[120px] sm:h-[44px] border-[1px] border-[#FFA524]'>
                                        buy now
                                    </button>
                                </div>

                                <div className='w-[32px] h-[105px] bg-[#FFA524] flex justify-center items-center absolute -left-[32px]'>
                                        <h3 className='text-[14px] text-[#151515] text-center -rotate-90 uppercase'>MONTHLY</h3>
                                </div>


                            </div>
                        </div>


            

            

            


        </Carousel>
</div>
    );
}

export default StakingSlider;