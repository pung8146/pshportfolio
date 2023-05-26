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

  @media ${device.mobile} {
    width: 50px;
    height: 50px;
  }

  @media ${device.tablet} {
    width: 100px;
    height: 100px;
    background-color: red;
  }

  @media ${device.laptop} {
    width: 150px;
    height: 150px;
  }

  @media ${device.desktop} {
    width: 200px;
    height: 200px;
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
