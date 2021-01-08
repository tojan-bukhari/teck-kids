import React from 'react'
import "../DESCRIPTIONS/des.css"
import { Button, Card  } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
/**************************************************** */

export default function CssCard() {
 const history = useHistory();

    return (
  <div style={{ width: '300px', height:'200px',padding:'20px' , }}>
  <Card style={{ width: '300px' }}>
    <Card.Body>
    
    <Card.Title><h1 className="hh">CSS</h1></Card.Title>  <img src="https://2.bp.blogspot.com/-me_vlpqkQGw/VgJwY3wm_SI/AAAAAAAAAVI/cyg9I6tfXWs/s400/What%2Bis%2BCSS.jpg"  alt="css" ></img>
    <Card.Text> <span className="par">  
    Let's play with colors and make our pages more colorfull 😍
    </span>
    </Card.Text>
    
    <Button className="hh7"  onClick={()=>{history.push('/CSScourse')}} >Go To CSS</Button>
    </Card.Body>
  </Card>
  </div> 
  )
}
 