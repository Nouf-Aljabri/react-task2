import React from "react";
import { Link } from "react-router-dom";
import styles from "./Style";

export default function Nav(){
    
   //const classes = styles();
   const {brown} = styles();
   
    return (
        
            <nav className="navbar navbar-expand-lg">
  <div className="container-fluid justify-content-center px-4">
      <ul className="navbar-nav fs-5 ">
        <li className="nav-item mx-4 "><Link to="/" className={`nav-link ${brown}`} >Home</Link></li>
        <li className="nav-item mx-4 "><Link className={`nav-link ${brown}`} to="/About">About us</Link></li>
        <li className="nav-item mx-4" ><Link className={`nav-link ${brown}`} to="/Services">Services</Link></li>
        <li className="nav-item mx-4"><Link className={`nav-link ${brown}`} to="/Team">Team</Link></li>
        <li className="nav-item mx-4"><Link className={`nav-link ${brown}`} to="/Contact">Contact Us</Link></li>
      </ul>
   
  </div>
</nav>
     

    )
       
}

