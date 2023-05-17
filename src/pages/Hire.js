import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styled from "styled-components";

// 이미지
import PokeballImg from "../assets/images/Object/DarkPoketBall.png";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageWrapper = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-image: url(${PokeballImg});
  background-repeat: no-repeat;
  background-size: contain;
`;

const Hire = () => {
  const [scale, setScale] = useState(1);
  const [componentTop, setComponentTop] = useState(0);

  useEffect(() => {
    setComponentTop(window.pageYOffset + document.querySelector('#hire').getBoundingClientRect().top);
  }, []);

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position < componentTop) {
      setScale(1);
    } else if (position < componentTop + window.innerHeight) {
      setScale(1 + ((position - componentTop) / window.innerHeight) * 2); // 스케일 값 조절
    } else {
      setScale(3); // 최대 크기를 3으로 설정
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [componentTop]);

  return (
    <Wrapper id="hire">
      <ImageWrapper
        style={{
          transform: `scale(${scale})`, // 스크롤에 따라 크기를 조절
        }}
      />
    </Wrapper>
  );
};

export default Hire;
