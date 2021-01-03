//useState is a Hook that allows you to have state variables in functional components.=> very intersting and easy to use <3 love it
import React , {useState}from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { Select } from 'antd';
import { Link } from 'react-router-dom';

/****************************************************/

//use the arrow function to bind values 
const Create = ()=>{
    const history = useHistory();
    
//useState() better than useing the set method , it's easer, read about the react hooks(useState) https://youtu.be/InKlyPPSpXA
const [ userName  , setName ]       = useState();
const [ age       , setage ]        = useState();
const [ email     , setEmail ]      = useState();
const [ password  , setPassword ]   = useState();
const [ role      ,  setRole]       = useState();
const [ errors    , setErrors ]     = useState({email:"",password:""});

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
  setRole(value)
}

function validation(email,password) {
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
//we need to send the data from frontend to backend , I will use axios for that ..
const submit =async (e)=>{
    
    e.preventDefault();
    setErrors(validation(email,password));

 try {
  
  const newUser = { userName, age, email  ,password ,role } ;
  await axios.post("http://localhost:8000/api/register" , newUser);

  history.push('/login')
 } catch (error) {
     
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
            <label className="text-muted"> age : </label>
            <input id="reg-age" type="age" className="form-control" placeholder="Enter Your age" required onChange={(e)=>{setage(e.target.value)}}/>
        </div>
        <div className="form-group">
            <label className="text-muted"> Email : </label>
            <input id="reg-email" type="email" className="form-control" placeholder="Enter Your email" required onChange={(e)=>{setEmail(e.target.value)}}/>
            <span>{errors.email &&<span>{errors.email}</span>}</span> 

        </div>
        <div className="form-group">
            <label className="text-muted"> Password : </label>
            <input id="reg-pass" type="password" className="form-control" placeholder="Enter Your Password" required onChange={(e)=>{setPassword(e.target.value)}}/>
            <span>{errors.password &&<span>{errors.password}</span>}</span> 

        </div>
        <div>
          <label className="text-muted"> choose ur Role : </label>
          <Select defaultValue="student"  style={{ width: 200 }} onChange={handleChange}>
           <Option value="teacher">Teacher</Option>
           <Option value="student">Student</Option>
          </Select>
        </div>
        <div>
            <button onClick={submit} className="btn btn-primary"> Submit </button> <br/><br/>
            <span>alredy have account?<Link to='/login' >Login</Link></span>
            
        </div>
    </form>
  </div>
)};

export default Create;