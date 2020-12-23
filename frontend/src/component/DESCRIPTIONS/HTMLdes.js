import React from 'react'
import "./des.css"
import { Button, Card  } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import axios from 'axios';

/************************************************** */
export default function HTMLdes() {
 const history = useHistory();
  var msg;
  const routeChange = async () =>{ 
    //I need to check if the user logged in
    var userId = localStorage.getItem('userId');
        console.log(userId)
  if( userId === null ){
    msg = "Please log in to regester "
    history.push('/login')
   }else {
     
    try {
      const retrevd = await axios.get("http://localhost:8000/course/user/"+userId)  
      if( retrevd.data.htmlCourse === "Registerd" )
      {
        console.log("you are already regestered")
        history.push('/HTMLcourse')
      }
      var newCourse = {"htmlCourse":"Registerd"}
      await axios.put("http://localhost:8000/course/addCourse/"+userId, newCourse);
     } catch (error) {
     alert(error.response.data.msg)
     }   
       }
  }


    return (
<div style={{marginLeft : "500px"}}>
<Card style={{ width: '600px' }}>
  <Card.Body>
    
    <Card.Title><h1 className="hh">HTML</h1></Card.Title>  <img src="https://2.bp.blogspot.com/-eO5lbx98AXU/VgJteZXqfQI/AAAAAAAAAU8/jVrj2vfkWZQ/s1600/what-is-html.jpg"  alt="html"></img>
    <Card.Text> <p className="par">  
    Say Hello to HTML Elements 😁
    Welcome to Teach-kids's HTML coding challenges😍. These will walk you through web development step-by-step.
    you'll beat all the challenges 💪 , let's GOOOO let's be a great bulders
    </p>
    </Card.Text>
    <p>{msg}</p>
    <Button className="hh7"  onClick={routeChange}>Register Now</Button>
  </Card.Body>
</Card>




</div> 
    )
}
