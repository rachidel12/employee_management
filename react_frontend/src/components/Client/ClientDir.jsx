import React, { useState, useEffect } from "react";
import * as Boot from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import AuthService from '../Products/AuthService';
import DirSide from "../SideBars/DirSide";
import Navbar from "../Nav/Navbar";
const ClientDir=()=>{
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
        <DirSide/>
        <div className="content-wrapper">
            <div className="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                    <h1 class="m-0">List of Client</h1>
                    </div>
                </div>
                </div>
            </div>
            <Boot.Container>
                <Boot.Card className="text-center">

                    <Boot.Card.Body>
                        <Boot.Table responsive striped>
                            <thead>
                                <tr>
                                    <th>Email</th>
                                    <th>FirstName</th>
                                    <th>LastName</th>
                                    <th>Telephone</th>
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
export default ClientDir