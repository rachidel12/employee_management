import React, { useState, useEffect } from "react";
import * as Boot from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import AuthService from '../Products/AuthService';
import DirSide from "../SideBars/DirSide";
import Navbar from "../Nav/Navbar";
const OrderDir=()=>{
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
        <DirSide/>
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
                    <Boot.Card.Header>
                     
                    <Boot.Button className="btn btn-primary" onClick={()=>navigate('/AddOrder')} style={{float:'right'}}>Add a order</Boot.Button>
                    </Boot.Card.Header>
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
                                        <td>{order.date}</td>
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
export default OrderDir