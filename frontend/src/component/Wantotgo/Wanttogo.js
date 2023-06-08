import React from 'react';
import './Wanttogo.css';
import { Link } from "react-router-dom";

function Wanttogo() {
  return (
    <div>
         <link href='https://fonts.googleapis.com/css?family=Kaushan Script' rel='stylesheet'></link>
         <div class='Title'>
        <h1>Go</h1>
        <h2>A travel guide</h2>
        <p><Link to ="/home" className="li-1">HOME </Link></p>
        <p><Link to ="/myjourney" className="li-1">MY JOURNEY</Link></p>
        <p><Link to ="/wanttogo" className="li-1">WANT TO GO</Link></p>
        <p><Link to ="/" className="li-1">LOGOUT</Link></p>
         </div>
        
         <div input type='button' className='BlueB1'>TVM - KOLLAM </div>
         <div className='BlueB2'>EKM - ALAPPUZHA </div>
         <div className='BlueB3'>IJK - KANNUR </div>
         <div>
         <div className='w11'></div>
         <div className='w2'></div>
         <div className='w3'></div>
         </div>
        
        





    </div>
  )
}

export default Wanttogo