import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

// Bar 이미지
import Bar1 from '../assets/images/Bar/0.png'
import Bar2 from '../assets/images/Bar/1.png'
import Bar3 from '../assets/images/Bar/2.png'
import Bar4 from '../assets/images/Bar/3.png'
import Bar5 from '../assets/images/Bar/4.png'

const barImages = [Bar1, Bar2, Bar3, Bar4, Bar5];

const SkillItem = styled.div`
  display: flex;
  align-items: center;  // Vertically center the text and images
  margin: 1rem 0;  // Add some vertical space between items
`;

const SkillLogo = styled.img`
  width: 100px;  // Or whatever size you want
  height: 100px;
  margin-right: 1rem;  // Add some space between the logo and the text
`;

const SkillBar = styled.img`
  width: 200px;  // Or whatever size you want
  height: 50px;
  margin-left: 1rem;  // Add some space between the text and the bar
`;

const SkillText = styled.div`
  // Your styling here
  font-size: 2rem;
`;

function Skill({ logoSrc, text, level }) {
  const skillRef = useRef(null);
  const [barSrc, setBarSrc] = useState(Bar1);
  let intervalId = null;

  const animateSkill = () => {
    let index = 0;
    intervalId = setInterval(() => {
      index++;
      if (index === level || index === barImages.length) {
        clearInterval(intervalId);
      } else {
        setBarSrc(barImages[index]);
      }
    }, 300); // 이미지 변경 속도를 조절하려면 이 값을 변경하세요
  };

  const resetSkill = () => {
    clearInterval(intervalId);
    setBarSrc(Bar1);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateSkill();
        } else {
          resetSkill();
        }
      },
      { threshold: 0.1 }
    );
    
    if(skillRef.current) observer.observe(skillRef.current);
    
    return () => {
      if(skillRef.current) observer.unobserve(skillRef.current);
      clearInterval(intervalId);
    };
  }, [level]);

  return (
    <SkillItem ref={skillRef}>
      <SkillLogo src={logoSrc} alt={text} />
      <SkillText>{text}</SkillText>
      <SkillBar src={barSrc} alt="skill bar" />
    </SkillItem>
  );
}

export default Skill;
