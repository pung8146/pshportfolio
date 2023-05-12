import React from "react";
import styled from "styled-components";
import ProjectGallery from "../components/ProjectGallery";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: tomato;
  position: relative;
`
const Title = styled.h1`
position: absolute;
font-size: 60px;
text-align: center;
color:gold;
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
