import React, { useState } from "react";

import InputForm from "./InputForm";
import Button from "../UI/Button/Button";

import styles from "./UserForm.module.scss";

const userForm = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [user, setUser] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    const newUSer = {
      id: Math.floor(Math.random() * 1000000).toString(),
      name: userName,
      age: userAge,
    };
    props.onGetUserData(newUSer);
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

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <InputForm type="text" onGetInputData={getNameHandler}>
        username
      </InputForm>
      <InputForm type="text" onGetInputData={getAgeHandler}>
        user age
      </InputForm>
      <Button type="submit">add user</Button>
    </form>
  );
};

export default userForm;
