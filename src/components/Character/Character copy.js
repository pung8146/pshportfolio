import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CharacterGif from '../../assets/images/Me/MeGif.gif';
import MarioMe from '../../assets/images/Me/MarioMe.png';
import PoketMe from '../../assets/images/Me/PoketMe.png';
import DinoMe from '../../assets/images/Me/DinoMe.png';

const CharacterImages = [PoketMe,CharacterGif,MarioMe,DinoMe]; // Your list of images

const CharacterDiv = styled.div`
  z-index: 10;
  width: 200px;
  height: 200px;
  background-image: ${props => `url(${props.image})`}; // Here we will receive the image directly
  background-size: cover;
  position: fixed;
  left: 20%;
  bottom: ${props => props.isScrolling ? '-100%' : '10%'}; 
  transition: bottom 0.2s ease-in;
`;

const Character = ({ position }) => {
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    setIsScrolling(true);
    clearTimeout(window.scrollFinished);
    window.scrollFinished = setTimeout(() => {
      setIsScrolling(false);
    }, 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    // Pass the image URL directly here according to the position prop
    <CharacterDiv isScrolling={isScrolling} image={CharacterImages[position]} />
  );
};
export default Character;
