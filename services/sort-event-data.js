import { getAirtableEvents } from "../services/airtable";

export async function getAllEvents() {
  const ALL_EVENTS = await getAirtableEvents();
  const DESCI_EVENTS = ALL_EVENTS.filter((event) => event.approved);

  // let featuredEvents = DESCI_EVENTS.filter(
  //   (event) => !isInThePast(new Date(event.date))
  // );
  let featuredEvents = ALL_EVENTS.filter(
    (event) => event.isFeatured && !isInThePast(new Date(event.date))
  );

  let upcomingEvents = DESCI_EVENTS.filter(
    (event) => !isInThePast(new Date(event.date))
  );

  let pastEvents = DESCI_EVENTS.filter((event) =>
    isInThePast(new Date(event.date))
  );

  // sorting upcoming Events ascending
  let dateConvertedUpcoming = upcomingEvents.map((obj) => {
    return { ...obj, date: new Date(obj.date) };
  });
  let upcomingEventsAsc = dateConvertedUpcoming.sort(
    (objA, objB) => Number(objA.date) - Number(objB.date)
  );

  // sorting past Events descending
  let dateConvertedPast = pastEvents.map((obj) => {
    return { ...obj, date: new Date(obj.date) };
  });
  let pastEventsDesc = dateConvertedPast.sort(
    (objA, objB) => Number(objB.date) - Number(objA.date)
  );

  return { upcomingEventsAsc, pastEventsDesc, featuredEvents };
}

function isInThePast(date) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return date < today;
}
