import React from "react";

const Modal = ({ title, subtitle }) => (
  <div className="modal">
    <div className="modal-content">
      <span class="modal-close">&times;</span>
      <h1>{title}</h1>
      <div></div>
      <p>{subtitle}</p>
    </div>
  </div>
);

export default Modal;
