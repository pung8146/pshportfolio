import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { motion } from "framer-motion";
import { FullPage, Slide } from 'react-full-page';

// 페이지 컴포넌트들
import Main from "./pages/Main";
import Project from "./pages/ProjectPage";
import Skiles from "./pages/Skiles";
import Hire from "./pages/Hire";
// 상태관리
import { createSlice, configureStore } from '@reduxjs/toolkit';
import { Provider, useDispatch, useSelector } from 'react-redux'
import Character from '../src/components/Character/Character';

const characterSlice = createSlice({
  name: 'character',
  initialState: { character: { isScrolling: false } },
  reducers: {
    startScrolling: state => {
      state.character.isScrolling = true;
    },
    stopScrolling: state => {
      state.character.isScrolling = false;
    },
  },
});

export const { startScrolling, stopScrolling } = characterSlice.actions;

const store = configureStore({ reducer: characterSlice.reducer });

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
    setCharacterPosition(next);
  };
  return (
    <Provider store={store}>
      <Body>
        <FullPage beforeChange={handleBeforeChange}>
          {/* <Slide>
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
          </Slide> */}
          <Slide>
            <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
              <Hire characterPosition={characterPosition} />
            </motion.div>
          </Slide>
          <Character position={characterPosition} />
        </FullPage>
      </Body>
    </Provider>
  );
}
export default App;
