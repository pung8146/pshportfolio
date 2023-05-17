import React, { useEffect, useState,useRef } from 'react';
import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';
import { Link, animateScroll as scroll } from "react-scroll";

// img
import BackgroundImg1 from '../assets/images/Background/OakWood/background_layer_1.png'
import BackgroundImg2 from '../assets/images/Background/OakWood/background_layer_2.png'
import BackgroundImg3 from '../assets/images/Background/OakWood/background_layer_3.png'


import Character from '../components/Character';
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
  z-index: -3;
  animation: ${slide} 30s linear infinite;
`;

const BackgroundLayer2 = styled(BackgroundLayer1)`
  background-image: url(${BackgroundImg2});
  z-index: -2;
  animation: ${slide} 20s linear infinite;
`;

const BackgroundLayer3 = styled(BackgroundLayer1)`
  background-image: url(${BackgroundImg3});
  z-index: -1;
  animation: ${slide} 10s linear infinite;
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

  // 스타트버튼 클릭시 이동
  const projectRef = useRef(null);

  const handleClick = () => {
    // Scroll to the Project component when the button is clicked
    window.scrollTo({
      top: projectRef.current.offsetTop,
      behavior: 'smooth'
    });
  };

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
      <BackgroundLayer1 src={BackgroundImg1} alt="Background layer 1" />
      <BackgroundLayer2 src={BackgroundImg2} alt="Background layer 2" />
      <BackgroundLayer3 src={BackgroundImg3} alt="Background layer 3" />

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
