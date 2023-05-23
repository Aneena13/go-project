
import "./Admin.css";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
function Admin() {


  const [source,setSource]=useState('')
  const [destination,setDestination]=useState('')
  const [via,setVia]=useState('')
  const [viatime,setViatime]=useState('')
  const [arrival,setArrival]=useState('')
  const [depart,setDepart]=useState('')
  const [triptime,setTriptime]=useState('')
  
 

  async function submit(e){
    e.preventDefault();

    try{

      await axios.post("http://localhost:5000/admin",{
        source : source,
        destination : destination,
        via : via,
        viatime : viatime,
        arrival : arrival,
        depart : depart,
        triptime : triptime
      })
      // .then(res=>{
      //   if(res.data=="notexist"){
      //     history("/home");
      //   }
        
      // })
      // .catch((e)=>{
      //   alert("wrong details")
      //   console.log(e)
      // })
    }
      catch(e){
        console.log(e);
      }

    }

  return (
    <div>
      <div class="nav">
         <div class="navbar1">
             <div class="go">GO</div>
             <div class="go1">A Travel Guide</div>
             <img class="bus" src={require('./bus.gif')}alt="bus"></img>
             

         </div>
     </div>
     <div class="r1"></div>
     <div class="r2"></div>
     <div class="r3"></div>
     <div class="r4">
        <span>source</span>
        <div class="esource">Enter the Source:
        <input type='text' onChange={(e)=>{setSource(e.target.value)}} class="source"></input></div>
        <span>destination</span>
        <div class="edestination">Enter the Destination:
        <input type='text' onChange={(e)=>{setDestination(e.target.value)}} class="Destination"></input></div>
        <span>via</span>
        <div class="evia">Via:
        <input type='text' onChange={(e)=>{setVia(e.target.value)}} class="via"></input></div>
        <span>viatime</span>
        <div class="eviatime">Via time:
        <input type='text' onChange={(e)=>{setViatime(e.target.value)}} class="viatime"></input></div>
        <span>arrival</span>
        <div class="earrival">Enter the arrival time:
        <input type='text' onChange={(e)=>{setArrival(e.target.value)}} class="arrival"></input></div>
        <span>depart</span>
        <div class="edepart">Enter the departure time:
        <input type='text' onChange={(e)=>{setDepart(e.target.value)}} class="depart"></input></div>
        <span>triptime</span>
        <div class="etriptime">Total trip time:
        <input type='text' onChange={(e)=>{setTriptime(e.target.value)}} class="triptime"></input></div>
        <button type="submit" onClick={submit} >Submit</button>
     </div>
     <div class="data"></div>
    </div>
  )
}

export default Admin
