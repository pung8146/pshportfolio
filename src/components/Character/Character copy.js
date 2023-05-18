import CharacterGif from '../assets/images/Me/MeGif.gif'
import styled from 'styled-components';

const Character = styled.div`
  z-index: 10;
  width: 200px;
  height: 200px;
  background-image: url(${CharacterGif});
  background-size: cover;
  position: absolute;
  left: 43%;
  bottom: ${props => props.isScrolling ? '-100%' : '5%'}; 
  transition: bottom 2s ease-in;
`;

export default Character;