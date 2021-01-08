import React, {Component,useState} from 'react';
import Question from '../answers and questions/Questions';
import Answer from '../answers and questions/Answer';
import '../../component/answers and questions/QuizMain.css';
import '../../component/answers and questions/Answers.css';
import { Button, Modal} from 'react-bootstrap';
import { useHistory } from "react-router-dom";


export default class Quiz extends Component {

    // initiating the local state
    state = {
        quiestions: {
            1: 'How would you set a background image with CSS?',
            2: 'Which is the correct CSS syntax?',
            3: 'What is the proper format of an CSS comment?'
        },
        answers: {
            1: {
                1: 'background-image: src();',
                2: ' background-attachment: url();',
                3: 'background-url:'
            },
            2: {
                1: 'body{ color: black;}',
                2:  '{body: color= black;}',
                3: 'body=black;'
            },
            3: {
                1: ' <!-- -->',
                2: ' //',
                3: ' /* */'
            }
        },
        correctAnswers: {
            1: '1',
            2: '1',
            3: '3'
        },
        correctAnswer: 0,
        clickedAnswer: 0,
        step: 1,
        score: 0
    }

    // the method that checks the correct answer
    checkAnswer = answer => {
        const { correctAnswers, step, score } = this.state;
        if(answer === correctAnswers[step]){
            this.setState({
                score: score + 1,
                correctAnswer: correctAnswers[step],
                clickedAnswer: answer
            });
        }else{
            this.setState({
                correctAnswer: 0,
                clickedAnswer: answer
            });
        }
        localStorage.setItem("score", score)
    }

    // method to move to the next question
    nextStep = (step) => {
        this.setState({
            step: step + 1,
            correctAnswer: 0,
            clickedAnswer: 0
        });
    }
    handleClick() {
        window.location = "/ex2CSS";
      }

    render(){
        let { quiestions, answers, correctAnswer, clickedAnswer, step, score } = this.state;
        return(
            <div className="Content">
                {step <= Object.keys(quiestions).length ? 
                    (<>
                        <Question
                            question={quiestions[step]}
                        />
                        <Answer
                            answer={answers[step]}
                            step={step}
                            checkAnswer={this.checkAnswer}
                            correctAnswer={correctAnswer}
                            clickedAnswer={clickedAnswer}
                        />
                        <button
                        className="NextStep"
                        disabled={
                            clickedAnswer && Object.keys(quiestions).length >= step
                            ? false : true
                        }
                        onClick={() => this.nextStep(step)}>Next</button>
                    </>) : (
                        <div className="finalPage">
                                                        <h1 style={{marginLeft:"70px",color:"white",fontFamily: "Cursive"}}>You have completed the quiz!</h1>

                            <span style={{borderStyle: 'solid',width:'350px', }}>Your score is: {score} of {Object.keys(quiestions).length}</span>
                             <Example />

                        </div>
                    )
                }
            </div>
        );
    }
}


function Example() {
    const history = useHistory();

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return ( 
      <>
      {localStorage.getItem("score")=== '2'||localStorage.getItem("score")===  '1' ?<div> <Button variant="primary" onClick={handleShow}>
WOHOOOOOO        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>WOHOOOOOO</Modal.Title>
          </Modal.Header>
          <Modal.Body>GREATE JOB!</Modal.Body>
          <img src= "https://www.flaticon.com/svg/static/icons/svg/3158/3158981.svg" alt="css"/>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>{history.push('/ex2CSS')}}> Go to the Next exersise </Button>

          </Modal.Footer>
        </Modal></div>:<div> <Button variant="primary" onClick={handleShow}>
try again        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Hmmm</Modal.Title>
          </Modal.Header>
          <Modal.Body> try Again!</Modal.Body>
          <img src= "https://www.flaticon.com/svg/static/icons/svg/3159/3159020.svg" alt="css"/>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>window.location.reload(false)
}> try Again </Button>

          </Modal.Footer>
        </Modal></div> }  
       
      </>
    );
  }
  
