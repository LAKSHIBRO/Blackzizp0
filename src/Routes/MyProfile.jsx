/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import { Visibility, ContentCopy, VisibilityOff, Email } from "@mui/icons-material";
import bitcoin from "../Assets/Icons/bitcoin coin.png";
import rank from "../Assets/Icons/rank.png";
import CoinCarousel from "../components/CoinCarousel";
import StakingSlider from "../components/StakingSlider";
import { Search, Menu } from "@mui/icons-material";
import commonbg from "../Assets/images/gergeg-01.png";
import AnimatedImage from "../components/AnimatedBG";
import SwipeableViews from "react-swipeable-views-react-18-fix";
import userprofile from "../Assets/images/user.jpg";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { env_data } from "../config/config";

const Current =
  "https://cdn.glitch.global/c58699df-f192-4af9-bca5-0e1daf50c2f9/current.png?v=1670972338225";
const LevelOne =
  "https://cdn.glitch.global/c58699df-f192-4af9-bca5-0e1daf50c2f9/level-one.png?v=1670972349212";
const LevelTwo =
  "https://cdn.glitch.global/c58699df-f192-4af9-bca5-0e1daf50c2f9/level-two.png?v=1670972545149";
const LevelPremium =
  "https://cdn.glitch.global/c58699df-f192-4af9-bca5-0e1daf50c2f9/level-premium.png?v=1670972356141";
const Avatar =
  "https://cdn.glitch.global/c58699df-f192-4af9-bca5-0e1daf50c2f9/avatar_default.jpg?v=1670271759257";
const Arrow =
  "https://cdn.glitch.global/c58699df-f192-4af9-bca5-0e1daf50c2f9/arrow-slide.png?v=1670271756950";
const Wallet =
  "https://cdn.glitch.global/c58699df-f192-4af9-bca5-0e1daf50c2f9/wallet-outline.png?v=1670271834320";
const Config =
  "https://cdn.glitch.global/c58699df-f192-4af9-bca5-0e1daf50c2f9/settings-outline.png?v=1670271784774";
const Security =
  "https://cdn.glitch.global/c58699df-f192-4af9-bca5-0e1daf50c2f9/key-outline.png?v=1670271775178";
const RRecord =
  "https://cdn.glitch.global/c58699df-f192-4af9-bca5-0e1daf50c2f9/card-recharge-outline.png?v=1670271760791";
const WRecord =
  "https://cdn.glitch.global/c58699df-f192-4af9-bca5-0e1daf50c2f9/card-withdraw-outline.png?v=1670271763239";
const Copy =
  "https://cdn.glitch.global/c58699df-f192-4af9-bca5-0e1daf50c2f9/copy-outline.png?v=1670271766124";
const Checkmark =
  "https://cdn.glitch.global/c58699df-f192-4af9-bca5-0e1daf50c2f9/checkmark-circle-outline.png?v=1671121742331";
const Task =
  "https://cdn.glitch.global/c58699df-f192-4af9-bca5-0e1daf50c2f9/receipt-outline.png?v=1670271782979";
const Sync =
  "https://cdn.glitch.global/c58699df-f192-4af9-bca5-0e1daf50c2f9/sync-outline.png?v=1670271786767";

