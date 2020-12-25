//useState is a Hook that allows you to have state variables in functional components.=> very intersting and easy to use <3 love it
import React , {useState }from 'react';
import axios from 'axios';
//import {link} from 'react-router-dom'
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Home from './carusal.css';




//  import validate from "./component/validateLogin"



// eslint-disable-next-line 
/****************************************************************/
const Signin = (validate)=>{
  const history = useHistory();
  //the values wich inserted by the user is stored at email and password using setEmail,setPasswword 
  const [ email        , setEmail    ]     = useState();
  const [ password     , setPassword ]     = useState();
  const [ errors     , setErrors ]     = useState({email:"",password:""});


   
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
  
  //we need to send the data from frontend to backend , I will use axios for that ..
  const submit =async (e)=>{
    e.preventDefault();
    setErrors(validatation(email,password))
  

    try {
      const newUser = { email ,password } ;
      const loginRes = await axios.post("http://localhost:8000/api/login" , newUser)
      console.log(loginRes.data.token)
      localStorage.setItem("theToken", loginRes.data.token);
      history.push('/')
       } catch (error) {
      // alert(error.response.data.msg)

  
      }

   
    }

   

  return(
 <div  style={{backgroundColor:"	rgb(0, 77, 102) " ,width:"100%",height:"100vh"}} className="menu" >

  <div className="container p-5 py-3 px-md-5">

      <div  className="cssauth">  


      <form>        

  <div class="col-xs-9 hidden-sm col-md-9">
  

   <img className="imgauth"
   
    
           style={{width:35+"em",height:30+"em",marginLeft:-36.2+"em",marginTop: -3.2 + 'em',  float: "left"}}
           class="responsive"
            className="d-block w-100"
            className="size"
            src="https://cdn.dribbble.com/users/623359/screenshots/3061757/rocket_launch.gif"
            alt="First slide"
          />
          </div>
          
 <div className="form-group text-center"  >

   
   <span>

 <label htmlFor="formGroupExampleInput" style={{marginTop: -3 +"em",borderStyle:'solid',borderWidth:"1px" ,width:"500px" ,height:"470px",backgroundColor:" #ffffff"}}>
 <h1 style={{color:"red", marginLeft:"40rem" }}>login</h1>

      <div style={{marginTop:"10rem" ,width:"400px",marginLeft: 4 +"em",}}>  <InputGroup className="mb-3" >
     
        <InputGroup.Append>
       
        <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
        </InputGroup.Append>
        <FormControl
        name
         
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          type="text" className="form-control" placeholder="Enter Your email"
          onChange={(e)=>{setEmail(e.target.value)}} 
          required
        />
        </InputGroup> 
       <p>{errors.email &&<p>{errors.email}</p>}</p> 
  
    <div className="form-group">
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon2">Password</InputGroup.Text>
        <FormControl
         
          aria-label="Recipient's password"
          aria-describedby="basic-addon2"
          type="password" className="form-control"
          placeholder="Enter Your Password" 
           onChange={(e)=>{setPassword(e.target.value)}}
            required
         />
        </InputGroup> 

        <p>{errors.password &&<p>{errors.password}</p>}</p> 

    </div>
        <div>
           
            <Button as="input" className="btn btn-primary" type="submit" value="Submit"  onClick={submit}    />{' '}
        </div>
        </div>
</label>  
</span> 
</div>
   
       
    </form> 

      </div>
       
 
 
  </div>

  </div>
)};

export default Signin;

