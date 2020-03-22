import React, { Component } from "react";
import Quiz  from './Quiz.js'
import Teoria from "teoria";

const POSSIBLE_INTERVALS = [
    Teoria.interval('m2'),
    Teoria.interval('M2'),
    Teoria.interval('m3'),
    Teoria.interval('M3'),
    Teoria.interval('P4'),
    Teoria.interval('d5'),
    Teoria.interval('P5'),
    Teoria.interval('m6'),
    Teoria.interval('M6'),
    Teoria.interval('m7'),
    Teoria.interval('M7'),
    // TODO: include octave

]

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

class QuizController extends Component {
    constructor() {
        super()

        this.state = {
            numExercises: 10,
            currentExercise: 0,
            interval: POSSIBLE_INTERVALS[getRandomInt(POSSIBLE_INTERVALS.length)],
            submittedAnswers: []
        }

        this.handleAnswerClick = this.handleAnswerClick.bind(this)
        this.handleContinueClick = this.handleContinueClick.bind(this)
    }

    handleAnswerClick(e) {
        this.setState({
            submittedAnswers: this.state.submittedAnswers.concat([e.currentTarget.value])
        })
    }

    handleContinueClick(e) {
        this.setState({
            submittedAnswers: [],
            interval: POSSIBLE_INTERVALS[getRandomInt(POSSIBLE_INTERVALS.length)],
            currentExercise: this.state.currentExercise + 1
        })
    }

    render() {
        return (
            <Quiz
                interval={this.state.interval}
                possibleAnswers={POSSIBLE_INTERVALS}
                submittedAnswers={this.state.submittedAnswers}
                onAnswerClick={this.handleAnswerClick}
                numExercises={this.state.numExercises}
                currentExercise={this.state.currentExercise}
                onContinueClick={this.handleContinueClick}
            />
        )
    }
}

export default QuizController