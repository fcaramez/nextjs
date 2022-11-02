import React from "react";
import { Event } from "../../types/dummy-data.types";
import EventItem from "./event-item";
import styles from "./event-list.module.css";

const EventList = ({ items }: { items: Array<Event> }) => {
  return (
    <ul className={styles.list}>
      {items.map((event: Event) => {
        return <EventItem item={event} key={event.id} />;
      })}
    </ul>
  );
};

export default EventList;
