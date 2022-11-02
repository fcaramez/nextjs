import React from "react";
import { Event } from "../../types/dummy-data.types";
import styled from "./event-logistics.module.css";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import LogisticsItem from "./logistics-item";

const EventLogistics = ({ event }: { event: Event }) => {
  const { date, location, image, title } = event;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const locationText = location.replace(", ", "\n");

  return (
    <section className={styled.logistics}>
      <div className={styled.image}>
        <img src={`/${image}`} alt={title} />
      </div>
      <ul className={styled.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{locationText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
};

export default EventLogistics;
