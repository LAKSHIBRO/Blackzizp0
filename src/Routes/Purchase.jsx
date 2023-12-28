import React, { useEffect, useState } from 'react';
import { TuneRounded, ArrowDropDownRounded } from '@mui/icons-material';
import bitcoin from '../Assets/Icons/bitcoin coin.png';
import rank from '../Assets/Icons/rank.png';
import { Search, Menu } from '@mui/icons-material';
import commonbg from '../Assets/images/gergeg-01.png';
import AnimatedImage from '../components/AnimatedBG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import jwt_decode from "jwt-decode";

import { faCrown, faCoins, faShield, faGem } from '@fortawesome/free-solid-svg-icons';
import DefaultCoinChart from '../components/DefaultCoinChart';
// import Trending from '../components/Trending';
import Popup from 'reactjs-popup';


import PopUp from '../components/PopUp';
import axios from 'axios';
import { env_data } from '../config/config';


const Purchase = () => {

    useEffect(() => {
        getDetails();
      }, []);


    
    
   

    const [isPopUpOpen, setPopUpOpen] = useState(false); // Initialize the state variable
    const [clickedVipCard, setClickedVipCard] = useState(null); // Store data of the clicked common-card
    const [clickedCommonCard, setClickedCommonCard] = useState(null); // Store data of the clicked common-card
    const [decodeValues, setDecodeValues] = useState(null);
    const [packages, setpackages] = useState([]);
    const [vipDetails, setVipDetails] = useState([]);
    const [commonDetails, setCommonDetails] = useState([]);

    const openPopUp = (pack) => {
        setPopUpOpen(true); // Function to open the PopUp
        setClickedVipCard(pack); // Store data of the clicked common-card
    };

    const openPopUpOthers = (pack) => {
        setPopUpOpen(true); // Function to open the PopUp
        setClickedCommonCard(pack); // Store data of the clicked common-card
    };

    const closePopUp = () => {
        setPopUpOpen(false); // Function to close the PopUp
    };
    
    const getDetails = async () => {
        const resp = await axios.get(`${env_data.base_url}/token`);
        const decoded = jwt_decode(resp.data.accessToken);
        setDecodeValues(decoded);

        const packges = await axios.get(`${env_data.base_url}/getallpackages`);
        setpackages(packges.data.packages);
        let vip = packges.data.packages.filter(obj => obj.packageName == "vip");
        let others = packges.data.packages.filter(obj => obj.packageName != "vip");
    
        setVipDetails([{
            name: "VIP",
            icon: faCrown,
            list: ["2% Registration Fee", "Daily Maxout $5000"],
            price: [vip[0].packageValue],
            pkg: {
                id: vip[0].id,
                packageId: vip[0].id,
                amount: vip[0].packageValue,
                active: 0
            }
        }]);
        let mapsOtherPcg=others.map(obj=>{
            return{
                    name: obj.packageName,
                    icon: faGem,
                    list: ["Daily Maxout $3000", "2% in Investment"],
                    pkg: [
                      { id: obj.id, packageId: obj.id, amount:obj.packageValue , active: 0 }
                    ],
                    price: [obj.packageValue],    
            }
        })

        setCommonDetails(mapsOtherPcg)
    }



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
                                            pkg={[vip.pkg]}
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
                                    onClick={() => openPopUpOthers(pack)}
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
                                            icon={pack.icon}
                                            name={pack.name}
                                            list={pack.list}
                                            closePopUp={closePopUp}
                                            pkg={pack.pkg}
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