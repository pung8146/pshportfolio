import React, { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root') // replace with your app element id

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
      <button onClick={() => setModalIsOpen(true)}>Open Contact Form</button>
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
            <input type="text" name="name" value={form.name} onChange={handleInputChange} required />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={form.email} onChange={handleInputChange} required />
          </label>
          <label>
            Phone:
            <input type="tel" name="phone" value={form.phone} onChange={handleInputChange} required />
          </label>
          <label>
            Message:
            <textarea name="message" value={form.message} onChange={handleInputChange} required />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <button onClick={() => setModalIsOpen(false)}>Close</button>
      </Modal>
    </div>
  );
}

export default ContactFormModal;
