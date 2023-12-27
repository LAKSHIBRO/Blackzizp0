

import React from "react";
import UseAxios from "../hooks/useAxios";
// import LiveMarket from "./LiveMarket";
import CoinTrending from "./CoinTrending";
import CoinDetail from "./CoinDetail";
import Dashboard from "../Routes/Dashboard";
import DefaultCoinChart from "./DefaultCoinChart";

const Trending = () => {
  const { response } =null;
  // const { response } = UseAxios('search/trending');
  console.log(response);

  
  if (!response || !response.coins) {
    return null; 
  }

  const coinsArray = Array.isArray(response.coins) ? response.coins : Object.values(response.coins);



  // Check if there are coins in the array
  if (coinsArray.length === 0) {
    return <div>No coins available</div>;
  }

   // Get the 0th index coin's ID
   const coinID = coinsArray[0].item.id;

  return (
   

    <div className="w-full">
<DefaultCoinChart coinID={coinID} />
    </div>
  );
}

export default Trending;
