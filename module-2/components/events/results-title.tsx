import React from "react";
import Button from "../ui/button";
import styled from "./results-title.module.css";

const ResultsTitle = ({ date }: { date: Date }) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <section className={styled.title}>
      <h1>Events in {formattedDate}</h1>
      <Button link="/events">Show all events</Button>
    </section>
  );
};

export default ResultsTitle;
