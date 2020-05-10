import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tone from 'tone';
import Teoria from 'teoria';

import AnswerButtons, { POSSIBLE_INTERVALS } from './AnswerButtons.js';
import PlayButton from './PlayButton.js';
import InstructionsText from './InstructionsText.js'

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

export function generateRandomSimultaneousInterval() {
    return POSSIBLE_INTERVALS[getRandomInt(POSSIBLE_INTERVALS.length)]
}

class SimultaneousIntervalExercise extends Component {
    constructor() {
        super()
        this.playInterval = this.playInterval.bind(this)
    }

    playInterval() {
        const interval = Teoria.interval(this.props.answer).direction('down');

        const synth = new Tone.PolySynth(2, Tone.Synth).toMaster()
        const bottomNoteName = 'C5'
        const topNote = Teoria.interval(
            Teoria.note(bottomNoteName), interval,
        )
        const topNoteName = topNote.name() + topNote.accidental() + topNote.octave()

        synth.triggerAttackRelease([bottomNoteName, topNoteName], '2n')
    }

    render() {
        const { answer, submittedAnswers, onAnswerClick } = this.props;

        return (
            <div>
                <PlayButton
                    onClick={this.playInterval}
                />
                <InstructionsText>Identify the interval</InstructionsText>
                <AnswerButtons
                    onAnswerClick={onAnswerClick}
                    correctAnswer={answer}
                    submittedAnswers={submittedAnswers}
                />
            </div>
        )
    }
}


SimultaneousIntervalExercise.propTypes = {
    answer: PropTypes.string,
    submittedAnswers: PropTypes.arrayOf(PropTypes.string), // string ids  of Teoria intervals
    onAnswerClick: PropTypes.func,
}

export default SimultaneousIntervalExercise