
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Question from './Question.jsx';

const HeaderLeft = styled.span`
    display: inline-block;
    vertical-align: middle;
    /* display: flex; */
    /* justify-content: left; */
    /* left: 0; */
    float: left;
    /* text-align: center; */
    /* align-items: center; */
    width: fit-content;
    height: 100%;
`

const HeaderRight= styled.div`
    display: inline-block;
    vertical-align: middle;
    /* justify-content: right; */
    /* right: 0; */
    float: right;
    /* text-align: center; */
    /* align-items: center; */
    width: fit-content;
    height: 100%;

`

const HeaderStyle = styled.div`
  display: block;
  /* flex-direction: row; */
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 98%;
  height: 30px;
  background-color: rgb(230, 230, 230);
  /* margin: 0 auto; */
  padding: 10px 10px 0 10px;
  /* padding-top: 10px; */

  font-weight: bold;
  z-index: 1;


`

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

// /* returns a random number between 0 and given 'num' */
// const random = (num) =>
//   Math.floor((Math.random() * num) + 1);

// const randomNumber = random(100)

  fetchQuestions() {
    axios.get('/questions/' + (Math.floor((Math.random()) * 100) + 1).toString())
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

      <div className = 'questionsParent'>
        <HeaderStyle>
          <HeaderLeft>
          {this.state.questions.length}
          –10 of 75 Questions
          </HeaderLeft>

          <HeaderRight>
            Sort by: Most helpful answers ▼ Menu
          </HeaderRight>

        </HeaderStyle>

        <hr/>
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