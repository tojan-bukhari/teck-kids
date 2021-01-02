// //useState is a Hook that allows you to have state variables in functional components.=> very intersting and easy to use <3 love it
//we have 3 concept in redux 
//1-Action (2-reducer 3-state) =>store
//2-Action js object  to connect with reducer to tell it to change data it shuld contain proparty (type)
//3-reducer function return data
// state data
//steps.....
//- create store it shuld contain one reducer at least 
//2- create reducer function that return some data(state) it contain twoo parameter 1- state 2-action
//3- Get state the data return from reducer
//4- Action js object that tell reducer how to change data 
// 5- to connect the avtion with reducer shuld use ((((dispacth))))
//6- rreact-redux to connect between this file and redux
//7-mapStateto props to pass  to store state
//8-import{connect}...... to connect between redux and dispatch
//provider to send store ...to connect redux with app
//............................

import React from 'react';
import { useState } from "react";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginRes } from './Action/singin';
import './singin.css'
 import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


function Signin(validatation) {
  //   //the values wich inserted by the user is stored at email and password using setUser,setPasswword 

    const [inputs, setInputs] = useState({
        email: '',
        password: ''
       

    });
    const [ errors     , setErrors ]     = useState({email:"",password:""});

    const [submitted] = useState(false);
    const { email, password } = inputs;
    // we use dispatch to connect between reducer and action
    const dispatch = useDispatch();
    //to catch each changes from input filed
    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
        setErrors(validatation(email,password))

    }

       //we need to send the data from frontend to backend , I will use axios for that ..

    function handleSubmit(e) {
        e.preventDefault();
       
            dispatch(loginRes(inputs))

    }
   
   
  function validatation(email,password) {
  let errors = {};
    if (!email) {
    errors.email = "Email address is required";

  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = "Email address is invalid";
 }
 if (!password) {
   errors.password = "Password is required";
 } else if (password.length < 10) {
   errors.password = "Password needs to be more than 10 characters";
 }
 return errors;
 }
    return (

        <div className="col-lg-8 offset-lg-2">
        
           

      <div style={{marginTop:"10rem" ,width:"400px",marginLeft: 4 +"em",}}> 
     
            <form name="form" onSubmit={handleSubmit}>
              <div className ="email">
                <div className="form-group">
                    <label>email</label>
                    <input type="text" name="email" value={email} onChange={handleChange} className={'form-control' + (submitted && !email ? ' is-invalid' : '')} />
                    {submitted && !email &&
                        <div className="invalid-feedback">email is required</div>
                    }
                </div>
                <div style={{ color: "red" }}>{inputs.usernameError}</div>
                <br></br>
                <div className="form-group"  >
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handleChange} className={'form-control' + (submitted && !password ? ' is-invalid' : '')} />
                    {submitted && !password &&
                        <div className="invalid-feedback">Password is required</div>
                    }
                </div>
                </div>
                <div style={{ color: "red" }}>{inputs.passwordError}</div>
                <br></br>
                <div className="form-group"  >
                  <div  className="btn">
                    <button  className="btn_login"  className="btn btn-primary" id="btn2">
                        Login
                    </button></div>
                 
                </div>
                
            </form>
          </div>
          </div>

    )
}
export default Signin;




