import React, { useEffect, useState } from "react";
import styled from "styled-components";

// components
import Pipe from "../components/Pipe";
import Character from "../components/Character/Character";
import Project from "../components/Project";
// img
import ProjectTitleImg from "../assets/images/Object/ProjectTitleImg.png";
import MarioBackgroundImg from "../assets/images/Background/MarioBackground.png";

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
  const [visibleBox2, setVisibleBox2] = useState(true);
  const [visibleBox3, setVisibleBox3] = useState(true);

  const handleBoxBreak1 = () => setVisibleBox1(false);
  const handleBoxBreak2 = () => setVisibleBox2(false);
  const handleBoxBreak3 = () => setVisibleBox3(false);
// 스크롤시 캐릭터 움직임
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;
  
    const onScroll = () => {
      let st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop){
        setIsScrolling(true); // scroll down
      } else {
        setIsScrolling(false); // scroll up
      }
      lastScrollTop = st <= 0 ? 0 : st; // for mobile
    };
  
    window.addEventListener('scroll', onScroll);
  
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);



  return (
     <Wrapper id="projectPage">
      <ProjectTitle>
        <img src={ProjectTitleImg} alt="ProjectTitleImg"/>
      </ProjectTitle>
        {/* <ProjectBox>
        <Project 
          bgColor="red"
          onClick={handleBoxBreak1}
          visible={visibleBox1}
          projectInfo={{
            name: "PixelPortfolio",
            date: "2023-진행중",
            githubUrl: "https://github.com/example",
            logoUrl: "https://example.com/logo.jpg",
            introduction: "Pixel Art 의 컨셉으로 제작한 포트폴리오 입니다.",
            serviceDescriptions: ["서비스 소개 1", "서비스 소개 2", "서비스 소개 3"]
          }}
        />
        <Project 
          bgColor="red"
          onClick={handleBoxBreak1}
          visible={visibleBox1}
          projectInfo={{
            name: "우리 BEER",
            date: "2022.11 - 2022.12",
            githubUrl: "https://github.com/codestates-seb/seb40_main_037",
            figmaUrl: "https://www.figma.com/file/Iqe08JFYfPmyKmCkJJtTSM/Airbnb-x-Figma-(Community)?node-id=0%3A1e",
            sheetUrl: "https://docs.google.com/spreadsheets/d/114aI0Tw4LY1z5jwaYQJZqNepJMoSuP69dqVCqsSDL7k/edit#gid=1119248625",
            logoUrl: "https://example.com/logo.jpg",
            introduction: "다양한 종류의 캔맥주를 한눈에 비교할 수 있는 플랫폼을 제작하였습니다.",
            serviceDescriptions: ["서비스 소개 1", "서비스 소개 2", "서비스 소개 3"]
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
            logoUrl: "https://example.com/logo.jpg",
            introduction: "팀 프로젝트로 백엔드 개발자와 협업하여 StackOverflow 클론 프로젝트를 진행하였습니다.",
            serviceDescriptions: ["서비스 소개 1", "서비스 소개 2", "서비스 소개 3"]
          }}
        />

        </ProjectBox> */}
      <Character isScrolling={isScrolling} />
      <Pipe/>
     </Wrapper>
  );
}

export default ProjectPage;
