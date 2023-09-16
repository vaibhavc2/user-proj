import React from "react";
import Card from "../UI/Card";
import { v4 as uuidv4 } from "uuid";

const UsersList = ({ usersList }) => {
  return (
    <Card className="pb-5">
      <h1 className="py-5 text-center text-xl font-bold underline">
        Added Users
      </h1>
      <ul className="flex flex-col items-center ">
        {usersList.map((user) => (
          <li
            key={uuidv4()}
            className="mb-4 block w-[96%] rounded border-[2px] border-red-300 bg-red-800 py-2 text-center font-semibold text-yellow-300 sm:w-[90%]"
          >
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
