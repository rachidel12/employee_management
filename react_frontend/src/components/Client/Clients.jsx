import React, { useState, useEffect } from "react";
import * as Boot from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import AuthService from '../Products/AuthService';
import EmpSide from "../SideBars/EmpSide";
import Navbar from "../Nav/Navbar";
const Clients=()=>{
    const [clients,setClients]=useState([]);

    const navigate=useNavigate();
    useEffect(() => {
        axios
          .get("http://localhost:8082/api/clients",AuthService.getAuthHeader())
          .then(response => setClients(response.data))
          .catch(error => console.error(error));
          
      }, []);
    const deleteClient =(id) =>{
        axios
        .delete("http://localhost:8082/api/client/"+id,AuthService.getAuthHeader())
        .then(response => console.log(response))
        .catch(error => console.error(error));
        window.location.reload();
    }
    const AddCommande =(id) =>{
        axios
          .post("http://localhost:8082/api/order", {
            client:id,
          },AuthService.getAuthHeader())
          .then(response => console.log(response))
          .catch(error => console.error(error));
        navigate(`/AddCommande/${id}`);
    }
    // console.log(clients);
    return(
        <>
         <Navbar/>
        <EmpSide/>
        <div className="content-wrapper">
            <div className="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                    <h1 class="m-0">Add clients</h1>
                    </div>
                </div>
                </div>
            </div>
            <Boot.Container>
                <Boot.Card className="text-center">
                    <Boot.Card.Header>
                        <Boot.Card.Title>Clients</Boot.Card.Title>
                        <Boot.Button className="btn btn-primary" onClick={()=>navigate('/addClient')} style={{float:'right'}}>Add a client</Boot.Button>
                    </Boot.Card.Header>
                    <Boot.Card.Body>
                        <Boot.Table responsive striped>
                            <thead>
                                <tr>
                                    <th><Boot.Card.Title>Email</Boot.Card.Title></th>
                                    <th><Boot.Card.Title>FirstName</Boot.Card.Title></th>
                                    <th><Boot.Card.Title>LastName</Boot.Card.Title></th>
                                    <th><Boot.Card.Title>Telephone</Boot.Card.Title></th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                clients.map(client=>(
                                    <tr key={client.id}>
                                        <td>{client.email}</td>
                                        <td>{client.firstName}</td>
                                        <td>{client.lastName}</td>
                                        <td>{client.telephone}</td>
                                        <td ><Boot.Button className="btn btn-success" onClick={()=>navigate(`/UpdateClient/${client.id}`)}>Edit</Boot.Button> &nbsp;
                                        <Boot.Button className="btn btn-primary" onClick={()=>AddCommande(client.id)}>Order</Boot.Button>&nbsp;
                                        <Boot.Button className="btn btn-danger" onClick={()=>deleteClient(client.id)}>Delete</Boot.Button></td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </Boot.Table>
                    </Boot.Card.Body>
                </Boot.Card>
                {/* <Boot.Button className="btn btn-success">svdf</Boot.Button> */}
            </Boot.Container>
            </div>
        </>
    )
    
}
export default Clients