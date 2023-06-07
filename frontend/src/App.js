import React from "react";
import Myjourney from "./component/Myjourney/Myjourney";
import Login from "./component/Login/Login";
import Home from "./component/Home/Home";
import Signup from "./component/Signup/signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./component/Profile/Profile";
import Admin from "./component/Admin/Admin";
import Search from "./component/Search/Search";
import Wanttogo from "./component/Wantotgo/Wanttogo"
export default () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/myjourney" element={<Search />} />
        <Route path="/search/:source/:destination" element={<Search />} />
        <Route path="/wanttogo" element={<Wanttogo />} />
      </Routes>
    </BrowserRouter>
  ); 
};
