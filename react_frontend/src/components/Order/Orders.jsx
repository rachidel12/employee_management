import React, { useState, useEffect } from "react";
import * as Boot from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import AuthService from '../Products/AuthService';
import EmpSide from "../SideBars/EmpSide";
import Navbar from "../Nav/Navbar";
const Orders=()=>{
    const [Orders,setOrders]=useState([]);
    const navigate=useNavigate();
    useEffect(() => {
        axios
          .get("http://localhost:8082/api/orders",AuthService.getAuthHeader())
          .then(response => setOrders(response.data))
          .catch(error => console.error(error));

          
      }, []);
    //   useEffect(() => {
    //     axios
    //       .get("http://localhost:8082/api/commandequa"+)
    //       .then(response => setCommandes(response.data))
    //       .catch(error => console.error(error));
          
    //   }, []);

    const deleteCommande =(id) =>{
        axios
        .delete("http://localhost:8082/api/order/"+id,AuthService.getAuthHeader())
        .then(response => console.log(response))
        .catch(error => console.error(error));
        window.location.reload();
    }

    return(
        <>
        <Navbar/>
        <EmpSide/>
        <div className="content-wrapper">
            <div className="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                    <h1 class="m-0">Orders</h1>
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
                                    <th>Order</th>
                                    <th>Client FirstName</th>
                                    <th>Client Email</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                Orders.map(order=>(
                                    <tr key={order.id}>
                                        <td>{order.id}</td>
                                        <td>{order.client.firstName}</td>
                                        <td>{order.client.email}</td>
                                         <td ><Boot.Button className="btn btn-success" onClick={()=>navigate(`/DetailComEmp/${order.id}`)}>Detail</Boot.Button> &nbsp;
                                         <Boot.Button className="btn btn-success" onClick={()=>navigate(`/AddCommande/${order.id}`)}>AddProduct</Boot.Button> &nbsp;
                                    <Boot.Button className="btn btn-danger" onClick={()=>deleteCommande(order.id)}>Delete</Boot.Button></td> 
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
export default Orders