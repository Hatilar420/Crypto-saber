import React, {useEffect, useState} from 'react'
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
import coinKey from './coinKey.json'

const SDK = require('../../CoinApi/coinapi_v1').default

const sdk = new SDK(coinKey.api_key)

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

export default function ChartComponent({selectedCurrency}) {


  const [data,setData] = useState({
    labels,
    datasets : []
  })

  const mapData = async() =>{

    let res = data
    res.datasets = []

    for(let i of selectedCurrency){
      try{
        let start_date = new Date(Date.now())
        start_date.setDate(start_date.getDate() - 8)
        let end_date = new Date(Date.now())
        let call_data = await sdk.exchange_rates_get_specific_rate_history(i.coin_id,'USD',start_date,end_date,'1DAY')
        let data_set = call_data.map( x => x.rate_close)
        res.datasets.push({
          label: `${i.name}`,
          fill: true,
          data: data_set ,
          borderColor: i.color,
          backgroundColor: i.backgroundColor,
        })
      }catch(ex){
        console.log(ex)
      }
    }

    console.log(res.datasets)

    setData({labels,datasets : res.datasets})
  }

  useEffect(() => {
    console.log("changed")
    mapData().then().catch(x => console.log(x))

  },[selectedCurrency])

  useEffect(() => {
    console.log("changed data")

  },[data])

  return (
    <div style={{width:"100%",height:"100%",backgroundColor:"#3a383e",padding:"10px",borderRadius:"10px"}}>
        <div style={{fontSize:"1.5rem",marginBottom:"10px",textAlign:"left",paddingTop:"10px"}}>
            Statistic
        </div>
        <Line options={options} data={data} />;
    </div>
  )
}
