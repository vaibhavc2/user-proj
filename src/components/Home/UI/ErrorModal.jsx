import React from "react";
import Card from "./Card";
import Button from "./Button";

const ErrorModal = ({ error, resetError }) => {
  return (
    <>
      <div
        onClick={resetError}
        className="fixed left-0 top-0 z-10 h-[100%] w-[100%] scale-[1.1] bg-[rgba(0,0,0,0.65)]"
      >
        <Card className="absolute left-1/2 top-1/3 z-50 mx-auto block w-[80%] translate-x-[-50%] translate-y-[-50%] overflow-hidden bg-pink-200">
          <header className="bg-red-700 p-3 text-gray-100">
            <h2 className="text-center text-2xl font-bold">
              Error: {error.title}
            </h2>
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
        </Card>
      </div>
    </>
  );
};

export default ErrorModal;
