import React from "react";

import UserItem from "../UserItem/UserItem";

import styles from "./UserListItem.module.scss";

const UserListItem = (props) => {
  return (
    <ul className={styles.UserListItem}>
      {props.users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </ul>
  );
};

export default UserListItem;
