import React, { useState } from "react";
import styles from "./InputForm.module.scss";

const inputForm = (props) => {
  // const [isEmpty, setIsEmpty] = useState(false);

  const onEmptyHandler = (data) => {};

  const onChangeHandler = (e) => {
    props.onGetInputData(e.target.value);
  };

  return (
    <div className={styles.input}>
      <label>{props.children}</label>
      <input type={props.type} onChange={onChangeHandler} />
    </div>
  );
};

export default inputForm;
