import CharacterGif from '../assets/images/Me/MeGif.gif'
import styled from 'styled-components';

const Character = styled.div`
  width: 200px;
  height: 200px;
  background-image: url(${CharacterGif});
  background-size: cover;
  position: absolute;
  left: 43%;
  bottom: ${props => props.isScrolling ? '-100%' : '5%'}; // Adjusts the bottom position based on isScrolling
  transition: bottom 0.5s ease-in; // Adds a transition to the bottom property
`;

export default Character;