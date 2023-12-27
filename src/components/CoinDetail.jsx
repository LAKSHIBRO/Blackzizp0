import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CoinChart from './CoinChart';

const CoinDetail = ({ selectedCoin, coinDataList, selectDefaultCoin }) => {
  const [coinData, setCoinData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!selectedCoin && coinDataList && coinDataList.length > 0) {
        selectedCoin = coinDataList[0];
        selectDefaultCoin(selectedCoin);  // Set the default coin in the parent component
      }

      if (selectedCoin) {
        const apiUrl = `https://api.coingecko.com/api/v3/coins/${selectedCoin.id}?localization=false&tickers=false&market_data=false&community_data=false&sparkline=false`;

        try {
          const result = await axios(apiUrl);
          setCoinData(result.data);
        } catch (error) {
          console.error('Error fetching coin data:', error);
        }
      }
    };

    fetchData();
  }, [selectedCoin, coinDataList, selectDefaultCoin]);

  return (
    <div className="w-full mx-auto">
      {selectedCoin ? (
        <>
          <h2 className="text-yellow-400">{selectedCoin.name}</h2>
          <p className="text-yellow-400">Price in BTC: {selectedCoin.price_btc}</p>
          {coinData ? (
            <>
              <CoinChart coinData={coinData} />
            </>
          ) : (
            <p className="text-yellow-400">Loading coin data...</p>
          )}
        </>
      ) : (
        <h2 className="text-yellow-400">No coin selected</h2>
      )}
    </div>
  );
}

export default CoinDetail;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import CoinChart from './CoinChart';

// const CoinDetail = ({ selectedCoin, coinDataList }) => {
//   const [coinData, setCoinData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       if (!selectedCoin && coinDataList && coinDataList.length > 0) {
//         selectedCoin = coinDataList[0];
//       }

//       if (selectedCoin) {
//         const apiUrl = `https://api.coingecko.com/api/v3/coins/${selectedCoin.id}?localization=false&tickers=false&market_data=false&community_data=false&sparkline=false`;

//         try {
//           const result = await axios(apiUrl);
//           setCoinData(result.data);
//         } catch (error) {
//           console.error('Error fetching coin data:', error);
//         }
//       }
//     };

//     fetchData();
//   }, [selectedCoin, coinDataList]);

//   // useEffect(() => {
//   //   // Fetch data for the selected coin when the component mounts or selectedCoin changes
//   //   fetchData();
//   // }, [selectedCoin]);

//   return (
//     <div className="w-full mx-auto">
//       {selectedCoin ? (
//         <>
//           <h2 className="text-yellow-400">{selectedCoin.name}</h2>
//           <p className="text-yellow-400">Price in BTC: {selectedCoin.price_btc}</p>
//           {coinData ? (
//             <>
//               <CoinChart coinData={coinData} />
//             </>
//           ) : (
//             <p className="text-yellow-400">Loading coin data...</p>
//           )}
//         </>
//       ) : (
//         <h2 className="text-yellow-400">No coin selected</h2>
//       )}
//     </div>
//   );
// }

// export default CoinDetail;
