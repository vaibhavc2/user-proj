import React from "react";
import Card from "./Card";

const Overlay = ({ children }) => {
  return (
    <Card className="absolute left-1/2 top-1/3 z-50 mx-auto block w-[80%] translate-x-[-50%] translate-y-[-50%] overflow-hidden bg-pink-200">
      {children}
    </Card>
  );
};

export default Overlay;
