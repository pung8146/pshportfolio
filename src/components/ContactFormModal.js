import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

const customStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    fontFamily: '"Press Start 2P", cursive',
    color: 'white',
    background: '#1d1d1b',
    borderRadius: '5px',
    border: '2px solid #5c5a5a',
    padding: '20px',
    textAlign: 'center'
  }
};

Modal.setAppElement('#root') // replace with your app element id

const Button = styled.button`
  font-family: 'Press Start 2P', cursive;
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

const Input = styled.input`
  font-family: 'Press Start 2P', cursive;
  color: white;
  background: #1d1d1b;
  border: 1px solid #5c5a5a;
  padding: 5px;
  width: 100%;
  margin: 10px 0;
`;

const TextArea = styled.textarea`
  font-family: 'Press Start 2P', cursive;
  color: white;
  background: #1d1d1b;
  border: 1px solid #5c5a5a;
  padding: 5px;
  width: 100%;
  margin: 10px 0;
  resize: none;
`;

function ContactFormModal({ modalIsOpen, setModalIsOpen }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    // Handle form submission
  }

  return (
    <div>
      <Button onClick={() => setModalIsOpen(true)}>Open Contact Form</Button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
        contentLabel="Contact Form"
      >
        <h2>Contact Form</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <Input type="text" name="name" value={form.name} onChange={handleInputChange} required />
          </label>
          <label>
            Email:
            <Input type="email" name="email" value={form.email} onChange={handleInputChange} required />
          </label>
          <label>
            Phone:
            <Input type="tel" name="phone" value={form.phone} onChange={handleInputChange} required />
          </label>
          <label>
            Message:
            <TextArea name="message" rows="4" value={form.message} onChange={handleInputChange} required />
          </label>
          <Button type="submit">Submit</Button>
        </form>
        <Button onClick={() => setModalIsOpen(false)}>Close</Button>
      </Modal>
    </div>
  );
}

export default ContactFormModal;
