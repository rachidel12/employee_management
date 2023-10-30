
import React from 'react';
import * as Boot from 'react-bootstrap';
import AuthService from './AuthService';
import {useNavigate} from 'react-router-dom'
import { useEffect } from "react";

import { useState } from 'react';

function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate=useNavigate();
    useEffect(() => {
        localStorage.clear();
        
    }, );
    const login = (e) => {
    e.preventDefault();
    const credentials = { username, password };
    AuthService.login(credentials).then(res => {
        if (res.data.status === 200) {
        localStorage.setItem("userInfo", JSON.stringify(res.data.result));
        if (res.data.result.role === "Directeur") {
            navigate('/DirHome');
        } else if (res.data.result.role === "Manager") {
            navigate('/ManHome');
         } else if (res.data.result.role === "Employee") {
                navigate('/Clients');
        } else {
            navigate('/Clients');
        }

        } else {
        setMessage(res.data.message);
        }
    });
    };

    const onChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') {
        setUsername(value);
    } else if (name === 'password') {
        setPassword(value);
    }
    };

    return (
        <div class="login-page">
<div class="login-box" >
<div class="card card-outline card-dark">
    <div class="card-header text-center">
    <Boot.Image src={require("../SideBars/TechAK-removebg-preview.png")} alt="" style={{width:"175px"}}/>
	  </div>
	<div class="card-body">
    <Boot.Container style={{width:'100%',marginTop:'2%'}}>
        <Boot.Form>
        <Boot.Form.Group className="mb-3" controlId="formBasicEmail">
            <Boot.Form.Label>Username</Boot.Form.Label>
            <Boot.Form.Control type="text" label="USERNAME" fullWidth margin="normal" name="username" value={username} onChange={onChange} />
        </Boot.Form.Group>
        <Boot.Form.Group className="mb-3" controlId="formBasicEmail">
            <Boot.Form.Label>Password</Boot.Form.Label>
            <Boot.Form.Control  type="password" label="PASSWORD" fullWidth margin="normal" name="password" value={password} onChange={onChange} />
        </Boot.Form.Group>
        <div className="text-center">
            <Boot.Button variant="primary" type="submit" onClick={login}>
                Submit
            </Boot.Button>
        </div>
        </Boot.Form >
        </Boot.Container>
    </div>
    </div>
    </div>
    </div>

    );
}

export default Login;