import React from "react";

const Backdrop = ({ resetError }) => {
  return (
    <div
      onClick={resetError}
      className="fixed left-0 top-0 z-10 h-[100%] w-[100%] scale-[1.1] bg-[rgba(0,0,0,0.65)]"
    />
  );
};

export default Backdrop;
