import React, { useEffect, useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

const saveUsersToLocal = (users) =>
  localStorage.setItem("users", JSON.stringify(users));

const loadUsersFromLocal = () =>
  JSON.parse(localStorage.getItem("users") || "[]");

function App() {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    setUsersList(loadUsersFromLocal());
  }, []);

  useEffect(() => {
    saveUsersToLocal(usersList);
  }, [usersList]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
