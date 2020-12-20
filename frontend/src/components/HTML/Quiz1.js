import React, {Component} from 'react';
import Question from '../answers and questions/Questions';
import Answer from '../answers and questions/Answer';
import '../answers and questions/QuizMain.css';
import '../answers and questions/Questions.css';
import '../answers and questions/Answers.css';


export default class Quiz extends Component {

    // initiating the local state
    state = {
        quiestions: {
            1: 'what is the difference in an opening tag and a closing tag?',
            2: 'What does HTML stand for?',
            3: ' How many tags are in a regular element?'
        },
        answers: {
            1: {
                1: 'Opening tag has a / in front',
                2: 'Closing tag has a / in front',
                3: 'There is no difference'
            },
            2: {
                1: 'Hyper Text Mile Language 😉',
                2: 'Header Text Markup Language',
                3: 'Hyper Text Markup Language'
            },
            3: {
                1: '1',
                2: '2',
                3: '3'
            }
        },
        correctAnswers: {
            1: '1',
            2: '2',
            3: '2'
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
                            <h1>You have completed the quiz!</h1>
                            <p>Your score is: {score} of {Object.keys(quiestions).length}</p>
                            <p>Thank you!</p>
                        </div>
                    )
                }
            </div>
        );
    }
}