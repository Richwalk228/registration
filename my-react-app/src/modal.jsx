import React, { useState } from "react";
//import './Modal.css'; // Optional: for styling

export const Modal = (props) => {
  const { open, title, msg , close } = props;
  if (!open) {
    return null;
  }
if (!close){
    return false;
}

  return (
    <> 
       <div className="modal-container">
        <h1>{title}</h1>
          <div>{msg}</div>
          <button onClick={close}>Close</button>
      </div>
    </>
  );
};
