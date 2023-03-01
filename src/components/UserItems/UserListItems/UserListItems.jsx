import React from "react";

import UserItem from "../UserItem/UserItem";
import Card from "../../UI/Card/Card";

import styles from "./UserListItem.module.scss";

const UserListItem = (props) => {
  return (
    <Card className="">
      <ul className={styles.UserListItem}>
        {props.AllUsers.map((user) => {
          return <UserItem key={user.id} user={user} />;
        })}
      </ul>
    </Card>
  );
};

export default UserListItem;
