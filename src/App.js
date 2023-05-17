import React from "react";
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
  return (
    <Body>
      <FullPage>
        <Slide>
          <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
            <Main />
          </motion.div>
        </Slide>
        <Slide>
          <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
            <Project />
          </motion.div>
        </Slide>
        <Slide>
          <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
            <Skiles />
          </motion.div>
        </Slide>
        <Slide>
          <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
            <Hire />
          </motion.div>
        </Slide>
      </FullPage>
    </Body>
  );
}

export default App;
