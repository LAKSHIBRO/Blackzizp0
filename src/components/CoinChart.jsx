import React,{useEffect, useState} from 'react'
// import UseAxios from '../hooks/useAxios';
import { useParams } from 'react-router-dom';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
// import faker from 'faker';
import { faker } from '@faker-js/faker';
import moment from 'moment/moment';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);


const CoinChart = ({ coinData }) => {

  const { response } =null;
  // const { response } = UseAxios(`coins/${coinData.id}/market_chart?vs_currency=usd&days=7`);
  const [coinChartData, setCoinChartData] = useState([]);
  const [chartLabels, setChartLabels] = useState([]);

  useEffect(() => {
    if (response) {
      const dataPoints = response.prices.map((value) => ({
        x: new Date(value[0]),
        y: value[1].toFixed(2),
      }));

      // Get the labels for the last 7 days
      const last30Days = [];
      for (let i = 61; i >= 0; i--) {
        last30Days.push(moment().subtract(i, 'days').format('MMM DD'));
      }

      setCoinChartData(dataPoints);
      setChartLabels(last30Days);
    }
  }, [response]);

  const options = {
    responsive: true,
    scales: {
      x: {
        ticks: {
          labels: chartLabels, // Use the labels for the last 7 days
        },
      },
    },
  };

  const data = {
    labels: chartLabels,
    datasets: [
      {
        fill: true,
        label: coinData.id,
        data: coinChartData.map((val) => val.y),
        borderColor: '#FFA524',
        backgroundColor: 'rgba(255, 220, 74, 0.1)',
      },
    ],
  };



  return (

 
    <div className='w-full'>
      <Line options={options} data={data} />
    </div>
  )
}

export default CoinChart;





















// /* App.js */
// import React,{useEffect, useState} from 'react';
// import CanvasJSReact from '@canvasjs/react-charts';
// import UseAxios from '../hooks/useAxios';
// import moment from 'moment/moment';





// const CanvasJSChart = CanvasJSReact.CanvasJSChart;

// const CoinChart = ({ coinData }) => {

//   const [coinChartData, setCoinChartData] = useState([]);
//   const { response } = UseAxios(`coins/${coinData.id}/market_chart?vs_currency=usd&days=7`);

//   // const { response } = UseAxios(`coins/${coinData.id}/market_chart?vs_currency=usd&days=7`);
//   // if (!response) {
//   //   return <div>Loding Chart</div>
//   // } else

//   // console.log(response);
//   // const coinChartData = response.prices.map(value => ({ x: value[0], y: value[1].toFixed(2) }));


//   useEffect(() => {
//     if (response) {
//       const dataPoints = response.prices.map((value) => ({
//         x: new Date(value[0]),
//         y: value[1].toFixed(2),
//       }));
//       setCoinChartData(dataPoints);
//     }
//   }, [response]);

//   const options = {
//     theme: "dark1",
//     animationEnabled: true,
//     zoomEnabled: true,
//     title: {
//       text: coinData.name,
//     },
//     axisX: {
//       valueFormatString: "MMM DD",
//     },
//     axisY: {
//       title: "Price (USD)",
//     },
//     data: [
//       {
//         type: "area",
//         dataPoints: coinChartData,
//       },
//     ],
//   };

//   // const generateDataPoints = (noOfDps) => {
//   //   var xVal = 1, yVal = 100;
//   //   var dps = [];
//   //   for (var i = 0; i < noOfDps; i++) {
//   //     yVal = yVal + Math.round(5 + Math.random() * (-5 - 5));
//   //     dps.push({ x: xVal, y: yVal });
//   //     xVal++;
//   //   }
//   //   return dps;
//   // };

//   // const options = {
//   //   theme: "dark1", // "light1", "dark1", "dark2"
//   //   animationEnabled: true,
//   //   zoomEnabled: true,
//   //   title: {
//   //     text: coinData.name,
//   //   },
//   //   data: [{
//   //     type: "area",
//   //     dataPoints: generateDataPoints(500)
//   //   }]
//   // };


//   return (
//     <div>
//       <CanvasJSChart options={options}  />
//     </div>
//   );
// }

// export default CoinChart;
