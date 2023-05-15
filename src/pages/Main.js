import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: beige;
`


const StyledButton = styled(motion.button)`
  display: inline-block;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  color: #fff;
  background-color: #ff4400;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0px 4px 0px 0px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #ff6600;
  }

  &:active {
    background-color: #ff3300;
    box-shadow: none;
    transform: translateY(4px);
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
  return (
    <Wrapper>
      <h1>Main</h1>
    <StyledButton
      onClick={onClick}
      whileHover="hover"
      variants={buttonVariants}
    >
        GAME START
    </StyledButton>
    </Wrapper>
    
  );
};

export default Button;
