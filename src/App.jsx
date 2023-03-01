import React, { useState } from "react";

import UserForm from "./components/UserForm/UserForm";
import UserListItem from "./components/UserItems/UserListItems/UserListItems";

import "./App.css";

function App() {
  const ROCKY_USERS = [
    {
      id: "0",
      name: "Aaron",
      age: "31",
    },
    {
      id: "1",
      name: "Ian",
      age: "9",
    },
  ];
  const [users, setUsers] = useState(ROCKY_USERS);

  const UserData = (data) => {
    setUsers((prevUsers) => {
      return [...prevUsers, data];
    });
  };

  return (
    <div className="App">
      <UserForm onGetUserData={UserData} users={users} />
      <UserListItem AllUsers={users} />
    </div>
  );
}

export default App;
