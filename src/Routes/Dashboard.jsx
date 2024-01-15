import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { TuneRounded, ArrowDropDownRounded } from "@mui/icons-material";
import bitcoin from "../Assets/Icons/bitcoin coin.png";
import rank from "../Assets/Icons/rank.png";
import chart from "../Assets/Icons/chart.png";
import {
  Person,
  PriceChange,
  Payment,
  NotificationsActive,
} from "@mui/icons-material";
import CoinCarousel from "../components/CoinCarousel";
import DateCalendarValue from "../components/Calendar";
import { Search, Menu } from "@mui/icons-material";
import AnimatedImage from "../components/AnimatedBG";

import CoinChart from "../components/CoinChart";
import CoinDetail from "../components/CoinDetail";
import { useNavigate } from "react-router-dom";
import DefaultCoinChart from "../components/DefaultCoinChart";
import ToolTipPositions from "../components/NotificationPopUp";
import { env_data } from "../config/config";

const Dashboard = () => {
  useEffect(() => {
    getRefUsers();
  }, []);

  const navigate = useNavigate();

  const [selectedCoin, setSelectedCoin] = useState(null);
  const [refUsers, setRefUsers] = useState(null);
  const [decodeValues, setDecodeValues] = useState(null);

  const handleCoinSelection = (coin) => {
    setSelectedCoin(coin);
  };

  const [isPopUpOpen, setPopUpOpen] = useState(false);
  const getRefUsers = async () => {
    const resp = await axios.get(`${env_data.base_url}/token`);
    const decoded = jwt_decode(resp.data.accessToken);
    setDecodeValues(decoded);

    const user_code = decoded.user_code;
    const response = await axios.get(
      `${env_data.base_url}/newcommer/get/${user_code}`
    );

   
    const resIrFamily = await axios.get(
      `${env_data.base_url}/getIrFamily/get/${user_code}`
    );
    setIrFamily(resIrFamily.data.data);
    setRefUsers(response.data);
  };
  const openPopUp = () => {
    setPopUpOpen(true);
  };
  const closePopUp = () => {
    setPopUpOpen(false);
  };

  const [selectedRowCount, setSelectedRowCount] = useState(10);
  const [irFamily, setIrFamily] = useState();
  const limitedTableData = irFamily?.slice(0, selectedRowCount);
  const [notificationCount, setNotificationCount] = useState(0);
  const [searchValue, setSearchValue] = useState("");

  // Add an onChange handler to update the search value
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };
  const filteredData = irFamily?.filter((row) => {
  return (
    row.ref_code.toLowerCase().includes(searchValue.toLowerCase()) ||
    row.username.toLowerCase().includes(searchValue.toLowerCase())
  );
});

