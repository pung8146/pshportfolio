import React from 'react';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  z-index: 1000; // 모달이 다른 요소보다 위에 표시되도록 z-index 설정
  position: fixed; // 모달이 스크롤 위치에 무관하게 표시되도록 설정
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex; 
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5); // 모달 뒷 배경에 반투명 검정색 적용
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  max-width: 80%; // 최대 너비를 설정해 화면 크기에 따라 모달 크기가 조절되도록 함
`;

const CloseButton = styled.button`
  float: right;
  border: none;
  background: none;
  font-size: 1.2em;
  margin: -10px -10px 0 0;
`;

const Modal = ({ closeModal }) => {
  return (
    <ModalWrapper onClick={closeModal}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={closeModal}>X</CloseButton>
        <h2>Hello! I'm a Modal!</h2>
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
