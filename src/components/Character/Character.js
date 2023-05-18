import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CharacterGif from '../../assets/images/Me/MeGif.gif';

const CharacterDiv = styled.div`
  z-index: 10;
  width: 200px;
  height: 200px;
  background-image: url(${CharacterGif});
  background-size: cover;
  position: fixed; // Scroll with the viewport
  left: 43%;
  bottom: ${props => props.isScrolling ? '-100%' : '5%'}; 
  transition: bottom 0.2s ease-in;
`;

const Character = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    setIsScrolling(true);
    clearTimeout(window.scrollFinished);
    window.scrollFinished = setTimeout(() => {
      setIsScrolling(false);
    }, 100); // Adjust the timeout value as needed
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <CharacterDiv isScrolling={isScrolling} />
  );
};

export default Character;
