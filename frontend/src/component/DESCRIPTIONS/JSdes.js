import React from 'react'
import "./des.css"
import { Button, Card  } from 'react-bootstrap';
import { useHistory } from "react-router-dom";




export default function HTMLdes() {
 const history = useHistory();

  const routeChange = () =>{ 
    let path = `ex1js`; 
    history.push(path);
  }



    return (
<div style={{marginLeft : "500px"}}>
<Card style={{ width: '600px' }}>
  <Card.Body>
    
    <Card.Title><h1 className="hh">javaScript</h1></Card.Title>  <img  src="https://darkroom.clock.co.uk/600/14d1479eb61da2d834deff0e1e3dbb45:dd67ded05327f13fc0ff1339415016bb"  alt="js" className = "jsimg"></img>
    <Card.Text> <p className="par">  
    computers can’t understand English or any spoken language 🙄. Computer programs are written in a
programming language like JavaScript. You might not have
heard of JavaScript before, but you’ve certainly used it😁. The
JavaScript programming language is used to write programs
that run in web pages. JavaScript can control how a web page
looks 😍 or make the page respond when a viewer clicks a button
or moves the mouse.
    </p>
    </Card.Text>
    
    <Button className="hh7"  onClick={routeChange}>lessons</Button>
  </Card.Body>
</Card>




</div> 
    )
}
