import React from "react";
import {Route,Routes, Link } from "react-router-dom";
import Tdlist from "./Tdlist";
import Calendr from "./Calendr";
import Journal from "./Journal";
import Hpage from "./Hpage";



const Header = (props) => {
  
  return (
    <div className="">
{/* 
avbar-dark bg-dark  */}
      <div className="container-fluid navbar navbar-expand-lg colo fixed-top  ">
        <li className="navbar-brand text-white">Day:{props.day}</li>
        
        <li className="text-white">
          <Link to="/hpage">Home</Link>&nbsp;
          &nbsp;
          &nbsp;
          <Link to="/tdlist">To-do list</Link>&nbsp;
          &nbsp;
          &nbsp;
         
        
          <Link to="/calendr">Calendar</Link>&nbsp;
          &nbsp;
          &nbsp;
        
       
          <Link to="/journal">Journal</Link>
        </li>
        
      </div>
      
      
      <Routes>
         <Route path="/hpage" element={<Hpage/>} />

        
        <Route path="/tdlist" element={<Tdlist />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/calendr" element={<Calendr />} />
      </Routes>
    </div>
  );
};
export default Header;
