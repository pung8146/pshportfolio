  import React, { useEffect, useState } from 'react'
  import styled from 'styled-components'
  // 이미지
  import SpaceShipBgImg  from '../assets/images/Background/SpaceShipBg.png'
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
  import Skill from '../components/Skill';
  import TypingTitle from './TypingTitle'
  import IntroSkill from './IntroSkill'
  // hooks


  const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${SpaceShipBgImg});
    background-size: cover;
    background-position: right;
    display: flex;
    justify-content: center;
    align-items: center;  // This will center the SkillsBox vertically
  `;

  const SkillsBox = styled.div`
    width: 80%;
    height: 90%;
    background: rgba(0, 0, 0, 0.5); // Semi-transparent black
    border: 2px solid #00ff00; // Bright green
    border-radius: 15px;
    color: #00ff00; // Bright green
    margin: 10% 0;
    padding: 20px;
    overflow: auto; // Enable scrolling if content overflows
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
  `;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const SkillItem = styled.div`
  flex: 0 1 calc(33.3333% - 20px);
  margin-bottom: 20px;
  box-sizing: border-box;
`;


  function SkillsPaga() {
  const [skills, setSkills] = useState([
    { logoSrc: HtmlLogo, text: "HTML", level: 5 },
    { logoSrc: CssLogo, text: "CSS", level: 5 },
    { logoSrc: ReactLogo, text: "React", level: 4 },
    { logoSrc: JsLogo, text: "JavaScript", level: 4 },
    { logoSrc: StyledLogo, text: "Styled-Components", level: 4 },
    { logoSrc: FramerLogo, text: "Framer", level: 3 },
    { logoSrc: MuiLogo, text: "Material-UI", level: 3 },
    { logoSrc: ReduxLogo, text: "Redux", level: 3 },
    { logoSrc: FireBaseLogo, text: "FireBase", level: 2 },
  ]);

  // 스킬 목록을 레벨 순서대로 정렬
  useEffect(() => {
    setSkills(skills.sort((a, b) => b.level - a.level));
  }, []);

    return (
      <Wrapper>
      <SkillsBox>
        <TypingTitle children="Skill" />
        <SkillList>
          {skills.map((skill, index) => (
            <SkillItem key={index}>
              <Skill logoSrc={skill.logoSrc} text={skill.text} level={skill.level} />
            </SkillItem>
          ))}
        </SkillList>
        <IntroSkill />
      </SkillsBox>
    </Wrapper>
    )
  }

  export default SkillsPaga;