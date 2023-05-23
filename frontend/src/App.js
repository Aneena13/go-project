import React from "react";
import Myjourney from "./component/Myjourney/Myjourney";
import Login from "./component/Login/Login";
import Home from "./component/Home/Home";
import Signup from "./component/Signup/signup";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Profile from "./component/Profile/Profile";
import Admin from "./component/Admin/Admin";
import Search from "./component/Search/Search";


export default () => {
  return(
    <BrowserRouter>
    <Routes>
     <Route path="/" exact element={<Login />} />
     <Route path="/signup" exact element={<Signup />} />
     <Route path="/home" element={<Home />} />
     <Route path="/profile" element={<Profile />} />
     <Route path="/admin" element={<Admin />} />
     <Route path="/search" element={<Search />} />
    </Routes>
    </BrowserRouter>
  );
};
