import styled from 'styled-components';
import PipeImg from '../assets/images/Object/Pipe.png'

const Pipe = styled.div`
  width: 20%;
  height: 10%;
  background-image: url(${PipeImg});
  background-size: 100% 100%;
  position: absolute;
  bottom: 0;
  left: 50%;
  z-index: 11;
  transform: translateX(-50%);
  animation: ${props => props.isScrolling ? 'rise 2s linear forwards' : 'none'};
  
  @keyframes rise {
    0% {
      transform: translateX(-50%) translateY(100%);
    }
    100% {
      transform: translateX(-50%) translateY(0);
    }
  }
`;


export default Pipe;