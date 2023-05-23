import React from 'react'
import styled from 'styled-components'
// 이미지
import SpaceShipBgImg  from '../assets/images/Background/SpaceShipBg.png'
// 로고이미지
import ReactLogo from '../assets/images/Logo/ReactP.png'
// Bar 이미지
import Bar0 from '../assets/images/Bar/0.png'
import Bar1 from '../assets/images/Bar/1.png'
import Bar2 from '../assets/images/Bar/2.png'
import Bar3 from '../assets/images/Bar/3.png'
import Bar4 from '../assets/images/Bar/4.png'
// 컴포넌트
import Skill from '../components/Skill';
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

const Title = styled.h1`
  font-size: 8rem;
  margin: 0 auto;
`

const SkillList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;

function Skills() {
      return (
        <Wrapper>
          <SkillsBox>
            <Title>SKILLS</Title>
              <SkillList>
                <Skill logoSrc={ReactLogo} text="REACT" barSrc={Bar1} />
              </SkillList>
          </SkillsBox>
        </Wrapper>
      )
    }

export default Skills