import React from "react";
import styled from "styled-components";
import ProjectGallery from "../components/ProjectGallery";

const Wrapper = styled.div`
  width: 100%;
  height: 80vh;
  background-color: tomato;
  display: flex;
`
const Title = styled.h1`
font-size: 60px;
text-align: center;
color:gold;
margin: 30px;
`


function Project() {
  return (
     <Wrapper>
      <Title>Project</Title>
      <ProjectGallery />
     </Wrapper>
  );
}

export default Project;
