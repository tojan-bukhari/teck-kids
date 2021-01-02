import React ,{ useState }from 'react'
import { Button, Modal } from 'react-bootstrap';
// import { useHistory } from "react-router-dom";


function CSSex4() {
    // const history = useHistory();

    const [ userAnswers , setUserAnswers ] =  useState();
    var correctAnswers = ['background-color: linen;','body']
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    var [ Val,setVal ] =  useState();
    const handleShow = ()=>{
        if(userAnswers[0] === correctAnswers[0] && userAnswers[1] === correctAnswers[1])
        {
          setVal(true);
          setShow(true);
          console.log('correct',Val,userAnswers)
        }
        else
        console.log("try Again")
    }
    return (
        <div>
          Set the background color for the page to "linen" and the background color for {`<h1>`} to "lightblue".
          <pre>
          {`
          <!DOCTYPE html>
          <html>
          <head>
          <style>
          body {`}
          </pre>
          <input type="text" id="q4" size="24" maxLength="24" placeholder='Fill the answer' onChange={(e)=>{setUserAnswers(e.target.value)}} />
        <br/>
            
            <pre>  
          {`}`}
          <input type="text" id="q5" size="4" maxLength="4" placeholder='Fill the answer' onChange={(e)=>{setUserAnswers(e.target.value)}} />
          {`{
            background-color: lightblue;
          }
          </style>
          </head>
          <body>
          
          <h1>This is a Heading</h1>
          <p>This is a paragraph.</p>
          <p>This is another paragraph.</p>
          
          </body>
          </html>
          
          `}
          </pre>
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
          <Button variant="primary" > Go to the Next exersise </Button>
        </Modal.Footer>
      </Modal>
      </div>
        </div>
    )
}

export default CSSex4
