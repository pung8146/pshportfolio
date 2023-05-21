import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
// 화면 진입시 나오는 효과
const PoketBallScreenEffects = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-image: url(${BattlePokeballImg});
  background-size: cover; // 이미지가 화면 전체를 채우도록 설정
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  transition: transform ${props => props.duration}s ease-out; // transition duration is now dynamic
  transform: scale(${props => props.scale});
`;

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
const CatchCircle = styled(motion.div)`
  width:300px;
  height:300px;
  border-radius: 100%;
  border: 5px dashed green;
  position: absolute;
  left:17%;
  bottom:5%;
`

const pokeBallVariants = {
  hover: { scale: 1.2 },
  drag: {
    scale: 1.5,
    rotate: [0, 360], 
    transition: {
      duration: 1, // rotation duration
      repeat: Infinity, // repeat the rotation infinitely
      ease: "linear" // linear easing for smooth rotation
    }
  }
};
const Hire = () => {
  // 화면 진입시 나오는 효과
  const [scale, setScale] = useState(1);
  const [lastScroll, setLastScroll] = useState(0); // 새로운 상태 값으로 마지막 스크롤 위치를 기록
  const [transitionDuration, setTransitionDuration] = useState(0.8); // New state for transition duration
  
  const handleScroll = () => {
    const position = window.pageYOffset;
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    
    if (position > lastScroll && position > totalHeight * 0.95) {
      setScale(1 + (position - totalHeight * 0.95) / 10);
      setTransitionDuration(1); // Set longer duration for expanding
    } else {
      setScale(1);
      setTransitionDuration(0.5); // Set shorter duration for shrinking
    }

    setLastScroll(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const pokeBallRef = useRef();


  const [catchCircleVisible, setCatchCircleVisible] = useState(false);

  const handleHoverStart = () => {
    setCatchCircleVisible(true);
  }

  const handleHoverEnd = () => {
    setCatchCircleVisible(false);
  }

  const catchCircleVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5, yoyo: Infinity } },
    exit: { opacity: 0, transition: { duration: 0.2 } }
  }
  return (
<Wrapper ref={pokeBallRef}>
      <PoketBallScreenEffects scale={scale} duration={transitionDuration} />
      <PokeBall 
        ref={pokeBallRef}
        variants={pokeBallVariants}
        drag
        dragConstraints={pokeBallRef} 
        dragElastic={1} 
        dragMomentum={true} 
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
        whileHover="hover"
        whileDrag="drag"
      />
      <AnimatePresence>
        {catchCircleVisible && (
          <CatchCircle 
            variants={catchCircleVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          />
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

export default Hire;
