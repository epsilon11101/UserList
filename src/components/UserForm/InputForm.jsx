import React, { forwardRef } from "react";
import styles from "./InputForm.module.scss";

const InputForm = forwardRef((props, ref) => {
  // const [isEmpty, setIsEmpty] = useState(false);

  // const onChangeHandler = (e) => {
  //   props.onGetInputData(e.target.value);
  // };

  return (
    <div className={styles.input}>
      <label>{props.children}</label>
      {/* <input ref={ref} type={props.type} onChange={onChangeHandler} /> */}
      <input ref={ref} type={props.type} />
    </div>
  );
});

export default InputForm;
