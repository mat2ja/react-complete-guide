import React from 'react';
import { createPortal } from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = () => <div className={classes.backdrop} />;

const ModalOverlay = ({ children }) => (
  <div className={classes.modal}>
    <div className={classes.content}>{children}</div>
  </div>
);

const portalRoot = document.getElementById('overlays');

const Modal = ({ children }) => (
  <>
    {createPortal(<Backdrop />, portalRoot)}
    {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalRoot)}
  </>
);

export default Modal;
