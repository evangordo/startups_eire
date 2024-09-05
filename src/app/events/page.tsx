import { Box, Heading, VStack, SimpleGrid } from "@chakra-ui/react";

import EventCard from "../components/eventCard";

export default async function EventsPage() {
  return (
    <Box maxWidth="1200px" margin="auto" padding={8}>
      <Heading as="h1" size="xl" mb={8} textAlign="start">
        Startup Events in Dublin
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {/* {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))} */}
      </SimpleGrid>
    </Box>
  );
}
