import React, { useState, useEffect } from "react";
import { TuneRounded, ArrowDropDownRounded } from "@mui/icons-material";
import bitcoin from "../Assets/Icons/bitcoin coin.png";
import rank from "../Assets/Icons/rank.png";
import CoinCarousel from "../components/CoinCarousel";
import StakingSlider from "../components/StakingSlider";
import { Search, Menu } from "@mui/icons-material";
import commonbg from "../Assets/images/gergeg-01.png";
import AnimatedImage from "../components/AnimatedBG";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { env_data } from "../config/config";

const MyActivePackages = () => {
  useEffect(() => {
    getHistory();
  }, []);
  const [resData, setResData] = useState([]);
  const getHistory = async () => {

    const user_response = await axios.get(`${env_data.base_url}/token`);

    const decoded = jwt_decode(user_response.data.accessToken);
    console.log(
      "🚀 ~ file: MyProfile.jsx:121 ~ refreshToken ~ decoded:",
      decoded
    );
    const user_id = decoded.userId

    const response = await axios.get(
      `${env_data.base_url}/getpackages/${user_id}`

    );
    console.log(
      "🚀 ~ file: MyActivePackages.jsx:33 ~ getHistory ~ response:",
      response.data
    );
    const packages = response.data.packages;
    // const relevantPackages = {};

    // // Loop through the res array and map the relevant buyPackagesData
    // packages?.forEach((item) => {
    //   const { packageId, id, createdAt } = item;
    //   const foundPackage = buyPackagesData.find((pkg) => pkg.id === id);
    //   if (foundPackage) {
    //     relevantPackages[packageId] = {
    //       packageId: foundPackage.packageId,
    //       amount: foundPackage.amount,
    //       createdAt: createdAt,
    //     };
    //   }
    // });

    // // Convert the relevantPackages object into an array
    // const relevantPackagesArray = Object.values(relevantPackages);
    const resultArray = packages.map((item) => {
      const correspondingBuyPackage = buyPackagesData.find(
        (buyPackage) => buyPackage.id === item.packageId
      );
    
      if (correspondingBuyPackage) {
        return {
          packageName: correspondingBuyPackage.packageId,
          amount: correspondingBuyPackage.amount,
          createdAt: item.createdAt,
        };
      }
    
      return null; // Handle the case where there is no match
    });
    
    // Filter out null values (cases where there is no match)
    const filteredResultArray = resultArray.filter((item) => item !== null);
    
    console.log(filteredResultArray);
    setResData(filteredResultArray);
    console.log("relevantPackagesArray", filteredResultArray);
  };
  const buyPackagesData = [
    { id: 1, packageId: "gold", amount: 100, active: 1 },
    { id: 2, packageId: "gold", amount: 250, active: 0 },
    { id: 3, packageId: "gold", amount: 500, active: 1 },
    { id: 4, packageId: "platinum", amount: 1000, active: 0 },
    { id: 5, packageId: "platinum", amount: 2500, active: 0 },
    { id: 6, packageId: "platinum", amount: 5000, active: 0 },
    { id: 7, packageId: "Diamond", amount: 10000, active: 0 },
    { id: 8, packageId: "Diamond", amount: 25000, active: 0 },
    { id: 9, packageId: "Diamond", amount: 50000, active: 0 },
    { id: 10, packageId: "vip", amount: 100000, active: 0 },
  ];
  // Create an object to store relevant buyPackagesData

  return (
    <div className="w-full bg-[#1E1E1E] h-full fixed right-0 flex flex-col ">
      <div className="res-body lg:ml-[300px] md:ml-[100px] flex flex-col">
        {/* <div className='sm:h-[77px] bg-[#151515] flex flex-row w-full justify-start items-center space-x-5'>
                    <span className='text-[16px] text-[#FFA524]'><Menu /></span>
                    <div className='w-[375px] rounded-[6px] h-[44px] bg-[#1E1E1E]  flex flex-row justify-center items-center'>

                        <input type="text" className='w-[330px] h-full p-2 bg-transparent outline-none text-white ' placeholder='search...' />
                        <div className='h-[44px] w-[44px] bg-[#FFA524] rounded-tr-[6px] rounded-br-[6px] justify-center items-center flex'>
                            <span className='text-[16px] text-[#151515]'><Search /></span>
                        </div>
                    </div>
                </div> */}

        <div
          className="flex flex-col dash-body w-full h-screen sm:p-8 p-3 overflow-y-scroll pt-[66px] "
          id="style-6"
        >
          <h2 className="text-[24px] font-semibold text-white">
            My Active Packages
          </h2>
          <h3 className="text-[18px] font-normal text-[#E08E20]">
            Dashboard - My Active Packages
          </h3>

          <div className="w-full rounded-md border-[1px] border-[#565656] h-auto flex flex-col mt-5 p-5 bg-[#151515]">
            <div className="w-full justify-end items-center flex flex-row">
              {/* <div className='flex flex-row justify-start items-center space-x-3 w-full '>
                                <span className='text-[14px] text-[#E08E20]'><TuneRounded /></span>
                                <div className='sm:w-[144px] sm:h-[44px] bg-[#565656] bg-opacity-10 rounded-[3px] relative flex justify-between items-center'>
                                    <select className='bg-transparent outline-none sm:w-[138px] border-none p-2 text-white'>
                                        <option value="10">10</option>
                                        <option value="20">20</option>
                                        <option value="30">30</option>
                                        <option value="40">40</option>
                                        <option value="50">50</option>
                                    </select>
                                   
                                </div>
                                <span className='text-white font-normal text-[12px] '>entries</span>
                            </div> */}

              <div className="flex flex-row justify-center items-center space-x-3">
                <span className="text-white font-normal text-[12px] ">
                  Search
                </span>
                <div className="sm:w-[200px] sm:h-[44px] bg-[#565656] bg-opacity-10 rounded-[3px] relative flex justify-between items-center">
                  <input
                    type="text"
                    className="bg-transparent oultine-none sm:w-[200px] border-none p-2 text-white"
                  />
                </div>
              </div>
            </div>

            <div className="dash-table mt-5 w-full  overflow-x-auto">
              <table className="w-full border-[1px] border-[#565656] ">
                <th className="uppercase text-[12px] text-white p-2 border-[#565656] border-r-[1px]  border-opacity-40">
                  Package
                </th>
                <th className="uppercase text-[12px] text-white p-2 border-[#565656] border-r-[1px] border-opacity-40">
                  Price
                </th>
                <th className="uppercase text-[12px] text-white p-2 border-[#565656] border-r-[1px] border-opacity-40">
                  Date Activated
                </th>

                <th className="uppercase text-[12px] text-white p-2 border-[#565656] border-r-[1px] border-opacity-40">
                  ON HOLD STATUS
                </th>
                {/* <th className="uppercase text-[12px] text-white p-2">MORE</th> */}
                <tbody>
                  {resData?.map((item, index) => (
                    <tr key={index} className="w-full">
                      {/* Add the appropriate data from the item to each <td> */}
                      <td className="text-[12px] text-white p-2 border-[#565656] border-[1px] border-opacity-40 bg-[#1a1a1a]">
                        {/* Use item.packageId here */}
                        {item.packageName}
                      </td>
                      <td className="text-[12px] text-white p-2 border-[#565656] border-[1px] border-opacity-40 bg-[#1a1a1a]">
                        {/* Use item.amount here */}
                        {item.amount}
                      </td>{" "}
                      <td className="text-[12px] text-white p-2 border-[#565656] border-[1px] border-opacity-40 bg-[#1a1a1a]">
                        {/* Use item.amount here */}
                        {item.createdAt}
                      </td>
                      <td className=" text-[12px] text-white p-2 border-[#565656] border-[1px] border-opacity-40 bg-[#1a1a1a] justify-center  items-center">
                        <div className="w-[80px] justify-center items-center flex text-[10px] text-[#151515] h-[20px] font-semibold capitalize rounded-sm mx-auto bg-gradient-to-r from-[#ffd62d] to-[#ffa524]">
                          active
                        </div>
                      </td>
                      {/* Add other <td> elements as needed */}
                    </tr>
                  ))}
                </tbody>
                {/* <tbody>
                  <tr className="w-full">
                    <td className=" text-[12px] text-white p-2 border-[#565656] border-[1px] border-opacity-40 bg-[#1a1a1a]">
                      renuka19872
                    </td>
                    <td className=" text-[12px] text-white p-2 border-[#565656] border-[1px] border-opacity-40 bg-[#1a1a1a]">
                      supuni
                    </td>
                    <td className=" text-[12px] text-white p-2 border-[#565656] border-[1px] border-opacity-40 bg-[#1a1a1a]">
                      hansika
                    </td>
                    <td className=" text-[12px] text-white p-2 border-[#565656] border-[1px] border-opacity-40 bg-[#1a1a1a]">
                      2023-05-06 09:51:42
                    </td>
                    <td className=" text-[12px] text-white p-2 border-[#565656] border-[1px] border-opacity-40 bg-[#1a1a1a] justify-center  items-center">
                      <div className="w-[80px] justify-center items-center flex text-[10px] text-[#151515] h-[20px] font-semibold capitalize rounded-sm mx-auto bg-gradient-to-r from-[#ffd62d] to-[#ffa524]">
                        active
                      </div>
                    </td>
                    <td className=" text-[12px] text-white p-2 border-[#565656] border-[1px] border-opacity-40 bg-[#1a1a1a] justify-center  items-center">
                      <div className="w-[80px] justify-center items-center flex text-[10px] bg-[#ffffff] h-[20px] font-semibold capitalize rounded-sm mx-auto text-[#151515]">
                        more
                      </div>
                    </td>
                  </tr>
                </tbody> */}
              </table>
            </div>
          </div>
        </div>
        <div className="w-full h-full absolute object-center -z-20 ">
          <AnimatedImage />
        </div>
      </div>
    </div>
  );
};

export default MyActivePackages;