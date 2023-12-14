import React, { PropsWithChildren } from "react";
import classes from "./Modal.module.css";
import { useNavigate } from "react-router-dom";

const Modal = (props: PropsWithChildren) => {
  const navigate = useNavigate();

  return (
    <>
      <div className={classes.backdrop} onClick={() => navigate("..")} />
      <dialog open className={classes.modal}>
        {props.children}
      </dialog>
    </>
  );
};

export default Modal;
