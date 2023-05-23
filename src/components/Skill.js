import React from 'react'
import styled from 'styled-components';

const SkillItem = styled.div`
  display: flex;
  align-items: center;  // Vertically center the text and images
  margin: 1rem 0;  // Add some vertical space between items
`;

const SkillLogo = styled.img`
  width: 50px;  // Or whatever size you want
  height: 50px;
  margin-right: 1rem;  // Add some space between the logo and the text
`;

const SkillBar = styled.img`
  width: 200px;  // Or whatever size you want
  height: 50px;
  margin-left: 1rem;  // Add some space between the text and the bar
`;

const SkillText = styled.p`
  font-size: 2rem;
  font-weight: bold;
`;

function Skill({ logoSrc, text, barSrc }) {
  return (
    <SkillItem>
      <SkillLogo src={logoSrc} />
      <SkillText>{text}</SkillText>
      <SkillBar src={barSrc} />
    </SkillItem>
  );
}

export default Skill
