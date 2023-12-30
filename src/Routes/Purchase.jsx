import React, { useState } from 'react';
import { TuneRounded, ArrowDropDownRounded } from '@mui/icons-material';
import bitcoin from '../Assets/Icons/bitcoin coin.png';
import rank from '../Assets/Icons/rank.png';
import { Search, Menu } from '@mui/icons-material';
import commonbg from '../Assets/images/gergeg-01.png';
import AnimatedImage from '../components/AnimatedBG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCrown, faCoins, faShield, faGem } from '@fortawesome/free-solid-svg-icons';
import DefaultCoinChart from '../components/DefaultCoinChart';
// import Trending from '../components/Trending';
import Popup from 'reactjs-popup';


import PopUp from '../components/PopUp';


const Purchase = () => {



    const vipDetails = [
        {
          name: "VIP",
          icon: faCrown,
          list: ["2% Registration Fee", "Daily Maxout $5000"],
          price: [100000],
          pkg: 
    { id: 10, packageId: "vip", amount: 100000, active: 0 },
        },
      ];
    
      const commonDetails = [
        {
          name: "GOLD",
          icon: faCoins,
          list: ["Daily Maxout $1000", "Inv. Fee $10"],
          price: [100, 200, 300],
          pkg: [
            { id: 1, packageId: "gold", amount: 100, active: 1 },
            { id: 2, packageId: "gold", amount: 250, active: 0 },
            { id: 3, packageId: "gold", amount: 500, active: 1 },
          ],
        },
        {
          name: "platinum",
          icon: faShield,
          list: ["Daily Maxout $2000", "Inv. Fee $30"],
          price: [1000, 2000, 3000],
          pkg: [
            { id: 4, packageId: "platinum", amount: 1000, active: 0 },
            { id: 5, packageId: "platinum", amount: 2500, active: 0 },
            { id: 6, packageId: "platinum", amount: 5000, active: 0 },
          ],
        },
        {
          name: "Diamond",
          icon: faGem,
          list: ["Daily Maxout $3000", "2% in Investment"],
          pkg: [
            { id: 7, packageId: "Diamond", amount: 10000, active: 0 },
            { id: 8, packageId: "Diamond", amount: 25000, active: 0 },
            { id: 9, packageId: "Diamond", amount: 50000, active: 0 },
          ],
          price: [10000, 20000, 30000],
        },
      ];

    const [isPopUpOpen, setPopUpOpen] = useState(false); // Initialize the state variable

    const [clickedCommonCard, setClickedCommonCard] = useState(null); // Store data of the clicked common-card

    const openPopUp = (pack, vip) => {
        setPopUpOpen(true); // Function to open the PopUp
        setClickedCommonCard(pack, vip); // Store data of the clicked common-card
    };

    const closePopUp = () => {
        setPopUpOpen(false); // Function to close the PopUp
    };



    return (
        <div className='w-full bg-[#1E1E1E] h-full fixed right-0 flex flex-col '>

            <div className='res-body lg:ml-[300px] md:ml-[100px] flex flex-col'>


                <div
                    className="flex flex-col dash-body w-full h-screen sm:p-8 p-3 overflow-y-scroll pt-[66px] "
                    id="style-6"
                >
                    <h2 className='text-[24px] font-semibold text-white capitalize'>Pricing Plans</h2>


                    {/* <div className='flex lg:flex-row w-full justify-center items-center md:space-x-[44px] mt-[44px] flex-col space-x-0 space-y-5 md:space-y-0 relative'> */}
                    <div className='flex flex-wrap gap-10 w-full mt-[44px] justify-center'>

                        {vipDetails.map((vip) => {

                            const icon = vip.icon
                            return (

                                <div
                                    key={vip.id}
                                    icon={icon}
                                    name={vip.name}
                                    list={vip.list}
                                    onClick={() => openPopUp(vip)}
                                    className='package-card-vip w-[240px] h-[360px] rounded-[8px] cursor-pointer bg-[#FFA524] flex flex-col shadow-xl shadow-black relative z-20 
                                   '
                                    
                                >

                                    <div className='price-top rounded-[8px] bg-[#151515] w-[241px] h-[150px] border-[1px] border-[#151515]  right-0 items-center'>
                                        <div className='package-card-shape w-[240px] h-[150px] flex flex-col justify-center '>
                                            <span className='crown text-[#FFA524] text-[1.2rem] text-center bg-transparent'><FontAwesomeIcon icon={icon} className='crownIco bg-transparent' /></span>
                                            <h3 className='text-[#FFA524] text-[1.2rem] font-semibold text-center'>{vip.name}</h3>
                                        </div>

                                    </div>

                                    <div className='package-card-body w-full  bottom-0 h-[280px] relative'>
                                        <div className=' w-full  justify-center flex flex-col items-center '>
                                            
                                            {vip.price.map((priceitem) => {

                                                return (
                                                    <h4 className='text-[#151515] text-[2rem]'>$ {priceitem}</h4>
                                                );
                                            })}

                                            {vip.list.map((item) => {

                                                return (
                                                    <h4 className='text-[#151515] text-[1rem]'>{item}</h4>
                                                );
                                            })}
                                        </div>

                                        <div className='vip-card-button w-full p-5 justify-center items-center flex mb-5 absolute bottom-0'>
                                            <button className='bg-[#151515] rounded-md text-white font-semibold text-[10px] uppercase w-[120px] h-[32px]'>
                                                buy now
                                            </button>
                                        </div>
                                    </div>

                                    {isPopUpOpen && (
                                        <PopUp

                                            icon={icon}
                                            name={vip.name}
                                            list={vip.list}
                                            price={vip.price}
                                            closePopUp={closePopUp}
                                        />
                                    )}

                                </div>



                            );


                        })}








                        {commonDetails.map((pack, index) => {
                            const icon = pack.icon
                            return (
                                <div
                                    onClick={() => openPopUp(pack)}
                                    key={index}
                                    className='common-card w-[240px] h-[360px] rounded-[8px] cursor-pointer bg-[#151515] flex flex-col shadow-xl shadow-black relative z-20 '>
                                    <div className='price-top rounded-[8px] bg-[#C6C6C6] w-[241px] h-[150px] border-[1px] border-[#151515]  right-0 items-center'>
                                        <div className='package-card-shape w-[240px] h-[150px] flex flex-col justify-center '>
                                            <span className='crown text-[#151515] text-[1.2rem] text-center bg-transparent'><FontAwesomeIcon icon={icon} className='crownIco bg-transparent' /></span>
                                            <h3 className='text-[#151515] text-[1.2rem] font-semibold text-center uppercase'>{pack.name}</h3>
                                        </div>
                                    </div>
                                    <div className='package-card-body w-full  bottom-0 h-[280px] relative'>
                                        <div className='package-card-body w-full  justify-center flex flex-col items-center '>

                                        {pack.price.map((priceitem, itemIndex) => (
                                                <h4 className='text-[#ffffff] text-[1rem]' key={itemIndex}>
                                                   $ {priceitem}
                                                </h4>
                                            ))}


                                            {pack.list.map((item, itemIndex) => (
                                                <h4 className='text-[#ffffff] text-[1rem]' key={itemIndex}>
                                                    {item}
                                                </h4>
                                            ))}
                                        </div>
                                        <div className='w-full p-5 justify-center items-center flex mt-10 absolute bottom-0'>
                                            <button className='bg-[#151515] rounded-md text-white font-semibold text-[10px] uppercase w-[120px] h-[32px] border-[1px] border-[#FFA524]'>
                                                buy now
                                            </button>
                                        </div>

                                    </div>

                                    {isPopUpOpen && clickedCommonCard && (
                                        <PopUp
                                            icon={clickedCommonCard.icon}
                                            name={clickedCommonCard.name}
                                            list={clickedCommonCard.list}
                                            price={clickedCommonCard.price}
                                            closePopUp={closePopUp}
                                            pkg={clickedCommonCard.pkg}
                                        />
                                    )}

                                </div>
                            );
                        })}


                    </div>


                </div>
                <div className='w-full h-full absolute object-center -z-20 '>
                    <AnimatedImage />
                </div>
            </div>


        </div>
    );
}

export default Purchase;