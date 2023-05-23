import React from 'react';
import "./Profile.css";

function Profile() {
  return (
    <div>
      <div class="p1">
    <div class="p2">
        <div class="p3">GO</div>
        <div class="p4">A Travel Guide</div>
    </div>
    <div class="p5">
        <p>HOME</p>
        <p>MY JOURNEY</p>
        <p>WANT TO GO</p>
        <p>LOGIN</p>
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
