export const fetchDublinStartupEvents = async () => {
  const response = await fetch(
    "https://www.eventbriteapi.com/v3/events/search/?q=startup&location.address=dublin",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.EVENTBRITE_API_KEY}`,
      },
    }
  );
  const data = await response.json();

  return data;
};
