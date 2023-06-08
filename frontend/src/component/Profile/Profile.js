import React from 'react';
import "./Profile.css";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div>
      <div class="p1">
    <div class="p2">
        <div class="p3">GO</div>
        <div class="p4">A Travel Guide</div>
    </div>
    <div class="p5">
    <p><Link to ="/home" className="li-1">HOME </Link></p>
        <p><Link to ="/myjourney" className="li-1">MY JOURNEY</Link></p>
        <p><Link to ="/myjourney" className="li-1">WANT TO GO</Link></p>
        <p><Link to ="/profile" className="li-1">PROFILE</Link></p>
    </div>
</div>
<div class="p6"></div>
<div class="p7"></div>
<div class="p8"></div>
<div id="profile">PROFILE</div>
<img id="proicon" src={require('./Vector.jpg')} alt="profileicon"></img>
<div id="name">Andrea Xaviour</div>
<div class="p9">
     <br></br>
     <form class="#">
         <p>NAME : Andrea Xaviour</p><br></br><br></br><br></br>
         <p>PHONE NO : +91 827364758</p><br></br><br></br><br></br>
         <p>EMAIL ID : abc@gmail.com</p><br></br><br></br><br></br>
         <p>LOCATION : Ollur, Thrissur</p><br></br><br></br><br></br>
      </form>
         
</div>
    </div>
  )
}

export default Profile
