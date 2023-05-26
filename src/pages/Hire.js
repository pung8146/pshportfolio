import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useMotionValue } from 'framer-motion';
import styled ,{keyframes}from "styled-components";

// 이미지
import PokeBackgroundImg  from '../assets/images/Background/pokeBackground.jpg'
import BattlePokeballImg from "../assets/images/Object/DarkPoketBall.png";
import PokeBallImg from "../assets/images/Object/PokeBall.png";
// 컴포넌트
import ContactFormModal from '../components/ContactFormModal'; // Replace with the path to ContactFormModal

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
// Circle 반짝임 효과
const flashingBorder = keyframes`
  0% { border-color: red; }
  50% { border-color: white; }
  100% { border-color: pink; }
`;
const CatchCircle = styled(motion.div)`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 5px dashed red;
  position: absolute;
  left: 17%;
  bottom: 5%;
  animation: ${flashingBorder} 1s linear infinite; // 반짝이는 효과 적용
`;
const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 50% 50%; }
  100% { background-position: 0% 50%; }
`;
const CatchText = styled(motion.p)`
  font-size: 8rem;
  font-weight: bold;
  color: white;
  position: absolute;
  left: 17%;
  bottom: 40%;
  background: linear-gradient(270deg,  #CFCFCF 0%, #FF4255 50%, #FFED45 100%); 
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${gradientShift} 2s linear infinite;
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
    initial: { opacity: 0, rotate: 0 },
    animate: { opacity: 1, rotate: 360, transition: { duration: 0.5, yoyo: Infinity, rotate: { duration: 5, repeat: Infinity, ease: "linear" } } },
    exit: { opacity: 0, transition: { duration: 0.2 } }
  };

  // 모달 code
  const [pokeBallKey, setPokeBallKey] = useState(0); // New state for PokeBall key
  const [contactFormOpen, setContactFormOpen] = useState(false);
  const openContactForm = () => {
    setContactFormOpen(true);
  }
  // set up the refs and measuring functions
  const pokeBallRef = useRef();  // New ref for PokeBall
  const catchCircleRef = useRef();  // New ref for CatchCircle
  const [pokeBallPosition, setPokeBallPosition] = useState({ x: 0, y: 0 })
  const [pokeBallInitialPosition, setPokeBallInitialPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // 이 useEffect는 처음 렌더링 후 한 번만 실행됩니다. (의존성 배열이 비어있기 때문)
    // 여기서 PokeBall의 초기 위치를 얻습니다.
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
  
      // Open the contact form modal
      openContactForm();
  
      x.set(0);
      y.set(0);
  
      // Reset the PokeBall position when the modal opens
      setPokeBallKey(prevKey => prevKey + 1);
    }
  };
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const unsubscribeX = x.onChange(value => {
      setPokeBallPosition(prev => ({ ...prev, x: value }));
    });

    const unsubscribeY = y.onChange(value => {
      setPokeBallPosition(prev => ({ ...prev, y: value }));
    });

    return () => {
      unsubscribeX();
      unsubscribeY();
    };
  }, []);

  const handleDragEnd = (event, info) => {
    const pokeBallBounds = pokeBallRef.current.getBoundingClientRect();
    const catchCircleBounds = catchCircleRef.current.getBoundingClientRect();
  
    const calculatedDistance = Math.sqrt(
      (pokeBallBounds.left + pokeBallBounds.width / 2 - catchCircleBounds.left - catchCircleBounds.width / 2) ** 2 +
      (pokeBallBounds.top + pokeBallBounds.height / 2 - catchCircleBounds.top - catchCircleBounds.height / 2) ** 2
      );
  
    if (calculatedDistance <= pokeBallBounds.width / 2 + catchCircleBounds.width / 2) {
      console.log("Pokeball has hit the CatchCircle!");
  
      // Open the contact form modal
      openContactForm();
  
      x.set(0);
      y.set(0);
  
      // Reset the PokeBall position when the modal opens
      setPokeBallKey(prevKey => prevKey + 1);
    }
  };
  return (
    <Wrapper ref={wrapperRef}>
    {/* <PoketBallScreenEffects scale={scale} duration={transitionDuration} /> */}
    <PokeBall
      key={pokeBallKey}
      ref={pokeBallRef}
      variants={pokeBallVariants}
      drag
      dragConstraints={wrapperRef}
      dragElastic={1}
      dragMomentum={true}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      onDrag={handleDrag}
      onDragEnd={handleDragEnd} // New event handler for dragEnd
      whileHover="hover"
      whileDrag="drag"
      style={{ x, y }} // Updated the style to use motion values
    />
<AnimatePresence>
  {contactFormOpen && <ContactFormModal key="ContactFormModal" modalIsOpen={contactFormOpen} setModalIsOpen={setContactFormOpen} />}
  <CatchText>CATCH ME!</CatchText>
  {catchCircleVisible && (
    <CatchCircle 
      key="CatchCircle"
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