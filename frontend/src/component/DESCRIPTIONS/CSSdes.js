import React from 'react'
import "./des.css"
import { Button, Card  } from 'react-bootstrap';
import { useHistory } from "react-router-dom";




export default function CSSdes() {
 const history = useHistory();

  const routeChange = () =>{ 
    let path = `ex1CSS`; 
    history.push(path);
  }



    return (
<div style={{marginLeft : "500px"}}>
<Card style={{ width: '600px' }}>
  <Card.Body>
    
    <Card.Title><h1 className="hh">CSS</h1></Card.Title>  <img src="https://2.bp.blogspot.com/-me_vlpqkQGw/VgJwY3wm_SI/AAAAAAAAAVI/cyg9I6tfXWs/s400/What%2Bis%2BCSS.jpg"  alt="css" ></img>
    <Card.Text> <p className="par">  
    Let's play with colors and make our pages more colorfull 😍
    </p>
    </Card.Text>
    
    <Button className="hh7"  onClick={routeChange} >lessons</Button>
  </Card.Body>
</Card>

</div> 
    )
}
