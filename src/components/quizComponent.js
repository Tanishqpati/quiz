import React, { Component } from 'react'
import './quizComponent.css'

export default class QuizComponent extends Component {
  render() {
    return (
      <div className='body'>
        <div className="quiz-card">
            <h1>Question</h1>

            <div id='quesNo-container'>
            <p>1 of 15</p>
            </div>

            <p>Which is the only mammal that can jump?</p>

            <div className='option-btn-container'>
                <div className='option-btn'>Dog</div>
                <div className='option-btn'>Elephant</div>
                <div className='option-btn'>Goat</div>
                <div className='option-btn'>Lion</div>
            </div>

            <div className="nav-btn">
                <button id='prev-btn'>Previous</button>
                <button id='next-btn'>Next</button>
                <button id='quit-btn'>Quit</button>
            </div>

        </div>

      </div>
    )
  }
}
