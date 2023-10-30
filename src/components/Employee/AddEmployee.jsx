import React, { useState, useEffect } from "react";
import * as Boot from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import AuthService from '../Products/AuthService';
import ManagerSide from "../SideBars/ManagerSide";
import Navbar from "../Nav/Navbar";
const AddEmployee = () => {
  const navigate=useNavigate();
  const [username,setUsername]=useState("");
  const [firstName,setFirstName]=useState("");
  const [lastName,setLastName]=useState("");
  const [telephone,setTelephone]=useState("");
  const [salary,setSalary]=useState("");
  const [role,setRole]=useState("");
  const [password,setPassword]=useState("");

  const handleSubmit = event => {
      event.preventDefault();
      axios
        .post("http://localhost:8082/employees", {
          username:username,
          password:password,
          salary:salary,
          role:"Employee",
          firstName:firstName,
          lastName:lastName,
          telephone:telephone,
        },AuthService.getAuthHeader())
        .then(response => console.log(response))
        .catch(error => console.error(error));
        navigate('/Employee');
        window.location.reload();
    };
  return (
    <>
    <Navbar/>
        <ManagerSide/>
        <div className="content-wrapper">
            <div className="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                    <h1 class="m-0">Add Employee</h1>
                    </div>
                </div>
                </div>
            </div>
        <Boot.Container style={{width:'50%',marginTop:'2%'}}>
            <Boot.Form onSubmit={handleSubmit}>
            <Boot.Form.Group className="mb-3" controlId="formBasicEmail">
                <Boot.Form.Label>Username</Boot.Form.Label>
                <Boot.Form.Control value={username} name="email" onChange={event => setUsername(event.target.value)} type="text" placeholder="Enter your email" />
            </Boot.Form.Group>

            <Boot.Form.Group className="mb-3" controlId="formBasicPassword">
                <Boot.Form.Label>First Name</Boot.Form.Label>
                <Boot.Form.Control value={firstName} onChange={event => setFirstName(event.target.value)} type="text" placeholder="firstName" />
            </Boot.Form.Group>

            <Boot.Form.Group className="mb-3" controlId="formBasicEmail">
                <Boot.Form.Label>Last Name</Boot.Form.Label>
                <Boot.Form.Control value={lastName} name="lastName" onChange={event => setLastName(event.target.value)} type="text" placeholder="lastName" />
            </Boot.Form.Group>
            <Boot.Form.Group className="mb-3" controlId="formBasicEmail">
                <Boot.Form.Label>telephone</Boot.Form.Label>
                <Boot.Form.Control value={telephone} name="telephone" onChange={event => setTelephone(event.target.value)} type="number" placeholder="telephone" />
            </Boot.Form.Group>
            <Boot.Form.Group className="mb-3" controlId="formBasicEmail">
                <Boot.Form.Label>Password</Boot.Form.Label>
                <Boot.Form.Control value={password} name="telephone" onChange={event => setPassword(event.target.value)} type="text" placeholder="telephone" />
            </Boot.Form.Group>
            <Boot.Form.Group className="mb-3" controlId="formBasicEmail">
                <Boot.Form.Label>Salary</Boot.Form.Label>
                <Boot.Form.Control value={salary} name="telephone" onChange={event => setSalary(event.target.value)} type="number" placeholder="telephone" />
            </Boot.Form.Group>
            <div className="text-center">
                <Boot.Button variant="primary" type="submit">
                    Submit
                </Boot.Button>
            </div>
            </Boot.Form>
        </Boot.Container>
        </div>
        </>
  );
};

export default AddEmployee;