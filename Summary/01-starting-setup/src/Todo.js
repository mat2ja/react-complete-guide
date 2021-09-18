import { useState } from 'react';
import Backdrop from './Backdrop.js';
import Modal from './Modal.js';

function Todo({ text }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function deleteHandler() {
    setModalIsOpen(true);
  }

  return (
    <div className="card">
      <h2 className="title">{text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Begone &times;
        </button>
      </div>
      {modalIsOpen && <Modal onCancel={() => setModalIsOpen(false)} />}
      {modalIsOpen && <Backdrop onCancel={() => setModalIsOpen(false)} />}
    </div>
  );
}

export default Todo;
