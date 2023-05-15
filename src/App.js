import React, { useEffect } from "react";
import styled from 'styled-components';
import ReactFullpage from '@fullpage/react-fullpage';

// 페이지 컴포넌트들
import Main from "./pages/Main";
import Project from "./pages/Project";
import Skiles from "./pages/Skiles";
import Hire from "./pages/Hire";

const Body = styled.div`
  background-color: beige;
`

function App() {


  return (
    <Body id="fullpage">
      <Main className="section" />
      <Project className="section" />
      {/* <Skiles className="section" /> */}
      <Hire className="section" />
    </Body>
  );
}

export default App;
