import React from "react";

import Card from "../Card/Card";
import Button from "../Button/Button";

import styles from "./Modal.module.scss";

const Modal = (props) => {
  return (
    <>
      <div className={styles.backdrop} onClick={props.onClick}>
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
      </div>
    </>
  );
};

export default Modal;
