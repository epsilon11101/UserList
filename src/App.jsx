import React, { useState } from "react";

import Card from "./components/UI/Card/Card";
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
      id: "-1",
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
      <Card>
        <UserForm onGetUserData={UserData} users={users} />
      </Card>
      <Card>
        <UserListItem users={users} />
      </Card>
    </div>
  );
}

export default App;
