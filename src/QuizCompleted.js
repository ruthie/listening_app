import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Button from './Button.js'
import './QuizCompleted.css'

class QuizCompleted extends Component {
    render() {
        const message = `You got ${this.props.numFirstTry} out of ${this.props.numExercises} on the first try!`;
        return (
            <div className="content max-width">
                <p>
                    {message}
                </p>
                <Button
                    className="again-button"
                    onClick={this.props.onAgainClick}
                >
                    Try again
                </Button>

                <Link
                    to="/"
                    className="link-button home-button"
                >
                    Home
                </Link>
            </div>
        )
    }
}

QuizCompleted.propTypes = {
    onAgainClick: PropTypes.func,
    numFirstTry: PropTypes.number,
    numExercises: PropTypes.number,
}

export default QuizCompleted
