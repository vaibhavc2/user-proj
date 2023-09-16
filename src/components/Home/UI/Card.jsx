import React from "react";

const Card = ({ children, className }) => {
  return (
    <div
      className={`mx-8 my-20 max-w-[40rem] rounded bg-purple-800 sm:mx-auto ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
