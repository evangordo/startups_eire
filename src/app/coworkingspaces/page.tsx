import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";

import { COWORKING } from "../coworking";
export default function CoworkingSpaces() {
  return (
    <Box maxWidth="1200px" margin="auto" padding={8}>
      <Heading as="h1" size="2xl" mb={8}>
        Coworking Spaces in Dublin
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {COWORKING.map((space, index) => (
          <Box
            key={index}
            borderWidth={1}
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
          >
            <Link href={space.link} target="_blank" rel="noopener noreferrer">
              <Image
                src={space.image}
                alt={space.name}
                height={200}
                width="100%"
                objectFit="contain"
                p={4}
              />
            </Link>
            <VStack align="start" p={4}>
              <Heading as="h3" size="lg">
                {space.name}
              </Heading>
              <Text>{space.address}</Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
