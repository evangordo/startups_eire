// export const fetchDublinStartupEvents = async () => {
//   const OAUTH_TOKEN = process.env.EVENTBRITE_OAUTH_TOKEN;

//   if (!OAUTH_TOKEN) {
//     throw new Error("Eventbrite OAuth token is not set");
//   }

//   const response = await fetch(
//     "https://www.eventbriteapi.com/v3/events/search/?q=startup&location.address=dublin&location.within=10km&sort_by=date",
//     {
//       headers: {
//         Authorization: `Bearer ${OAUTH_TOKEN}`,
//       },
//     }
//   );

//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }

//   const data = await response.json();
//   return data;
// };

import axios from "axios";

const EVENTBRITE_API_URL = "https://www.eventbriteapi.com/v3";
const CLIENT_ID = process.env.EVENTBRITE_CLIENT_ID;
const CLIENT_SECRET = process.env.EVENTBRITE_CLIENT_SECRET;

async function getAccessToken() {
  const response = await axios.post("https://www.eventbrite.com/oauth/token", {
    grant_type: "client_credentials",
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
  });

  return response.data.access_token;
}

export const fetchDublinStartupEvents = async () => {
  try {
    const accessToken = await getAccessToken();

    const response = await axios.get(`${EVENTBRITE_API_URL}/events/search/`, {
      params: {
        q: "startup",
        "location.address": "dublin",
        "location.within": "10km",
        sort_by: "date",
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error;
  }
};
