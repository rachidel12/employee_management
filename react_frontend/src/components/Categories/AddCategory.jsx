import React, { useState, useEffect } from "react";
import * as Boot from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import AuthService from '../Products/AuthService';
import ManagerSide from "../SideBars/ManagerSide";
import Navbar from "../Nav/Navbar";
const AddCategory=()=>{
    const navigate=useNavigate();
    const [name,setName]=useState("");
    const [description,setDescription]=useState("");
    const handleSubmit = event => {
        console.log(name,description);
        event.preventDefault();
        axios
          .post("http://localhost:8082/api/category", {
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
                    <h1 class="m-0">Add category</h1>
                    </div>
                </div>
                </div>
            </div>
        <Boot.Container style={{width:'50%',marginTop:'2%'}}>
            <Boot.Form onSubmit={handleSubmit}>
            <Boot.Form.Group className="mb-3" controlId="formBasicEmail">
                <Boot.Form.Label>Name</Boot.Form.Label>
                <Boot.Form.Control value={name} name="name" onChange={event => setName(event.target.value)} type="text" placeholder="Enter name of the category" />
            </Boot.Form.Group>

            <Boot.Form.Group className="mb-3" controlId="formBasicPassword">
                <Boot.Form.Label>Description</Boot.Form.Label>
                <Boot.Form.Control value={description} onChange={event => setDescription(event.target.value)} type="text" placeholder="Description" />
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
export default AddCategory