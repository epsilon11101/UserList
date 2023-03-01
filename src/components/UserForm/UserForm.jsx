import React, { useState } from "react";

import styles from "./UserForm.module.scss";

import Card from "../UI/Card/Card";
import InputForm from "./InputForm";
import Button from "../UI/Button/Button";
import Modal from "../UI/Modal/Modal";

const userForm = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [user, setUser] = useState({});
  const [error, setError] = useState();

  const submitHandler = (e) => {
    e.preventDefault();

    const isEmpty = userName.trim().length === 0 && userAge.trim().length === 0;
    const isNegative = +userAge < 0;

    if (isEmpty) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });

      return;
    }
    if (isNegative) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    const newUSer = {
      id: Math.floor(Math.random() * 1000000).toString(),
      name: userName,
      age: userAge,
    };
    props.onGetUserData(newUSer);
    setUserName("");
    setUserAge("");
    return;
  };

  const getNameHandler = (data) => {
    setUserName(data);
    setUser((prevUser) => ({
      ...prevUser,
      name: data,
    }));
  };

  const getAgeHandler = (data) => {
    setUserAge(data);
    setUser((prevUser) => ({
      ...prevUser,
      age: data,
    }));
  };

  const closeModal = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <Modal title={error.title} btnMessage="Close" onClick={closeModal}>
          {error.message}
        </Modal>
      )}
      <Card className="">
        <form className={styles.form} onSubmit={submitHandler}>
          <InputForm type="text" onGetInputData={getNameHandler}>
            username
          </InputForm>
          <InputForm type="text" onGetInputData={getAgeHandler}>
            user age
          </InputForm>
          <Button type="submit">add user</Button>
        </form>
      </Card>
    </>
  );
};

export default userForm;
