
import "./Login.css";
import Home from '../Home/Home';
import { useNavigate, Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Login() {

  const history = useNavigate();

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  async function submit(e){
    e.preventDefault();

    try{

      await axios.post("http://localhost:5000/",{
        email:email,
        password:password
      })
      .then(res=>{
        if(res.data=="exist"){
          history("/home")
        }
        else if(res.data=="notexist"){
          alert("User have not sign up!!!")
        }
      })
      .catch(e=>{
        alert("wrong details")
        console.log(e)
      })
    }
      catch(e){
        console.log(e);
      }

    }
  

  return (
    <div>
        <div class="l1">
        <div class="l2">
            <div class="l4">GO</div>
            <div class="l5">A Travel Guide</div>
            <img class="l3" src={require('./bus.gif')}alt="bus"></img> 
        </div>
        </div>
        <div class="l6"></div>
        <div class="l7"></div>
        <div class="l8"></div>
        <div class="l9">
            <h3>Login</h3>
          <form action="POST">
            <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email"></input>
            <input type="Password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password"></input>
          
           
          
          <input type="submit" onClick={submit} placeholder='Login' ></input>
          <div class="signup1">
            <p>Don't Have an account ?</p>
            <Link to="/signup">signup</Link>
          </div>
          </form>
          </div>

         
        
    </div>
  );
}

export default Login
