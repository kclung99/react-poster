import React, { PropsWithChildren } from "react";
import classes from "./Modal.module.css";

type ModalProps = {
  onClickBackdrop: (event: React.MouseEvent<HTMLDivElement>) => void;
};

const Modal = (props: PropsWithChildren<ModalProps>) => {
  return (
    <>
      <div className={classes.backdrop} onClick={props.onClickBackdrop} />
      <dialog open className={classes.modal}>
        {props.children}
      </dialog>
    </>
  );
};

export default Modal;
