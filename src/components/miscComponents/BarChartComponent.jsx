import React from 'react'


const permData = [85,15,70,45]

export default function BarChartComponent() {

    const drawSquare = (number) =>{
      let resArr = []
      let colorBoxes = Math.floor(number * (20/85))
      for(let i=0 ; i<20 ; i++){
        if(i < colorBoxes){
          resArr.push((
            <div style={{height:"1vh",width:"100%",backgroundColor:"#e76d6d",margin:"5px"}}>
            </div>
          ))
        }else{
          resArr.push((
            <div style={{height:"1vh",width:"100%",margin:"5px",backgroundColor:"rgb(231 109 109 / 38%)"}}>
            </div>
          ))
        }
      }
      return resArr.reverse()
    }
  return (
    <div className='row m-0' style={{width:"100%",height:"100%",backgroundColor:"#3a383e",borderRadius:"10px"}}>
      <div style={{fontSize:"1.2rem",marginBottom:"10px",textAlign:"left",paddingTop:"10px"}}>
            Top most
        </div>
        {permData.map( x =>{
          return (
            <div className='col m-2'>
              {drawSquare(x)}
              <p style={{fontSize:"0.8rem",marginTop:"10px",fontWeight:"bold"}} >{`${x}%`}</p>
            </div>
          )
        } )}
    </div>
  )
}
