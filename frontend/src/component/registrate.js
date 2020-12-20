//useState is a Hook that allows you to have state variables in functional components.=> very intersting and easy to use <3 love it
import React , {useState}from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";

/****************************************************/

//use the arrow function to bind values 
const Create = ()=>{
    const history = useHistory();
    
//useState() better than useing the set method , it's easer, read about the react hooks(useState) https://youtu.be/InKlyPPSpXA
const [ userName  , setName ]         = useState();
const [ age       , setage ]          = useState();
const [ email     , setEmail ]        = useState();
const [ password  , setPassword ]     = useState();


//we need to send the data from frontend to backend , I will use axios for that ..
const submit =async (e)=>{
    
    e.preventDefault();
 try {
      const newUser = { userName,age,email  ,password  } ;
   await axios.post("http://localhost:8000/api/register" , newUser);
   history.push('/register')
 } catch (error) {
     alert(error.response.data.msg)
     
 }  

  }
 
   return ( 
  <div className="container p-5">
    
    <form>
        <div className="form-group">
            <label className="text-muted">userName: </label>
            <input id="reg-name" type="text" className="form-control" placeholder="Enter Your name" required onChange={(e)=>{setName(e.target.value)}} />
        </div>
      
        <div className="form-group">
            <label className="text-muted"> age </label>
            <input id="reg-age" type="age" className="form-control" placeholder="Enter Your age" required onChange={(e)=>{setage(e.target.value)}}/>
        </div>
        <div className="form-group">
            <label className="text-muted"> Email </label>
            <input id="reg-email" type="email" className="form-control" placeholder="Enter Your email" required onChange={(e)=>{setEmail(e.target.value)}}/>
        </div>
        <div className="form-group">
            <label className="text-muted"> Password </label>
            <input id="reg-pass" type="text" className="form-control" placeholder="Enter Your Password" required onChange={(e)=>{setPassword(e.target.value)}}/>
        </div>
        
        <div>
            <button onClick={submit} className="btn btn-primary"> Submit </button>
            
        </div>
    </form>
  </div>
)};

export default Create;