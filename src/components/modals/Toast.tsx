import React, { useEffect, useState, Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { useTransition, animated } from "react-spring";
import cn from "classnames";

type ToastStatus = {
  open: boolean;
  type: ToastType;
  message: string;
};

type StyleProp = {
  type: ToastType;
};

type ToastType = "success" | "warning" | "error";

const color = {
  error: {
    text: "#cf0101",
    background: "#ffcece",
  },
  warning: {
    text: "#fcb119",
    background: "#fff3d4",
  },
  success: {
    text: "#3fbf6e",
    background: "#d5f5e1",
  },
} as const;

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

  const { type, message } = status;
  return transitions(({ ...style }, open) =>
    open ? (
      <ToastWrap style={style} type={type}>
        <i
          className={cn(
            "fa-solid",
            { "fa-circle-exclamation": type === "error" },
            { "fa-triangle-exclamation": type === "warning" },
            { "fa-circle-check": type === "success" }
          )}
        ></i>
        {message}
      </ToastWrap>
    ) : (
      <></>
    )
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

const ToastWrap = styled(animated.div)<StyleProp>`
  position: fixed;
  top: 12%;
  left: 50%;
  transform: translate(-50%, 0);
  height: fit-content;
  background-color: ${({ type }) => color[type].background};
  color: ${({ type }) => color[type].text};
  font-size: 14px;
  font-weight: 600;
  padding: 1.6rem 4rem;
  border-radius: 1rem;
  i {
    font-size: 16px;
    margin-right: 0.8rem;
  }
`;

export default Toast;
