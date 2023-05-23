import React from 'react'
import styled from 'styled-components';

const SkillItem = styled.div`
  display: flex;
  align-items: center;  // Vertically center the text and images
  margin: 1rem 0;  // Add some vertical space between items
`;

const SkillImage = styled.img`
  width: 50px;  // Or whatever size you want
  height: 50px;
  margin-right: 1rem;  // Add some space between the image and the text
`;

function Skill({ imgSrc, text }) {
  return (
    <SkillItem>
      <SkillImage src={imgSrc} alt={text} />
      <p>{text}</p>
      <SkillImage src={imgSrc} alt={text} />
    </SkillItem>
  );
}
export default Skill