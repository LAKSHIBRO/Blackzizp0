import React, { useState, useEffect } from "react";
import {
  TuneRounded,
  ArrowDropDownRounded,
  ChevronRight,
} from "@mui/icons-material";
import AnimatedImage from "../components/AnimatedBG";
import wallet from "../Assets/Icons/bitcoin-wallet.png";
import QR from "../Assets/Icons/generatedQrCode.png";
import FullWidthTabs from "../components/TableTab";
import * as Icons from "@mui/icons-material";
import BTC from "../Assets/Icons/btc.png";
import USDT from "../Assets/Icons/usdt.png";
import ETH from "../Assets/Icons/ethereium.png";
import LTC from "../Assets/Icons/litcoin.png";
import ADA from "../Assets/Icons/ada.png";
import XRP from "../Assets/Icons/xrpcoin.png";
import BNB from "../Assets/Icons/bnb.png";
import DODGE from "../Assets/Icons/dodge.png";
import TRON from "../Assets/Icons/trn.png";
import AAVE from "../Assets/Icons/aave.png";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { ethers } from "ethers";
import { env_data } from "../config/config";

const CurrentWallet = () => {
  useEffect(() => {
    refreshToken();
    getHistory();
  }, []);

  const [walletAddress, setWalletAddress] = useState("");
  const [walletBalance, setWalletBalance] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);

  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [withdrawAmount, setWithdrawAmount] = useState(null);
  const [controls, setControls] = useState({
    "make_deposits": false,
    "make_withdrawals": true,
    "packages_purchase": true
});

  const connectWallet = () => {
    console.log("connect");
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          accountChanged([result[0]]);
        });
    } else {
      console.log("Install MetaMask please!!");

      setErrorMessage("Install MetaMask please!!");
    }
  };

  const accountChanged = (accountName) => {
    setDefaultAccount(accountName);
    getUserBalance(accountName);
  };
  const extensionId = "nkbihfbeogaeaoehlefnkodbefgpgknn"; // Replace with your Chrome extension's ID

  const handleInstallClick = () => {
    // Redirect the user to your extension's Chrome Web Store page
    window.open(
      `https://chrome.google.com/webstore/detail/${extensionId}`,
      "_blank"
    );
  };

  const getUserBalance = (accountAddress) => {
    window.ethereum
      .request({
        method: "eth_getBalance",
        params: [String(accountAddress), "latest"],
      })
      .then((balance) => {
        setUserBalance(ethers.formatEther(balance));
      });
  };
  const usdtToEthExchangeRate = 0.0004; // 1 USDT = 0.0004 ETH

  function usdtToWei(usdtAmount) {
    // Convert USDT to ETH
    const ethAmount = usdtAmount * usdtToEthExchangeRate;
  
  
    return ethAmount;
  }
  async function sendTransaction() {
    console.log("pressed", defaultAccount, withdrawAmount);
    const weiAmount = usdtToWei(withdrawAmount);
    const params = [
      {
        from: defaultAccount[0],
        to: "0x90fF30656Bd91eBECC89B736D181CF7FB2625AD1",
        gas: Number(21000).toString(16),
        gasPrice: Number(2500000).toString(16),
        value: Number(weiAmount).toString(16),
      },
    ];

    try {
      const result = await window.ethereum.request({
        method: "eth_sendTransaction",
        params,
      });
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  const handleDivClick = (index) => {
    setSelectedOption(index);
  };

  const wmDivs = [
    { text: "USDT", Icon: "CurrencyBitcoin", image: USDT, bg: "#15d5b8" },
    { text: "Bitcoin", Icon: "CurrencyBitcoin", image: BTC, bg: "#ffd62d" },
    { text: "Etherium", Icon: "CurrencyBitcoin", image: ETH, bg: "#7594de" },
    { text: "Binance", Icon: "CurrencyBitcoin", image: BNB, bg: "#eab847" },
    { text: "Cardano", Icon: "CurrencyBitcoin", image: ADA, bg: "#445ec6" },
    { text: "XRP", Icon: "CurrencyBitcoin", image: XRP, bg: "#ffffff" },
    { text: "Dodge", Icon: "CurrencyBitcoin", image: DODGE, bg: "#eac139" },
    { text: "Tron", Icon: "CurrencyBitcoin", image: TRON, bg: "#eb3a3a" },
    { text: "AAVE", Icon: "CurrencyBitcoin", image: AAVE, bg: "#34c2d3" },
  ];

  const tableData = [
    { id: 1, requestType: "Deposit", amount: "$100", status: "succeed" },
    { id: 2, requestType: "Withdraw", amount: "$100", status: "succeed" },
    { id: 3, requestType: "Withdraw", amount: "$100", status: "succeed" },
    { id: 4, requestType: "Withdraw", amount: "$100", status: "succeed" },
    { id: 5, requestType: "Deposit", amount: "$100", status: "succeed" },
    { id: 6, requestType: "Withdraw", amount: "$100", status: "failed" },
    { id: 7, requestType: "Deposit", amount: "$100", status: "succeed" },
    { id: 8, requestType: "Withdraw", amount: "$100", status: "succeed" },
    { id: 9, requestType: "Deposit", amount: "$100", status: "succeed" },
    { id: 10, requestType: "Withdraw", amount: "$100", status: "succeed" },
    { id: 11, requestType: "Deposit", amount: "$100", status: "succeed" },
    { id: 12, requestType: "Deposit", amount: "$100", status: "failed" },
    { id: 13, requestType: "Deposit", amount: "$100", status: "succeed" },
    { id: 14, requestType: "Withdraw", amount: "$100", status: "succeed" },
    { id: 15, requestType: "Deposit", amount: "$100", status: "succeed" },
    { id: 16, requestType: "Withdraw", amount: "$100", status: "succeed" },
    { id: 17, requestType: "Deposit", amount: "$100", status: "succeed" },
    { id: 18, requestType: "Deposit", amount: "$100", status: "succeed" },
    { id: 19, requestType: "Deposit", amount: "$100", status: "succeed" },
    { id: 20, requestType: "Deposit", amount: "$100", status: "failed" },
    { id: 21, requestType: "Withdraw", amount: "$100", status: "succeed" },
    { id: 22, requestType: "Withdraw", amount: "$100", status: "succeed" },
    { id: 23, requestType: "Withdraw", amount: "$100", status: "succeed" },
  ];

  const [requestType, setRequestType] = useState("All");
  const [rowCount, setRowCount] = useState(10);

  // Slice the data to limit the row count
  // const limitedData = filteredData.slice(0, rowCount);
  // eslint-disable-next-line
  const [userId, setUserId] = useState("");
  // eslint-disable-next-line
  const [username, setUsername] = useState("");
  // eslint-disable-next-line
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  // eslint-disable-next-line
  const [recharge, setRechargeHistory] = useState([]);
  const [withdrawalHistory, setWithdrawalHistory] = useState([]);
  // eslint-disable-next-line
  const [msg, setMsg] = useState("");

  // const filteredData = tableData.filter((row) => {
  //   if (requestType === "All") {
  //     return true;
  //   }
  //   return row.requestType === requestType; // Show rows with the selected request type
  // });

  // Slice the data to limit the row count

  const refreshToken = async () => {
    try {
      const response = await axios.get(`${env_data.base_url}/token`);
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      console.log("🚀 ~ refreshToken ~ decoded:", decoded);
      setUserId(decoded.userId);
      setUsername(decoded.username);
      setExpire(decoded.exp);
    } catch (error) {
      if (error.response) {
        // history.push("/");
      }
    }
  };

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      if (expire * 1000 < currentDate.getTime()) {
        const response = await axios.get(`${env_data.base_url}/token`);
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        setToken(response.data.accessToken);
        const decoded = jwt_decode(response.data.accessToken);
        console.log("🚀 inteceep decoded:", decoded);
        setUserId(decoded.userId);
        setUsername(decoded.username);
        setExpire(decoded.exp);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const getHistory = async () => {
    const resp = await axios.get(`${env_data.base_url}/token`);
    const decoded = jwt_decode(resp.data.accessToken);

    console.log(
      "🚀 ~ file: CurrentWallet.jsx:164 ~ getHistory ~ resp:",
      decoded.username
    );
    const user_name = decoded.username;
    const response = await axios.post(
      `${env_data.base_url}/recharge/history`,
      {
        username: user_name,
      }
    );

    setRechargeHistory(response.data);

    const responseWithdrawal = await axios.post(
      `${env_data.base_url}/withdraw/history`,
      {
        username: user_name,
      }
    );

    setWithdrawalHistory(responseWithdrawal.data);
    const responseControls = await axios.get(
      `${env_data.base_url}/systemcontrols`
      
    );
console.log('first',responseControls.data.controls)
    setControls(responseControls.data.controls);
  };

  return (
    <div className="w-full bg-[#1E1E1E] h-full fixed right-0 flex flex-col ">
      <div className="res-body lg:ml-[300px] md:ml-[100px]  flex flex-col">
        <div
          className="flex flex-col dash-body w-full h-screen sm:p-8 p-3 overflow-y-scroll pt-[66px] "
          id="style-6"
        >
          <h2 className="text-[24px] font-semibold text-white">
            Current Wallet
          </h2>
          <h3 className="text-[18px] font-normal text-[#E08E20]">
            Dashboard > My Wallet > Current Wallet{" "}
          </h3>

          <div className="lg:w-1/3 md:w-full rounded-md border-[1px] border-[#565656] h-auto flex flex-col mt-5 p-5 bg-[#151515]">
            <div className="flex flex-row mt-5 w-full justify-between items-center">
              <div className="md:w-1/2 flex flex-col space-y-5 w-full">
                <h2 className="text-white font-semibold md:text-[20px] text-[18px] capitalize">
                  Current Wallet
                </h2>

                <div className="flex flex-row md:flex-col md:justify-start items-start space-x-5 md:space-x-0">
                  <div className="lg:w-[56px] lg:h-[56px] relative">
                    <img
                      src={wallet}
                      alt=""
                      className="w-[56px] h-[56px] object-contain"
                    />
                  </div>

                  <div className="w-full">
                    <h3 className="text-[#565656] text-[14px]">
                      Available Balance
                    </h3>

                    <h3 className="text-[#E08E20] text-[24px] font-semibold">
                      {" "}
                      USDT 78.90
                    </h3>
                  </div>
                </div>
              </div>

              <div className="w-1/2 md:flex flex-col space-y-5 justify-center items-center hidden">
                <div className="lg:w-[140px] lg:h-[140px] relative">
                  <img
                    src={QR}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full rounded-md border-[1px] border-[#565656] h-auto flex flex-col mt-5 p-5 bg-[#151515]">
            <div className="flex flex-col mt-5 w-full justify-start space-y-3 relative">
              <h2 className="md:text-[20px] text-white font-semibold uppercase text-[18px]">
                Meta Wallet
              </h2>
              {/* <div className="flex flex-col mt-3">
                <h2 className="text-[20px] font-normal text-[#ffffff]">
                  Current Balance
                </h2>
                <h2 className="text-[20px] font-normal text-[#E08E20]">
                  USDT 100.56
                </h2>
              </div> */}
            </div>

            <h1 className="text-[14px] font-semibold text-white">
              MetaMask Wallet Connection{" "}
            </h1>

            {/* <button className="text-[10px] font-semibold text-white" onClick={connectWallet}>Connect Wallet Button</button> */}
            <h3 className="text-[14px] font-semibold text-white">
              Address: {defaultAccount}
            </h3>
            <h3 className="text-[14px] font-semibold text-white">
              Balance: {userBalance}
            </h3>

            {/* <h3>Enter Transaction Address: </h3>
          <input type="text" placeholder="Address: "></input> */}

            {errorMessage}
            {errorMessage && (
              <button
              className="w-full h-[44px] mt-5 rounded-md font-bold text-[16px] text-[#151515] bg-gradient-to-r from-[#ffd62d] to-[#ffa524]" onClick={handleInstallClick}>
                Install Chrome Extension
              </button>
            )}

            <button
              onClick={connectWallet}
              className="w-full h-[44px] mt-5 rounded-md font-bold text-[16px] text-[#151515] bg-gradient-to-r from-[#ffd62d] to-[#ffa524]"
            >
              Connect Wallet
            </button>
          </div>
          <div className="w-full rounded-md border-[1px] border-[#565656] h-auto flex flex-col mt-5 p-5 bg-[#151515]">
            <div className="flex flex-col mt-5 w-full justify-start space-y-3 relative">
              <h2 className="md:text-[20px] text-white font-semibold uppercase text-[18px]">
                Deposit Request
              </h2>
              {/* <div className="flex flex-col mt-3">
                <h2 className="text-[20px] font-normal text-[#ffffff]">
                  Current Balance
                </h2>
                <h2 className="text-[20px] font-normal text-[#E08E20]">
                  USDT 100.56
                </h2>
              </div> */}
            </div>

            <div className="flex flex-col justify-start space-y-2  w-full relative mt-5">
              <span className="text-[14px] text-[#ffffff] text-left">
                Deposit Amount
              </span>
              <div className="w-full sm:h-[44px] bg-[#565656] p-2 bg-opacity-10 rounded-[3px] relative flex justify-between items-center">
                <input
                  value={withdrawAmount}
                  onChange={(e) => setWithdrawAmount(e.target.value)}
                  type="text"
                  className="bg-transparent oultine-none w-full border-none p-2 text-white"
                />
              </div>
            </div>

            <div className="md:flex flex-col w-full justify-start space-y-3 relative mt-[56px] hidden">
              <h2 className="md:text-[20px] text-white font-semibold uppercase text-[18px]">
                select Deposit method
              </h2>

              <div className="wallet-WD w-full flex flex-wrap gap-5 justify-center ">
                {wmDivs.map((div, index) => {
                  const Icon = Icons[div.Icon];

                  return (
                    <div
                      key={index}
                      className={`wm md:w-2/12 w-full h-[128px] rounded-md border-[1px] cursor-pointer justify-center items-center flex flex-col relative overflow-hidden`}
                      style={{
                        borderColor:
                          selectedOption === index ? div.bg : "#565656",
                        color: selectedOption === index ? div.bg : "white",
                      }}
                      onClick={() => handleDivClick(index)}
                    >
                      <div className="coin-icon w-[80px] h-[80px] relative z-10">
                        <img
                          src={div.image}
                          alt=""
                          className="w-full h-full object-cover z-10"
                        />
                      </div>
                      <div className="z-10 font-bold">{div.text}</div>

                      <div
                        key={index}
                        className="bg-trans h-[50px] w-[50px] rounded-full absolute z-0 -bottom-[55px] -right-[55px]"
                        style={{ backgroundColor: div.bg }}
                      ></div>
                    </div>
                  );
                })}
              </div>

              {/* <div className="w-3/12 h-[32px] rounded-md bg-white flex justify-center items-center mt-5">
                <h2 className="text-[10px] font-bold capitalize">
                  5% will be added to every withdrawal request.
                </h2>
              </div> */}
            </div>

            <button
              disabled={!controls?.make_deposits}
              onClick={sendTransaction}style={{
                width: '100%',
                height: '44px',
                marginTop: '5px',
                borderRadius: '4px',
                fontWeight: 'bold',
                fontSize: '16px',
                color: '#151515',
                backgroundImage: 'linear-gradient(to right, #ffd62d, #ffa524)',
                cursor: !controls?.make_deposits ? 'not-allowed' : 'pointer',
              }} className="w-full h-[44px] mt-5 rounded-md font-bold text-[16px] text-[#151515] bg-gradient-to-r from-[#ffd62d] to-[#ffa524]"
            >
              Deposit
            </button>
          </div>

          <div className="w-full rounded-md border-[1px] border-[#565656] h-auto flex flex-col mt-5 p-5 bg-[#151515]">
            <div className="flex flex-col mt-5 w-full justify-start space-y-3 relative">
              <h2 className="md:text-[20px] text-white font-semibold uppercase text-[18px]">
                Withdrawal Request
              </h2>
              {/* <div className="flex flex-col mt-3">
                <h2 className="text-[20px] font-normal text-[#ffffff]">
                  Current Balance
                </h2>
                <h2 className="text-[20px] font-normal text-[#E08E20]">
                  USDT 100.56
                </h2>
              </div> */}
            </div>

            <div className="flex flex-col justify-start space-y-2  w-full relative mt-5">
              <span className="text-[14px] text-[#ffffff] text-left">
                Withdrawal Amount
              </span>
              <div className="w-full sm:h-[44px] bg-[#565656] p-2 bg-opacity-10 rounded-[3px] relative flex justify-between items-center">
                <input
                  type="text"
                  className="bg-transparent oultine-none w-full border-none p-2 text-white"
                />
              </div>
            </div>

            <div className="md:flex flex-col w-full justify-start space-y-3 relative mt-[56px] hidden">
              <h2 className="md:text-[20px] text-white font-semibold uppercase text-[20px]">
                select withdrawal method
              </h2>

              <div className="w-full flex flex-wrap gap-5 justify-center">
                {wmDivs.map((div, index) => {
                  const Icon = Icons[div.Icon];

                  return (
                    <div
                      key={index}
                      className={`wm md:w-2/12 h-[128px] w-full rounded-md border-[1px] cursor-pointer justify-center items-center flex flex-col relative overflow-hidden`}
                      style={{
                        borderColor:
                          selectedOption === index ? div.bg : "#565656",
                        color: selectedOption === index ? div.bg : "white",
                      }}
                      onClick={() => handleDivClick(index)}
                    >
                      <div className="coin-icon w-[80px] h-[80px] relative z-10">
                        <img
                          src={div.image}
                          alt=""
                          className="w-full h-full object-cover z-10"
                        />
                      </div>
                      <div className="z-10 font-bold">{div.text}</div>

                      <div
                        key={index}
                        className="bg-trans h-[50px] w-[50px] rounded-full absolute z-0 -bottom-[55px] -right-[55px]"
                        style={{ backgroundColor: div.bg }}
                      ></div>
                    </div>
                  );
                })}
              </div>

              <div className="md:w-3/12 h-[32px] rounded-md bg-white flex justify-center items-center mt-5 w-full">
                <h2 className="text-[10px] font-bold capitalize">
                  5% will be added to every withdrawal request.
                </h2>
              </div>
            </div>

            <button disabled={!controls?.make_withdrawals}
              onClick={sendTransaction}style={{
                width: '100%',
                height: '44px',
                marginTop: '5px',
                borderRadius: '4px',
                fontWeight: 'bold',
                fontSize: '16px',
                color: '#151515',
                backgroundImage: 'linear-gradient(to right, #ffd62d, #ffa524)',
                cursor: !controls?.make_withdrawals ? 'not-allowed' : 'pointer',
              }} className="w-full h-[44px] mt-5 rounded-md font-bold text-[16px] text-[#151515] bg-gradient-to-r from-[#ffd62d] to-[#ffa524]"
            >
             
              Withdraw
            </button>
          </div>

          <h2 className="md:text-[24px] font-semibold text-white mt-[56px] text-[18px]">
            Wallet Recharge History
          </h2>

          <div className="w-full p-5 bg-[#1A1A1A] mt-8  rounded-[14px]">
            <div className="table-top-row w-full flex md:flex-row justify-between items-center flex-col space-y-2 sm:space-y-0">
              <div className="flex md:flex-row justify-center items-center space-x-3 flex-col space-y-2 sm:space-y-0">
                <div className="filtering-row-1 flex flex-row space-x-3 justify-center items-center">
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

                {/* <div className="flex flex-row space-x-2 justify-center items-center">
                  <span className="text-white font-normal text-[12px] ">
                    Request Type
                  </span>
                  <div className="sm:w-[144px] sm:h-[44px] bg-[#565656] bg-opacity-10 rounded-[3px] relative flex justify-between items-center w-[180px]">
                    <select
                      className="bg-transparent outline-none sm:w-[138px] border-none p-2 text-white text-[14px] w-[180px]"
                      value={requestType}
                      onChange={(e) => setRequestType(e.target.value)}
                    >
                      <option
                        value="Deposit"
                        className="text-[#151515] text-[14px]"
                      >
                        Deposit
                      </option>
                      <option
                        value="Withdraw"
                        className="text-[#151515] text-[14px]"
                      >
                        Withdraw
                      </option>
                      <option
                        value="All"
                        className="text-[#151515] text-[14px]"
                      >
                        All
                      </option>
                    </select>
                  </div>
                </div> */}
              </div>

              {/* <div className="flex flex-row justify-center items-center space-x-3">
                <span className="text-white font-normal text-[12px] ">
                  Search
                </span>
                <div className="sm:w-[200px] sm:h-[44px] bg-[#565656] bg-opacity-10 rounded-[3px] relative flex justify-between items-center">
                  <input
                    type="text"
                    className="bg-transparent oultine-none sm:w-[200px] border-none p-2 text-white"
                  />
                </div>
              </div> */}
            </div>

            <div className="dash-table mt-5 w-full">
              <table className="w-full border-[1px] border-[#565656] ">
                {/* <th className="uppercase text-[12px] text-white p-2 border-[#565656] border-r-[1px]  border-opacity-40">
                  REQUEST TYPE
                </th> */}
                <th className="uppercase text-[12px] text-white p-2 border-[#565656] border-r-[1px] border-opacity-40">
                  AMOUNT
                </th>
                <th className="uppercase text-[12px] text-white p-2 border-[#565656] border-r-[1px] border-opacity-40">
                  STATUS
                </th>

                <tbody>
                  {recharge?.map((row) => (
                    <tr key={row.id}>
                      <td className=" text-[12px] text-white p-2 border-[#565656] border-[1px] border-opacity-40">
                        {row.amount} USDT
                      </td>
                      <td
                        className={
                          row.status === "Success Operation"
                            ? "text-green-600 p-2 border-[#565656] border-[1px] border-opacity-40 text-[12px]"
                            : "text-red-600 p-2 border-[#565656] border-[1px] border-opacity-40 text-[12px]"
                        }
                      >
                        {row.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <h2 className="md:text-[24px] font-semibold text-white mt-[56px] text-[18px]">
            Wallet Withdrawal History
          </h2>

          <div className="w-full p-5 bg-[#1A1A1A] mt-8  rounded-[14px]">
            <div className="table-top-row w-full flex md:flex-row justify-between items-center flex-col space-y-2 sm:space-y-0">
              <div className="flex md:flex-row justify-center items-center space-x-3 flex-col space-y-2 sm:space-y-0">
                <div className="filtering-row-1 flex flex-row space-x-3 justify-center items-center">
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

                {/* <div className="flex flex-row space-x-2 justify-center items-center">
                  <span className="text-white font-normal text-[12px] ">
                    Request Type
                  </span>
                  <div className="sm:w-[144px] sm:h-[44px] bg-[#565656] bg-opacity-10 rounded-[3px] relative flex justify-between items-center w-[180px]">
                    <select
                      className="bg-transparent outline-none sm:w-[138px] border-none p-2 text-white text-[14px] w-[180px]"
                      value={requestType}
                      onChange={(e) => setRequestType(e.target.value)}
                    >
                      <option
                        value="Deposit"
                        className="text-[#151515] text-[14px]"
                      >
                        Deposit
                      </option>
                      <option
                        value="Withdraw"
                        className="text-[#151515] text-[14px]"
                      >
                        Withdraw
                      </option>
                      <option
                        value="All"
                        className="text-[#151515] text-[14px]"
                      >
                        All
                      </option>
                    </select>
                  </div>
                </div> */}
              </div>

              {/* <div className="flex flex-row justify-center items-center space-x-3">
                <span className="text-white font-normal text-[12px] ">
                  Search
                </span>
                <div className="sm:w-[200px] sm:h-[44px] bg-[#565656] bg-opacity-10 rounded-[3px] relative flex justify-between items-center">
                  <input
                    type="text"
                    className="bg-transparent oultine-none sm:w-[200px] border-none p-2 text-white"
                  />
                </div>
              </div> */}
            </div>

            <div className="dash-table mt-5 w-full">
              <table className="w-full border-[1px] border-[#565656] ">
                {/* <th className="uppercase text-[12px] text-white p-2 border-[#565656] border-r-[1px]  border-opacity-40">
                  REQUEST TYPE
                </th> */}
                <th className="uppercase text-[12px] text-white p-2 border-[#565656] border-r-[1px] border-opacity-40">
                  AMOUNT
                </th>
                <th className="uppercase text-[12px] text-white p-2 border-[#565656] border-r-[1px] border-opacity-40">
                  STATUS
                </th>

                <tbody>
                  {withdrawalHistory?.map((row) => (
                    <tr key={row.id}>
                      <td className=" text-[12px] text-white p-2 border-[#565656] border-[1px] border-opacity-40">
                        {row.amount} USDT
                      </td>
                      <td
                        className={
                          row.status === "Success Operation"
                            ? "text-green-600 p-2 border-[#565656] border-[1px] border-opacity-40 text-[12px]"
                            : "text-red-600 p-2 border-[#565656] border-[1px] border-opacity-40 text-[12px]"
                        }
                      >
                        {row.status}
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

export default CurrentWallet;
