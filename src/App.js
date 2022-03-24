import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserClickHandler = (userName, userAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { key: Math.random(), name: userName, age: userAge },
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserClickHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
