import React, {  useState } from "react";
import styled from "styled-components";

// components
import Pipe from "../components/Pipe";
import Project from "../components/Project";
// img
import ProjectTitleImg from "../assets/images/Object/ProjectTitleImg.png";
import MarioBackgroundImg from "../assets/images/Background/MarioBackground.png";
import StackOverFlowLogo from "../assets/images/Logo/stackoverflow.png";
import BeerLogo from "../assets/images/Logo/beer.png";
import PixelPortfolioLogo from "../assets/images/Logo/psh.png";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #00F7FF;
  background-image: url(${MarioBackgroundImg});
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ProjectTitle = styled.div`
  width: 30%;
  padding: 3% 0;
  img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  }
`
const ProjectBox = styled.div`
  width: 80%;
  height: 50%;
  text-align: center;
  display: flex;
  justify-content: space-between;
`

function ProjectPage() {
  const [visibleBox1, setVisibleBox1] = useState(true);

  const handleBoxBreak1 = () => setVisibleBox1(false);

  return (
     <Wrapper id="projectPage">
      <ProjectTitle>
        <img src={ProjectTitleImg} alt="ProjectTitleImg"/>
      </ProjectTitle>
        <ProjectBox>
          <Project 
            bgColor="red"
            onClick={handleBoxBreak1}
            visible={visibleBox1}
            projectInfo={{
              name: "PixelPortfolio",
              date: "2023-진행중",
              githubUrl: "https://github.com/pung8146/pshportfolio",
              pageUrl: "https://pung8146.github.io/pshportfolio/",
              logoUrl: PixelPortfolioLogo,
              introduction: "Pixel Art 의 컨셉으로 제작중인 포트폴리오 입니다.",
              serviceDescriptions: [
                {description: "Redux 를 사용하여 컴포넌트간의 상태 관리를 하고 있습니다.", url: ""},
                {description: "인터렉티브 웹 구현을 위해 Framer-motion 을 사용하였습니다.", url: ""},
                // {description: "서비스 소개 3", url: "https://link-for-service-3.com"}
              ]
            }}
          />
          <Project 
            bgColor="red"
            onClick={handleBoxBreak1}
            visible={visibleBox1}
            projectInfo={{
              name: "오늘 BEER",
              date: "2022.11 - 2022.12",
              githubUrl: "https://github.com/codestates-seb/seb40_main_037",
              figmaUrl: "https://www.figma.com/file/Iqe08JFYfPmyKmCkJJtTSM/Airbnb-x-Figma-(Community)?node-id=0%3A1e",
              sheetUrl: "https://docs.google.com/spreadsheets/d/114aI0Tw4LY1z5jwaYQJZqNepJMoSuP69dqVCqsSDL7k/edit#gid=1119248625",
              logoUrl: BeerLogo,
              introduction: "다양한 종류의 캔맥주를 한눈에 비교할 수 있는 플랫폼을 제작하였습니다.",
            serviceDescriptions: [
              {description: "아이디어, 디자인 및 기획 제작을 담당하였습니다.", url: "https://www.figma.com/file/Iqe08JFYfPmyKmCkJJtTSM/Airbnb-x-Figma-(Community)?node-id=0%3A1e"},
              {description: "개발 속도와 최적화를 위해 Vite 를 사용하여 제작하였습니다.", url: ""},
              {description: "디자인 통일과 기능구현 위해 MUI 라이브러리를 사용하였습니다", url: "https://velog.io/@pung8146/series/mui"}
            ]
          }}
        />
        <Project 
            bgColor="red"
            onClick={handleBoxBreak1}
            visible={visibleBox1}
            projectInfo={{
              name: "StackOverFlow-Clone",
              date: "2022.10 - 2022.11",
              githubUrl: "https://github.com/codestates-seb/seb40_pre_036",
              logoUrl: StackOverFlowLogo,
              introduction: "팀 프로젝트로 백엔드 개발자와 협업하여 StackOverflow 클론 프로젝트를 진행하였습니다.",
              serviceDescriptions: [
                {description: "회원 정보를 어느 곳에서도 호출할 수 있도록 상태 관리에 Redux를 사용하였습니다. ", url: ""},
                {description: "가독성과 재사용성을 위해 styled-component를 사용하였습니다.", url: "https://velog.io/@pung8146/Styled-component-%EC%A0%95%EB%A6%AC"},
                {description: "비용적 코스트와 간편한 관리를 위해 AWS S3로 배포하였습니다.", url: ""}
              ]
            }}
          />
        </ProjectBox>
      <Pipe/>
     </Wrapper>
  );
}

export default ProjectPage;
