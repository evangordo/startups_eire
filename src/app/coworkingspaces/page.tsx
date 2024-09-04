"use client";
import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  Image,
  Divider,
} from "@chakra-ui/react";
import Link from "next/link";

import { COWORKING } from "../lib/data/coworking";
import { ExternalLinkIcon } from "@chakra-ui/icons";
export default function CoworkingSpaces() {
  return (
    <Box maxWidth="1200px" margin="auto" padding={8}>
      <Heading size="xl" mb={8}>
        Coworking Spaces
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {COWORKING.map((space, index) => (
          <Box
            key={index}
            borderWidth={1}
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            display="flex"
            flexDirection="column"
          >
            <Link href={space.link} target="_blank" rel="noopener noreferrer">
              <Image
                src={space.image}
                alt={space.name}
                height={200}
                width="100%"
                objectFit="cover"
              />

              <VStack
                align="stretch"
                p={4}
                flex={1}
                justifyContent="space-between"
              >
                <Box>
                  <Heading as="h3" size="md" mb={2}>
                    {space.name}
                  </Heading>
                  <Text fontSize="sm" color="gray.600" noOfLines={2}>
                    {space.address}
                  </Text>
                </Box>
                <Text fontSize="sm" color="blue.500" mt={4} mb={2} px={2}>
                  Visit <ExternalLinkIcon mb={1} />
                </Text>
              </VStack>
            </Link>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
