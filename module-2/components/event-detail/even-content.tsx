import React from "react";
import styled from "./event-content.module.css";

const EventContent = ({ children }: { children: React.ReactNode }) => {
  return <section className={styled.content}>{children}</section>;
};

export default EventContent;
