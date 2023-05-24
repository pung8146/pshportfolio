  import React, { useEffect, useState } from 'react'
  import styled from 'styled-components'
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
    align-items: center;  // This will center the SkillBox vertically
  `;

  const SkillBox = styled.div`

  `;
  const SkillItem = styled.div`
    width: 200px;
    height: 200px;
    text-align: center;
    border-radius: 50%;
    background-color: white;
    position: absolute;
    bottom:8%;
    left: 20%;
    border:1px solid blue;
  `;

  const SkillLogo = styled.img`
    width: 100px;
    height: 100px;
    margin: 0 auto;
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

    return (
      <Wrapper>
      <SkillBox>
        {skills.map((skill, index) => (
          <SkillItem key={index}>
            <SkillLogo src={skill.logoSrc} alt={skill.text} />
          </SkillItem>
        ))}
      </SkillBox>
    </Wrapper>
    )
  }

  export default SkillsPaga;