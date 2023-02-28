import React from "react";

import styles from "./UserItem.module.scss";

const UserItem = (props) => {
  return (
    <li className={styles.UserItem}>
      {`${props.user.name} (${props.user.age} years old)`}
    </li>
  );
};

export default UserItem;
