import React, { useState, useEffect } from "react";
import * as Boot from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Navbar from "../Nav/Navbar";
import ManagerSide from "../SideBars/ManagerSide";
import AuthService from '../Products/AuthService';
const Categories=()=>{
    const [categories,setCategories]=useState([]);
    const navigate=useNavigate();
    useEffect(() => {
        axios
          .get("http://localhost:8082/api/categories",AuthService.getAuthHeader())
          .then(response => setCategories(response.data))
          .catch(error => console.error(error));
          
      }, []);
    const deleteCategory =(id) =>{
        axios
        .delete("http://localhost:8082/api/category/"+id,AuthService.getAuthHeader())
        .then(response => console.log(response))
        .catch(error => console.error(error));
        window.location.reload();
    }
    console.log(categories);
    return(
        
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
        
            <Boot.Container>
                <Boot.Card className="text-center">
                    <Boot.Card.Header>
                        <Boot.Card.Title>Categories</Boot.Card.Title>
                        <Boot.Button className="btn btn-primary" onClick={()=>navigate('/addCategory')} style={{float:'right'}}>Add a category</Boot.Button>
                    </Boot.Card.Header>
                    <Boot.Card.Body>
                        <Boot.Table>
                            <thead>
                                <tr>
                                    <th><>Reference</></th>
                                    <th><>Name</></th>
                                    <th><>Description</></th>
                                    <th><>Action</></th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                categories.map(category=>(
                                    <tr key={category.id}>
                                        <td>{category.id}</td>
                                        <td>{category.name}</td>
                                        <td>{category.description}</td>
                                        <td><Boot.Button className="btn btn-success" onClick={()=>navigate(`/updateCategory/${category.id}`)}>Edit</Boot.Button> &nbsp;
                                        <Boot.Button className="btn btn-danger" onClick={()=>deleteCategory(category.id)}>Delete</Boot.Button></td>
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
export default Categories