import React, { useState, useEffect } from "react";
import * as Boot from 'react-bootstrap';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import AuthService from '../Products/AuthService';
import ManagerSide from "../SideBars/ManagerSide";
import Navbar from "../Nav/Navbar";
const UpdateEmployee = (props) => {
    const navigate=useNavigate();
    const {employeeId}=useParams()
    const [employee,setEmployee]=useState({})
    const [username,setUsername]=useState('');
    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const [telephone,setTelephone]=useState('');
    const [salary,setSalary]=useState("");
    const [role,setRole]=useState("");
    const [password,setPassword]=useState("");
    useEffect(()=>{
        axios
          .get(`http://localhost:8082/employees/${employeeId}`,AuthService.getAuthHeader())
          .then(response => setEmployee(response.data))
          .catch(error => console.error(error));
    },[]);
    useEffect(()=>{
        axios
          .get(`http://localhost:8082/employees/${employeeId}`,AuthService.getAuthHeader())
          .then(response => setUsername(response.data.email))
          .catch(error => console.error(error));
    },[]);
    useEffect(()=>{
        axios
          .get(`http://localhost:8082/employees/${employeeId}`,AuthService.getAuthHeader())
          .then(response => setFirstName(response.data.firstName))
          .catch(error => console.error(error));
    },[]);
    useEffect(()=>{
        axios
          .get(`http://localhost:8082/employees/${employeeId}`,AuthService.getAuthHeader())
          .then(response =>{ setLastName(response.data.lastName);setTelephone(response.data.telephone)})
          .catch(error => console.error(error));
    },[]);
    console.log(username,firstName,lastName,telephone)
    const handlechange = event=>{
        if(event.target.name=="username"){
            setUsername(event.target.value)
        }
        else if(event.target.name=="firstName"){
            setFirstName(event.target.value)
        }
        else if(event.target.name=="lastName"){
            setLastName(event.target.value)
        }
        else if(event.target.name=="telephone"){
            setTelephone(event.target.value)
        }
    }
    const handleSubmit = event => {
        event.preventDefault();
        axios
          .put("http://localhost:8082/employees", {
            username:username,
            firstName:firstName,
            lastName:lastName,
            telephone:telephone,
          },AuthService.getAuthHeader())
          .then(response => console.log(response))
          .catch(error => console.error(error));
        navigate('/Clients');
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
                    <h1 class="m-0">Add category</h1>
                    </div>
                </div>
                </div>
            </div>
        <Boot.Container style={{width:'50%',marginTop:'2%'}}>
            <Boot.Form onSubmit={handleSubmit}>
            <Boot.Form.Group className="mb-3" controlId="formBasicEmail">
                <Boot.Form.Label>Username</Boot.Form.Label>
                <Boot.Form.Control defaultValue={username} name="username" onChange={handlechange} type="text" placeholder="Enter your email" />
            </Boot.Form.Group>

            <Boot.Form.Group className="mb-3" controlId="formBasicPassword">
                <Boot.Form.Label>First Name</Boot.Form.Label>
                <Boot.Form.Control  defaultValue={firstName} onChange={handlechange} type="text" placeholder="firstName" />
            </Boot.Form.Group>

            <Boot.Form.Group className="mb-3" controlId="formBasicEmail">
                <Boot.Form.Label>Last Name</Boot.Form.Label>
                <Boot.Form.Control  defaultValue={lastName} name="lastName" onChange={handlechange} type="text" placeholder="lastName" />
            </Boot.Form.Group>
            <Boot.Form.Group className="mb-3" controlId="formBasicEmail">
                <Boot.Form.Label>telephone</Boot.Form.Label>
                <Boot.Form.Control  defaultValue={telephone} name="telephone" onChange={handlechange} type="text" placeholder="telephone" />
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
    )
} 

export default UpdateEmployee;