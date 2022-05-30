import React from "react";
import { Toast, ToastBody, ToastHeader } from "react-bootstrap";

const PopUp = ({ show = false, onClose = () => {}, children, header }) => {
  // Faruk's part
  return (
    <div className="d-flex justify-content-center">
      <Toast
        onClose={onClose}
        show={show}
        title="Bootstrap React"
        autohide={true}
        animation={true}
        delay={3500}
        className="zindex-popover position-absolute"
      >
        <ToastHeader>
          <svg
            className="rounded me-2"
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
          >
            <rect width="100%" height="100%" fill="#007aff"></rect>
          </svg>
          <strong className="me-auto">{header}</strong>
        </ToastHeader>
        <ToastBody className="text-center">{children}</ToastBody>
      </Toast>
    </div>
  );
};

export default PopUp;
