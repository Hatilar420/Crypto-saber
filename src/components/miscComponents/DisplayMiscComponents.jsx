import React from 'react'
import AmountComponent from './AmountComponent'
import BarChartComponent from './BarChartComponent'

export default function DisplayMiscComponents() {
  return (
    <div style={{width:"100%",padding:"5px",height:"100%"}}>
        <div style={{width:"100%",marginBottom:"10px"}}>
            <AmountComponent/>
        </div>
        <div style={{width:"100%"}}>
            <BarChartComponent/>
        </div>
    </div>
  )
}
