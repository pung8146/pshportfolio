import React from "react";
import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";
// // img
import BackgroundImg1 from "../assets/images/Background/OakWood/background_layer_1.png";
import BackgroundImg2 from "../assets/images/Background/OakWood/background_layer_2.png";
import BackgroundImg3 from "../assets/images/Background/OakWood/background_layer_3.png";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const slide = keyframes`
  0% { background-position: 0 0; }
  100% { background-position: -100% 0; }
`;

const BackgroundLayer1 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 200%; // make the width 200% to fill the gap when it moves
  height: 100%;
  background-image: url(${BackgroundImg1});
  background-size: 50% 100%; // set the size of the image to 50% of the div, so it will repeat
  background-repeat: repeat-x; // repeat the image in the x direction
  z-index: 1;
  animation: ${slide} 30s linear infinite;
`;

const BackgroundLayer2 = styled(BackgroundLayer1)`
  background-image: url(${BackgroundImg2});
  z-index: 2;
  animation: ${slide} 20s linear infinite;
`;

const BackgroundLayer3 = styled(BackgroundLayer1)`
  background-image: url(${BackgroundImg3});
  z-index: 3;
  animation: ${slide} 10s linear infinite;
`;

const Title = styled.h1`
  font-size: 120px;
  margin: 10% 0;
  background: #0dd7ff;
  background: -webkit-linear-gradient(
    to left,
    #0dd7ff 0%,
    #ffee00 50%,
    #ff8800 100%
  );
  background: -moz-linear-gradient(
    to left,
    #0dd7ff 0%,
    #ffee00 50%,
    #ff8800 100%
  );
  background: linear-gradient(to left, #0dd7ff 0%, #ffee00 50%, #ff8800 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StartButton = styled(motion.button)`
  z-index: 10;
  position: absolute;
  cursor: default;
  p {
    font-size: 8rem;
    background: #ffe226;
    background: linear-gradient(
      to bottom,
      #ffe226 32%,
      #ff9a03 50%,
      #cf2525 68%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  span {
    font-size: 8rem;
    background: #cfcfcf;
    background: linear-gradient(
      to bottom,
      #cfcfcf 50%,
      #0008ff 50%,
      #cf0068 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  /* &:hover {
    transition: all 0.3s ease;
    text-shadow: 0 0 10px #FF8800, 0 0 40px #FFF7AB, 0 0 80px #FF8800;
  } */
`;

const textVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function Main() {
  return (
    <Wrapper>
      {/* <BackgroundLayer1 src={BackgroundImg1} alt="Background layer 1" />
      <BackgroundLayer2 src={BackgroundImg2} alt="Background layer 2" />
      <BackgroundLayer3 src={BackgroundImg3} alt="Background layer 3" />

      <StartButton>
        <Title>PSH PORTFOLIO</Title>
        <motion.p
          variants={textVariants}
          initial="hidden"
          animate="visible"
          // transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        >
          FrontEndDeveloper
        </motion.p>

        <motion.span
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          START SCROLL
        </motion.span>
      </StartButton> */}
    </Wrapper>
  );
}

export default Main;
