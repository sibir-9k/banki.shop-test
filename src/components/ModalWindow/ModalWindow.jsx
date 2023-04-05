import React from 'react'
import "./ModalWindow.scss"

export const ModalWindow = ({ onClose, children }) => {
  return (
    <div className={['modal', 'active'].join(' ')}>
      <div className="modalContent">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

