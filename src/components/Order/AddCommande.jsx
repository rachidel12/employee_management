import React, { useState , useEffect } from "react";
import * as Boot from 'react-bootstrap';
import axios from 'axios';
import { useNavigate , useParams } from "react-router-dom";
import AuthService from '../Products/AuthService';
import EmpSide from "../SideBars/EmpSide";
import Navbar from "../Nav/Navbar";
const AddCommande=()=>{
    const navigate=useNavigate();
    const {orderId}=useParams();
    const [quantity,setQuantity]=useState("");
    // const [category_id,setCategoryId]=useState();
    // const [categories,setCategories]=useState([]);
    const [productId,setProductId]=useState();
    const [products,setProducts]=useState([]);
    // console.log(category_id)
    console.log(products)
    // useEffect(()=>{
    //     axios
    //       .get("http://localhost:8082/api/categories")
    //       .then(response => setCategories(response.data))
    //       .catch(error => console.error(error));
          
    //   }, []);
    //   const handleChange = (event) => {
    //     setSelectedCategoryId(event.target.value);
    //   };
    //   useEffect(()=>{
    //     axios
    //       .get("http://localhost:8082/api/producte/" + category_id)
    //       .then(response => setProducts(response.data))
    //       .catch(error => console.error(error));
    //   }, []);
    // async function getProducts(){
    //             await axios
    //           .get("http://localhost:8080/api/producte/"+category_id)
    //           .then(response => setProducts(response.data))
    //           .catch(error => console.error(error));
    //     }
      useEffect(()=>{
        axios
          .get("http://localhost:8082/api/products",AuthService.getAuthHeader())
          .then(response => setProducts(response.data))
          .catch(error => console.error(error));
      }, []);
    // const DateTime = () => {

    //     var [date,setDate] = useState(new Date());
        
    //     useEffect(() => {
    //         var timer = setInterval(()=>setDate(new Date()), 1000 )
    //         return function cleanup() {
    //             clearInterval(timer)
    //         }
        
    //     });
    // } 
    const handleNext = event => {
        event.preventDefault();
        axios
          .post("http://localhost:8082/api/commande", {
            quantity:quantity,
            product:productId,
            order:orderId
          },AuthService.getAuthHeader())
          .then(response => console.log(response))
          .catch(error => console.error(error));
          
          window.location.reload();
      };
      const handleTermine = event => {
        event.preventDefault();
        axios
          .post("http://localhost:8082/api/commande", {
            quantity:quantity,
            product:productId,
            order:orderId
          },AuthService.getAuthHeader())
          .then(response => console.log(response))
          .catch(error => console.error(error));
        navigate('/Orders');
        window.location.reload();
          };
    return (
        <>
        <Navbar/>
        <EmpSide/>
        <div className="content-wrapper">
            <div className="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                    <h1 class="m-0">Add Commande</h1>
                    </div>
                </div>
                </div>
            </div>
        <Boot.Container style={{width:'50%',marginTop:'2%'}}>
            <Boot.Form onSubmit={handleNext } >
             {/* <Boot.Form.Group className="mb-3" controlId="formBasicPassword">
                <Boot.Form.Label>Category</Boot.Form.Label>
                <Boot.Form.Select value={category_id} onChange={event => setCategoryId(event.target.value)} aria-label="Default select example">
                    <option>Select a category</option>
            {
                categories.map(category=>(
                    <option key={category.id} value={category.id}>
                        {category.name}
                    </option>
                ))  
            }
                </Boot.Form.Select>
            </Boot.Form.Group> */}
            <Boot.Form.Group className="mb-3" controlId="formBasicPassword">
                <Boot.Form.Label>Product</Boot.Form.Label>
                <Boot.Form.Select value={productId} onChange={event => setProductId(event.target.value)} aria-label="Default select example">
                    <option>Select a product</option>
            {  
                products.map(product=>(
                    <option key={product.id} value={product.id}>
                        {product.name}
                    </option>
                ))  
            }
                </Boot.Form.Select>
            </Boot.Form.Group>
            <Boot.Form.Group className="mb-3" controlId="formBasicPassword">
                <Boot.Form.Label></Boot.Form.Label>
                <Boot.Form.Control value={quantity} onChange={event => setQuantity(event.target.value)} type="number" placeholder="Quantity" />
            </Boot.Form.Group>
            <div className="text-center">
                <Boot.Button variant="primary" type="submit">
                    Next
                </Boot.Button><br/>
                </div>
                <div className="text-center h2">
                <Boot.Button variant="primary" type="submit"  onClick={()=>navigate("/Orders")}>
                    Termine
                </Boot.Button>
            </div>
            
            </Boot.Form>
        </Boot.Container>
        </div>
    </>
    )
}
export default AddCommande