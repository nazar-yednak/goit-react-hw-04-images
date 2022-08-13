import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { ModalBackDrop, ModalContent } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

function Modal({ onClose, children }) {
  console.log(children);
  const handlerClickBackDrop = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return createPortal(
    <ModalBackDrop onClick={handlerClickBackDrop}>
      <ModalContent>{children}</ModalContent>
    </ModalBackDrop>,
    modalRoot
  );
}

export default Modal;
Modal.propTypes = {
  onClose: PropTypes.func,
};
