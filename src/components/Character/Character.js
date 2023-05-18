import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startScrolling, stopScrolling } from './characterSlice';
import styled from 'styled-components';
import CharacterGif from '../../assets/images/Me/MeGif.gif';

const CharacterDiv = styled.div`
  z-index: 10;
  width: 200px;
  height: 200px;
  background-image: url(${CharacterGif});
  background-size: cover;
  position: absolute;
  left: 43%;
  bottom: ${props => props.isScrolling ? '-100%' : '5%'}; 
  transition: bottom 0.5s ease-in;
`;

function Character() {
  const dispatch = useDispatch();
  const isScrolling = useSelector(state => state.character.isScrolling);

  useEffect(() => {
    dispatch(startScrolling());
    // 예를 들어, 5초 후에 스크롤을 멈춥니다.
    setTimeout(() => {
      dispatch(stopScrolling());
    }, 5000);
  }, [dispatch]);

  return (
    <CharacterDiv isScrolling={isScrolling} />
  );
};

export default Character;
