import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #232123;
`
const Title = styled.h1`
font-size: 60px;
text-align: center;
  color:gold;
`

const ProfilBox = styled.div`
  width: 500px;
  height: 500px;
  background-color: tomato;
  border-radius: 100px;
`


function App() {
  return (
     <Wrapper>
      <Title>FrontEnd Develop</Title>
      <ProfilBox />
      <Title>PSH</Title>
     </Wrapper>
  );
}

export default App;
