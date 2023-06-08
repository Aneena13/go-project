import React from 'react';
import { Link } from "react-router-dom";

import './Myjourney.css';

function Myjourney() {

  
  return (
    <div>
      <div class="nav">
    <div class="navbar1">
        <div class="go">GO</div>
        <div class="go1">A Travel Guide</div>
    </div>
    <div class="navbar">
        <p><Link to ="/home" className="li-1">HOME </Link></p>
        <p><Link to ="/myjourney" className="li-1">MY JOURNEY</Link></p>
        <p><Link to ="/myjourney" className="li-1">WANT TO GO</Link></p>
        <p><Link to ="/" className="li-1">LOGOUT</Link></p>
    </div>
</div>
<div class="r1"></div>
<div class="r2"></div>
<div class="r3"></div>

    </div>
  )
}

export default Myjourney
