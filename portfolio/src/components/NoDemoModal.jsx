import React from 'react';
import '../styles/Modal.css';

function NoDemoModal({ isOpen, onClose, projectTitle }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>No Demo Available</h2>
        <p>
          A live demo for <strong>{projectTitle}</strong> is not available at the moment.
        </p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default NoDemoModal;

