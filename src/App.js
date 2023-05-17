import React, { useState } from "react";
import styled from 'styled-components';
import { motion } from "framer-motion";
import { FullPage, Slide } from 'react-full-page';

// 페이지 컴포넌트들
import Main from "./pages/Main";
import Project from "./pages/ProjectPage";
import Skiles from "./pages/Skiles";
import Hire from "./pages/Hire";

const Body = styled.div`
  background-color: beige;
`
const pageVariants = {
  initial: {
    opacity: 0,
    y: "-100vh",
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: "100vh",
  }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};

function App() {
  const [characterPosition, setCharacterPosition] = useState(0);

  const handleBeforeChange = (current, next) => {
    // next is the index of the next slide
    // If the next slide is Project or before, set the position to next, otherwise set it to the index of Project (1 in this case)
    setCharacterPosition(next <= 1 ? next : 1);
  }
  return (
    <Body>
      <FullPage beforeChange={handleBeforeChange}>
      <Slide>
  <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
    <Main characterPosition={characterPosition} />
  </motion.div>
</Slide>
<Slide>
  <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
    <Project characterPosition={characterPosition} />
  </motion.div>
</Slide>
<Slide>
  <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
    <Skiles characterPosition={characterPosition} />
  </motion.div>
</Slide>
<Slide>
  <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
    <Hire characterPosition={characterPosition} />
  </motion.div>
</Slide>
      </FullPage>
    </Body>
  );
}

export default App;
