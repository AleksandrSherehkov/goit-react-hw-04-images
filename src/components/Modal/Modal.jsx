import { createPortal } from 'react-dom';
import s from './Modal.module.css';

const modalContainer = document.getElementById('modal');

const Modal = ({ children }) => {
  return createPortal(<div className={s.Overlay}>{children}</div>, modalContainer);
};

export default Modal;
