import { Box, Image, Text, VStack, Badge } from "@chakra-ui/react";

interface EventCardProps {
  event: {
    id: string;
    title: string;
    date: string;
    imageUrl: string;
    description: string;
  };
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={event.imageUrl} alt={event.title} />
      <VStack align="start" p={4} spacing={2}>
        <Badge colorScheme="teal">{event.date}</Badge>
        <Text fontWeight="bold" fontSize="xl">
          {event.title}
        </Text>
        <Text noOfLines={3}>{event.description}</Text>
      </VStack>
    </Box>
  );
}