const MyProfile = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const handleViewProfileClick = () => {
    setActiveSection("overview");
  };

  const handleEditProfileClick = () => {
    setActiveSection("edit");
  };

  const [showReferralID, setShowReferralID] = useState(false);
  const [referralID, setReferralID] = useState('');
  const [copySuccess, setCopySuccess] = useState(false);

  const handleVisibilityToggle = () => {
    setShowReferralID(!showReferralID);
  };

  const handleCopy = () => {
    const textToCopy = showReferralID ? referralID : "My Referral ID";

    // Create a temporary input element to copy the text
    const tempInput = document.createElement("input");
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    setCopySuccess(true);

    // Reset the copy success message after a short delay
    setTimeout(() => {
      setCopySuccess(false);
    }, 2000);
  };

  // api

  const [copyEvent, setCopyEvent] = useState(false);
  const [level, setLevel] = useState(false);
  const [money, setMoney] = useState(false);
  const [name, setName] = useState(false);
  const [code, setCode] = useState(false);
  const [image, setImage] = useState("");
  // eslint-disable-next-line
  const [userId, setUserId] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [decodeData, setDecodeData] = useState("");
  const [balance, setBalance] = useState("");
  const [user_code, setUser_Code] = useState("");
  const [vip, setVip] = useState("");
  // eslint-disable-next-line
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  // const history = useHistory();

  useEffect(() => {
    // Page();
    refreshToken();
  }, []);

  const copy = async () => {
    await navigator.clipboard.writeText(user_code);
    setCopyEvent(true);
  };

  const refreshToken = async () => {
    try {
      const response = await axios.get(`${env_data.base_url}/token`);
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      console.log(
        "🚀 ~ file: MyProfile.jsx:121 ~ refreshToken ~ decoded:",
        decoded
      );
      setDecodeData(decoded);
      setUserId(decoded.userId);
      setUsername(decoded.username);
      setFirstName(decoded.first_name);
      setLastName(decoded.last_name);
      setMobile(decoded.mobile);
      setReferralID(decoded.user_code)
      if (decoded.username === null) {
        setName(false);
      } else {
        setName(true);
      }
      setBalance(decoded.balance);
      if (decoded.balance === null) {
        setMoney(false);
      } else {
        setMoney(true);
      }
      setUser_Code(decoded.user_code);
      if (decoded.user_code === null) {
        setCode(false);
      } else {
        setCode(true);
      }
      setVip(decoded.vip);
      if (decoded.vip === null) {
        setImage(Current);
      }
      if (decoded.vip === 1) {
        setImage(LevelOne);
      }
      if (decoded.vip === 2) {
        setImage(LevelTwo);
      }
      if (decoded.vip === 3) {
        setImage(LevelPremium);
      }
      if (decoded.vip === null) {
        setLevel(false);
      } else {
        setLevel(true);
      }
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
        console.log(
          "🚀 ~ file: Account.js:109 ~ axiosJWT.interceptors.request.use ~ response:",
          response
        );
        // config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        setToken(response.data.accessToken);
        const decoded = jwt_decode(response.data.accessToken);
        setUserId(decoded.userId);
        setUser_Code(decoded.user_code);
        setVip(decoded.vip);
        setBalance(decoded.balance);
        setUsername(decoded.username);
        setExpire(decoded.exp);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return (
    <div className="w-full bg-[#1E1E1E] h-full fixed right-0 flex flex-col ">
      <div className="res-body lg:ml-[300px] md:ml-[100px]  flex flex-col ">
        <div
          className="flex flex-col dash-body w-full h-screen sm:p-8 p-3 overflow-y-scroll pt-[66px] "
          id="style-6"
        >
          <h2 className="text-[24px] font-semibold text-white">My Profile</h2>
          <h3 className="text-[18px] font-normal text-[#E08E20]">
            Dashboard My Profile
          </h3>

          <div className="w-full rounded-md h-auto flex flex-row mt-5 p-5 justify-center items-center bg-[#151515] relative">
            <div className="flex flex-col w-full justify-center items-center p-5 space-y-5">
              <div className="w-[156px] h-[156px] border-[#ffffff] border-[5px] rounded-full relative  object-center overflow-hidden">
                <img
                  src={userprofile}
                  alt="profile image"
                  className="object-cover"
                />
              </div>
              <h2 className="text-[2rem] text-white font-semibold drop-shadow-md">
                {username}
              </h2>
              <div className="flex flex-col justify-center items-center w-full">
                <h2 className="text-[#565656] uppercase">Account Type</h2>
                <h2 className="text-[#FFA524] uppercase">USER</h2>

                <div className="md:w-3/12 w-full flex-row flex justify-center items-center space-x-3">
                  <div className=" h-[44px] md:w-1/2 w-full bg-transparent outline-none text-[#FFA524] overflow-x-hidden justify-center flex relative">
                    <div
                      className="overflow-x-auto overflow-y-hidden"
                      id="style-7"
                    >
                      <span className="referralID text-[#FFA524]">
                        {showReferralID ? referralID : "My Referral ID"}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-row h-[44px] space-x-3">
                    {showReferralID ? (
                      <span
                        className="text-[#FFA524] cursor-pointer"
                        onClick={handleVisibilityToggle}
                      >
                        <Visibility />
                      </span>
                    ) : (
                      <span
                        className="text-[#FFA524] cursor-pointer"
                        onClick={handleVisibilityToggle}
                      >
                        <VisibilityOff />
                      </span>
                    )}
                    <span
                      className="text-[#FFA524] cursor-pointer"
                      onClick={handleCopy}
                    >
                      <ContentCopy />
                    </span>
                    {copySuccess && (
                      <span className="text-[#00FF00]">Copied!</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-row space-x-5">
                <button
                  className={`lg:w-[144px] md:px-6 md:py-3 flex flex-row space-x-5 p-4 rounded-md bg-[#1a1a1a] text-white ${
                    activeSection === "overview-btn" ? "" : ""
                  }`}
                  onClick={handleViewProfileClick}
                >
                  View Profile
                </button>
                <button
                  className={`lg:w-[136px] md:px-6 md:py-3 flex flex-row space-x-5 p-4 rounded-md bg-[#1a1a1a]  text-white ${
                    activeSection === "edit-btn" ? "" : ""
                  }`}
                  onClick={handleEditProfileClick}
                >
                  Edit Profile
                </button>
              </div>
            </div>
          </div>

          {/* <h2 className='text-[24px] font-semibold text-white mt-10'>My Wallet Details</h2> */}
          <div className="flex flex-col mt-6 w-full">
            <div
              className="w-full rounded-md flex mt-10 flex-col p-5 mb-[120px] bg-[#151515] border-[1px] border-[#565656] border-opacity-40 overflow-x-hidden relative"
              id="style-7"
            >
              <div className="flex flex-row w-full space-x-5">
                <div
                  className={`overview-active md:w-1/12 w-1/2 justify-center items-center flex p-3 border-collapse ${
                    activeSection === "overview"
                      ? "border-b-[1px] border-[#FFA524] text-white"
                      : "border-b-[1px] border-transparent text-[#565656]"
                  }`}
                >
                  <span className="">Overview</span>
                </div>
                <div
                  className={`edit-active md:w-1/12 w-1/2 justify-center items-center flex p-3 ${
                    activeSection === "edit"
                      ? "border-b-[1px] border-[#FFA524] text-white"
                      : "border-b-[1px] border-transparent text-[#565656]"
                  }`}
                >
                  <span className="">Edit Profile</span>
                </div>
              </div>

              {/* <div
                                className={`overview-body flex flex-col w-full space-x-5 h-full  ${activeSection === "overview" ? "active-body" : ""
                                    }`}
                            >
                                {activeSection === "overview" && (
                                    <div className='flex flex-col p-3 w-full space-x-10 h-full '>
                                        <div className='flex flex-row p-3 w-full space-x-10 h-full' >
                                            <table className='w-1/2 h-full'>
                                                <tr className=''>
                                                    <td className='w-1/4 p-2'>
                                                        <h3 className='text-white'>First Name </h3></td>
                                                    <td className='w-3/4 p-2'>
                                                        <input type="text" className='w-full p-3 bg-[#1a1a1a] border-[1px] rounded-md border-[#565656] border-opacity-40 h-[44px] outline-none' placeholder='John' readOnly />
                                                    </td>
                                                </tr>

                                                <tr className=''>
                                                    <td className='w-1/4 p-2'>
                                                        <h3 className='text-white'>Last Name </h3></td>
                                                    <td className='w-3/4 p-2'>
                                                        <input type="text" className='w-full p-3 bg-[#1a1a1a] border-[1px] rounded-md border-[#565656] border-opacity-40 h-[44px] outline-none' placeholder='Lowrance' readOnly />
                                                    </td>
                                                </tr>

                                                <tr className=''>
                                                    <td className='w-1/4 p-2'>
                                                        <h3 className='text-white'>Username </h3></td>
                                                    <td className='w-3/4 p-2'>
                                                        <input type="text" className='w-full p-3 bg-[#1a1a1a] border-[1px] rounded-md border-[#565656] border-opacity-40 h-[44px] outline-none' placeholder='JohnLowrance89' readOnly />
                                                    </td>
                                                </tr>

                                                <tr className=''>
                                                    <td className='w-1/4 p-2'>
                                                        <h3 className='text-white'>Phone Number</h3></td>
                                                    <td className='w-3/4 p-2'>
                                                        <input type="text" className='w-full p-3 bg-[#1a1a1a] border-[1px] rounded-md border-[#565656] border-opacity-40 h-[44px] outline-none' placeholder='+98 725 6698 325' readOnly />
                                                    </td>
                                                </tr>

                                                <tr className=''>
                                                    <td className='w-1/4 p-2'>
                                                        <h3 className='text-white'>Email </h3></td>
                                                    <td className='w-3/4 p-2'>
                                                        <input type="text" className='w-full p-3 bg-[#1a1a1a] border-[1px] rounded-md border-[#565656] border-opacity-40 h-[44px] outline-none' placeholder='John.Lowrance45@gmail.com' readOnly />
                                                    </td>
                                                </tr>




                                            </table>

                                            <table className='w-1/2'>

                                                <tr className=''>
                                                    <td className='w-1/4 p-2'>
                                                        <h3 className='text-white'>NIC</h3></td>
                                                    <td className='w-3/4 p-2'>
                                                        <input type="text" className='w-full p-3 bg-[#1a1a1a] border-[1px] rounded-md border-[#565656] border-opacity-40 h-[44px] outline-none' placeholder='981544779635' readOnly />
                                                    </td>
                                                </tr>

                                                <tr className=''>
                                                    <td className='w-1/4 p-2'>
                                                        <h3 className='text-white'>Date of Birth</h3></td>
                                                    <td className='w-3/4 p-2'>
                                                        <input type="text" className='w-full p-3 bg-[#1a1a1a] border-[1px] rounded-md border-[#565656] border-opacity-40 h-[44px] outline-none' placeholder='16-Sep-1991' readOnly />
                                                    </td>
                                                </tr>

                                                <tr className=''>
                                                    <td className='w-1/4 p-2'>
                                                        <h3 className='text-white'>Registered Date</h3></td>
                                                    <td className='w-3/4 p-2'>
                                                        <input type="text" className='w-full p-3 bg-[#1a1a1a] border-[1px] rounded-md border-[#565656] border-opacity-40 h-[44px] outline-none' placeholder='16-May-2023' readOnly />
                                                    </td>
                                                </tr>


                                                <tr className=''>
                                                    <td className='w-1/4 p-2'>
                                                        <h3 className='text-white'>Activated Date</h3></td>
                                                    <td className='w-3/4 p-2'>
                                                        <input type="text" className='w-full p-3 bg-[#1a1a1a] border-[1px] rounded-md border-[#565656] border-opacity-40 h-[44px] outline-none' placeholder='18-May-2023' readOnly />
                                                    </td>
                                                </tr>




                                            </table>


                                        </div>


                                    </div>
                                )}
                            </div>
                            <div
                                className={`edit-body flex flex-col w-full space-x-5 h-full ${activeSection === "edit" ? "active-body" : ""
                                    }`}
                            >
                                {activeSection === "edit" &&
                                    (
                                        <div className='flex flex-col p-3 w-full space-x-10'>
                                            <div className='flex flex-row p-3 w-full space-x-10 mb-10'>
                                                <table className='w-1/3 '>
                                                    <tr className=''>
                                                        <td className='w-1/4 p-2'>
                                                            <h3 className='text-white'>First Name </h3></td>
                                                        <td className='w-3/4 p-2'>
                                                            <input type="text" className='w-full p-3 bg-[#1a1a1a] border-[1px] rounded-md border-[#565656] border-opacity-40 h-[44px] outline-none text-[#c0c0c0]' placeholder='John' />
                                                        </td>
                                                    </tr>

                                                    <tr className=''>
                                                        <td className='w-1/4 p-2'>
                                                            <h3 className='text-white'>Last Name </h3></td>
                                                        <td className='w-3/4 p-2'>
                                                            <input type="text" className='w-full p-3 bg-[#1a1a1a] border-[1px] rounded-md border-[#565656] border-opacity-40 h-[44px] outline-none text-[#c0c0c0]' placeholder='Lowrance' />
                                                        </td>
                                                    </tr>

                                                    

                                                    <tr className=''>
                                                        <td className='w-1/4 p-2'>
                                                            <h3 className='text-white'>Date of Birth</h3></td>
                                                        <td className='w-3/4 p-2'>
                                                            <input type="text" className='w-full p-3 bg-[#1a1a1a] border-[1px] rounded-md border-[#565656] border-opacity-40 h-[44px] outline-none text-[#c0c0c0]' placeholder='16-Sep-1991' />
                                                        </td>
                                                    </tr>



                                                </table>

                                                <table className='w-1/3'>

                                                    
                                                <tr className=''>
                                                        <td className='w-1/4 p-2'>
                                                            <h3 className='text-white'>Current Password</h3></td>
                                                        <td className='w-3/4 p-2'>
                                                            <input type="password" className='w-full p-3 bg-[#1a1a1a] border-[1px] rounded-md border-[#565656] border-opacity-40 h-[44px] outline-none text-[#c0c0c0]' placeholder='' />
                                                        </td>
                                                    </tr>
                                                   

                                                    <tr className=''>
                                                        <td className='w-1/4 p-2'>
                                                            <h3 className='text-white'>New Password</h3></td>
                                                        <td className='w-3/4 p-2'>
                                                            <input type="password" className='w-full p-3 bg-[#1a1a1a] border-[1px] rounded-md border-[#565656] border-opacity-40 h-[44px] outline-none text-[#c0c0c0]' placeholder='' />
                                                        </td>
                                                    </tr>


                                                    <tr className=''>
                                                        <td className='w-1/4 p-2'>
                                                            <h3 className='text-white'>Confirm Password</h3></td>
                                                        <td className='w-3/4 p-2'>
                                                            <input type="password" className='w-full p-3 bg-[#1a1a1a] border-[1px] rounded-md border-[#565656] border-opacity-40 h-[44px] outline-none text-[#c0c0c0]' placeholder='' />
                                                        </td>
                                                    </tr>




                                                </table>

                                                <div className='w-1/3 flex flex-col justify-center items-center space-y-5'>
                                                    <div className='w-[156px] h-[156px] border-[#FFFFFF] border-[5px] rounded-full relative  object-center overflow-hidden'>
                                                        <img src={userprofile} alt='profile image' className='object-cover' />
                                                    </div>
                                                    <button className='py-2 px-4 text-[#ffffff] rounded-md border-[#565656] border-[1px] border-opacity-40'>Change Image</button>
                                                </div>


                                            </div>


                                        </div>
                                    )}
                            </div> */}

              <div
                className={`overview-body flex flex-col w-full space-x-5 h-full  ${
                  activeSection === "overview" ? "active-body" : ""
                }`}
              >
                {activeSection === "overview" && (
                  <div className="flex flex-col md:p-3 w-full md:space-x-10 h-full mt-5 md:mt-0">
                    <div className="flex md:flex-row md:p-3 w-full md:space-x-10 h-full flex-col">
                      <div className="md:w-1/2 h-full flex flex-col w-full">
                        <div className="flex flex-row justify-center items-center ">
                          <div className="w-1/4 p-2">
                            <h3 className="text-white text-[10px] md:text-[1rem]">
                              First Name{" "}
                            </h3>
                          </div>
                          <div className="w-3/4 p-2">
                            <input
                              // value={firstName}
                              onChange={(e) => setFirstName(e.target.value)}
                              type="text"
                              className="w-full p-3 bg-[#1a1a1a] border-[1px] rounded-md border-[#565656] border-opacity-40 h-[44px] outline-none md:text-[1rem] text-[12px]"
                              placeholder={firstName}
                              readOnly
                            />
                          </div>
                        </div>

                        <div className="flex flex-row justify-center items-center">
                          <div className="w-1/4 p-2">
                            <h3 className="text-white text-[10px] md:text-[1rem]">
                              Last Name{" "}
                            </h3>
                          </div>
                          <div className="w-3/4 p-2">
                            <input
                              // value={LastName}
                              onChange={(e) => setLastName(e.target.value)}
                              type="text"
                              className="w-full p-3 bg-[#1a1a1a] border-[1px] rounded-md border-[#565656] border-opacity-40 h-[44px] outline-none md:text-[1rem] text-[12px]"
                              placeholder={LastName}
                              readOnly
                            />
                          </div>
                        </div>

                        <div className="flex flex-row justify-center items-center">
                          <div className="w-1/4 p-2">
                            <h3 className="text-white text-[10px] md:text-[1rem]">
                              Username{" "}
                            </h3>
                          </div>
                          <div className="w-3/4 p-2">
                            <input
                              type="text"
                              className="w-full p-3 bg-[#1a1a1a] border-[1px] rounded-md border-[#565656] border-opacity-40 h-[44px] outline-none md:text-[1rem] text-[12px]"
                              placeholder={username}
                              readOnly
                            />
                          </div>
                        </div>

                        <div className="flex flex-row justify-center items-center">
                          <div className="w-1/4 p-2">
                            <h3 className="text-white text-[10px] md:text-[1rem]">
                              Phone Number
                            </h3>
                          </div>
                          <div className="w-3/4 p-2">
                            <input
                              // value={mobile}
                              // onChange={(e) => setMobile(e.target.value)}
                              type="text"
                              className="w-full p-3 bg-[#1a1a1a] border-[1px] rounded-md border-[#565656] border-opacity-40 h-[44px] outline-none md:text-[1rem] text-[12px]"
                              placeholder={mobile}
                              readOnly
                            />
                          </div>
                        </div>

                        <div className="flex flex-row justify-center items-center">
                          <div className="w-1/4 p-2">
                            <h3 className="text-white text-[10px] md:text-[1rem]">
                              Email{" "}
                            </h3>
                          </div>
                          <div className="w-3/4 p-2">
                            <input
                              type="text"
                              className="w-full p-3 bg-[#1a1a1a] border-[1px] rounded-md border-[#565656] border-opacity-40 h-[44px] outline-none md:text-[1rem] text-[12px]"
                              placeholder="John.Lowrance45@gmail.com"
                              readOnly
                            />
                          </div>
                        </div>
                      </div>

                      <div className="md:w-1/2 h-full flex flex-col w-full">
                        <div className="flex flex-row justify-center items-center">
                          <div className="w-1/4 p-2">
                            <h3 className="text-white text-[10px] md:text-[1rem]">
                              NIC
                            </h3>
                          </div>
                          <div className="w-3/4 p-2">
                            <input
                              type="text"
                              className="w-full p-3 bg-[#1a1a1a] border-[1px] rounded-md border-[#565656] border-opacity-40 h-[44px] outline-none md:text-[1rem] text-[12px]"
                              placeholder="981544779635"
                              readOnly
                            />
                          </div>
                        </div>

                        <div className="flex flex-row justify-center items-center">
                          <div className="w-1/4 p-2">
                            <h3 className="text-white text-[10px] md:text-[1rem]">
                              Date of Birth
                            </h3>
                          </div>
                          <div className="w-3/4 p-2">
                            <input
                              type="text"
                              className="w-full p-3 bg-[#1a1a1a] border-[1px] rounded-md border-[#565656] border-opacity-40 h-[44px] outline-none md:text-[1rem] text-[12px]"
                              placeholder="16-Sep-1991"
                              readOnly
                            />
                          </div>
                        </div>

                        <div className="flex flex-row justify-center items-center">
                          <div className="w-1/4 p-2">
                            <h3 className="text-white text-[10px] md:text-[1rem]">
                              Registered Date
                            </h3>
                          </div>
                          <div className="w-3/4 p-2">
                            <input
                              type="text"
                              className="w-full p-3 bg-[#1a1a1a] border-[1px] rounded-md border-[#565656] border-opacity-40 h-[44px] outline-none md:text-[1rem] text-[12px]"
                              placeholder="16-May-2023"
                              readOnly
                            />
                          </div>
                        </div>

                        <div className="flex flex-row justify-center items-center">
                          <div className="w-1/4 p-2">
                            <h3 className="text-white text-[10px] md:text-[1rem]">
                              Activated Date
                            </h3>
                          </div>
                          <div className="w-3/4 p-2">
                            <input
                              type="text"
                              className="w-full p-3 bg-[#1a1a1a] border-[1px] rounded-md border-[#565656] border-opacity-40 h-[44px] outline-none md:text-[1rem] text-[12px]"
                              placeholder="18-May-2023"
                              readOnly
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div
                className={`edit-body flex flex-col w-full space-x-5 h-full ${
                  activeSection === "edit" ? "active-body" : ""
                }`}
              >
                {activeSection === "edit" && (
                  <div className="flex flex-col md:p-3 w-full md:space-x-10 mt-5 md:mt-0">
                    <div className="flex md:flex-row md:p-3 w-full md:space-x-10 mb-10 flex-col">
                      <div className="md:w-1/2 h-full flex flex-col w-full">
                        <div className="md:w-1/3 flex-col justify-center items-center space-y-5 w-full flex md:hidden">
                          <div className="w-[156px] h-[156px] border-[#FFFFFF] border-[5px] rounded-full relative  object-center overflow-hidden">
                            <img
                              src={userprofile}
                              alt="profile image"
                              className="object-cover"
                            />
                          </div>
                          <button className="py-2 px-4 text-[#ffffff] rounded-md border-[#565656] border-[1px] border-opacity-40">
                            Change Image
                          </button>
                        </div>

                        <div className="flex flex-row justify-center items-center">
                          <div className="w-1/4 p-2">
                            <h3 className="text-white text-[10px] md:text-[1rem]">
                              First Name{" "}
                            </h3>
                          </div>
                          <div className="w-3/4 p-2">
                            <input
                              type="text"
                              className="w-full p-3 bg-[#1a1a1a] border-[1px] rounded-md border-[#565656] border-opacity-40 h-[44px] outline-none text-[#c0c0c0] md:text-[1rem] text-[12px]"
                              placeholder="John"
                            />
                          </div>
                        </div>

                        <div className="flex flex-row justify-center items-center">
                          <div className="w-1/4 p-2">
                            <h3 className="text-white text-[10px] md:text-[1rem]">
                              Last Name{" "}
                            </h3>
                          </div>
                          <div className="w-3/4 p-2">
                            <input
                              type="text"
                              className="w-full p-3 bg-[#1a1a1a] border-[1px] rounded-md border-[#565656] border-opacity-40 h-[44px] outline-none text-[#c0c0c0] md:text-[1rem] text-[12px]"
                              placeholder="Lowrance"
                            />
                          </div>
                        </div>

                        <div className="flex flex-row justify-center items-center">
                          <div className="w-1/4 p-2">
                            <h3 className="text-white text-[10px] md:text-[1rem]">
                              Date of Birth
                            </h3>
                          </div>
                          <div className="w-3/4 p-2">
                            <input
                              type="text"
                              className="w-full p-3 bg-[#1a1a1a] border-[1px] rounded-md border-[#565656] border-opacity-40 h-[44px] outline-none text-[#c0c0c0] md:text-[1rem] text-[12px]"
                              placeholder="16-Sep-1991"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="md:w-1/2 h-full flex flex-col w-full">
                        <div className="flex flex-row justify-center items-center">
                          <div className="w-1/4 p-2">
                            <h3 className="text-white text-[10px] md:text-[1rem]">
                              Current Password
                            </h3>
                          </div>
                          <div className="w-3/4 p-2">
                            <input
                              type="password"
                              className="w-full p-3 bg-[#1a1a1a] border-[1px] rounded-md border-[#565656] border-opacity-40 h-[44px] outline-none text-[#c0c0c0] md:text-[1rem] text-[12px]"
                              placeholder=""
                            />
                          </div>
                        </div>

                        <div className="flex flex-row justify-center items-center">
                          <div className="w-1/4 p-2">
                            <h3 className="text-white text-[10px] md:text-[1rem]">
                              New Password
                            </h3>
                          </div>
                          <div className="w-3/4 p-2">
                            <input
                              type="password"
                              className="w-full p-3 bg-[#1a1a1a] border-[1px] rounded-md border-[#565656] border-opacity-40 h-[44px] outline-none text-[#c0c0c0] md:text-[1rem] text-[12px]"
                              placeholder=""
                            />
                          </div>
                        </div>

                        <div className="flex flex-row justify-center items-center">
                          <div className="w-1/4 p-2">
                            <h3 className="text-white text-[10px] md:text-[1rem]">
                              Confirm Password
                            </h3>
                          </div>
                          <div className="w-3/4 p-2">
                            <input
                              type="password"
                              className="w-full p-3 bg-[#1a1a1a] border-[1px] rounded-md border-[#565656] border-opacity-40 h-[44px] outline-none text-[#c0c0c0] md:text-[1rem] text-[12px]"
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>

                      <div className="md:w-1/3 flex-col justify-center items-center space-y-5 w-full hidden md:flex">
                        <div className="w-[156px] h-[156px] border-[#FFFFFF] border-[5px] rounded-full relative  object-center overflow-hidden">
                          <img
                            src={userprofile}
                            alt="profile image"
                            className="object-cover"
                          />
                        </div>
                        <button className="py-2 px-4 text-[#ffffff] rounded-md border-[#565656] border-[1px] border-opacity-40">
                          Change Image
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
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

export default MyProfile;