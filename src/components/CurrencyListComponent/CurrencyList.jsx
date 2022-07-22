import React, { useState } from 'react'
import {BsCurrencyBitcoin} from 'react-icons/bs'
import{SiLitecoin,SiRipple,SiDash} from 'react-icons/si'

export default function CurrencyList({setCurrency,selectedCurrency}) {

    const [cointList,setCoinList] = useState([{
        id:"1",
        name:"Bitcoin",
        coin_id : "BTC",
        value : "0.125 USD",
        wallet:"0.000124 BTC",
        color : "rgb(228, 71, 71)",
        backgroundColor : "rgba(255, 71, 71, 0.5)",
        asset : <BsCurrencyBitcoin style={{color:"black", marginRight:"4px" ,backgroundColor:"#e44747",fontSize:"2.5rem",borderRadius:"50%"}}/>
    },
    {
        id:"2",
        name:"Ripple",
        coin_id : "XRP",
        value : "0.125 USD",
        wallet:"0.000124 XRP",
        color : "rgb(198, 62, 169)",
        backgroundColor : "rgba(198, 62, 169,0.5)",
        asset : <SiRipple style={{color:"black",padding:"5px", marginRight:"4px" ,backgroundColor:"rgb(198 62 169)",fontSize:"2.5rem",borderRadius:"50%"}}/>
    },
    {
        id:"3",
        name:"Litecoin",
        coin_id : "LTC",
        value : "0.125 USD",
        wallet:"0.000124 LTC",
        color : "rgb(195, 38, 235)",
        backgroundColor : "rgba(195, 38, 235,0.5)",
        asset : <SiLitecoin style={{color:"#c326eb", marginRight:"4px" ,backgroundColor:"rgb(8 8 8)",fontSize:"2.5rem",borderRadius:"50%"}}/>
    },
    {
        id:"4",
        name:"Dash",
        coin_id : "DASH",
        value : "0.125 USD",
        wallet:"0.000124 XRP",
        color : "rgb(240, 117, 8);",
        backgroundColor : "rgba(240, 117, 8,0.5)",
        asset : <SiDash style={{color:"rgb(0 0 0)",padding:"5px" ,marginRight:"4px" ,backgroundColor:"rgb(240 117 8)",fontSize:"2.5rem",borderRadius:"50%"}}/>
    }])


    const CheckIfSelected = (name) =>{

        for(let i of selectedCurrency){
            if(i.name === name){
                return true
            }
        }
        return false

    }

    const SelectCurr = (x) =>{
        
       let temp = selectedCurrency
       let found = false 
       for(let i = 0 ; i< temp.length ; i++){
            if(x.name === temp[i].name){
                temp.splice(i,1)
                found = true
            }
       }
       if(!found){
        temp.push(x)
       }
       setCurrency([...temp])
    }

    const MapCoinList = () =>{

        return cointList.map( x =>{
            return (
                <div className='row align-items-center' onClick={(event) => {SelectCurr(x)}} key={x.id} style={{height:"15vh",marginBottom:"10px",backgroundColor: !CheckIfSelected(x.name) ? "#3a383e" :"#59565f" ,borderRadius:"10px"}}>
                    <div className='col-7'>
                      {x.asset}
                      <span style={{color:"rgb(255 255 255 / 65%)"}}>{x.name}</span>
                    </div>
                    <div className='col-5' style={{fontSize:"0.8rem"}}>
                        <div>
                          {x.wallet}
                        </div>
                        <div style={{color:"rgb(255 255 255 / 65%)"}}>
                           {x.value}
                        </div>
                    </div>
                </div>
            )
        })

    }

  return (
    <div style={{width:"100%",height:"100%"}}>
        {MapCoinList()}
    </div>
  )
}
