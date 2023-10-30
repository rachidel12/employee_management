import React, { useState, useEffect } from "react";
import * as Boot from 'react-bootstrap';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import AuthService from './AuthService';
import ManagerSide from "../SideBars/ManagerSide";
import Navbar from "../Nav/Navbar";
const UpdateProduct=()=>{
    const navigate=useNavigate();
    const {productId}=useParams()
    const [product,setProduct]=useState({})
    const [name,setName]=useState('');
    const [description,setDescription]=useState('');
    const [image,setImage]=useState("");
    const [quantity,setQuantity]=useState();
    const [price,setPrice]=useState();
    const [category,setCategory]=useState();
    const [categoryName,setCategoryName]=useState('');
    // var category;
    // const [categoryId,setCategoryId]=useState();
    const [categories,setCategories]=useState([]);
    useEffect(()=>{
        axios
          .get("http://localhost:8082/api/categories",AuthService.getAuthHeader())
          .then(response => setCategories(response.data))
          .catch(error => console.error(error));
      }, []);
    useEffect(()=>{
        axios
          .get(`http://localhost:8082/api/product/${productId}`,AuthService.getAuthHeader())
          .then(response => setName(response.data.name))
          .catch(error => console.error(error));
    },[]);
    useEffect(()=>{
        axios
          .get(`http://localhost:8082/api/product/${productId}`,AuthService.getAuthHeader())
          .then(response => setDescription(response.data.description))
          .catch(error => console.error(error));
    },[]);
    useEffect(()=>{
        axios
          .get(`http://localhost:8082/api/product/${productId}`,AuthService.getAuthHeader())
          .then(response => setImage(response.data.image))
          .catch(error => console.error(error));
    },[]);
    useEffect(()=>{
        axios
          .get(`http://localhost:8082/api/product/${productId}`,AuthService.getAuthHeader())
          .then(response => setQuantity(response.data.quantity))
          .catch(error => console.error(error));
    },[]);
    useEffect(()=>{
        axios
          .get(`http://localhost:8082/api/product/${productId}`,AuthService.getAuthHeader())
          .then(response => setPrice(response.data.price))
          .catch(error => console.error(error));
    },[]);
    useEffect(()=>{
        axios
          .get(`http://localhost:8082/api/product/${productId}`,AuthService.getAuthHeader())
          .then(response => setCategory(response.data.category.id))
          .catch(error => console.error(error));
    },[]);
    useEffect(()=>{
        axios
          .get(`http://localhost:8082/api/category/${category}`,AuthService.getAuthHeader())
          .then(response => setCategoryName(response.data.name))
          .catch(error => console.error(error));
    },[]);
    console.log(category,name,description,categoryName)
    const handlechange = event=>{
        if(event.target.name=="name"){
            setName(event.target.value)
        }
        if(event.target.name=="description"){
            setDescription(event.target.value)
        }
        if(event.target.name=="image"){
            setImage(event.target.value)
        }
        if(event.target.name=="price"){
            setPrice(event.target.value)
        }
        if(event.target.name=="quantity"){
            setQuantity(event.target.value)
        }
        if(event.target.name=="category"){
            setCategory(event.target.value)
        }
    }
    const handleSubmit = event => {
        event.preventDefault();
        axios
          .put("http://localhost:8082/api/product", {
            id:productId,
            name: name,
            description: description,
            image:image,
            price: price,
            quantity: quantity,
            category:category
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
                    <h1 class="m-0">Add category</h1>
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
                <Boot.Form.Control defaultValue={description} name="description" onChange={handlechange} type="text" placeholder="Description" />
            </Boot.Form.Group>
            <Boot.Form.Group className="mb-3" controlId="formBasicPassword">
                <Boot.Form.Label>Image</Boot.Form.Label>
                <Boot.Form.Control defaultValue={image} name="image" onChange={handlechange} type="text" placeholder="Description" />
            </Boot.Form.Group>
            <Boot.Form.Group className="mb-3" controlId="formBasicPassword">
                <Boot.Form.Label>Quantity</Boot.Form.Label>
                <Boot.Form.Control defaultValue={quantity} name="quantity" onChange={handlechange} type="number" placeholder="Quantity" />
            </Boot.Form.Group>
            <Boot.Form.Group className="mb-3" controlId="formBasicPassword">
                <Boot.Form.Label>Price</Boot.Form.Label>
                <Boot.Form.Control defaultValue={price} name="price" onChange={handlechange} type="number" placeholder="Price" />
            </Boot.Form.Group>
            <Boot.Form.Group className="mb-3" controlId="formBasicPassword">
                <Boot.Form.Label>Category</Boot.Form.Label>
                <Boot.Form.Select defaultValue={category} name="category" onChange={handlechange} aria-label="Default select example">
                    {/* <option value={category}>{categoryName}</option> */}
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
export default UpdateProduct