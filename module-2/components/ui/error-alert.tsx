import React from "react";
import styled from "./error-alert.module.css";

const ErrorAlert = ({ children }: { children: React.ReactNode }) => {
  return <div className={styled.alert}>{children}</div>;
};

export default ErrorAlert;
