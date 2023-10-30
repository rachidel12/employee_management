import React, { useState, useEffect } from "react";
import * as Boot from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import AuthService from './AuthService';
import ManagerSide from "../SideBars/ManagerSide";
import Navbar from "../Nav/Navbar";
const Products=()=>{
    const [products,setProducts]=useState([]);
    const navigate=useNavigate();
    useEffect(() => {
        axios
          .get("http://localhost:8082/api/products",AuthService.getAuthHeader())
          .then(response => setProducts(response.data))
          .catch(error => console.error(error));
          
      }, []);
    const deleteProduct =(id) =>{
        axios
        .delete("http://localhost:8082/api/product/"+id,AuthService.getAuthHeader())
        .then(response => console.log(response))
        .catch(error => console.error(error))
         window.location.reload();
    }
    console.log(products);
    return(
        <>
        <Navbar/>
        <ManagerSide/>
        <div className="content-wrapper">
            <div className="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                    <h1 class="m-0">List of products</h1>
                    </div>
                </div>
                </div>
            </div>
            <Boot.Container>
                <Boot.Card className="text-center">
                    <Boot.Card.Header>
                        <Boot.Card.Title>Products {products.length}</Boot.Card.Title>
                        <Boot.Button className="btn btn-primary" onClick={()=>navigate('/addProduct')} style={{float:'right'}}>Add a product</Boot.Button>
                    </Boot.Card.Header>
                    <Boot.Card.Body>
                        <Boot.Table responsive >
                            <thead>
                                <tr>
                                    <th>Reference</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                   
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Category</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                products.map(product=>(
                                    <tr key={product.id}>
                                        <td>{product.id}</td>
                                        <td>{product.name}</td>
                                        <td>{product.description}</td>
                                        <td>{product.quantity}</td>
                                        <td>{product.price}</td>
                                        <td>{product.category.name}</td>
                                        <td><Boot.Button className="btn btn-success" onClick={()=>navigate(`/updateProduct/${product.id}`)}>Edit</Boot.Button> &nbsp;
                                        <Boot.Button className="btn btn-danger" onClick={()=>deleteProduct(product.id)}>Delete</Boot.Button></td>
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
export default Products