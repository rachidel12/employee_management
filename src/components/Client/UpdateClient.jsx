import React, { useState, useEffect } from "react";
import * as Boot from 'react-bootstrap';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import AuthService from '../Products/AuthService';
import EmpSide from "../SideBars/EmpSide";
import Navbar from "../Nav/Navbar";
const UpdateClient=()=>{
    const navigate=useNavigate();
    const {clientId}=useParams()
    const [client,setClient]=useState({})
    const [email,setEmail]=useState('');
    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const [telephone,setTelephone]=useState('');

    useEffect(()=>{
        axios
          .get(`http://localhost:8082/api/client/${clientId}`,AuthService.getAuthHeader())
          .then(response => setClient(response.data))
          .catch(error => console.error(error));
    },[]);
    useEffect(()=>{
        axios
          .get(`http://localhost:8082/api/client/${clientId}`,AuthService.getAuthHeader())
          .then(response => setEmail(response.data.email))
          .catch(error => console.error(error));
    },[]);
    useEffect(()=>{
        axios
          .get(`http://localhost:8082/api/client/${clientId}`,AuthService.getAuthHeader())
          .then(response => setFirstName(response.data.firstName))
          .catch(error => console.error(error));
    },[]);
    useEffect(()=>{
        axios
          .get(`http://localhost:8082/api/client/${clientId}`,AuthService.getAuthHeader())
          .then(response => setLastName(response.data.lastName))
          .catch(error => console.error(error));
    },[]);
    useEffect(()=>{
        axios
          .get(`http://localhost:8082/api/client/${clientId}`,AuthService.getAuthHeader())
          .then(response => setTelephone(response.data.telephone))
          .catch(error => console.error(error));
    },[]);
    console.log(email,firstName,lastName,telephone)
    const handlechange = event=>{
        if(event.target.name=="email"){
            setEmail(event.target.value)
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
          .put("http://localhost:8082/api/client", {
            id:clientId ,
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
                    <h1 class="m-0">Add category</h1>
                    </div>
                </div>
                </div>
            </div>
        <Boot.Container style={{width:'50%',marginTop:'2%'}}>
            <Boot.Form onSubmit={handleSubmit}>
            <Boot.Form.Group className="mb-3" controlId="formBasicEmail">
                <Boot.Form.Label>Email</Boot.Form.Label>
                <Boot.Form.Control defaultValue={email} name="email" onChange={handlechange} type="text" placeholder="Enter your email" />
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
export default UpdateClient