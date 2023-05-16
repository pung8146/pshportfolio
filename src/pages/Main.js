import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';
import Moutin from '../assets/images/Background/Moutin.png'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Character from '../components/Character';
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;
// Keyframes for the animation
const scrollBackground = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(500%);
  }
`;

const Background1 = styled.div`
  width: 30%;
  height: 80vh;
  position: absolute;
  bottom:10%;
  background-color: gold;
  animation: ${scrollBackground} 10s linear infinite; // Adjust duration as needed
`;

const Background2 = styled.div`
  width: 20%;
  height: 60vh;
  position: absolute;
  bottom:20%;
  left:30%;
  background-color: yellow;
  animation: ${scrollBackground} 3s linear infinite; // Adjust duration as needed
`;

const Background3 = styled.div`
  width: 10%;
  height: 40vh;
  position: absolute;
  bottom:30%;
  left:10%;
  background-color: orange;
  animation: ${scrollBackground} 3s linear infinite; // Adjust duration as needed
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${Moutin});
  background-repeat: repeat-x;
  background-size: cover;
  animation: scrollBackground 10s linear infinite;
  
  @keyframes scrollBackground {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;


const StartButton = styled(motion.button)`
position: absolute;
font-family: 'VT323', cursive;
p{
  font-size: 4rem;
  font-weight: 800px;
  background: #FFE226;
  background: linear-gradient(to bottom, #FFE226 32%, #FF9A03 50%, #CF2525 68%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
  span {
    font-size: 8rem;
    background: #CFCFCF;
    background: linear-gradient(to bottom, #CFCFCF 50%, #0008FF 50%, #CF0068 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  /* Add the glowing effect on hover */
  &:hover {
    transition: all 0.3s ease;
    text-shadow: 0 0 10px #cf2525, 0 0 40px #cf2525, 0 0 80px #cf2525;
  }

`;

const textVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Main = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) { // Change 100 to the scroll position you want to trigger the animation
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
      <StartButton>
        <motion.p
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        >
          CLICK or SCROLL
        </motion.p>
        <motion.span
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        >
          START
        </motion.span>
      </StartButton>
      <Character isScrolling={isScrolling} />
    </Wrapper>
  );
};

export default Main;
