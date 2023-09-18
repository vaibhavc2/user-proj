import React, { useRef, useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = ({ onAddUser, giveError }) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  // useRef returns an object which is the actual node: access it using .current

  const specialChars = /[ `!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/;

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      giveError(`Invalid Inputs`, `Enter both the fields!`);
      return;
    } else if (!isNaN(enteredName[0])) {
      giveError(`Invalid Inputs`, `Username must not start with a number!`);
      return;
    } else if (+enteredAge > 80 || +enteredAge < 5) {
      // (+ is appended for typecasting to number)
      giveError(`Invalid Inputs`, `Age must be between 5 years to 80 years!`);
      return;
    } else if (specialChars.test(enteredName)) {
      giveError(
        `Invalid Inputs`,
        `Username must not contain any special characters!`
      );
      return;
    } else {
      onAddUser(enteredName, enteredAge);
      // Bad idea to manipulate the DOM manually!! but can do it here, it's an edge case so it is fine
      nameInputRef.current.value = "";
      ageInputRef.current.value = "";
    }
  };

  return (
    <>
      <Card className="h-[300px]">
        <form onSubmit={submitHandler}>
          <label className="form-label pt-4" htmlFor="username">
            Username
          </label>
          {/* input/element using 'ref' is called: Uncontrolled element because react is not controlling its state */}
          <input
            className="form-input"
            type="text"
            id="username"
            ref={nameInputRef}
          />

          <label className="form-label" htmlFor="age">
            Age (years)
          </label>
          <input
            className="form-input"
            type="number"
            id="age"
            ref={ageInputRef}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