function getPositionPercentage(data) {
  const leftExists = data.some(item => item.position === "left");
  const rightExists = data.some(item => item.position === "right");

  if (leftExists && rightExists) {
      return 100;
  } else if (leftExists || rightExists) {
      return 50;
  } else {
      return 0;
  }
}

  return (
    <div className="w-full bg-[#1E1E1E] h-full fixed right-0 flex flex-col ">
      <div className="res-body lg:ml-[300px] md:ml-[100px] flex flex-col">
        <div
          className="flex flex-col dash-body w-full h-screen sm:p-8 p-3 overflow-y-scroll pt-[66px] "
          id="style-6"
        >
          <div className="flex flex-row w-full justify-between">
            <div className="flex flex-col space-y-2">
              <h2 className="text-[24px] font-semibold text-white">
                Welcome to BlackZIZ
              </h2>
              <h3 className="text-[18px] font-normal text-[#E08E20]">
                Dashboard
              </h3>
            </div>

            <div className="px-3 justify-center items-center flex ">
              <div className="notification md:w-[56px] md:h-[56px] w-[32px] h-[32px] relative">
                {refUsers && (
                  <ToolTipPositions
                    trigger={
                      <div>
                        <div
                          onClick={() => openPopUp()}
                          className="md:w-[56px] md:h-[56px] w-[32px] h-[32px] rounded-full border-[1px] relative border-[#FFDC4A] bg-[#151515] flex justify-center items-center cursor-pointer"
                        >
                          <span className="text-[#E08E20]">
                            <NotificationsActive />
                          </span>
                        </div>
                      </div>
                    }
                    users={refUsers}
                    userData={decodeValues}
                  />
                )}
              </div>
            </div>
          </div>

          <div className="w-full mt-5 mb-5 relative bg-[#151515] p-5 flex flex-col rounded-[6px]">
            <div className="coin-details sm:w-[80%] mt-3 flex flex-col justify-center mx-auto w-full">
              {selectedCoin ? (
                <>
                  <CoinDetail selectedCoin={selectedCoin} />
                </>
              ) : (
                <>
                  <h2 className="text-white">Coin Name</h2>
                  <p className="text-white">Coin BTC Price</p>
                </>
              )}
            </div>
          </div>

          {/* <div className="w-full mt-10 mb-5">
            <CoinCarousel />
          </div> */}

          <div className="res-mid-body mid-body mt-5 w-full flex lg:flex-row flex-col lg:mb-0 justify-center items-center relative">
            <div className="dash-indicators  lg:h-[499px] w-full  bg-[#151515] bg-opacity-40 rounded-[14px] flex lg:flex-row flex-col md:flex-col justify-center lg:space-x-6 items-center sm:p-5 lg:p-0">
              <div className="dash-profile flex flex-col md:flex-row p-5 lg:w-2/3 lg:h-[467px] sm:w-full sm:h-full md:w-full bg-[#151515] rounded-[6px] border-[1px] border-[#565656] lg:ml-[26px]  shadow-lg shadow-black items-center">
                {/* <div className="flex flex-col md:w-1/3 justify-center items-center w-full">
                  <div
                    className="profile-img md:w-[144px] md:h-[144px] w-[100px] h-[100px] rounded-full bg-gradient-to-b from-[#FFDC4A] to-[#E08E20] flex justify-center items-center cursor-pointer"
                    onClick={() => {
                      navigate("/MyProfile");
                    }}
                  >
                    <img src="" alt="profile image" />
                  </div>
                  <h2 className="mt-3 text-[18px] text-white">John Lowrance</h2>
                </div> */}

                <div className="profile-content flex flex-col mt-3 w-[90%] pb-5 pt-5 border-collapse border-t-[1px] border-b-[1px] border-[#565656] border-opacity-40 space-y-5">
                  <div className="rank-row flex flex-row w-full p-2 justify-between items-center">
                    <div className="flex flex-col w-1/3">
                      <h4 className="text-[16px] text-white">Rank</h4>
                      <span className="text-[12px] text-white text-opacity-50 ">
                        {" "}
                        Daily Rank Calculations
                      </span>
                    </div>
                    <div className="flex flex-col w-1/3 justify-center items-center">
                      <h3 className="text-[18px] text-[#E08E20]">No Rank</h3>
                    </div>
                    <div className="flex flex-col w-1/3 justify-end items-end">
                      <img src={rank} alt="" className="sm:w-[56px]" />
                    </div>
                  </div>
                  <div className="daily-limit flex flex-col  w-full p-2 justify-between items-center">
                    <div className="flex flex-col w-full space-y-3">
                      <h4 className="text-[16px] text-white uppercase">
                        Daily Limit
                      </h4>
                      <div className="w-full h-[6px] bg-[#FFA524] bg-opacity-40 rounded-sm"></div>
                    </div>
                  </div>

                  <div className="total-withdrawal flex flex-row w-full p-2 justify-between items-center">
                    <h4 className="text-[14px] text-white uppercase">
                      Total Withdrawal
                    </h4>
                    <h4 className="text-[14px] text-[#FFA524] uppercase">
                      $50.89
                    </h4>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 sm:w-full md:w-full">
                <DateCalendarValue />
              </div>
            </div>
          </div>

          <h2 className="text-[24px] font-semibold text-white mt-10">
            My Wallet Details
          </h2>
          <div className="My_Wallet_Details flex flex-col mt-6 w-full">
            <div className="MWD_row_1 flex sm:flex-wrap md:flex-wrap lg:flex-wrap gap-5 w-full justify-center items-center ">
              <div className="res-mb-card lg:w-3/12 space-y-2 flex flex-col lg:h-[259px] justify-center items-center sm:w-3/12 sm:h-full p-3 w-full h-auto bg-[#151515] rounded-[6px] border-[1px] border-[#565656] shadow-lg shadow-black">
                {/* <div className="chart-ind sm:w-[160px] sm:h-[160px] relative">
                  <img src={chart} alt="" className="object-cover" />
                </div> */}
{/* <div class="half-circle-container">
  Your Text
</div> */}


                <h3 className="text-white sm:text-[16px]">IR Allowance</h3>
               { irFamily&&<span className="text-[#565656] text-[14px]">{getPositionPercentage(irFamily)}% Complete</span>}
              </div>

              <div className="res-mb-card lg:w-3/12  space-y-2 flex flex-col lg:h-[259px] justify-center items-center sm:w-3/12 sm:h-full p-3 w-full  h-auto bg-[#151515] rounded-[6px] border-[1px] border-[#565656] shadow-lg shadow-black">
                <div className="flex justify-center items-center mx-auto sm:w-[34px] sm:h-[34px] bg-[#FFA524] rounded-sm bg-opacity-30">
                  <span className="text-[#FFA524]">
                    <Person />
                  </span>
                </div>
                <h3 className="text-white sm:text-[16px]">USERS COUNT</h3>
                <h3 className="text-white sm:text-[2rem]">
                  {irFamily?.length}
                </h3>
                <button className="lg:py-3 lg:px-6 text-[12px] sm:w-[128px] font-semibold capitalize bg-[#FFA524] rounded-md py-2 px-4 sm:py-2 sm:px-4">
                  View count
                </button>
              </div>

              <div className="res-mb-card lg:w-3/12  space-y-2 flex flex-col lg:h-[259px] justify-center items-center sm:w-3/12 sm:h-full p-3 w-full h-auto bg-[#151515] rounded-[6px] border-[1px] border-[#565656] shadow-lg shadow-black">
                <div className="flex justify-center items-center mx-auto sm:w-[34px] sm:h-[34px] bg-[#FFA524] rounded-sm bg-opacity-30">
                  <span className="text-[#FFA524]">
                    <PriceChange />
                  </span>
                </div>
                <h3 className="text-white text-center sm:text-[16px]">
                  TOTAL <br /> WITHDRAWALS
                </h3>
                <h3 className="text-[#565656] sm:text-[1.2rem]">USDT</h3>
                <h3 className="text-[2.2rem] text-white font-semibold">0.00</h3>
              </div>
            </div>

            <div className="MWD_row_2 flex flex-col sm:flex-col md:flex-row  gap-5 w-full justify-center items-center mt-5 mx-auto">
              <div className="res-mb-card-2 md:w-5/12 w-full flex flex-col  justify-center space-y-3 p-3 sm:w-full sm:h-[186px] bg-[#151515] rounded-[6px] border-[1px] border-[#565656] shadow-lg shadow-black">
                <h4 className="text-[14px] text-white uppercase text-left">
                  TOTAL EARNED
                </h4>
                <div className="flex flex-row w-full justify-between items-center ">
                  <span className="text-[#FFA524] ">
                    <Payment fontSize="large" />
                  </span>

                  <h3 className="text-white text-center sm:text-[20px]">
                    {" "}
                    USDT {decodeValues ? decodeValues.balance : 0.0}
                  </h3>
                </div>

                {/* <div className="flex flex-row w-full justify-between items-center ">
                  <h3 className="text-[#565656] sm:text-[14px]">Last Income</h3>
                  <h3 className="text-[#565656] sm:text-[14px]">USDT 52.64</h3>
                </div> */}
              </div>

              <div className="res-mb-card-2 md:w-5/12 w-full flex flex-col  justify-center space-y-3 p-3 sm:w-full sm:h-[186px] bg-[#151515] rounded-[6px] border-[1px] border-[#565656] shadow-lg shadow-black">
                <h4 className="text-[14px] text-white uppercase text-left">
                  TOTAL INVESTED
                </h4>
                <div className="flex flex-row w-full justify-between items-center ">
                  <span className="text-[#FFA524] ">
                    <Payment fontSize="large" />
                  </span>

                  <h3 className="text-white text-center sm:text-[20px]">
                    {" "}
                    USDT {decodeValues ? decodeValues.wallet : 0.0}
                  </h3>
                </div>

                <div className="flex flex-row w-full justify-between items-center "></div>
              </div>
            </div>
          </div>

          <h2 className="text-[24px] font-semibold text-white mt-10">
            My IR Family
          </h2>
          <div className="w-full  sm:p-5 p-2 bg-[#1A1A1A] mt-8 mb-[128px] rounded-[14px] relative">
            <div className="table-top-row w-full flex flex-row justify-between items-center ">
              <div className="flex flex-row justify-center items-center space-x-3">
                <span className="text-[14px] text-[#E08E20]">
                  <TuneRounded />
                </span>
                <div className="sm:w-[114px] sm:h-[38px] md:w-[144px] md:h-[44px] w-[100px] h-[32px] bg-[#565656] bg-opacity-10 rounded-[3px] relative flex justify-between items-center">
                  <select
                    className="bg-transparent outline-none sm:w-[138px] border-none p-2 text-white"
                    value={selectedRowCount}
                    onChange={(e) =>
                      setSelectedRowCount(Number(e.target.value))
                    }
                  >
                    <option value="10" className="text-[#151515] text-[14px]">
                      10
                    </option>
                    <option value="20" className="text-[#151515] text-[14px]">
                      20
                    </option>
                    <option value="30" className="text-[#151515] text-[14px]">
                      30
                    </option>
                  </select>
                </div>
                <span className="text-white font-normal text-[12px] ">
                  entries
                </span>
              </div>

              <div className="flex flex-row justify-center items-center space-x-3">
                <span className="text-white font-normal text-[12px] hidden sm:block ">
                  Search
                </span>
                <div className="sm:w-[144px] sm:h-[38px] md:w-[200px] md:h-[44px] w-[128px] h-[32px] bg-[#565656] bg-opacity-10 rounded-[3px] relative flex justify-between items-center">
                  <input
                   onChange={handleSearchChange}
                    type="text"
                    className="bg-transparent oultine-none sm:w-[144px] md:w-[200px] w-[128px] h-[32px] border-none p-2 text-white"
                    placeholder="search"
                  />
                </div>
              </div>
            </div>

            {irFamily && (
              <div className="dash-table mt-5 w-full  h-full overflow-x-auto">
                <table className="w-full border-[1px] border-[#565656] border-opacity-40 ">
                  <th className="uppercase text-[12px] text-white p-2 border-[#565656] border-r-[1px]  border-opacity-40">
                    IR Name
                  </th>
                  <th className="uppercase text-[12px] text-white p-2 border-[#565656] border-r-[1px] border-opacity-40">
                    FIRST NAME
                  </th>
                  <th className="uppercase text-[12px] text-white p-2 border-[#565656] border-r-[1px] border-opacity-40">
                    LAST NAME
                  </th>
                  <th className="uppercase text-[12px] text-white p-2 border-[#565656] border-r-[1px] border-opacity-40">
                    registration DATE
                  </th>
                  <th className="uppercase text-[12px] text-white p-2">
                    activated date
                  </th>

                  {irFamily && (
                    <tbody>
                      {filteredData?.map((row) => (
                        <tr className="w-full" key={row.id}>
                          <td className=" text-[12px] text-white p-2 border-[#565656] border-[1px] border-opacity-40">
                            {row.ref_code}
                          </td>
                          <td className=" text-[12px] text-white p-2 border-[#565656] border-[1px] border-opacity-40">
                            {row.username}
                          </td>
                          <td className=" text-[12px] text-white p-2 border-[#565656] border-[1px] border-opacity-40">
                            {row.last_name}
                          </td>
                          <td className=" text-[12px] text-white p-2 border-[#565656] border-[1px] border-opacity-40">
                            {row.createdAt}
                          </td>
                          <td className=" text-[12px] text-white p-2 border-[#565656] border-[1px] border-opacity-40">
                            {row.createdAt}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  )}
                </table>
              </div>
            )}
          </div>
        </div>
        <div className="w-full h-full absolute object-center -z-20 ">
          <AnimatedImage />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
