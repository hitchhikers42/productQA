
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Question from './Question.jsx';



export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: {},
      questions: []
    }
  }

  componentDidMount() {
    this.fetchQuestions()
  }
  fetchQuestions() {
    axios.get('/questions')
      .then(({ data }) => {
        this.setState({
          question: data[0],
          questions: data
        })
      })

  }


/*
  Components

  Index --> App --> Question --> Answer


  {questions.map(q =>
    <Question
      question={q.question}
      answers={q.answers}
    />)
  }

  recieving in question an array for answers. inside Question component
  map over answers and pull username and answer

  {answers.map(({ username, answer }) =>
    <Answer
      username={username}
      answer={answer}
    />)}

*/


  render() {
    const questions = this.state.question.questions
    return (
      questions ?
      <div>
          {questions.map((q, i) =>
            <Question
              question={q.question}
              name={q.name}
              answers={q.answers}
              key={i}
            />)
          }

      </div>
      : <div></div>
    )
  }
}


/*
  1. /server/index.js --> return results only for specific 'productId'
  2. /client/components/App.jsx --> FetchQuestions --> Make request with 'productId'
  3. Re evaluate state based on new results. I think you just need questions,
     since each question houses it's own answers in an array.
  4. Refactor the way the data is passed through the components.
  5. Style it out!
*/