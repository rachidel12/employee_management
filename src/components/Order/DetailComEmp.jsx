import React, { useState, useEffect } from "react";
import * as Boot from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import AuthService from '../Products/AuthService';
import EmpSide from "../SideBars/EmpSide";
import Navbar from "../Nav/Navbar";
const DetailComEmp=()=>{
    const [commandes,setCommandes]=useState([]);
    const [order,setOrder]=useState();
 
    const {orderid}=useParams();
    const navigate=useNavigate();
    
   
    useEffect(() => {
        axios
          .get("http://localhost:8082/api/sum/"+ orderid,AuthService.getAuthHeader())
          .then(response => setCommandes(response.data))
          .catch(error => console.error(error));
          
      }, []);
      useEffect(() => {
        axios
          .get("http://localhost:8082/api/order/"+ orderid,AuthService.getAuthHeader())
          .then(response => console.log(response.data))
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
        .delete("http://localhost:8082/api/Commande/"+id,AuthService.getAuthHeader())
        .then(response => console.log(response))
        .catch(error => console.error(error));
        window.location.reload();
    }
    // const updateCommande = event => {
    //     event.preventDefault();
    //     axios
    //       .put("http://localhost:8082/order", {
    //         username:orderid,
    //         Statut:1,
    //       },AuthService.getAuthHeader())
    //       .then(response => console.log(response))
    //       .catch(error => console.error(error));
    //     navigate('/Clients');
    //   };
    const handlefinish =()=>{
        axios
          .put("http://localhost:8082/api/order/"+orderid,{},AuthService.getAuthHeader())
          .then(response => console.log(response))
          .catch(error => console.error(error));
        navigate('/Orders');
    }
      console.log(commandes,orderid,order);
    // const AddOrder =(id) =>{
    //     axios
    //       .post("http://localhost:8082/api/order", {
    //         client:id,
    //         date:"null",
    //       })
    //       .then(response => console.log(response))
    //       .catch(error => console.error(error));
    //     navigate(`/AddOrder/${id}`);
    // }
    // console.log(clients);
    return(
        <>
        <Navbar/>
        <EmpSide/>
        <div className="content-wrapper">
        <section className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          
          <div className="invoice p-3 mb-3">

            {/* <div className="row">
              <div className="col-12">
                <h4>
                  Name: {order.client.firstName} {order.client.lastName} <br/>
                  Email: {order.client.email} <br/>
                </h4>
              </div>
    
            </div> */}


            <div className="row">
              <div className="col-12 table-responsive">
                <table className="table">
                  <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>SubTotal</th>
                    <th>Action</th>
                  </tr>
                  </thead>
                  <tbody >
                  {
                                commandes.map(commande=>(
                                    <tr key={commande[1]}>
                                        <td>{commande[0].product.name}</td>
                                        <td>{commande[0].quantity}</td>
                                        <td>{commande[1]} $</td>
                                 
                                         <td >
                                    <Boot.Button className="btn btn-danger" onClick={()=>deleteCommande(commande[0].id)}>Delete</Boot.Button></td> 
                                    </tr>
                                ))
                            }
                  </tbody>
                </table>
              </div>
        
            </div>
    

            <div className="row">
                      <div className="col-6">
                <p className="lead">Payment Methods:</p>
                <p className="text-muted well well-sm shadow-none" style={{marginTop: "10px"}}>
                  You can pay on delivery for the moment please wait until we add card payment feature .
                </p>
              </div>

              <div className="col-6">
                <p className="lead">Amount</p>

                <div className="table-responsive">
                  <table className="table">
                    <tr>
                      <th>Total:</th>
                      <td> {commandes.reduce((acc, commande) => acc + commande[1], 0)} $ </td>
                    </tr>
                  </table>
                </div>
              </div>
            
            </div>
        
          </div>

        </div>
      </div>
    </div>
  </section>
  </div>
         {/* 
        <div className="content-wrapper">
            <div className="content-header">
            <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                    <h1 className="m-0">Add category</h1>
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
                                    <th><Boot.Card.Title>Product</Boot.Card.Title></th>
                                    <th><Boot.Card.Title>Quantity</Boot.Card.Title></th>
                                    <th><Boot.Card.Title>Price</Boot.Card.Title></th>
                                
                                </tr>
                            </thead>
                            <tbody>
                            {
                                commandes.map(commande=>(
                                    <tr key={commande[1]}>
                                        <td>{commande[0].product.name}</td>
                                        <td>{commande[0].quantity}</td>
                                        <td>{commande[1]}</td>
                                 
                                         <td >
                                    <Boot.Button className="btn btn-danger" onClick={()=>deleteCommande(commande[0].id)}>Delete</Boot.Button></td> 
                                    </tr>
                                ))
                            }
                            </tbody>
                            
                        </Boot.Table>
                        <div>Total Price :{commandes.reduce((acc, commande) => acc + commande[1], 0)}
                        <Boot.Button className="btn btn-danger" onClick={()=>updateCommande(orderid)}>Validate</Boot.Button></div>
                    </Boot.Card.Body>
                </Boot.Card> 
                <Boot.Button className="btn btn-success">svdf</Boot.Button> 
             </Boot.Container> */}
            {/* </div>  */}
        </>
    )
    
}
export default DetailComEmp