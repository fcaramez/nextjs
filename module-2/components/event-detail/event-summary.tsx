import React from "react";
import styled from "./event-summary.module.css";

const EventSummary = ({ title }: { title: string | undefined }) => {
  return (
    <section className={styled.summary}>
      <h1>{title}</h1>
    </section>
  );
};

export default EventSummary;
