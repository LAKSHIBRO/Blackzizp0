import React, { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCrown,
  faCoins,
  faShield,
  faGem,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import jwt_decode from "jwt-decode";

const PopDash = ({ onClose }) => {
  const tableData = [
    {
      id: 1,
      IRname: "dev11",
      fname: "ytrs",
      lname: "last",
      dob: "15-Jan-1997",
      contact: "0766895501",
      email: "John@gmail.com",
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
      fname: "test",
      lname: "last",
      dob: "15-Jan-1997",
      contact: "0766895501",
      email: "Nipun@gmail.com",
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

  return (
    <Popup
      open={true}
      modal
      nested
      //   closeOnDocumentClick={true}
      //   closeOnEscape={true}
    >
      {(close) => (
        <div className="modal">
          <button
            className="close"
            onClick={() => {
              onClose();
            }}
          >
            &times;
          </button>
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
                  </tr>
                </thead>
                <tbody className="w-full">
                  {tableData.map((row) => (
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
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default PopDash;
