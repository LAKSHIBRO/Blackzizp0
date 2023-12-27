import React, { useState, useEffect } from "react";
import styled from 'styled-components';
// import UseAxios from "../hooks/useAxios";
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
// import useAxios from "axios-hooks";
  
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
  

const DefaultCoinChart = ({ coinID }) => {

    
    // const { response } = UseAxios(`coins/bitcoin/market_chart?vs_currency=usd&days=7`);

    const apiUrl = `coins/${coinID}/market_chart?vs_currency=usd&days=7`;
  
  const { response } =null;
  // const { response } = UseAxios(apiUrl);
  
    // if(!response)
    // {
    //     return<div>Loading...</div>
    // }


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
        label: coinID,
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

export default DefaultCoinChart;
