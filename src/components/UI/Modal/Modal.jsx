import React from "react";
import { createPortal } from "react-dom";

import Card from "../Card/Card";
import Button from "../Button/Button";

import styles from "./Modal.module.scss";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClick} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.children}</p>
      </div>
      <footer className={styles.actions}>
        <Button type="button" onClick={props.onClick}>
          {props.btnMessage}
        </Button>
      </footer>
    </Card>
  );
};

const Modal = (props) => {
  return (
    <>
      {createPortal(
        <Backdrop onClick={props.onClick} />,
        document.getElementById("backdrop-root")
      )}

      {createPortal(
        <ModalOverlay
          onClick={props.onClick}
          title={props.title}
          children={props.children}
          btnMessage={props.btnMessage}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default Modal;
