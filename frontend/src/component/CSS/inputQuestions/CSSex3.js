import React , { useState }from 'react'
import { Button, Modal } from 'react-bootstrap';
import { useHistory } from "react-router-dom";


function CSSex3() {
    const history = useHistory();

    const [ userAnswers , setUserAnswers ] =  useState();
    var correctAnswers = ['margin-left:"20px"']
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
  //  const handleShow = () => setShow(true);
    var [ Val,setVal ] =  useState();

    const handleShow = ()=>{
        if(userAnswers === correctAnswers[0])
        {
          setVal(true);
          setShow(true);
          console.log('correct',Val)
        }
        else
        console.log("try Again")
    }
    
    return (

        <div>
            <span>
                Set the left margin of the apples to 20px which have the class name apple 
                <div style={{borderStyle: 'solid',width:'500px'}}>
            <ul style={{ marginLeft: Val ? '100px' : '10px',width:'500px'}}>
        <li>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdw1XqsHo9XAMdITImwsanihWa4KJkUfRXUg&usqp=CAU' alt='apple' style={{width:'100px', height:'100px'}}  />
        </li>
        <li>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdw1XqsHo9XAMdITImwsanihWa4KJkUfRXUg&usqp=CAU' alt='apple' style={{width:'100px', height:'100px'}}  />

        </li>
        <li>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdw1XqsHo9XAMdITImwsanihWa4KJkUfRXUg&usqp=CAU' alt='apple' style={{width:'100px', height:'100px'}}  />

        </li>
    </ul>
    </div>
                <pre>
                {`
                <!DOCTYPE html>
                <html>
                <head>
                <style>
                .apple {
                  background-color: lightblue;`}
                  <br/>
                <input type="text" id="q3" size="18" maxLength="18" placeholder='Fill the answer' onChange={(e)=>{setUserAnswers(e.target.value)}} />
                  {`
                }
                </style>
                </head>
                <body>
                
                <h1>This is a Heading</h1>
                <p>This is a paragraph.</p>
                <div class='apple'>
                    <img src='apple.png'>
                </div>
                </body>
                </html>
                
                `}
                </pre>
            </span>
        
    <div>
            <Button as="input" className="btn btn-primary" type="submit" value="Submit"  onClick={handleShow} />{' '}
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Woohoo!!!!</Modal.Title>
        </Modal.Header>
        <img src= "https://www.flaticon.com/svg/static/icons/svg/3159/3159066.svg" alt='apple'/>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{history.push('/CSS/ex4')}}> Go to the Next exersise </Button>
        </Modal.Footer>
      </Modal>
      </div>
       
        </div>
    )
}

export default CSSex3
