import { useState } from "react";
import styled, { css, keyframes } from 'styled-components';
import { device } from '../style/mediaQueries';

// img
import RandomBoxImg from '../assets/images/Object/RandomBox.png'
import FigmaImg from '../assets/images/Icon/Figma.png'
import GithubImg from '../assets/images/Icon/Github.png'
import SheetImg from '../assets/images/Icon/Sheet.png'
import PageImg from '../assets/images/Logo/psh.png'
  
const ProjectStyled = styled.div`
  position: relative; /* Add this */
  display: flex;
  width:32%;
  height: 100%;
  color:Black;
  .ProjectLogo{
    margin: 10%;
    width: 80%;
    height: 30%;
    background-size: cover;
  }
  h1{
    font-size: 3rem;
    padding: 10px;
  }
  h2{
    font-size: 2rem;
    padding: 5px;
  }
`;
const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-100%);
  }
`;
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${RandomBoxImg});
  background-size: cover;
  animation: ${props => props.clicked ? css`${fadeOut} 0.5s ease-out forwards` : 'none'};
  cursor: pointer;
  z-index: 1;
  display: ${props => props.overlayVisible ? 'block' : 'none'};
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

  @media ${device.laptopL} {
    h1{
      font-size: 20px;
    }
    .ProjectLogo{
      width: 90%;
      margin:10% auto;
      height: 200px;
      background-position: center;
      img{
        max-width:100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
`
const ProjectRightBox = styled.div`
width: 60%;
height: 100%;
background-color: skyblue;
div {
  width:80%;
  height: 25%;
  background-color: white;
  margin:5% 10%;
  padding: 5%;
  border-radius : 5% ;
  line-height: 1.5;
  font-size: 1.4rem;
}
ul{
  display: flex;
  flex-direction: column;
  text-align: left;
}
li{
  padding: 4%;
  font-size: 2rem;
}
a.link-button {
  display: inline-block;
  padding: 10px;
  background-color: #007BFF;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}
`

function Project({ bgColor, onClick, visible, projectInfo }) {
  const [clicked, setClicked] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(true);

  const handleClick = () => {
    if (!clicked) {
      setClicked(true);
      setTimeout(() => {
        setClicked(false);
        setOverlayVisible(false);
      }, 500); // 애니메이션의 지속 시간에 맞추어 변경
    }
  };
  return (
    <ProjectStyled 
      bgColor={bgColor}
      visible={visible}
    >
 <Overlay clicked={clicked} onClick={handleClick} overlayVisible={overlayVisible} />
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
          {projectInfo.pageUrl && (
            <li>
              <a href={projectInfo.pageUrl} target="_blank" rel="noreferrer">
                <img src={PageImg} alt="링크"/>
              </a>
            </li>
          )}
        </ul>
      </ProjectLeftBox>
      <ProjectRightBox>
        <div className="introductionService">{projectInfo.introduction}</div>
        <ul>
          {projectInfo.serviceDescriptions.map((desc, index) => (
            <li key={index}>
              ▶{desc.description} 
              {desc.url && 
                <a href={desc.url} target="_blank" rel="noopener noreferrer" className="link-button">
                  Link
                </a>
              }
            </li>
          ))}
        </ul>
      </ProjectRightBox>
    </ProjectStyled>
  );
}

export default Project;
