import React, { useState, useEffect } from "react";
import * as Icons from "@mui/icons-material";
import { TuneRounded, ArrowDropDownRounded } from "@mui/icons-material";
import { Switch } from "@material-ui/core";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCrown,
  faCoins,
  faShield,
  faGem,
} from "@fortawesome/free-solid-svg-icons";
import UpdateUser from "./UpdateUser";
import axios from "axios";

import PopDash from "../../components/Admin/PopDash";

const AdminDash = () => {
  useEffect(() => {
    getControls();
  }, []);
  const getControls = async () => {
    const resp = await axios.get("http://localhost:5001/getcontrols");
    setControls(resp.data.controls);
    console.log(
      "🚀 ~ file: AdminDash.jsx:24 ~ getControls ~ resp.data.controls:",
      resp.data.controls
    );
  };
  const [activeSection, setActiveSection] = useState("home");

  const handleNavClick = (sectionName) => {
    setActiveSection(sectionName);
  };

  const NavLinks = [
    { name: "Home", Icon: "Home" },
    { name: "User", Icon: "Person" },
    { name: "Package", Icon: "Payment" },
  ];

  const DashData = [
    { id: 1, value: 2, label: "IR Community" },
    { id: 2, value: 1, label: "Users Online" },
    { id: 3, value: 0, label: "Today Withdrawals" },
    { id: 4, value: 0, label: "Today Deposits" },
    { id: 5, value: 1, label: "Today D/S count" },
    { id: 6, value: 2, label: "New Registrations" },
    { id: 7, value: 5, label: "Banned Users" },
  ];

  const tableData = [
    {
      id: 1,
      IRname: "dev11",
      fname: "dev11",
      lname: "test",
      dob: "30-Mar-1997",
      contact: "0766895501",
      email: "Dev11@gmail.com",
      regdate: "2023-05-06",
      actdate: "2023-05-06",
      totaldeposit: 500,
      totalwithdrawal: 100,
      walletbalance: 800,
      totaldirectsale: 5,
      totalIRallowance: 152,
      totalORcommission: 26,
      totalInvestIncome: 90,
    },
    {
      id: 2,
      IRname: "Dev",
      fname: "Dev",
      lname: "User",
      dob: "21-Jun-1990",
      contact: "0766895501",
      email: "Dev@gmail.com",
      regdate: "2023-05-06",
      actdate: "2023-05-06",
      totaldeposit: 500,
      totalwithdrawal: 100,
      walletbalance: 800,
      totaldirectsale: 5,
      totalIRallowance: 152,
      totalORcommission: 26,
      totalInvestIncome: 90,
    },
    {
      id: 4,
      IRname: "test",
      fname: "test",
      lname: "test",
      dob: "05-May-1997",
      contact: "0766895501",
      email: "test001@gmail.com",
      regdate: "2023-05-06",
      actdate: "2023-05-06",
      totaldeposit: 500,
      totalwithdrawal: 100,
      walletbalance: 800,
      totaldirectsale: 5,
      totalIRallowance: 152,
      totalORcommission: 26,
      totalInvestIncome: 90,
    },
    {
      id: 3,
      IRname: "User",
      fname: "User",
      lname: "UserLast",
      dob: "15-Jan-1995",
      contact: "0766895501",
      email: "User@gmail.com",
      regdate: "2023-05-06",
      actdate: "2023-05-06",
      totaldeposit: 500,
      totalwithdrawal: 100,
      walletbalance: 800,
      totaldirectsale: 5,
      totalIRallowance: 152,
      totalORcommission: 26,
      totalInvestIncome: 90,
    },
  ];

  const [isPopDashOpen, setIsPopDashOpen] = useState(false);

  // Function to open the PopDash component
  const openPopDash = () => {
    setIsPopDashOpen(true);
  };

  // Function to close the PopDash component
  const closePopDash = () => {
    setIsPopDashOpen(false);
  };

  const [controlData, setControlData] = useState([
    // {
    //   id: 1,
    //   name: "Make Deposits",
    //   availability: false,
    //   //   availability: [{ id: 1, availability: "Available", checked: false }],
    // },
    // {
    //   id: 2,
    //   name: "Make Withdrawals",
    //   availability: true,
    //   //   availability: [{ id: 1, availability: "Available", checked: false }],
    // },
    // {
    //   id: 3,
    //   name: "Purchase Packages",
    //   availability: true,
    //   //   availability: [{ id: 1, availability: "Available", checked: false }],
    // },
  ]);

  const [packageTable, setPackageTable] = useState([
    {
      id: 2,
      name: "GOLD",
      icon: faCoins,
      list: [100, 250, 500],
      availability: [
        { id: 4, availability: "Available", checked: true },
        { id: 5, availability: "Available", checked: true },
        { id: 6, availability: "Available", checked: true },
      ],
    },
    {
      id: 3,
      name: "platinum",
      icon: faShield,
      list: [1000, 2500, 5000],
      availability: [
        { id: 7, availability: "Available", checked: true },
        { id: 8, availability: "Available", checked: true },
        { id: 9, availability: "Available", checked: true },
      ],
    },
    {
      id: 4,
      name: "Diamond",
      icon: faGem,
      list: [10000, 25000, 50000],
      availability: [
        { id: 10, availability: "Available", checked: true },
        { id: 11, availability: "Available", checked: true },
        { id: 12, availability: "Available", checked: true },
      ],
    },
    {
      id: 1,
      name: "VIP",
      icon: faCrown,
      list: [100000],
      availability: [{ id: 13, availability: "Available", checked: false }],
    },
  ]);
  const initialControls = [

    {
      id: 1,
      name: "MAKE_DEPOSITS",
      status: false,
    },
    {
      id: 2,
      name: "MAKE_WITHDRAWALS",
      status: true,
    },

    // Add more control objects as needed
  ];
  const [selectedRowCount, setSelectedRowCount] = useState(10);
  const [selectedPackageRowCount, setSelectedPackageRowCount] = useState(10);
  const [selectedControlDataRowCount, setSelectedControlDataRowCount] =
    useState(10);
  const [checkedRows, setCheckedRows] = useState({});
  const [checkedpackageRows, setCheckedPackageRows] = useState({});
  const [checkedControlDataRows, setCheckedControlDataRows] = useState({});
  // const limitedTableData = tableData.slice(0, selectedRowCount);

  const [controls, setControls] = useState(initialControls);

  const limitedTableData = tableData.slice(0, selectedRowCount).map((row) => ({
    ...row,
    checked: checkedRows[row.id] || false,
  }));

  const packageTableData = packageTable
    .slice(0, selectedPackageRowCount)
    .map((row) => ({
      ...row,
      checked: checkedpackageRows[row.id] || false,
    }));

  const controlTableData = controlData
    .slice(0, selectedControlDataRowCount)
    .map((row) => ({
      ...row,
      checked: checkedControlDataRows[row.id] || false,
    }));

  const handleRowToggle = (rowId) => {
    setCheckedRows((prevCheckedRows) => ({
      ...prevCheckedRows,
      [rowId]: !prevCheckedRows[rowId],
    }));
  };

  const initialCheckedState = packageTableData.map(() => false);
  const [checkedStates, setCheckedStates] = useState(initialCheckedState);
  const handlePackageRowToggle = async (packageIndex, statusIndex) => {
    const updatedPackageTable = [...packageTable];
    updatedPackageTable[packageIndex].availability[statusIndex].checked =
      !updatedPackageTable[packageIndex].availability[statusIndex].checked;
    setPackageTable(updatedPackageTable);
    console.log(
      "updatedPackageTable[packageIndex].availability[statusIndex]",
      updatedPackageTable[packageIndex].availability[statusIndex].id
    );
    // const response = await axios.put("http://localhost:5001/changeStatus", {
    //   status:  updatedPackageTable[packageIndex].availability[statusIndex].checked,
    //   id:  updatedPackageTable[packageIndex].availability[statusIndex].id,
    // });
  };

  const initialControlCheckedState = controlTableData.map(() => false);
  const [checkedControlStates, setCheckedControlStates] = useState(
    initialControlCheckedState
  );
  //   const handleControlRowToggle = (contolIndex, statusControlIndex) => {
  //     const updatedControlDataTable = [...controlData];
  //     const previousValue =
  //       updatedControlDataTable[contolIndex].availability[statusControlIndex]
  //         .checked;
  //     updatedControlDataTable[contolIndex].availability[
  //       statusControlIndex
  //     ].checked = !previousValue;
  //     setControlData(updatedControlDataTable);

  //     // Check if the value changed and print the changed object
  //     if (
  //       previousValue !==
  //       updatedControlDataTable[contolIndex].availability[statusControlIndex]
  //         .checked
  //     ) {
  //       console.log("Object changed:", updatedControlDataTable[contolIndex]);
  //     } else {
  //       console.log("Value remains the same.");
  //     }
  //   };

  // const [isPopUpOpen, setPopUpOpen] = useState(false); // Initialize the state variable

  // const [clickedCommonCard, setClickedCommonCard] = useState(null); // Store data of the clicked common-card

  // const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  // const [popUpData, setPopUpData] = useState({});

  // // Function to open the pop-up and set data
  // const openPopUp = (data) => {
  //   setPopUpData(data);
  //   setIsPopUpOpen(true);
  // };

  // Define state variables
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [popUpData, setPopUpData] = useState({});

  // Function to open the pop-up and set data
  const openPopUp = (data) => {
    setPopUpData(data);
    setIsPopUpOpen(true);
  };
  const handleControlToggle = async (controlIndex) => {
    const updatedControls = [...controls];
    updatedControls[controlIndex].status =
      updatedControls[controlIndex].status === "true" ? 1 : 0;
    console.log(
      "status id",
      updatedControls[controlIndex].status,
      updatedControls[controlIndex].id
    );
    const response = await axios.put("http://localhost:5001/changeStatus", {
      status: (updatedControls[controlIndex].status =
        updatedControls[controlIndex].status),
      id: updatedControls[controlIndex].id,
    });
    console.log(
      "🚀 ~ file: AdminDash.jsx:278 ~ handleControlToggle ~ response:",
      response
    );

    setControls(updatedControls);
  };

  return (
    <div className="w-full h-screen fixed ">
      <div className="sm:p-5 p-3 bg-[#151515] w-full h-full items-center relative ">
        <div className="main-body md:w-[70%] flex flex-col mx-auto relative ">
          <div className="top-nav flex sm:flex-row sm:py-5 justify-between sm:h-[56px] h-[44px] bg-[#1a1a1a] ">
            <ul className="flex flex-row md:justify-start items-center justify-between w-full">
              {NavLinks.map((link, index) => {
                const Icon = Icons[link.Icon];

                return (
                  <li key={index}>
                    <div
                      onClick={() => handleNavClick(link.name.toLowerCase())}
                      className={`px-4 justify-center items-center flex sm:h-[56px] h-[44px] flex-row space-x-3 cursor-pointer ${
                        link.name.toLowerCase() === activeSection
                          ? "text-[#FFA524] border-b-[#FFA524] border-collapse border-b-[1px] "
                          : "text-[#c0c0c0] border-b-[#1a1a1a] border-collapse border-b-[1px] "
                      }`}
                    >
                      <span className="text-[#c0c0c0]">
                        <Icon />
                      </span>
                      <span className="text-[#c0c0c0] text-[12px] md:text-[1rem]">
                        {link.name}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div
            className="body sm:mt-[32px] mt-[24px] w-full h-[85vh] relative overflow-y-auto"
            id="style-6"
          >
            {activeSection === "home" && (
              <div className="home flex flex-col w-full space-y-10 justify-center items-center mb-[56px]">
                <div className="home flex flex-wrap w-full gap-5 justify-center items-center md:bg-[#1a1a1a] py-5 ">
                  {DashData.map((item, index) => {
                    return (
                      <div
                        key={item.id}
                        onClick={openPopDash}
                        className="md:w-3/12 w-[80%] rounded-md border-[#565656] bg-[#151515] border-opacity-40 p-2 border-[1px] flex flex-col justify-center items-center cursor-pointer hover:border-[#FFA524]"
                      >
                        <h2 className="text-[#FFA524] md:text-[2rem]">
                          {item.value}
                        </h2>
                        <h2 className="text-[#ffffff] md:text-[1rem]">
                          {item.label}
                        </h2>
                      </div>
                    );
                  })}

                  <div>
                    {/* Conditionally render the PopDash component */}
                    {isPopDashOpen && <PopDash onClose={closePopDash} />}
                  </div>
                </div>

                <div className="flex flex-col w-full  h-full bg-[#1a1a1a] p-10 md:space-y-5">
                  <div className="flex flex-row space-x-5 justify-start  items-center">
                    <span className="text-[#E08E20]">
                      <Icons.Shield />
                    </span>
                    <h2 className="text-[#C0C0C0] text-[12px] md:text-[14px] uppercase">
                      Control Panel
                    </h2>
                  </div>

                  <div
                    className="table-container overflow-x-auto w-full "
                    id="style-5"
                  >
                    <div>
                      {controls?.slice(0, 3).map((control, index) => (
                        <div key={control.id}>
                          <span className="text-[#fff] text-[12px]">
                            {control.name}
                          </span>
                          <label>
                            <Switch
                              checked={control.status === 1}
                              onChange={() => handleControlToggle(index)}
                            />
                            <span className="text-[#ffa524] text-[12px]">
                              {control.status === "true"
                                ? "Enabled"
                                : "Disabled"}
                            </span>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === "user" && (
              <div className="user flex flex-col w-full gap-5 relative overflow-hidden">
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
                        <option
                          value="10"
                          className="text-[#151515] text-[14px]"
                        >
                          10
                        </option>
                        <option
                          value="20"
                          className="text-[#151515] text-[14px]"
                        >
                          20
                        </option>
                        <option
                          value="30"
                          className="text-[#151515] text-[14px]"
                        >
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
                        type="text"
                        className="bg-transparent oultine-none sm:w-[144px] md:w-[200px] w-[128px] h-[32px] border-none p-2 text-white"
                        placeholder="search"
                      />
                    </div>
                  </div>
                </div>

                <div className="dash-table mt-5  h-full  relative  ">
                  <div
                    className="table-container overflow-x-auto w-full "
                    id="style-5"
                  >
                    <table className="block whitespace-nowrap table-fixed w-full">
                    <thead>
    <tr>
    <th className="uppercase text-[12px] text-white p-2 border-[#565656] border-r-[1px] border-t-[1px] border-l-[1px] border-opacity-40 w-[220px]">
                        IR Name
                      </th>
                      <th className="uppercase text-[12px] text-white p-2 border-[#565656] border-r-[1px] border-t-[1px] border-opacity-40 w-[220px]">
                        First Name
                      </th>
                      <th className="uppercase text-[12px] text-white p-2 border-[#565656] border-r-[1px] border-t-[1px] border-opacity-40 w-[220px]">
                        Last Name
                      </th>
                      <th className="uppercase text-[12px] text-white p-2 border-[#565656] border-r-[1px] border-t-[1px] border-opacity-40 w-[220px]">
                        DOB
                      </th>
                      <th className="uppercase text-[12px] text-white p-2 border-[#565656] border-r-[1px] border-t-[1px] border-opacity-40 w-[220px]">
                        contact
                      </th>
                      <th className="uppercase text-[12px] text-white p-2 border-[#565656] border-r-[1px] border-t-[1px] border-opacity-40 w-[220px]">
                        email
                      </th>
                      <th className="uppercase text-[12px] text-white p-2 border-[#565656] border-r-[1px] border-t-[1px] border-opacity-40 w-[220px]">
                        registered DATE
                      </th>
                      <th className="uppercase text-[12px] text-white p-2 border-[#565656] border-r-[1px] border-t-[1px] border-opacity-40 w-[220px]">
                        activated date
                      </th>
                      <th className="uppercase text-[12px] text-white p-2 border-[#565656] border-r-[1px] border-t-[1px] border-opacity-40 w-[220px]">
                        Wallet Balance
                      </th>
                      <th className="uppercase text-[12px] text-white p-2 border-[#565656] border-r-[1px] border-t-[1px] border-opacity-40 w-[220px]">
                        Total Deposits
                      </th>
                      <th className="uppercase text-[12px] text-white p-2 border-[#565656] border-r-[1px] border-t-[1px] border-opacity-40 w-[220px]">
                        Total Withdrawals
                      </th>
                      <th className="uppercase text-[12px] text-white p-2 border-[#565656] border-r-[1px] border-t-[1px] border-opacity-40 w-[220px]">
                        Total Direct Sales Income
                      </th>
                      <th className="uppercase text-[12px] text-white p-2 border-[#565656] border-r-[1px] border-t-[1px] border-opacity-40 w-[220px]">
                        Total IR Alloawnce
                      </th>
                      <th className="uppercase text-[12px] text-white p-2 border-[#565656] border-r-[1px] border-t-[1px] border-opacity-40 w-[220px]">
                        Total OR Commission
                      </th>
                      <th className="uppercase text-[12px] text-white p-2 border-[#565656] border-r-[1px] border-t-[1px] border-opacity-40 w-[220px]">
                        Total Investing Income
                      </th>
                      <th className="uppercase text-[12px] text-white p-2 w-[220px] border-[#565656] border-r-[1px] border-t-[1px] border-opacity-40">
                        action
                      </th>
    </tr>
  </thead>
                      <tbody className="w-full">
                        {limitedTableData.map((row) => (
                          <tr key={row.id}>
                            <td className=" text-[12px] text-white p-2 border-[#565656] border-[1px] border-opacity-40 w-[220px]">
                              {row.IRname}
                            </td>
                            <td className="fname text-[12px] text-white p-2 border-[#565656] border-[1px] border-opacity-40 w-[220px]">
                              {row.fname}
                            </td>
                            <td className="lname text-[12px] text-white p-2 border-[#565656] border-[1px] border-opacity-40 w-[220px]">
                              {row.lname}
                            </td>
                            <td className=" text-[12px] text-white p-2 border-[#565656] border-[1px] border-opacity-40 w-[220px]">
                              {row.dob}
                            </td>
                            <td className="contact text-[12px] text-white p-2 border-[#565656] border-[1px] border-opacity-40 w-[220px]">
                              {row.contact}
                            </td>
                            <td className="email text-[12px] text-white p-2 border-[#565656] border-[1px] border-opacity-40 w-[220px]">
                              {row.email}
                            </td>
                            <td className=" text-[12px] text-white p-2 border-[#565656] border-[1px] border-opacity-40 w-[220px]">
                              {row.regdate}
                            </td>
                            <td className=" text-[12px] text-white p-2 border-[#565656] border-[1px] border-opacity-40 w-[220px]">
                              {row.actdate}
                            </td>
                            <td className=" text-[12px] text-white p-2 border-[#565656] border-[1px] border-opacity-40 w-[220px]">
                              {row.walletbalance}
                            </td>
                            <td className=" text-[12px] text-white p-2 border-[#565656] border-[1px] border-opacity-40 w-[220px]">
                              {row.totaldeposit}
                            </td>
                            <td className=" text-[12px] text-white p-2 border-[#565656] border-[1px] border-opacity-40 w-[220px]">
                              {row.totalwithdrawal}
                            </td>
                            <td className=" text-[12px] text-white p-2 border-[#565656] border-[1px] border-opacity-40 w-[220px]">
                              {row.totaldirectsale}
                            </td>
                            <td className=" text-[12px] text-white p-2 border-[#565656] border-[1px] border-opacity-40 w-[220px]">
                              {row.totalIRallowance}
                            </td>
                            <td className=" text-[12px] text-white p-2 border-[#565656] border-[1px] border-opacity-40 w-[220px]">
                              {row.totalORcommission}
                            </td>
                            <td className=" text-[12px] text-white p-2 border-[#565656] border-[1px] border-opacity-40 w-[220px]">
                              {row.totalInvestIncome}
                            </td>

                            <td className=" text-[12px] text-white p-2 border-[#565656] border-[1px] border-opacity-40 text-center w-[220px]">
                              <div className="mx-auto text-[12px] justify-center items-center p-2">
                                <FormGroup>
                                  <FormControlLabel
                                    control={
                                      <Switch
                                        size="small"
                                        checked={row.checked}
                                        onChange={() => handleRowToggle(row.id)}
                                      />
                                    }
                                    label={row.checked ? "Active" : "Ban"}
                                    className="text-[#ffa524]"
                                  />
                                </FormGroup>
                              </div>
                            </td>

                            <td className=" text-[12px] text-white p-2 border-[#565656] border-[1px] border-opacity-40 text-center w-[220px]">
                              <div className="mx-auto text-[12px] justify-center items-center p-2">
                                <button
                                  onClick={() =>
                                    openPopUp({
                                      firstName: row.fname,
                                      lastName: row.lname,
                                      email: row.email,
                                      contact: row.contact,
                                    })
                                  }
                                  className="py-1 px-2 text-[12px] font-semibold uppercase text-[#151515] bg-[#ffffff] rounded-md hover:bg-[#ffa524] hover:text-[#ffffff]"
                                >
                                  Update
                                </button>
                              </div>
                              {isPopUpOpen && (
                                <UpdateUser
                                  closePopUp={() => setIsPopUpOpen(false)} // Add a closePopUp function if needed
                                  popUpData={popUpData} // Pass popUpData as a prop
                                />
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeSection === "package" && (
              <div className="package flex flex-col w-full gap-5 relative overflow-hidden">
                <div className="table-top-row w-full flex flex-row justify-between items-center ">
                  <div className="flex flex-row justify-center items-center space-x-3">
                    <span className="text-[14px] text-[#E08E20]">
                      <TuneRounded />
                    </span>
                    <div className="sm:w-[114px] sm:h-[38px] md:w-[144px] md:h-[44px] w-[100px] h-[32px] bg-[#565656] bg-opacity-10 rounded-[3px] relative flex justify-between items-center">
                      <select
                        className="bg-transparent outline-none sm:w-[138px] border-none p-2 text-white"
                        value={selectedPackageRowCount}
                        onChange={(e) =>
                          setSelectedPackageRowCount(Number(e.target.value))
                        }
                      >
                        <option
                          value="10"
                          className="text-[#151515] text-[14px]"
                        >
                          10
                        </option>
                        <option
                          value="20"
                          className="text-[#151515] text-[14px]"
                        >
                          20
                        </option>
                        <option
                          value="30"
                          className="text-[#151515] text-[14px]"
                        >
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
                        type="text"
                        className="bg-transparent oultine-none sm:w-[144px] md:w-[200px] w-[128px] h-[32px] border-none p-2 text-white"
                        placeholder="search"
                      />
                    </div>
                  </div>
                </div>

                <div className="dash-table mt-5  h-full  relative  ">
                  <div
                    className="table-container overflow-x-auto w-full "
                    id="style-5"
                  >
                    <table className="block whitespace-nowrap table-fixed w-full packageTable">
                      <th className="uppercase text-[12px] text-white p-2 border-[#565656] border-r-[1px] border-t-[1px] border-l-[1px] border-opacity-40 w-[220px]">
                        Package Name
                      </th>
                      <th className="uppercase text-[12px] text-white p-2 border-[#565656] border-r-[1px] border-t-[1px] border-opacity-40 w-[220px]">
                        Package Price
                      </th>
                      <th className="uppercase text-[12px] text-white p-2 border-[#565656] border-r-[1px] border-t-[1px] border-opacity-40 w-[220px]">
                        Availability
                      </th>

                      <tbody className="w-full">
                        {packageTableData.map(
                          (packageDetail, packageTableindex) => {
                            return (
                              <tr key={packageTableindex}>
                                <td className=" text-[12px] text-white p-2 border-[#565656] border-[1px] border-opacity-40 w-[220px]">
                                  <span className="uppercase">
                                    {packageDetail.name}
                                  </span>
                                </td>
                                <td className="  text-[12px] text-white border-[#565656] border-[1px] border-opacity-40 w-[220px] ">
                                  {packageDetail.list.map(
                                    (listitem, listindex) => {
                                      return (
                                        <tr
                                          key={listindex}
                                          className="packageList"
                                        >
                                          <td className=" text-[12px] text-white border-collapse p-2 w-[220px]  ">
                                            <span className="uppercase ">
                                              {listitem}
                                            </span>
                                          </td>
                                        </tr>
                                      );
                                    }
                                  )}
                                </td>

                                <td className="action text-[12px] text-white  border-[#565656] border-[1px] border-opacity-40 w-[220px]">
                                  {packageDetail.availability.map(
                                    (status, statusIndex) => {
                                      return (
                                        <tr
                                          key={status.id}
                                          className="packageList"
                                        >
                                          <td>
                                            <div className="mx-auto text-[12px] justify-center items-center px-2 flex w-[220px]">
                                              <FormGroup>
                                                <FormControlLabel
                                                  control={
                                                    <Switch
                                                      size="small"
                                                      checked={status.checked}
                                                      onChange={() =>
                                                        handlePackageRowToggle(
                                                          packageTableindex,
                                                          statusIndex
                                                        )
                                                      }
                                                    />
                                                  }
                                                  label={
                                                    status.checked
                                                      ? "Available"
                                                      : "Unavailable"
                                                  }
                                                  className="text-[#ffa524] text-[12px]"
                                                />
                                              </FormGroup>
                                              {/*  */}
                                            </div>
                                          </td>
                                        </tr>
                                      );
                                    }
                                  )}
                                </td>
                              </tr>
                            );
                          }
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDash;
