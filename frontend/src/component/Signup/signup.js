import "./signup.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

function Signup() {
  const history = useNavigate();
  const [text, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [number, setPhone] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:5000/signup", {
          email: email,
          password: password,
          text: text,
          number: number,
        })
        .then((res) => {
          if (res.data.success) {
            console.log(res.data);
            history("/home");
          }
        });
    } catch (e) {
      toast.error(e.response.data.message);
      
    }
    history("/home");
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
        <form action="POST">
          <input
            type="text"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="username"
          ></input>
          <input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="email"
          ></input>
          <input
            type="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
          ></input>
          <input
            type="number"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            placeholder="Ph. No"
          ></input>
          <input type="submit" onClick={submit} placeholder="signup"></input>
        </form>
        <Link to="/">Login Page</Link>
      </div>
    </div>
  );
}

export default Signup;
