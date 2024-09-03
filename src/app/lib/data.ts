//www.eventbrite.ie/d/ireland--dublin/startup/

//failteireland.azure-api.net/opendata-api/v2/events

https: const fetchDublinStartupEvents = async () => {
  const response = await fetch(
    "https://www.eventbriteapi.com/v3/users/me/events/startups-dublin",
    {
      headers: {
        Authorization: `Bearer ${process.env.EVENTBRITE_API_KEY}`,
      },
    }
  );
  const data = await response.json();
  return data;
};
