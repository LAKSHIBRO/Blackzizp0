import React, { useState,useEffect } from "react";
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

const MyEarnings = () => {
  useEffect(() => {
    getHistory();
  }, []);
  const testDat = [
    { id: 1, type: "Direct Sale", amount: "$100", createdAt: "21-May-2023" },
    {
      id: 2,
      type: "IR Allowance",
      amount: "$100",
      createdAt: "21-May-2023",
    },
    {
      id: 3,
      type: "IR Allowance",
      amount: "$100",
      createdAt: "21-May-2023",
    },
    { id: 4, type: "Direct Sale", amount: "$100", createdAt: "21-May-2023" },
    {
      id: 5,
      type: "IR Allowance",
      amount: "$100",
      createdAt: "21-May-2023",
    },
    { id: 6, type: "Direct Sale", amount: "$100", createdAt: "21-May-2023" },
    { id: 7, type: "Direct Sale", amount: "$100", createdAt: "21-May-2023" },
    {
      id: 8,
      type: "IR Allowance",
      amount: "$100",
      createdAt: "21-May-2023",
    },
    {
      id: 9,
      type: "Investing Income",
      amount: "$100",
      createdAt: "21-May-2023",
    },
    {
      id: 10,
      type: "IR Allowance",
      amount: "$100",
      createdAt: "21-May-2023",
    },
    {
      id: 11,
      type: "Direct Sale",
      amount: "$100",
      createdAt: "21-May-2023",
    },
    {
      id: 12,
      type: "Direct Sale",
      amount: "$100",
      createdAt: "21-May-2023",
    },
    {
      id: 13,
      type: "OR Commission",
      amount: "$100",
      createdAt: "21-May-2023",
    },
    {
      id: 14,
      type: "OR Commission",
      amount: "$100",
      createdAt: "21-May-2023",
    },
    {
      id: 15,
      type: "Direct Sale",
      amount: "$100",
      createdAt: "21-May-2023",
    },
    {
      id: 16,
      type: "Direct Sale",
      amount: "$100",
      createdAt: "21-May-2023",
    },
    {
      id: 17,
      type: "Direct Sale",
      amount: "$100",
      createdAt: "21-May-2023",
    },
    {
      id: 18,
      type: "OR Commission",
      amount: "$100",
      createdAt: "21-May-2023",
    },
    {
      id: 19,
      type: "Investing Income",
      amount: "$100",
      createdAt: "21-May-2023",
    },
    {
      id: 20,
      type: "Direct Sale",
      amount: "$100",
      createdAt: "21-May-2023",
    },
    {
      id: 21,
      type: "OR Commission",
      amount: "$100",
      createdAt: "21-May-2023",
    },
    {
      id: 22,
      type: "Direct Sale",
      amount: "$100",
      createdAt: "21-May-2023",
    },
    {
      id: 23,
      type: "Investing Income",
      amount: "$100",
      createdAt: "21-May-2023",
    },
  ];

  const [type, setEarningType] = useState("All");
  const [rowCount, setRowCount] = useState(10);
  // const [earningHistory, setEarningHistory] = useState(10);
  const [earningTotal, setEarningTotal] = useState(0);
  const [earningHistory, setEarningHistory] = useState([]);

  const filteredData = earningHistory?.filter((row) => {
    if (type === "All") {
      return true;
    }
    return row.type === type; // Show rows with the selected request type
  });

  // Slice the data to limit the row count
  const limitedData = filteredData?.slice(0, rowCount);
  console.log("🚀 ~ file: MyEarnings.jsx:151 ~ MyEarnings ~ limitedData:", limitedData)

  const [allTotal, setAllTotal] = useState(0);
  const [allText, setAllText] = useState("All");
  const [totalText, setTotalText] = useState("Total");

  const calculateTotalAmount = (selectedEarningType) => {
    let totalAmount = 0;
    let updatedAllText = "All";
    let updatedTotalText = "Total";

    if (selectedEarningType !== "All") {
      totalAmount = earningHistory?.reduce((acc, row) => {
        if (row.type === selectedEarningType) {
          return acc + parseFloat(row.amount.replace("$", "").replace(",", ""));
        }
        return acc;
      }, 0);

      updatedAllText = selectedEarningType;
      updatedTotalText = `Total (${selectedEarningType})`;
    } else {
      totalAmount = earningHistory?.reduce(
        (acc, row) =>
          acc + parseFloat(row.amount.replace("$", "").replace(",", "")),
        0
      );
    }

    setAllText(updatedAllText);
    setTotalText(updatedTotalText);
    setAllTotal(totalAmount);
    setEarningTotal(totalAmount);
  };

  const getHistory = async () => {
    const resp = await axios.get(`${env_data.base_url}/token`);
    const decoded = jwt_decode(resp.data.accessToken);

    console.log(
      "🚀 ~ file: CurrentWallet.jsx:164 ~ getHistory ~ resp:",
      decoded
    );
    const user_id = decoded.userId;
    const response = await axios.get(
      `${env_data.base_url}/gethistory/${user_id}`
    );

    setEarningHistory(response.data.all_history);
    console.log("🚀 ~ file: MyEarnings.jsx:200 ~ getHistory ~ response.data.all_history:", response.data.all_history)
  };

  return (
    <div className="w-full bg-[#1E1E1E] h-full fixed right-0 flex flex-col ">
      <div className="res-body lg:ml-[300px] md:ml-[100px] flex flex-col">
        <div
          className="flex flex-col dash-body w-full h-screen sm:p-8 p-3 overflow-y-scroll pt-[66px] "
          id="style-6"
        >
          <h2 className="text-[24px] font-semibold text-white">My Earnings</h2>
          <h3 className="text-[18px] font-normal text-[#E08E20]">
            Dashboard > My Earnings
          </h3>

          <div className="w-full rounded-md border-[1px] border-[#565656] h-auto flex flex-col mt-5 p-5 bg-[#151515]">
            <div className="w-full justify-between items-center flex md:flex-row flex-col space-y-3 md:space-y-0">
              <div className="flex flex-row justify-start items-center space-x-3 w-full ">
                <span className="text-[14px] text-[#E08E20]">
                  <TuneRounded />
                </span>
                <div className="sm:w-[144px] sm:h-[44px] bg-[#565656] bg-opacity-10 rounded-[3px] relative flex justify-between items-center w-[200px]">
                  <select
                    className="bg-transparent outline-none sm:w-[138px] border-none p-2 text-white text-[14px] w-[200px]"
                    value={rowCount}
                    onChange={(e) => setRowCount(Number(e.target.value))}
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
                {/* <span className="text-white font-normal text-[12px] ">
                  entries
                </span> */}
              </div>

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

            <h2 className="text-white mt-5">Earning Type</h2>
            <div className="lg:w-2/3 sm:h-[44px] bg-[#565656] p-2 bg-opacity-10 rounded-[3px] relative flex justify-between items-center mt-2">
              <select
                className="bg-transparent outline-none w-full border-none p-2 text-[#565656]"
                value={type}
                onChange={(e) => {
                  const selectedEarningType = e.target.value;
                  setEarningType(selectedEarningType);
                  calculateTotalAmount(selectedEarningType);
                }}
              >
                <option value="All">All</option>
                <option value="Direct Sale">Direct Sale</option>
                <option value="IR Allowance">IR Allowance</option>
                <option value="OR Commission">OR Commission</option>
                <option value="Investing Income">Investing Income</option>
              </select>
            </div>

            <div className="w-full md:-1/3 mt-5">
              <h2 className="text-[#ffffff] text-[12px] md:text-[1.2rem]">
                {allText} : <span className="text-[#FFA524] ">{totalText}</span>
              </h2>
            </div>

            <div className="dash-table mt-5 w-full overflow-x-auto">
              <table className="w-full border-[1px] border-[#565656] ">
                <th className="uppercase text-[12px] text-white p-2 border-[#565656] border-r-[1px]  border-opacity-40">
                  EARNING TYPE
                </th>
                <th className="uppercase text-[12px] text-white p-2 border-[#565656] border-r-[1px] border-opacity-40">
                  AMOUNT
                </th>
                <th className="uppercase text-[12px] text-white p-2 border-[#565656] border-r-[1px] border-opacity-40">
                  PAYMENT DATE
                </th>

                <tbody>
                  {limitedData.map((row) => (
                    <tr key={row.id}>
                      <td className="request-type text-[12px] text-white p-2 border-[#565656] border-[1px] border-opacity-40">
                        {row.type}
                      </td>
                      <td className=" text-[12px] text-white p-2 border-[#565656] border-[1px] border-opacity-40">
                        {row.amount} usdt
                      </td>
                      <td className=" text-[12px] text-white p-2 border-[#565656] border-[1px] border-opacity-40">
                        {row.createdAt}
                      </td>
                    </tr>
                  ))}
                </tbody>
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

export default MyEarnings;
