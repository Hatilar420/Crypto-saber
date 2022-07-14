import React, { useEffect } from 'react'
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

const SDK = require('../../CoinApi/coinapi_v1').default

const sdk = new SDK(process.env.API_KEY || 'F1A4D874-D1A6-4953-AEBE-3894E4218D03')

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


 const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      }
    },
    scales:{
        x : {
            grid:{
                color : "#e0605a"
            }
        },
        y : {
            grid:{
                color : "#e0605a"
            }
        }
    }
  };

const labels = ['1', '2', '3', '4', '5', '6', '7','8'];

export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        fill: true,
        data: [1,4,5,3,9,10,12] ,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        fill: true,
        data: [1,10,5,8,9,10,12],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };


export default function ChartComponent() {
  return (
    <div style={{width:"100%",height:"100%",backgroundColor:"#3a383e",padding:"10px",borderRadius:"10px"}}>
        <div style={{fontSize:"1.5rem",marginBottom:"10px",textAlign:"left",paddingTop:"10px"}}>
            Statistic
        </div>
        <Line options={options} data={data} />;
    </div>
  )
}
