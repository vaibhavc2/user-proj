import React, { Fragment, useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = ({ onAddUser, giveError }) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const specialChars = /[ `!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/;

  const submitHandler = (e) => {
    e.preventDefault();

    if (username.trim().length === 0 || age.trim().length === 0) {
      giveError(`Invalid Inputs`, `Enter both the fields!`);
      return;
    } else if (!isNaN(username[0])) {
      giveError(`Invalid Inputs`, `Username must not start with a number!`);
      return;
    } else if (+age > 80 || +age < 5) {
      // (+ is appended for typecasting to number)
      giveError(`Invalid Inputs`, `Age must be between 5 years to 80 years!`);
      return;
    } else if (specialChars.test(username)) {
      giveError(
        `Invalid Inputs`,
        `Username must not contain any special characters!`
      );
      return;
    } else {
      onAddUser(username, age);
      setUsername("");
      setAge("");
    }
  };

  return (
    <Fragment>
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

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default AddUser;
