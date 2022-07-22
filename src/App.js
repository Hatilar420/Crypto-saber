import './App.css';
import ChartComponent from './components/ChartComponents/ChartComponent';
import CurrencyList from './components/CurrencyListComponent/CurrencyList';
import DisplayMiscComponents from './components/miscComponents/DisplayMiscComponents';
import {GiSaberToothedCatHead} from 'react-icons/gi'
import {BiUserCircle} from 'react-icons/bi'
import { useState } from 'react';

function App() {
  const [SelectedCurrency,setSelectedCurrency] = useState([])
  return (
    <div className="App">
      <div className='container-fluid p-0 m-0'>
          <div className='row m-0' style={{width:"100%",padding:"25px",boxShadow:"0px 5px 10px 0px rgba(0,0,0,1)"}}>
              <div className='col-6' style={{fontSize:"2rem",textAlign:"left"}}>
                  <GiSaberToothedCatHead style={{marginRight:"10px"}}/>
                  <span >Sabertooth</span>
              </div>
              <div className='col-6' style={{fontSize:"1.2rem",textAlign:"right"}}>
                  <BiUserCircle style={{marginRight:"10px",fontSize:"2.5rem",color:"#e84a4a"}}/>
                  <span>User Name</span>
              </div>
          </div>
          <div style={{textAlign:"left",marginTop:"10px",padding:"20px 15px 0px 15px"}}>
              <p style={{color:"#e419ff",fontSize:"1.3rem",marginLeft:"15px"}}> 
                Welcome back, 
                <span style={{color:"white",fontSize:"1.4rem"}}> User Name  </span>
             </p>
          </div>
          <div className='row m-0' style={{height:"70vh",width:"100%"}}>
            <div className='col-2 p-1 m-4' >
                <CurrencyList setCurrency = {setSelectedCurrency} selectedCurrency = {SelectedCurrency}/>
            </div>
            <div className='col-6 p-3 m-1'> 
                <ChartComponent selectedCurrency = {SelectedCurrency}/>
            </div>
            <div className='col-3 p-3 m-1'>
              <DisplayMiscComponents/>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
