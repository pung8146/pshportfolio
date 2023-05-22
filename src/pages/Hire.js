import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useMotionValue } from 'framer-motion';
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
// modal styled
// 모달 전체를 감싸는 배경 컴포넌트
const ModalWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

// 모달 컨텐츠를 감싸는 컴포넌트
const ModalContent = styled.div`
  width: 500px;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  position: relative;
`;

// 모달 닫기 버튼 컴포넌트
const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
`;
const Hire = () => {
  // 화면 진입시 나오는 효과
  const [scale, setScale] = useState(1);
  const [lastScroll, setLastScroll] = useState(0); // 새로운 상태 값으로 마지막 스크롤 위치를 기록
  const [transitionDuration, setTransitionDuration] = useState(0.8); // New state for transition duration
  
  const wrapperRef = useRef();

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

// catchCircle code
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

  // modal code
  const [modalOpen, setModalOpen] = useState(false);

  // set up the refs and measuring functions
  const pokeBallRef = useRef();  // New ref for PokeBall
  const catchCircleRef = useRef();  // New ref for CatchCircle
  const [pokeBallPosition, setPokeBallPosition] = useState({ x: 0, y: 0 })

  const [pokeBallInitialPosition, setPokeBallInitialPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // This useEffect will run once after the first render, because its dependency array is empty.
    // We get the initial position of the PokeBall here.
    const initialPosition = pokeBallRef.current.getBoundingClientRect();
    setPokeBallInitialPosition({ x: initialPosition.x, y: initialPosition.y });
  }, []);

  const handleDrag = (event, info) => {
    const pokeBallBounds = pokeBallRef.current.getBoundingClientRect();
    const catchCircleBounds = catchCircleRef.current.getBoundingClientRect();
  
    const calculatedDistance = Math.sqrt(
      (pokeBallBounds.left + pokeBallBounds.width / 2 - catchCircleBounds.left - catchCircleBounds.width / 2) ** 2 +
      (pokeBallBounds.top + pokeBallBounds.height / 2 - catchCircleBounds.top - catchCircleBounds.height / 2) ** 2
    );
    
    if (calculatedDistance <= pokeBallBounds.width / 2 + catchCircleBounds.width / 2) {
      console.log("Pokeball has hit the CatchCircle!");
  
      // Reset the position of the PokeBall
      setPokeBallPosition(pokeBallInitialPosition)
  
      // Alert the user in the console
      console.log("PokeBall and CatchCircle are overlapping!");

      // Open the modal
      setModalOpen(true);
    }
};

const closeModal = () => {
  setModalOpen(false);
}
  
  return (
    <Wrapper ref={wrapperRef}>
    <PoketBallScreenEffects scale={scale} duration={transitionDuration} />
    <PokeBall 
      ref={pokeBallRef}
      variants={pokeBallVariants}
      drag
      // Use the wrapperRef as the dragConstraints
      dragConstraints={wrapperRef} 
      dragElastic={1} 
      dragMomentum={true} 
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      onDrag={handleDrag}
      whileHover="hover"
      whileDrag="drag"
      // Update the x and y values to move the PokeBall back to the original position
      style={{ x: pokeBallPosition.x, y: pokeBallPosition.y }}
    />
     <AnimatePresence>
      {modalOpen && (
        <ModalWrapper
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <ModalContent>
            <CloseButton onClick={closeModal}>Close</CloseButton>
            <h1>Modal Title</h1>
            <p>Modal content...</p>
          </ModalContent>
        </ModalWrapper>
      )}
      {catchCircleVisible && (
        <CatchCircle 
        ref={catchCircleRef}
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
