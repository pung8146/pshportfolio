import React from 'react';
import {motion} from 'framer-motion';
import styled from 'styled-components';

const Body = styled.div`
    background-color: beige;
    width: 100%;
    height: 100vh;
    position: relative;
`

const Mosnter = styled(motion.div)`
    width: 300px;
    height: 300px;
    background-color: gold;
    position: absolute;
    top: 10%;
    right: 10%;
`

const Ball = styled(motion.div)`
    width: 300px;
    height: 300px;
    background-color: tomato;
    position: absolute;
    bottom: 10%;
    right: 50%;
    border-radius:50%;
`
const Hire = () => {
    return (
        <Body>
           <Mosnter />    
           <Ball initial={{scale:0}}/>
        </Body>
    );
};

export default Hire;