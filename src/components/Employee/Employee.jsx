import React, { useEffect, useState } from 'react';
import axios from 'axios';

import * as Boot from 'react-bootstrap';
import NavBar from '../Nav/Navbar';
import AuthService from '../Products/AuthService';
import { useNavigate } from "react-router-dom";
import ManagerSide from "../SideBars/ManagerSide";
import Navbar from "../Nav/Navbar";

const Employee = (props) => {

  const API_BASE_URL = 'http://localhost:8082/employees';
  const navigate=useNavigate();
    
  const [employees, setEmployees] = useState([]);
  const [message, setMessage] = useState(null);
//   axios.delete(API_BASE_URL + '/' + userId, AuthService.getAuthHeader());
  const deleteEmployee = (userId) => {
    axios.delete(API_BASE_URL + '/' + userId, AuthService.getAuthHeader())
      .then((res) => {
        setMessage('Employee deleted successfully.');
        setEmployees((prevEmployees) =>
          prevEmployees.filter((employee) => employee.id !== userId)
        );
      });
  };
// 
//   const editEmployee = (id) => {
//     window.localStorage.setItem('employeeId', id);
//     props.history.push('/edit-employee');
//   };

//   const addEmployee = () => {
//     window.localStorage.removeItem('employeeId');
//     props.history.push('/add-employee');
//   };

  const reloadEmployeeList = () => {
    axios.get(API_BASE_URL, AuthService.getAuthHeader())
    .then((res) => {
      setEmployees(res.data.result);
    });
  };

  useEffect(() => {
    reloadEmployeeList();
  }, []);

  return (
    <>
    <Navbar/>
        <ManagerSide/>
        <div className="content-wrapper">
            <div className="content-header">
            <div class="container-fluid">
                <div ClassName="row mb-2">
                    <div ClassName="col-sm-6">
                    <h1 ClassName="m-0">List of Employee</h1>
                    </div>
                </div>
                </div>
            </div>
      <Boot.Container>
            <Boot.Card ClassName="">
             
                <Boot.Card.Header>
                         <Boot.Card.Title>Employees Details</Boot.Card.Title>
                        <Boot.Button className="btn btn-primary" onClick={()=>navigate('/AddEmployee')} style={{float:'right'}}>Add Employee</Boot.Button>
                </Boot.Card.Header>
            
            {/* <Typography variant="h4" style={style}>
            Employees Details
            </Typography> */}
            <Boot.Card.Body>
            <Boot.Table>
            <thead>
                <tr>
                    <th><Boot.Card.Title>Id</Boot.Card.Title></th>
                    <th><Boot.Card.Title>FirstName</Boot.Card.Title></th>
                    <th><Boot.Card.Title>LastName</Boot.Card.Title></th>
                    <th><Boot.Card.Title>UserName</Boot.Card.Title></th>
                    <th><Boot.Card.Title>Telephone</Boot.Card.Title></th>
                    <th><Boot.Card.Title>Salary</Boot.Card.Title></th>
                    <th><Boot.Card.Title>Role</Boot.Card.Title></th>
                    <th><Boot.Card.Title>Action</Boot.Card.Title></th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(row=>(
                        <tr key={row.id}>
                            <td>{row.id}</td>
                            <td>{row.firstName}</td>
                            <td>{row.lastName}</td>
                            <td>{row.username}</td>
                            <td>0{row.telephone}</td>
                            <td>{row.salary}</td>
                            <td>{row.role}</td>
                            <td><Boot.Button ClassName="btn btn-success" style={{marginRight:"25px"}} onClick={()=>navigate(`/UpdateEmployee/${row.id}`)} >Edit</Boot.Button> 
                            <Boot.Button className="btn btn-danger" onClick={()=>deleteEmployee(row.id)}>Delete</Boot.Button></td>
                        </tr>
                    ))
                }
            </tbody>
            </Boot.Table>
            </Boot.Card.Body>
    
        </Boot.Card>
      </Boot.Container>
      </div>
    </>
  );
};

const style = {
  display: 'flex',
  justifyContent: 'center',
};

export default Employee;