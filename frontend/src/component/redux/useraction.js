import {SIGNUP_USER,LOGIN_USER,SET_CURRENT_USER,LOGOUT_USER} from './userType';
import setAuthenticationToken from "../setToken";
import jwt from "jsonwebtoken";
const axios = require('axios');

// SENDING TO DATABASE 

export const signupUser=(username,email,password,age)=>{

    return function(dispatch){
      
        var OPTIONS = {
            url: "http://localhost:5000/userapi/signup",
            method: "POST",
            data:{
                username:username,
                email: email,
                password:password,
                age:age
                },
            headers: {
              "content-type": "application/json"
            }
          }
         axios.post(OPTIONS)
        .then (res=>{
            const message=res.data.message;
            dispatch({
                type:SIGNUP_USER,
                payload:message
            })
        
        })
        // history.push('/login')
        .catch(err=>console.log(err));
          
      } 
}
///////////////////////////////////////////
export const loginUser=(email,password)=>{

    return function(dispatch){
      
   var OPTIONS = {
        url: "http://localhost:5000/userapi/login",
        method: "POST",
        data:{
            email:email,
            password:password,
            },
        headers: {
          "content-type": "application/json",
        },
      }
    
    axios(OPTIONS).then(res=>{
      const message=res.data.message;

      if(message==='User Found'){
        const token=res.data.token;
        const id = res.data.id
        localStorage.setItem("jwtToken",token);
        localStorage.setItem("userid",id);
        setAuthenticationToken(token);
       // console.log(jwt.decode(token));
         dispatch(setCurrentUser(jwt.decode(token)));
        
      dispatch({
        type:LOGIN_USER,
        payload:message,
        isLoggedIn:true,

    })
}else{
        dispatch({
          type:LOGIN_USER,
          payload:message,
          isLoggedIn:false,

      })
}
    }
       
        )
    .catch(err=>console.log(err));
   
}
}
