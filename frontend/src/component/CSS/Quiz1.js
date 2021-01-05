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
            1: 'What does CSS stand for?',
            2: 'Where in an HTML document is the correct place to refer to an external style sheet?',
            3: ' Which HTML tag is used to define an internal style sheet?'
        },
        answers: {
            1: {
                1: 'Computer Style Sheets',
                2: 'Cascading Style Sheets',
                3: 'Control Style Sheets'
            },
            2: {
                1: 'At the top of the document',
                2: 'In the section',
                3: 'At the end of the document'
            },
            3: {
                1: 'Style',
                2: 'Css',
                3: 'Script'
            }
        },
        correctAnswers: {
            1: '1',
            2: '2',
            3: '1'
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
                         style={{marginLeft:"450px"}}
                        className="NextStep"
                        disabled={
                            clickedAnswer && Object.keys(quiestions).length >= step
                            ? false : true
                        }
                        onClick={() => this.nextStep(step)}>Next</button>
                    </>) : (

                        <div className="finalPage" >
                            <div style={{marginLeft:"-100px"}}>
                            <h1 style={{marginLeft:"70px",color:"white",fontFamily: "Cursive"}} >You have completed the quiz!</h1>
                            <span  style={{ fontFamily: "Cursive"	}}>Your score is: {score} of {Object.keys(quiestions).length}</span>
                            <span style={{ fontFamily: "Cursive"	}}>Thank you!</span>
                            <button  className="Ne" onClick={this.handleClick}  style={{background:""}} >next ex</button>


                        </div></div>
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
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>{history.push('/CSS/ex3')}}> Go to the Next exersise </Button>

          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
