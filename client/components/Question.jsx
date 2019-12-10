import React from 'react';
import Answer from './Answer.jsx'
import styled from 'styled-components';

const Paragraph = styled.p`
  color: blue;
  font-size: 18px;
  box-shadow: 0 0 10px gray;
  width: fit-content;
  padding: 10px;
  border-radius: 4px;
  :hover {
    color: limegreen;
    cursor: pointer;
  }
  :active {
    background-color: dodgerblue;
    user-select: none;
  }
`
const Question = ({ question, name, answers }) => (
  <div>
    <h4>Question:</h4>
      <h4>Username: {name}</h4>
    <Paragraph>
      { question }
      </Paragraph>

    {answers.map(({ username, answer }, i) =>
      <Answer
        username={username}
        answer={answer}
        key={i}
      />)
    }
  </div>
)
export default Question;