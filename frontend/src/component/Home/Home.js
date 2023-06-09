import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./Home.css";
import { useNavigate, Link } from "react-router-dom";

function Home() {

  const history = useNavigate();
  
  const [source,setSource]=useState('')
  const [destination,setDestination]=useState('')
  async function submit(e){
    e.preventDefault();
      history(`/search/${source}/${destination}`)

  
}

  return (
    <div>
      <div class="h1">
    <div class="h2">
        <div class="h3">GO</div>
        <div class="h4">A Travel Guide</div>
    </div>
    
    <div class="h5">
        <p onClick={()=>history("/home")}>HOME  </p>
        <p onClick={()=>history("/myjourney")}>MY JOURNEY</p>
        <p>WANT TO GO</p>
        <p onClick={()=>history("/profile")}>PROFILE</p>
    </div>
</div>
<div class="h11">
<div class="h10">Plan your trip!!!</div>
<form  class="form1" action="POST">
          <input type="D" name='source1' onChange={(e)=>{setSource(e.target.value)}} placeholder="Source"></input>
          <input type="text" name='destination1' onChange={(e)=>{setDestination(e.target.value)}} placeholder="Destination"></input>
          <input type="submit" onClick={submit} name='search' placeholder='Search' ></input>
</form>
<div class="h12">
<img class="h9" src={require('./img1.jpg')} alt='girl'></img>
<div class="h6"></div>
<div class="h7"></div>
<div class="h8"></div>
</div>
</div>
{/* <img id="h9" src={require('./img1.jpg')} alt='girl'></img> */}
    </div>
  )
}

export default Home

