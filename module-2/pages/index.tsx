import React from "react";
import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/events/event-list";
import { Event } from "../types/dummy-data.types";

const HomePage = ({ events }: { events: Array<Event> }) => {
  // const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <EventList items={events} />
    </div>
  );
};

export default HomePage;

export const getStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
  };
};
