import { useRouter } from "next/router";
import React, { Fragment } from "react";
import EventContent from "../../components/event-detail/even-content";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventSummary from "../../components/event-detail/event-summary";
import ErrorAlert from "../../components/ui/error-alert";
import { getAllEvents, getEventById } from "../../helpers/api-util";
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
    <ErrorAlert>
      <p className="center">No Event found!</p>
    </ErrorAlert>
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
  };
};

export const getStaticPaths = async () => {
  const allEvents = await getAllEvents();

  const paths = allEvents.map((event: Event) => ({
    params: { eventId: event.id },
  }));

  return {
    paths: paths,
    fallback: false,
  };
};

export default EventDetailPage;
