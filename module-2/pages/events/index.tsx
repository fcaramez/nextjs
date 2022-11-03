import React from "react";
import EventList from "../../components/events/event-list";
import { getAllEvents, getFilteredEvents } from "../../dummy-data";
import EventsSearch from "../../components/events/events-search";
import { Event } from "../../types/dummy-data.types";
import { useRouter } from "next/router";

const EventsPage = () => {
  const events = getAllEvents();
  const router = useRouter();

  const findEventsHandler = (year: string, month: string) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <div>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </div>
  );
};

export default EventsPage;
