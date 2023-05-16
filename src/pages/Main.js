import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';
import Moutin from '../assets/images/Background/Moutin.png'
import CharacterGif from '../assets/images/Me/MeGif.gif'

// Keyframes for the animation
const scrollBackground = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(500%);
  }
`;


const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${Moutin});
  background-repeat: repeat-x;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
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
  width: 200%;
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

const Character = styled.div`
  width: 300px;
  height: 300px;
  background-image: url(${CharacterGif});
  background-size: cover;
  position: absolute;
  bottom: 5%;
  left: 10%;
`;

const StyledButton = styled(motion.button)`
  display: inline-block;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  color: #fff;
  background: linear-gradient(to right, #ff4400, #ff6600);
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease;
  box-shadow: 0px 4px 0px 0px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-2px);
    color: gold;
    transition: all 0.3s ease;
  }

  &:active {
    transform: translateY(2px);
  }
`;

const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};

const Button = ({ onClick }) => {
  const [background, setBackground] = useState('#ff4400');

  useEffect(() => {
    const colors = ['#ff4400', '#ff8800', '#ffa500', '#ffcc00'];
    let i = 0;

    const interval = setInterval(() => {
      setBackground(colors[i]);
      i = (i + 1) % colors.length;
    }, 300); // 0.5초마다 배경색 변경

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Wrapper>
      <Background></Background>
      <Background1 />
      <Background1 />
      <Background2 />
      <Background3 />
      <StyledButton
        onClick={onClick}
        whileHover="hover"
        variants={buttonVariants}
        style={{ background }}
      >
        GAME START
      </StyledButton>
      <Character />
    </Wrapper>
  );
};

export default Button;
