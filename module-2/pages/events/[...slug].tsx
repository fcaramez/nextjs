import { useRouter } from "next/router";
import React, { Fragment, useState, useEffect } from "react";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import { getFilteredEvents } from "../../dummy-data";
import ErrorAlert from "../../components/ui/error-alert";
import useSWR from "swr";
import { Event } from "../../types/dummy-data.types";
import Head from "next/head";

const FilteredEventsPage = () => {
  const router = useRouter();
  const [loadedEvents, setLoadedEvents] = useState<Array<Event>>();

  const filterData = router.query.slug;

  const { data, error } = useSWR(
    "https://nextjs-course-374d4-default-rtdb.europe-west1.firebasedatabase.app/events.json"
  );

  useEffect(() => {
    if (data) {
      const events = [];

      for (const key in data) {
        events.push({
          id: key,
          ...data[key],
        });
      }

      setLoadedEvents(events);
    }
  }, [data]);

  if (!filterData) {
    return (
      <Fragment>
        <p className="center">Loading...</p>
      </Fragment>
    );
  }

  const filterYear = Number(filterData[0]);
  const filterMonth = Number(filterData[1]);

  const filteredEvents = getFilteredEvents({
    year: filterYear,
    month: filterMonth,
  });

  if (
    isNaN(filterYear) ||
    isNaN(filterMonth) ||
    filterYear > 2030 ||
    filterYear < 2021 ||
    filterMonth < 1 ||
    filterMonth > 12
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid filter, please adjust your values!</p>
          <div className="center">
            <Button link="/events">Show all events</Button>
          </div>
        </ErrorAlert>
      </Fragment>
    );
  }

  const date = new Date(filterYear, filterMonth - 1);

  if (filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p className="center">
            No events found, please ajust your filter query!
          </p>
          <div className="center">
            <Button link="/events">Show all events</Button>
          </div>
        </ErrorAlert>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Head>
        <title>Filtered Events</title>
        <meta
          name="description"
          content={`All events for ${filterMonth}/${filterYear}`}
        />
      </Head>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
};

export default FilteredEventsPage;
