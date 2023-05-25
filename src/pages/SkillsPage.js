import React, { useEffect, useRef, useState } from 'react'
  import styled, { keyframes } from 'styled-components'
  // 이미지
  import KirbyBgImg  from '../assets/images/Background/kirbyBackground.png'
  // 로고이미지
  import ReactLogo from '../assets/images/Logo/ReactP.png'
  import HtmlLogo from '../assets/images/Logo/HtmlP.png'
  import CssLogo from '../assets/images/Logo/CssP.png'
  import JsLogo from '../assets/images/Logo/JsP.png'
  import FireBaseLogo from '../assets/images/Logo/FireBaseP.png'
  import FramerLogo from '../assets/images/Logo/FramerP.png'
  import MuiLogo from '../assets/images/Logo/MuiP.png'
  import ReduxLogo from '../assets/images/Logo/ReduxP.png'
  import StyledLogo from '../assets/images/Logo/StyledP.png'
  // Bar 이미지
  import Bar1 from '../assets/images/Bar/0.png'
  import Bar2 from '../assets/images/Bar/1.png'
  import Bar3 from '../assets/images/Bar/2.png'
  import Bar4 from '../assets/images/Bar/3.png'
  import Bar5 from '../assets/images/Bar/4.png'

  // 컴포넌트

  // hooks


  const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${KirbyBgImg});
  background-size: cover;
  background-position: left;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SkillBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 20px;
  width:80%;
  height: 100vh;
  justify-items: center;
  align-items: center;
  position: relative;
`;

const SkillItem = styled.div`
  width: 200px;
  height: 200px;
  text-align: center;
  border-radius: 50%;
  background-color: white;
  border: 1px solid blue;
  position: absolute;
  left: 13%;
  bottom: 8%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${props => props.animate ? keyframes`
    0% {
      transform: translate(${props.start.left}, ${props.start.bottom});
    }
    100% {
      transform: translate(${props.end.left}, ${props.end.bottom});
    }
  ` : 'none'} 1s ease forwards;
`;
const SkillLogo = styled.img`
  width: 100px;
  height: 100px;
  margin: 0 auto;
`;

  function SkillPage() {
    
  const [skills, setSkills] = useState([
    { logoSrc: HtmlLogo, text: "HTML", level: 5, start: { bottom: '0%', left: '0%' }, end: { bottom: '-300%', left: '100%' } },
    { logoSrc: CssLogo, text: "CSS", level: 5, start: { bottom: '0%', left: '0%' }, end: { bottom: '-300%', left: '220%' } },
    { logoSrc: JsLogo, text: "JS", level: 5, start: { bottom: '0%', left: '0%' }, end: { bottom: '-300%', left: '340%' } },
    { logoSrc: ReactLogo, text: "React", level: 5, start: { bottom: '0%', left: '0%' }, end: { bottom: '-180%', left: '100%' } },
    { logoSrc: ReduxLogo, text: "Redux", level: 5, start: { bottom: '0%', left: '0%' }, end: { bottom: '-180%', left: '220%' } },
    { logoSrc: ReduxLogo, text: "Redux", level: 5, start: { bottom: '0%', left: '0%' }, end: { bottom: '-180%', left: '340%' } },
    { logoSrc: ReduxLogo, text: "Redux", level: 5, start: { bottom: '0%', left: '0%' }, end: { bottom: '-50%', left: '100%' } },
    { logoSrc: ReduxLogo, text: "Redux", level: 5, start: { bottom: '0%', left: '0%' }, end: { bottom: '-50%', left: '220%' } },
    { logoSrc: ReduxLogo, text: "Redux", level: 5, start: { bottom: '0%', left: '0%' }, end: { bottom: '-50%', left: '340%' } },

  ])

  const [animate, setAnimate] = useState(false);
  const skillBoxRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const skillBoxTop = skillBoxRef.current.getBoundingClientRect().top;
      if (skillBoxTop <= window.innerHeight) {
        setAnimate(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Wrapper>
    <SkillBox ref={skillBoxRef}>
      {skills.map((skill, index) => (
        <SkillItem
          key={index}
          start={skill.start}
          end={skill.end}
          animate={animate}
          style={{ animationDelay: `${index * 0.5}s` }}
        >
          <SkillLogo src={skill.logoSrc} alt={skill.text} />
        </SkillItem>
      ))}
    </SkillBox>
  </Wrapper>
  );
}

export default SkillPage;