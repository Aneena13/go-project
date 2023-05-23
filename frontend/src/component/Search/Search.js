import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Search.css';


function Search(){
    
    const [source,setSource]=useState('')
    const [via,setVia]=useState('')
    const [destination,setDestination]=useState('')
    
    //   preventDefault();
    // try{
    //     axios.get("http://localhost:5000/search",{
    //   source:source,
    //   via:via,
    //   destination:destination
    // }).then(res=>{
    //     if(res.data="done"){
    //         setSource=(res.bus.source);
    //         setVia=(res.bus.via)
    //         setDestination=(res.bus.destination)
    //     }
    // })
    // }catch{
    //     console.log("error")
    // }
    
  
      return(
       <div className="Profile">
         <link rel="preconnect" href="https://fonts.googleapis.com"></link>
       <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
       <link href="https://fonts.googleapis.com/css2?family=Katibeh&display=swap" rel="stylesheet"></link>
       <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet"></link>
       <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400&display=swap" rel="stylesheet"></link>
       <link href="https://fonts.googleapis.com/css2?family=Edu+VIC+WA+NT+Beginner&family=Gudea&family=Kaushan+Script&family=Merriweather:ital,wght@1,300&display=swap" rel="stylesheet"></link>
       <div class="s1">
    <div class="s2">
        <div class="s3">GO</div>
        <div class="s4">A Travel Guide</div>
    </div>
    <div class="s5">
        <p>HOME</p>
        <p>MY JOURNEY</p>
        <p>WANT TO GO</p>
        <p>LOGIN</p>
    </div>
</div>
<div class="s6"></div>
<div class="s7"></div>
<div class="s8"></div>
<div class="yellowbox">

    <div id="t1">  <b><input type="text" value={source} onChange={(e)=>{setSource(e.target.value)}}/>  ---  <input type="text" value={via} onChange={(e)=>{setVia(e.target.value)}}/>  ---  <input type="text" value={destination} onChange={(e)=>{setDestination(e.target.value)}}/></b><br></br><br></br>
                    11:00 AM &nbsp;&nbsp;   1:15 PM &nbsp;&nbsp;   2:00 PM       </div>
    <div id="t2"><b>THRISSUR  ---  MALAPPURAM  ---  KOZHIKODE</b><br></br><br></br>
                    3:50 PM &nbsp;&nbsp; 5:30 PM &nbsp;&nbsp; 7:50 PM</div>
    <div id="t3">  <b>IRINJALAKUDA  --- ALUVA  ---  KAKKANAD</b><br></br><br></br>
                      6:30 AM &nbsp;&nbsp;  8:30 AM &nbsp;&nbsp; 9:30 AM</div>
</div>


</div>
      )
}
export default Search