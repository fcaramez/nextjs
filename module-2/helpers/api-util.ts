import { Event } from "../types/dummy-data.types";

export const getAllEvents = async (): Promise<Array<Event>> => {
  const response = await fetch(
    "https://nextjs-course-374d4-default-rtdb.europe-west1.firebasedatabase.app/events.json"
  );
  const data = await response.json();

  const events = [];

  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }

  return events;
};

export const getFeaturedEvents = async (): Promise<Array<Event>> => {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
};