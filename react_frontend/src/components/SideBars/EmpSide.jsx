import React, { useState, useEffect } from "react";
import * as Boot from 'react-bootstrap';
import { Link } from "react-router-dom";
import {AiFillDashboard,AiFillTag} from 'react-icons/ai';
import AuthService from '../Products/AuthService';
import {BsFillLayersFill,BsDashSquareFill,BsArrowRightSquare,BsPersonFill,BsPersonBadgeFill,BsFillCartFill} from 'react-icons/bs';
const EmpSide=()=>{
    return(
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <a href="/ManHome" className="brand-link text-center" style={{textDecoration: "none"}}>
          <Boot.Image src={require("./TechAK__2_-removebg-preview.png")} alt="" style={{width:"135px"}}/>
        </a>
    
        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="info">
              <a href="/ManHome" className="d-block" style={{textDecoration: "none"}}>Monsieur {AuthService.getUserInfo().username}</a>
            </div>
          </div>
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <li class="nav-item">
          <a class="nav-link" href="/Clients">
          <BsPersonBadgeFill className="nav-icon"/>
            <p>List Client</p> 
          </a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="/Orders">
          <BsFillCartFill className="nav-icon"/>
            <p>List orders</p> 
          </a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="/">
          <BsArrowRightSquare className="nav-icon"/>
            <p>Logout</p> 
          </a>
            
            </li>
        </ul>
      </nav>
    </div>
  </aside>

    )
      
}
export default EmpSide;