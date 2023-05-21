import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styled from "styled-components";

// 이미지
import PokeBackgroundImg  from '../assets/images/Background/pokeBackground.jpg'
import BattlePokeballImg from "../assets/images/Object/DarkPoketBall.png";
import PokeBallImg from "../assets/images/Object/PokeBall.png";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background-image: url(${PokeBackgroundImg});
  background-size: 100% 100%;
  overflow: hidden; // 이미지가 화면 밖으로 나가도 보이지 않게 설정
`

const Circle = styled(motion.div)`
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: red;
  border-radius: 50%;
`

const PokeBall = styled(motion.div)`
  z-index: 14;
  width: 200px;
  height: 200px;
  border-radius: 100%;
  background-image: url(${PokeBallImg});
  background-size: cover;
  position: absolute;
  right: 30%;
  top:30%;
  cursor: pointer;
`

const pokeBallVariants = {
  hover: { scale: 1.2 },
  drag: {
    scale: 1.5,
    rotate: [0, 360 * 1000000], // rotate a very large number of times
    transition: {
      duration: 1, // rotation duration
      ease: "linear" // linear easing for smooth rotation
    }
  }
};

const Hire = () => {
  const [circles, setCircles] = useState([]);

  const handleDragOrHover = (e, info) => {
    setCircles(prevCircles => [
      ...prevCircles,
      { top: info.point.y, left: info.point.x }
    ]);
  }

  return (
    <Wrapper>
      <PokeBall 
        onHoverStart={handleDragOrHover}
        onDrag={handleDragOrHover}
        variants={pokeBallVariants}
        drag
        whileHover="hover"
        whileDrag="drag"
      />
      {circles.map((circle, index) => (
        <Circle 
          key={index}
          style={{ top: circle.top, left: circle.left }}
        />
      ))}
    </Wrapper>
  );
};

export default Hire;
