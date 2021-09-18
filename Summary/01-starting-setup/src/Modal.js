function Modal({ onCancel }) {
  const confirmHandler = () => {
    console.log('Confirmed. Sheeeeesh.');
  };

  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={onCancel}>
        Cancel
      </button>
      <button className="btn" onClick={confirmHandler}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
