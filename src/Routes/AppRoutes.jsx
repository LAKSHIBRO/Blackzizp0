import React from "react";
import { Routes, Route } from "react-router-dom";
import SideNav from "../components/SideNav";
import Dashboard from "./Dashboard";
import Purchase from "./Purchase";
import Login from "./Login";
import StakingOptions from "./StakingOptions";
import MyStakingInvestments from "./MyStakingInvestments";
import MyKYC from "./MyKYC";
import MyEarnings from "./MyEarnings";
import MyActivePackages from "./MyActivePackages";
import MyPasscode from "./MyPasscodes";
import CurrentWallet from "./CurrentWallet";
import TransferFunds from "./TransferFunds";
import MyWithdrawals from "./MyWithdrawals";
import MyBVPoints from "./MyBVPoints";
import RunBVPoints from "./RunBVPoints";
import MyGenealogy from "./MyGenealogy";
import MyProfile from "./MyProfile";
// import LiveMarket from "../components/LiveMarket";
import SignUp from "./SignUp";
import Security from "./Security";
import ForgotPassword from "./ForgotPassword";




const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="SignUp" element={<SignUp />} />
      <Route path="ForgotPassword" element={<ForgotPassword />} />
      <Route
        path="/*"
        element={
          <>
            <SideNav />
            <Routes>
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/Purchase" element={<Purchase />} />
              <Route path="/StakingOptions" element={<StakingOptions />} />
              <Route
                path="/MyStakingInvestments"
                element={<MyStakingInvestments />}
              />
              <Route path="/MyKYC" element={<MyKYC />} />
              <Route path="/MyEarnings" element={<MyEarnings />} />
              <Route path="/MyActivePackages" element={<MyActivePackages />} />
              <Route path="/MyPasscode" element={<MyPasscode />} />
              <Route path="/CurrentWallet" element={<CurrentWallet />} />
              <Route path="/TransferFunds" element={<TransferFunds />} />
              <Route path="/MyWithdrawals" element={<MyWithdrawals />} />
              <Route path="/MyBVPoints" element={<MyBVPoints />} />
              <Route path="/RunBVPoints" element={<RunBVPoints />} />
              <Route path="/MyGenealogy" element={<MyGenealogy />} />
              <Route path="/MyProfile" element={<MyProfile />} />
              <Route path="/Security" element={<Security />} />
              {/* <Route path="/LiveMarket" element={<LiveMarket />} /> */}
            </Routes>
          </>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
