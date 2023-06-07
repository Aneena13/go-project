import React from 'react';
import { useNavigate } from "react-router-dom";


import './Myjourney.css';

function Myjourney() {

  const history = useNavigate();
  return (
    <div>
      <div class="nav">
    <div class="navbar1">
        <div class="go">GO</div>
        <div class="go1">A Travel Guide</div>
    </div>
    <div class="navbar">
        <p onClick={()=>history("/home")}>HOME</p>
        <p>MY JOURNEY</p>
        <p>WANT TO GO</p>
        <p onClick={()=>history("/profile")}>PROFILE</p>
    </div>
</div>
<div class="r1"></div>
<div class="r2"></div>
<div class="r3"></div>

    </div>
  )
}

export default Myjourney
