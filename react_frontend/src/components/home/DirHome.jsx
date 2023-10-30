import React, { useState, useEffect } from "react";
import * as Boot from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Navbar from "../Nav/Navbar";
import DirSide from "../SideBars/DirSide";
import AuthService from '../Products/AuthService';
import { Chart as ChartJS } from 'chart.js/auto'
import { Line, Bar, Pie } from 'react-chartjs-2';
const DirHome=()=>{
  const [products,setProducts]=useState([]);
  const [commandes,setCommandes]=useState([]);
  const [Totalcommandes,setTotalCommande]=useState([]);
  const [employee,setEmployee]=useState([]);
  const [data,setData]=useState([]);
  const [dat,setDat]=useState([]);
  console.log(employee);
    useEffect(() => {
        axios
          .get("http://localhost:8082/api/products", AuthService.getAuthHeader())
          .then(response => setProducts(response.data))
          .catch(error => console.error(error));
      }, []);
      useEffect(() => {
        axios
          .get("http://localhost:8082/employees", AuthService.getAuthHeader())
          .then(response => setEmployee(response.data.result))
          .catch(error => console.error(error));
      }, []);
      useEffect(() => {
        axios
          .get("http://localhost:8082/api/sum", AuthService.getAuthHeader())
          .then(response => setTotalCommande(response.data))
          .catch(error => console.error(error));
      }, []);
      useEffect(() => {
        axios
          .get("http://localhost:8082/api/commandes", AuthService.getAuthHeader())
          .then(response => setCommandes(response.data))
          .catch(error => console.error(error));
      }, []);
      useEffect(()=>{
        axios
        .get("http://127.0.0.1:8082/api/count",AuthService.getAuthHeader())
        .then(response =>setData(response.data))
        .catch(error => console.error(error));
    }, []);
    useEffect(()=>{
        axios
        .get("http://127.0.0.1:8082/api/countcomm",AuthService.getAuthHeader())
        .then(response =>setDat(response.data))
        .catch(error => console.error(error));
    }, []);
    let label=[];
        let dataa=[];
        let lab=[];
        let da=[];
        dat.map((element)=>(
            lab.push((element[0].product.name))
        ))
        dat.map((element)=>(
            da.push(element[1])
        ))
        data.map((element)=>(
            label.push(element[0].name)))
        data.map((element)=>(
            dataa.push(element[1])
        ))
    return(
        <>
        <Navbar/>
        <DirSide/>
        <div className="content-wrapper">
        <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          
        </div>
      </div>
    </div>
        <section className="content">
      <div className="container-fluid">
      <div className="row">
          <div className="col-lg-3 col-6">
            <div className="small-box bg-info">
              <div className="inner">
                <h3> {products.length}</h3>

                <p>Products</p>
              </div>
              <div className="icon">
                <i className="ion ion-bag"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="small-box bg-success">
              <div className="inner">
                <h3>{commandes.length}</h3>

                <p>Commandes</p>
              </div>
              <div className="icon">
                <i className="ion ion-stats-bars"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="small-box bg-warning">
              <div className="inner">
                <h3>{Totalcommandes.reduce((acc, commande) => acc + commande[1], 0)}</h3>

                <p>Total price</p>
              </div>
              <div className="icon">
                <i className="ion ion-person-add"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="small-box bg-danger">
              <div className="inner">
                <h3>{employee.length}</h3>
                <p>Employees</p> 

              </div>
              <div className="icon">
                <i className="ion ion-pie-graph"></i>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="row">
                <div className="col-7">
                <Bar data={{
                labels:label,
                datasets:[{
                    label:'Number of products',
                    data:dataa,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                      ],
                      borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                      ],
                      borderWidth: 1
                }]
            }}></Bar>
                </div>
                <div className="col-3">
                <Pie data={{
                labels:lab,
                datasets:[{
                    label:'Number of sold products',
                    data:da,
                    backgroundColor: [
                        'rgba(255, 99, 132)',
                        'rgba(54, 162, 235)',
                        'rgba(255, 206, 86)',
                        'rgba(75, 192, 192)',
                        'rgba(153, 102, 255)',
                        'rgba(255, 159, 64)'
                      ],
                      borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                      ],
                      borderWidth: 1
                }]
            }}></Pie>
                </div>
            </div>
        </section>
        </div>
        </>
    )
}
export default DirHome;