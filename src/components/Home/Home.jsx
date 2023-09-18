import React, { useState } from "react";
import AddUser from "./Users/AddUser";
import UsersList from "./Users/UsersList";
import ErrorModal from "./UI/ErrorModal";

const Home = () => {
  const [usersList, setUsersList] = useState([]);

  const [error, setError] = useState();

  const addUserHandler = (name, age) => {
    setUsersList((prevUsers) => [...prevUsers, { name, age }]);
    // setUsersList((prevUsers) => prevUsers.push({ name, age }));

    // When working in React, it isn't allowed to mutate the original state array, so we can't use the push() method directly.
  };

  const errorHandler = (title, message) => {
    setError((prev) => ({
      ...prev,
      title,
      message
    }));
  };

  const resetErrorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && <ErrorModal error={error} resetError={resetErrorHandler} />}
      <AddUser onAddUser={addUserHandler} giveError={errorHandler} />
      <UsersList usersList={usersList} />
    </>
  );
};

export default Home;
