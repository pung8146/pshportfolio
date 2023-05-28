import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CharacterGif from '../../assets/images/Me/MeGif.gif';
import { device } from '../../style/mediaQueries';

const CharacterDiv = styled.div`
  z-index: 10;
  background-image: url(${CharacterGif});
  background-size: cover;
  position: fixed;
  left: 20%;
  bottom: ${props => props.isScrolling ? '-100%' : '10%'}; 
  transition: bottom 0.2s ease-in;

  @media ${device.mobileL} {
    width: 50px;
    height: 50px;
    background-color: purple;
  }

  @media ${device.tablet} {
    width: 75px;
    height: 75px;
    background-color: blue;
  }

  @media ${device.laptop} {
    width: 125px;
    height: 125px;
    background-color: green;
    left:10%;
  }

  @media ${device.laptopL} {
    width: 150px;
    height: 150px;
    background-color: yellow;
  }

  @media ${device.desktop} {
    width: 150px;
    height: 150px;
    background-color: orange;
  }

  @media ${device.desktopL} {
    width: 300px;
    height: 300px;
    background-color: red;
  }
`;

const Character = React.forwardRef((props, ref) => {
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
    <div ref={ref}>
      <CharacterDiv isScrolling={isScrolling} />
    </div>
  );
});

export default Character;
