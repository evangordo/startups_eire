import { Box, Heading, VStack, SimpleGrid } from "@chakra-ui/react";

import EventCard from "../components/eventCard";
import { fetchDublinStartupEvents } from "../lib/data";

export default async function EventsPage() {
  const events = await fetchDublinStartupEvents();

  return (
    <Box maxWidth="1200px" margin="auto" padding={8}>
      <Heading as="h1" size="2xl" mb={8} textAlign="center">
        Startup Events in Dublin
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
