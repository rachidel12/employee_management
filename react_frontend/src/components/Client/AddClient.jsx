import React, { useState } from "react";
import * as Boot from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import EmpSide from "../SideBars/EmpSide";
import Navbar from "../Nav/Navbar";
import AuthService from '../Products/AuthService';
const AddClient=()=>{
    const navigate=useNavigate();
    const [email,setEmail]=useState("");
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [telephone,setTelephone]=useState("");
    const handleSubmit = event => {
    console.log(email,firstName,lastName,telephone);
        event.preventDefault();
        axios
          .post("http://localhost:8082/api/client", {
            email:email,
            firstName:firstName,
            lastName:lastName,
            telephone:telephone,
          },AuthService.getAuthHeader())
          .then(response => console.log(response))
          .catch(error => console.error(error));
        navigate('/Clients');
        window.location.reload();
      };
    return (
        <>
          <Navbar/>
        <EmpSide/>
        <div className="content-wrapper">
            <div className="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                    <h1 class="m-0">Add Client</h1>
                    </div>
                </div>
                </div>
            </div>
        <Boot.Container style={{width:'50%',marginTop:'2%'}}>
            <Boot.Form onSubmit={handleSubmit}>
            <Boot.Form.Group className="mb-3" controlId="formBasicEmail">
                <Boot.Form.Label>Email</Boot.Form.Label>
                <Boot.Form.Control value={email} name="email" onChange={event => setEmail(event.target.value)} type="text" placeholder="Enter your email" />
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
                <Boot.Form.Control value={telephone} name="telephone" onChange={event => setTelephone(event.target.value)} type="text" placeholder="telephone" />
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
export default AddClient