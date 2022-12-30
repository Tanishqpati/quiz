import React, { Component } from 'react'
import './resultComponent.css'
export default class ResultComponent extends Component {
  render() {
    return (
      <div className='body'>
        <h1>Result</h1>
        <div className="result-card">
            <h3>You need more practice!</h3>
            <h2>Your score is 20%</h2>

            <div className="result-details">
                <div className="details-text">
                    <p>Total number of questions</p>
                    <p>15</p>
                </div>

                <div className="details-text">
                    <p>Number of attempted questions</p>
                    <p>9</p>
                </div>

                <div className="details-text">
                    <p>Number of correct answers</p>
                    <p>3</p>
                </div>

                <div className="details-text">
                    <p>Number of wrong answers</p>
                    <p>6</p>
                </div>
            </div>
        </div>
        <div className="nav-btn">
                <button id='play-btn'>Play Again</button>
                <button id='home-btn'>Back to home</button>
                
            </div>
      </div>
    )
  }
}
