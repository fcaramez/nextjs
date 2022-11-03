import { useRouter } from "next/router";
import React, { Fragment } from "react";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import { getFilteredEvents } from "../../dummy-data";
import ErrorAlert from "../../components/ui/error-alert";

const FilteredEventsPage = () => {
  const router = useRouter();

  const filterData = router.query.slug;

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
    <Fragment>
      <ErrorAlert>
        <p>Invalid filter, please adjust your values!</p>
        <div className="center">
          <Button link="/events">Show all events</Button>
        </div>
      </ErrorAlert>
    </Fragment>;
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
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
};

export default FilteredEventsPage;
