import React from "react";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import { Event } from "../../types/dummy-data.types";
import { useRouter } from "next/router";
import { getAllEvents } from "../../helpers/api-util";
import Head from "next/head";

const EventsPage = ({ events }: { events: Array<Event> }) => {
  const router = useRouter();

  const findEventsHandler = (year: string, month: string) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <div>
      <Head>
        <title>All Events</title>
        <meta name="description" content="Find a lot of great events" />
      </Head>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </div>
  );
};

export const getStaticProps = async () => {
  const events = await getAllEvents();

  return {
    props: {
      events: events,
    },
    revalidate: 60,
  };
};

export default EventsPage;
