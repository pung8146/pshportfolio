import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FullPage, Slide } from "react-full-page";

// 페이지 컴포넌트들
import Main from "./pages/Main";
import Project from "./pages/ProjectPage";
import SkillsPage from "./pages/SkillsPage";
import Hire from "./pages/Hire";
// 상태관리

const Body = styled.div`
  background-color: beige;
`;
const pageVariants = {
  initial: {
    opacity: 1,
    y: "-100vh",
    backgroundColor: "red",
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: "100vh",
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

function App() {
  const [characterPosition, setCharacterPosition] = useState(0);
  const totalSlides = 4; // 슬라이드 총 개수
  const handleBeforeChange = (current) => {
    const next = (current.to + 1) % totalSlides;
    setCharacterPosition(next);
  };

  return (
    <Provider>
      <Body>
        <p> hi</p>
        {/* <FullPage beforeChange={handleBeforeChange}>
          <Slide>
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Main characterPosition={characterPosition} />
            </motion.div>
          </Slide>
          <Slide>
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Project characterPosition={characterPosition} />
            </motion.div>
          </Slide>
          <Slide>
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <SkillsPage characterPosition={characterPosition} />
            </motion.div>
          </Slide>
          <Slide>
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Hire characterPosition={characterPosition} />
            </motion.div>
          </Slide>
          <Character position={characterPosition} />
        </FullPage> */}
      </Body>
    </Provider>
  );
}
export default App;
