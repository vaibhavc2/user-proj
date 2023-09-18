import React from "react";
import Overlay from "./Overlay";
import Button from "./Button";

const ModalOverlay = ({ error, resetError }) => {
  return (
    <Overlay>
      <header className="bg-red-700 p-3 text-gray-100">
        <h2 className="text-center text-2xl font-bold">Error: {error.title}</h2>
      </header>

      <div>
        <p className="m-5 my-10 text-center text-lg font-semibold text-red-900">
          {error.message}
        </p>
      </div>

      <footer>
        <Button
          className="border-lime-200 bg-green-900 px-8 text-lg opacity-95"
          onClick={resetError}
        >
          Okay
        </Button>
      </footer>
    </Overlay>
  );
};

export default ModalOverlay;
