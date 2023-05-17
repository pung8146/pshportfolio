import styled from "styled-components";
// img
import RandomBoxImg from '../assets/images/Object/RandomBox.png'
import FigmaImg from '../assets/images/Icon/Figma.png'
import GithubImg from '../assets/images/Icon/Github.png'
import SheetImg from '../assets/images/Icon/Sheet.png'

const ProjectStyled = styled.div`
  cursor: pointer;
  display: flex;
  width:31%;
  height: 100%;
  color:Black;
  background: url(${RandomBoxImg}) no-repeat center;
  background-color: green;
  visibility: ${props => props.visible ? 'visible' : 'hidden'};
  .ProjectLogo{
    margin: 10%;
    width: 80%;
    height: 20%;
    background-color: red;
  }
  h1{
    font-size: 18px;
    padding: 10px;
  }
  h2{
    font-size: 16px;
    padding: 5px;
  }
`;

const ProjectLeftBox = styled.div`
  width: 40%;
  height: 100%;
  background-color: gold;
  text-align: center;
  ul{
    display: flex;
    justify-content: center;
  }
  li{
    width:30%;
  }
  img{
    max-width:100%;
  }
`
const ProjectRightBox = styled.div`
width: 60%;
height: 100%;
background-color: skyblue;
div {
  width:80%;
  height: 20%;
  background-color: white;
  margin:5% 10%;
  padding: 5%;
  border-radius : 5% ;
  line-height: 1.5;
  font-size: 10px;
}
ul{
  display: flex;
  flex-direction: column;
}
li{
  padding: 8%;
}
`

function Project({ bgColor, onClick, visible, projectInfo }) {
  return (
    <ProjectStyled 
      bgColor={bgColor}
      onClick={onClick}
      visible={visible}
    >
      <ProjectLeftBox>
        <div className="ProjectLogo" style={{ backgroundImage: `url(${projectInfo.logoUrl})` }}></div>
        <h1>{projectInfo.name}</h1>
        <h2>{projectInfo.date}</h2>
        <ul className="iconBox">
          {projectInfo.githubUrl && (
            <li>
              <a href={projectInfo.githubUrl} target="_blank" rel="noreferrer" alt="gitHub">
                <img src={GithubImg} alt="깃헙"/>
              </a>
            </li>
          )}
          {projectInfo.figmaUrl && (
            <li>
              <a href={projectInfo.figmaUrl} target="_blank" rel="noreferrer">
                <img src={FigmaImg} alt="기획서"/>
              </a>
            </li>
          )}
          {projectInfo.sheetUrl && (
            <li>
              <a href={projectInfo.sheetUrl} target="_blank" rel="noreferrer">
                <img src={SheetImg} alt="정의서"/>
              </a>
            </li>
          )}
        </ul>
      </ProjectLeftBox>
      <ProjectRightBox>
        <div className="introductionService">{projectInfo.introduction}</div>
        <ul>
          {projectInfo.serviceDescriptions.map((desc, index) => <li key={index}>▶ {desc}</li>)}
        </ul>
      </ProjectRightBox>
    </ProjectStyled>
  );
}

export default Project;
