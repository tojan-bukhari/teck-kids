//useState is a Hook that allows you to have state variables in functional components.=> very intersting and easy to use <3 love it
import React , {useState }from 'react';
import axios from 'axios';
//import {link} from 'react-router-dom'
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
//  import validate from "./component/validateLogin"



// eslint-disable-next-line 
/****************************************************************/
const Signin = (validate)=>{
  const history = useHistory();
  //the values wich inserted by the user is stored at email and password using setEmail,setPasswword 
  const [ email        , setEmail    ]     = useState();
  const [ password     , setPassword ]     = useState();
  const [ errors     , setErrors ]     = useState({email:"",password:""});



 function validate(email,password) {
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
    setErrors(validate(email,password))
   
  

    try {
      const newUser = { email ,password } ;
      const loginRes = await axios.post("http://localhost:8000/api/login" , newUser)
      localStorage.setItem("theToken", loginRes.data.token);
      localStorage.setItem("userId", loginRes.data.user.id);
      localStorage.setItem("username", loginRes.data.user.name);
      localStorage.setItem("userage", loginRes.data.user.age);
      localStorage.setItem("userpass", loginRes.data.user.password);
      history.push('/')
      
       } catch (error) {
      // alert(error.response.data.msg)

     
      } 
      
    } 

  return(
  <div className="container p-5 py-3 px-md-5" size="6" style={{marginTop: 10 + 'em'}}>
  <form>    
       
 <div className="form-group text-center" >
 <label htmlFor="formGroupExampleInput">
        <InputGroup className="mb-3">
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
</label>   
</div>
   
       
    </form> 
 
 
  </div>
  
  
)};

export default Signin;

