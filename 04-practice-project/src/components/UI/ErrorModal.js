import ReactDOM from 'react-dom';
import Button from './Button.js';
import Card from './Card.js';
import c from './ErrorModal.module.css';

const ErrroModal = ({ title, message, className, onConfirm }) => {
  const Backdrop = () => {
    return <div className={c.backdrop} onClick={onConfirm} />;
  };
  const ModalOverlay = () => {
    return (
      <Card className={`${c.modal} ${className}`}>
        <header className={c.header}>
          <h2>{title}</h2>
        </header>
        <div className={c.content}>
          <p>{message}</p>
        </div>
        <footer className={c.actions}>
          <Button onClick={onConfirm}>Okay 🙄️</Button>
        </footer>
      </Card>
    );
  };
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay />,
        document.getElementById('overlay-root')
      )}
    </>
  );
};

export default ErrroModal;
