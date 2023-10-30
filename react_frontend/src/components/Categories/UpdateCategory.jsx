import React, { useState, useEffect } from "react";
import * as Boot from 'react-bootstrap';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import AuthService from '../Products/AuthService';
import ManagerSide from "../SideBars/ManagerSide";
import Navbar from "../Nav/Navbar";
const UpdateCategory=()=>{
    const navigate=useNavigate();
    const {categoryId}=useParams()
    const [category,setCategory]=useState({})
    const [name,setName]=useState('');
    const [description,setDescription]=useState('');
    useEffect(()=>{
        axios
          .get(`http://localhost:8082/api/category/${categoryId}`,AuthService.getAuthHeader())
          .then(response => setCategory(response.data))
          .catch(error => console.error(error));
    },[]);
    useEffect(()=>{
        axios
          .get(`http://localhost:8082/api/category/${categoryId}`,AuthService.getAuthHeader())
          .then(response => setName(response.data.name))
          .catch(error => console.error(error));
    },[]);
    useEffect(()=>{
        axios
          .get(`http://localhost:8082/api/category/${categoryId}`,AuthService.getAuthHeader())
          .then(response => setDescription(response.data.description))
          .catch(error => console.error(error));
    },[]);
    console.log(name,description)
    const handlechange = event=>{
        if(event.target.name=="name"){
            setName(event.target.value)
        }
        else{
            setDescription(event.target.value)
        }
    }
    const handleSubmit = event => {
        event.preventDefault();
        axios
          .put("http://localhost:8082/api/category", {
            id:categoryId,
            name: name,
            description: description,
          },AuthService.getAuthHeader())
          .then(response => console.log(response))
          .catch(error => console.error(error));
        navigate('/Categories');
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
                    <h1 class="m-0">List of categories</h1>
                    </div>
                </div>
                </div>
            </div>
        <Boot.Container style={{width:'50%',marginTop:'2%'}}>
            <Boot.Form onSubmit={handleSubmit}>
            <Boot.Form.Group className="mb-3" controlId="formBasicEmail">
                <Boot.Form.Label>Name</Boot.Form.Label>
                <Boot.Form.Control defaultValue={name} name="name" onChange={handlechange} type="text" placeholder="Enter name of the category" />
            </Boot.Form.Group>

            <Boot.Form.Group className="mb-3" controlId="formBasicPassword">
                <Boot.Form.Label>Description</Boot.Form.Label>
                <Boot.Form.Control defaultValue={description} onChange={handlechange} type="text" placeholder="Description" />
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
export default UpdateCategory