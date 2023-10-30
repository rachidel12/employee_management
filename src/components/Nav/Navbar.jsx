import React, { useState, useEffect } from "react";
import * as Boot from 'react-bootstrap';
import axios from 'axios';
import AuthService from '../Products/AuthService';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Navbar=()=>{
  console.log(AuthService.getUserInfo())
  const navigate=useNavigate();
    return(
        <nav className="main-header navbar navbar-expand navbar-dark">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars"></i></a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <a href="" className="nav-link">Home</a>
        </li>
      </ul>
    </nav>
    )
    
}
export default Navbar;