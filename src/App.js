import React from "react";
import styled from 'styled-components';
import Main from "./pages/Main";
import Project from "./pages/Project";
import Skiles from "./pages/Skiles";
import Hire from "./pages/Hire";

const Body = styled.div`
background-color: beige;
`
function App() {
  return (
     <Body>
        {/* <Main /> */}
        {/* <Project /> */}
        {/* <Skiles /> */}
        <Hire/>   
     </Body>
  );
}

export default App;
