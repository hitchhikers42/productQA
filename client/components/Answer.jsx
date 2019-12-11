import React from 'react';
import styled from 'styled-components';
const AnswerStyle =styled.div`
  margin: 10px;
  margin-left: 30px;
  padding: 10px;
`
const UserStyle = styled.div`
  margin-top:5px;
  color: blue;
`
const ResponseStyle = styled.div`
  padding: 15px;
  color: navy
  font-size: 18px;
`

const Answer = ({ username, answer }) => (
  <AnswerStyle>
    Answer:

    <UserStyle>username: { username }</UserStyle>
    <ResponseStyle>{answer}</ResponseStyle>
  </AnswerStyle>
)
export default Answer;