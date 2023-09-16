import React from "react";

const Button = ({ type, children, className, onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`mx-auto my-5 mt-10 block rounded border-2 border-pink-200 bg-yellow-700 p-2 px-5 text-lg font-bold ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
