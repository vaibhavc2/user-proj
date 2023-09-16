import React, { useState } from "react";
import Card from "../UI/Card";

const AddUser = () => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState();

  const submitHandler = (e) => {
    e.preventDefault();

    window.alert(`Name: ${username}\nAge: ${age}`);
  };

  return (
    <Card className="mx-8 my-20 h-[300px] max-w-[40rem] rounded bg-purple-800 sm:mx-auto ">
      <form onSubmit={submitHandler}>
        <label className="form-label pt-4" htmlFor="username">
          Username
        </label>
        <input
          className="form-input"
          type="text"
          id="username"
          onChange={(e) => setUsername(e.target.value)}
          // value={username}
        />

        <label className="form-label" htmlFor="age">
          Age (years)
        </label>
        <input
          className="form-input"
          type="number"
          id="age"
          onChange={(e) => setAge(e.target.value)}
          // value={age}
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
