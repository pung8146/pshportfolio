import React, { useEffect, useState } from "react";
import styled from "styled-components";

// components
import ProjectCollection from "../components/ProjectCollection";
import Pipe from "../components/Pipe";
import Character from "../components/Character";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #00F7FF;
  position: relative;
`
const Title = styled.h1`
  position: absolute;
  font-size: 60px;
  text-align: center;
  color:gold;
`


function ProjectPage() {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 800) { // Change 100 to the scroll position you want to trigger the animation
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  return (
     <Wrapper>
      <Title>Project</Title>
      <ProjectCollection/>
      <Character isScrolling={isScrolling} />
      <Pipe/>
     </Wrapper>
  );
}

export default ProjectPage;
