import {
  Box,
  Container,
  Heading,
  Flex,
  Text,
  Badge,
  IconButton,
  Avatar,
} from "@chakra-ui/react";
import { FaHeart, FaExternalLinkAlt } from "react-icons/fa";
import React from "react";

export default function JobsCard() {
  return (
    <Container maxW={"4xl"} mb={5}>
      <Box
        borderWidth={"1px"}
        borderColor={"gray.300"}
        borderRadius={"lg"}
        p={4}
        shadow={"md"}
      >
        <Flex justifyContent="space-between">
          <Box>
            <Flex alignItems="center">
              <Avatar src={`/logos/storehero.png`} />
              <Heading size="md" fontWeight="bold" ml={2}>
                Data Scientist II, Product
              </Heading>
              <IconButton
                icon={<FaExternalLinkAlt />}
                size="sm"
                variant="ghost"
                ml="auto"
                aria-label="Open job link"
              />
            </Flex>
            <Text color="gray.600">Google / Alphabet</Text>

            <Text color="gray.500" fontSize="sm">
              MOUNTAIN VIEW, CA, USA / NEW YORK, NY, USA
            </Text>
            <Text color="gray.500" fontSize="sm">
              20 hours ago
            </Text>
            <Text color="gray.700" mt={2}>
              $102K - $150K
            </Text>
            <Flex mt={3} gap={2}>
              <Badge colorScheme="blue" px={2}>
                Python
              </Badge>
              <Badge colorScheme="gray" px={2}>
                SQL
              </Badge>
              <Badge colorScheme="teal" px={2}>
                Android
              </Badge>
            </Flex>
          </Box>
          <IconButton
            icon={<FaHeart />}
            size="lg"
            variant="ghost"
            aria-label="Save job"
          />
        </Flex>
      </Box>
    </Container>
  );
}
