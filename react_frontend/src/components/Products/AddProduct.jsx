import React, { useState, useEffect } from "react";
import * as Boot from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import AuthService from './AuthService';
import ManagerSide from "../SideBars/ManagerSide";
import Navbar from "../Nav/Navbar";
const AddProduct=()=>{
    const navigate=useNavigate();
    const [name,setName]=useState("");
    const [description,setDescription]=useState("");
    const [image,setImage]=useState("");
    const [quantity,setQuantity]=useState();
    const [price,setPrice]=useState();
    // var category;
    const [categoryId,setCategoryId]=useState();
    const [categories,setCategories]=useState([]);
    // const [category,setCategory]=useState({});
    // useEffect(()=>{
    //     getCategory()
    // },[])
    // async function getCategory(){
    //         await axios
    //       .get("http://localhost:8080/api/category/"+categoryId)
    //       .then(response => setCategory(response.data))
    //       .catch(error => console.error(error));
    // }
    useEffect(()=>{
        axios
          .get("http://localhost:8082/api/categories",AuthService.getAuthHeader())
          .then(response => setCategories(response.data))
          .catch(error => console.error(error));
      }, []);
    const handleSubmit = event => {
        event.preventDefault();
        // getCategory();
        // console.log(name,description,category,quantity,price);
        
        axios
          .post("http://localhost:8082/api/product", {
            name: name,
            description: description,
            image: "image",
            quantity: quantity,
            price: price,
            category:categoryId
          },AuthService.getAuthHeader())
          .then(response => console.log(response))
          .catch(error => console.error(error));
        navigate('/products');
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
                    <h1 class="m-0">Add Product</h1>
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
           
            <Boot.Form.Group className="mb-3" controlId="formBasicPassword">
                <Boot.Form.Label>Quantity</Boot.Form.Label>
                <Boot.Form.Control value={quantity} onChange={event => setQuantity(event.target.value)} type="number" placeholder="Quantity" />
            </Boot.Form.Group>
            <Boot.Form.Group className="mb-3" controlId="formBasicPassword">
                <Boot.Form.Label>Price</Boot.Form.Label>
                <Boot.Form.Control value={price} onChange={event => setPrice(event.target.value)} type="number" placeholder="Price" />
            </Boot.Form.Group>
            <Boot.Form.Group className="mb-3" controlId="formBasicPassword">
                <Boot.Form.Label>Category</Boot.Form.Label>
                <Boot.Form.Select value={categoryId} onChange={event => setCategoryId(event.target.value)} aria-label="Default select example">
                    <option>Select a category</option>
            {
                
                categories.map(category=>(
                    <option key={category.id} value={category.id}>
                        {category.name}
                    </option>
                ))
                
            }
                </Boot.Form.Select>
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
export default AddProduct