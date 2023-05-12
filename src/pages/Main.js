import React from "react";
import styled from "styled-components";
import Card from "../components/Card";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #232123;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* 중앙 정렬 */
`
const Title = styled.h1`
font-size: 60px;
text-align: center;
color:gold;
margin: 30px;
`
const IntroText = styled.div`
    position: absolute;
    left:20%;
    bottom:20%;
    article{
      color:white;
      font-size:20px ;
    }
`

function Main() {
  return (
     <Wrapper>
      <Title>FrontEnd Develop</Title>
      <Card/>
      <Title>PSH</Title>
        <IntroText>
            <article>I like to craft solid and scalable frontend<br/> products with great user experiences.</article>
        </IntroText>
     </Wrapper>
  );
}

export default Main;
