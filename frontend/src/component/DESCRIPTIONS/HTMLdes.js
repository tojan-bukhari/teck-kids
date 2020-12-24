import React from 'react'
import "./des.css"
import { Button, Card  } from 'react-bootstrap';
import { useHistory } from "react-router-dom";




export default function HTMLdes() {
 const history = useHistory();

  const routeChange = () =>{ 
    let path = `ex1HTML`; 
    history.push(path);
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
    
    <Button className="hh7"  onClick={routeChange}>lessons</Button>
  </Card.Body>
</Card>




</div> 
    )
}
