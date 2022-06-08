import React, { useEffect, useState, Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { useTransition, animated } from "react-spring";

type ToastStatus = {
  open: boolean;
  type: "success" | "warning" | "error";
  message: string;
};
function Toast() {
  const [status, setStatus] = useState<ToastStatus>(defaultProps);
  const transitions = useTransition(status.open, {
    from: { opacity: 0, height: 0 },
    enter: { opacity: 1, height: "fit-content" },
    leave: [{ opacity: 0 }, { height: 0 }],
  });

  useEffect(() => {
    if (status.open) {
      setTimeout(
        () => setStatus((current) => ({ ...current, open: false })),
        2000
      );
    }
  }, [status.open]);

  useEffect(() => {
    Toast.setStatus = setStatus;
  }, []);

  const { open, type, message } = status;
  return transitions(({ ...style }, open) =>
    open ? <ToastWrap style={style}>{message}</ToastWrap> : <></>
  );
}

Toast.success = function (message: string) {
  this.setStatus({
    open: true,
    type: "success",
    message,
  });
};

Toast.warning = function (message: string) {
  this.setStatus({
    open: true,
    type: "warning",
    message,
  });
};

Toast.error = function (message: string) {
  this.setStatus({
    open: true,
    type: "error",
    message,
  });
};

Toast.setStatus = function () {} as Dispatch<SetStateAction<ToastStatus>>;

const defaultProps: ToastStatus = {
  open: false,
  type: "success",
  message: "",
};

Toast.defaultProps = defaultProps;

const ToastWrap = styled(animated.div)`
  position: fixed;
  top: 12%;
  left: 50%;
  transform: translate(-50%, 0);
  height: fit-content;
  background-color: #ffcece;
  color: #cf0101;
  font-size: 14px;
  font-weight: 600;
  padding: 1.6rem 4rem;
  border-radius: 1rem;
`;

export default Toast;
