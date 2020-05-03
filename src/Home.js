import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Home.css'
import './LinkButton.css'

class Home extends Component {
    render() {
        return (
            <div>
                <p>
                    Welcome to the listening app
                </p>

                <Link
                    to="/upward-intervals"
                    className="link-button start-quiz-button"
                >
                    Upward Intervals
                </Link>
                <Link
                    to="/downward-intervals"
                    className="link-button start-quiz-button"
                >
                    Downward Intervals
                </Link>

            </div>
        )
    }
}

export default Home
