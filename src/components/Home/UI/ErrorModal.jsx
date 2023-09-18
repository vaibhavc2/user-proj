import React from "react";
import Backdrop from "./Backdrop";
import ModalOverlay from "./ModalOverlay";
import { createPortal } from "react-dom";

const ErrorModal = ({ error, resetError }) => {
  return (
    <>
      {createPortal(
        <Backdrop resetError={resetError} />,
        document.getElementById("backdrop-root")
      )}
      {createPortal(
        <ModalOverlay error={error} resetError={resetError} />,
        document.getElementById("overlay-root")
      )}
      {/* <Backdrop resetError={resetError} />
      <ModalOverlay error={error} resetError={resetError} /> */}
    </>
  );
};

export default ErrorModal;
