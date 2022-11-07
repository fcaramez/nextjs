import React, { Fragment } from "react";
import EventContent from "../../components/event-detail/even-content";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventSummary from "../../components/event-detail/event-summary";
import ErrorAlert from "../../components/ui/error-alert";
import { getEventById, getFeaturedEvents } from "../../helpers/api-util";
import { Event } from "../../types/dummy-data.types";

const EventDetailPage = ({ event }: { event: Event }) => {
  return event ? (
    <Fragment>
      <EventSummary title={event?.title} />
      <EventLogistics event={event} />
      <EventContent>
        <p>{event?.description}</p>
      </EventContent>
    </Fragment>
  ) : (
    <div className="center">
      <p>Loading...</p>
    </div>
  );
};

export type Params = {
  params: {
    eventId: string;
  };
};

export const getStaticProps = async (context: Params) => {
  const event = await getEventById(context);

  return {
    props: {
      event: event,
    },
    revalidate: 30,
  };
};

export const getStaticPaths = async () => {
  const allEvents = await getFeaturedEvents();

  const paths = allEvents.map((event: Event) => ({
    params: { eventId: event.id },
  }));

  return {
    paths: paths,
    fallback: true,
  };
};

export default EventDetailPage;
