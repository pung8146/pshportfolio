import React, { useEffect, useRef, useState } from 'react'
  import styled, { keyframes } from 'styled-components'
  // 이미지
  import BubbleBobbleBg  from '../assets/images/Background/BubbleBobbleBg.png'
  // 로고이미지
  import ReactLogo from '../assets/images/PixelLogo/ReactP.png'
  import HtmlLogo from '../assets/images/PixelLogo/HtmlP.png'
  import CssLogo from '../assets/images/PixelLogo/CssP.png'
  import JsLogo from '../assets/images/PixelLogo/JsP.png'
  import FireBaseLogo from '../assets/images/PixelLogo/FireBaseP.png'
  import FramerLogo from '../assets/images/PixelLogo/FramerP.png'
  import MuiLogo from '../assets/images/PixelLogo/MuiP.png'
  import ReduxLogo from '../assets/images/PixelLogo/ReduxP.png'
  import StyledLogo from '../assets/images/PixelLogo/StyledP.png'
  // bubble 이미지
  import BubbleRedImg from '../assets/images/Bubble/bubbleR.png'
  import BubbleGreenImg from '../assets/images/Bubble/bubbleG.png'
  import BubbleBlueImg from '../assets/images/Bubble/bubbleB.png'

  const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${BubbleBobbleBg});
  background-size: 100% 100%;
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
  background-image: ${props => {
    switch (props.level) {
      case 1:
        return `url(${BubbleRedImg})`;
      case 2:
        return `url(${BubbleBlueImg})`;
      case 3:
        return `url(${BubbleGreenImg})`;
      default:
        return `url(${BubbleRedImg})`;
    }
  }};
  background-size: cover;
  position: absolute;
  left: 13%;
  bottom: 8%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation-name: ${props => props.animate ? keyframes`
  0% {
    transform: translate(${props.start.left}, ${props.start.bottom});
  }
  100% {
    transform: translate(${props.end.left}, ${props.end.bottom});
  }
` : 'none'};
animation-duration: 1s;
animation-timing-function: ease;
animation-fill-mode: forwards;
`;
const SkillLogo = styled.img`
  width: 100px;
  height: 100px;
  margin: 0 auto;
`;

  function SkillPage() {
    
  const [skills, setSkills] = useState([
    { logoSrc: HtmlLogo, text: "HTML", level: 1, start: { bottom: '0%', left: '0%' }, end: { bottom: '-270%', left: '140%' } },
    { logoSrc: CssLogo, text: "CSS", level: 1, start: { bottom: '0%', left: '0%' }, end: { bottom: '-270%', left: '260%' } },
    { logoSrc: JsLogo, text: "JS", level: 1, start: { bottom: '0%', left: '0%' }, end: { bottom: '-270%', left: '380%' } },
    { logoSrc: ReactLogo, text: "React", level: 2, start: { bottom: '0%', left: '0%' }, end: { bottom: '-150%', left: '140%' } },
    { logoSrc: ReduxLogo, text: "Redux", level: 2, start: { bottom: '0%', left: '0%' }, end: { bottom: '-150%', left: '260%' } },
    { logoSrc: ReduxLogo, text: "Redux", level: 2, start: { bottom: '0%', left: '0%' }, end: { bottom: '-150%', left: '380%' } },
    { logoSrc: ReduxLogo, text: "Redux", level: 3, start: { bottom: '0%', left: '0%' }, end: { bottom: '-20%', left: '140%' } },
    { logoSrc: ReduxLogo, text: "Redux", level: 3, start: { bottom: '0%', left: '0%' }, end: { bottom: '-20%', left: '260%' } },
    { logoSrc: ReduxLogo, text: "Redux", level: 3, start: { bottom: '0%', left: '0%' }, end: { bottom: '-20%', left: '380%' } },

  ])

  const [animate, setAnimate] = useState(false);
  const skillBoxRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const skillBoxBottom = skillBoxRef.current.getBoundingClientRect().bottom;
      if (skillBoxBottom <= window.innerHeight) {
        if (!animate) {
          setAnimate(true);
          console.log("Animation has started!");
        }
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [animate]);

  return (
    <Wrapper>
      <SkillBox ref={skillBoxRef}>
        {skills.map((skill, index) => (
          <SkillItem
            key={index}
            start={skill.start}
            end={skill.end}
            animate={animate}
            level={skill.level}
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