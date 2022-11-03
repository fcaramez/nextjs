import { useRouter } from "next/router";
import React, { Fragment } from "react";
import EventContent from "../../components/event-detail/even-content";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventSummary from "../../components/event-detail/event-summary";
import ErrorAlert from "../../components/ui/error-alert";
import { getEventById } from "../../dummy-data";

const EventDetailPage = () => {
  const router = useRouter();
  const event = getEventById(router.query);
  console.log(event?.title);

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

export default EventDetailPage;
