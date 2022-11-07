import React from "react";
import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/events/event-list";
import { Event } from "../types/dummy-data.types";
import Head from "next/head";

const HomePage = ({ events }: { events: Array<Event> }) => {
  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta name="description" content="Find a lot of great events" />
      </Head>
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
    revalidate: 1800,
  };
};
