import React from "react";
import styled from 'styled-components';
import Main from "./pages/Main";
import Project from "./pages/Project";

const Body = styled.div`
background-color: beige;
`
function App() {
  return (
     <Body>
        {/* <Main /> */}
        <Project />
     </Body>
  );
}

export default App;
