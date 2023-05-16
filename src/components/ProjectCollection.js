import React from 'react';
import styled from 'styled-components';

const ProjectBox = styled.div`
  width: 80%;
  height: 80%;
  text-align: center;
  background-color: tomato;
  display: flex;
  justify-content: space-between;
`
const Projects = styled.div`
  width:30%;
  height: 100%;
  `;

const Project = styled(Projects)`
  background-color: ${props => props.bgColor};
`

const ProjectCollection = () => {
  return (
    <ProjectBox>
      <Project bgColor="red" />
      <Project bgColor="blue" />
      <Project bgColor="yellow" />
    </ProjectBox>
  );
};

export default ProjectCollection;