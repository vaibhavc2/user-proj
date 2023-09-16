import React, { Fragment, useState } from "react";
import AddUser from "./Users/AddUser";
import UsersList from "./Users/UsersList";

const Home = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (name, age) => {
    setUsersList((prevUsers) => [...prevUsers, { name, age }]);
    // setUsersList((prevUsers) => prevUsers.push({ name, age }));

    // When working in React, it isn't allowed to mutate the original state array, so we can't use the push() method directly.
  };

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList usersList={usersList} />
    </Fragment>
  );
};

export default Home;
