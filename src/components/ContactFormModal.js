import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

import GithubImg from '../assets/images/Logo/githubW.png'
import NotionImg from '../assets/images/Logo/notionW.png'
import VelogImg from '../assets/images/Logo/velogW.png'

const StyledModal = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  transform: translate(-50%, -50%);
  color: white;
  background: #1d1d1b;
  border-radius: 50px;
  border: 2px solid #5c5a5a;
  padding: 20px;
  text-align: center;
  width: 600px;
  height: 600px;
  outline: none;
  overflow: auto;
  
  h1{
    font-size: 8rem;
  }
  h2{
    font-size: 4rem;
  }
  p{
    font-size: 2rem;
    text-align: left;
    line-height: 3rem;
    padding: 30px 0;
    
  }
  ul{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 2rem 0;
  }
  li{
    width: 25%;
    img {
      width: 100%;
    }
  }
`;


const Button = styled.button`
  color: white;
  background: #ff006e;
  border: none;
  padding: 10px;
  margin: 10px 0;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background: #ee0979;
  }
  `;

function ContactFormModal({ modalIsOpen, setModalIsOpen }) {
  return (
    <div>
      <StyledModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Contact Form"
      >
        <h1>Contact</h1>
        <div>
          <p> 저는 창의적이고 개성있는 것들을 좋아하는 개발자입니다. 다양한 분야에 관심과 흥미를 갖고 있으며, 이를 프로그래밍으로 표현하고자 하는 열정을 가지고 있습니다. 문제에 대해 창의적으로 접근하려고 노력하고 있습니다.</p>
        </div>
        <h2>Email : red8146@gmail.com</h2>
        <ul>
          <li>
            <a href="https://github.com/pung8146" target='_blank' rel="noreferrer"><img src={GithubImg}></img></a>
          </li>
          <li>
            <a href="https://www.notion.so/f73596110a19481d9fded447356448f4" target='_blank' rel="noreferrer"><img src={NotionImg}></img></a>
          </li>
          <li>
            <a href="https://velog.io/@pung8146" target='_blank' rel="noreferrer"><img src={VelogImg}></img></a>
          </li>
        </ul>
        <Button onClick={() => setModalIsOpen(false)}>Close</Button>
      </StyledModal>
    </div>
  );
}
export default ContactFormModal;

Modal.setAppElement('#root') // react-modal 라이브러리가 스크린 리더를 위한 애플리케이션의 엘리먼트를 식별할 수 있도록 돕습니다.