import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Search.css";
import { useParams } from "react-router-dom";
import Myjourney from "../Myjourney/Myjourney";

function Search() {
  const [data, setData] = useState([]);
  const { source, destination } = useParams();
  console.log(source + destination);
  useEffect(() => {
    try {
      axios
        .post("http://localhost:5000/home", {
          source: source,
          destination: destination,
        })
        .then((res) => {
          setData(res.data.data);
          console.log(res.data.data)
        })
        .catch((e) => {
          alert("wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <div className="Profile">
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Katibeh&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Edu+VIC+WA+NT+Beginner&family=Gudea&family=Kaushan+Script&family=Merriweather:ital,wght@1,300&display=swap"
        rel="stylesheet"
      ></link>
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
        {data.map(
          ({
            source,
            destination,
            via,
            viatime,
            arrival,
            depart,
            triptime,
          }) => (
            <div className="t2">
              <b>{source + "---" + via + "---" + destination}</b>
              <br></br>
              <br></br>
              {arrival} &nbsp;&nbsp; {viatime} &nbsp;&nbsp; {depart}
              <button>wishlist</button>
              <button><Link to="/myjourney">save</Link></button>
            </div>
          )
        )}
      </div>
    </div>
  );
}
export default Search;
