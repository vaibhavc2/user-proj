import React, { useState } from "react";
import Card from "../UI/Card";

const AddUser = ({ onAddUser }) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const specialChars = /[ `!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/;

  const submitHandler = (e) => {
    e.preventDefault();

    if (username.trim().length === 0 || age.trim().length === 0)
      window.alert(`Enter both the fields!`);
    else if (!isNaN(username[0]))
      window.alert(`Username must not start with a number!`);
    else if (+age > 80 || +age < 5)
      // (+ is appended for typecasting to number)
      window.alert(`Age must be between 5 years to 80 years!`);
    else if (specialChars.test(username))
      window.alert(`Username must not contain any special characters!`);
    else {
      onAddUser(username, age);
      setUsername("");
      setAge("");
    }
  };

  return (
    <Card className="h-[300px]">
      <form onSubmit={submitHandler}>
        <label className="form-label pt-4" htmlFor="username">
          Username
        </label>
        <input
          className="form-input"
          type="text"
          id="username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />

        <label className="form-label" htmlFor="age">
          Age (years)
        </label>
        <input
          className="form-input"
          type="number"
          id="age"
          onChange={(e) => setAge(e.target.value)}
          value={age}
        />

        <button
          type="submit"
          className="mx-auto my-5 mt-10 block rounded border-2 border-pink-200 bg-yellow-700 p-2 px-5 text-lg font-bold"
        >
          Add User
        </button>
      </form>
    </Card>
  );
};

export default AddUser;
