import {
  Box,
  Container,
  Heading,
  Flex,
  Text,
  Badge,
  IconButton,
  Avatar,
  Button,
} from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { FaClock } from "react-icons/fa";

import React from "react";

export default function JobsCard() {
  return (
    <Container maxW={"4xl"} mt={5} mb={5}>
      <Box
        borderWidth={"1px"}
        borderColor={"gray.300"}
        borderRadius={"lg"}
        p={6}
        shadow={"lg"}
        color={"black"}
        bg="white"
      >
        <Flex justifyContent="space-between" alignItems="center">
          <Box>
            <Flex alignItems="center">
              <Avatar src={`/logos/storehero.png`} size="lg" />
              <Heading size="lg" fontWeight="bold" ml={3}>
                Data Scientist II, Product
              </Heading>
            </Flex>
            <Text color="gray.700" mt={2} fontSize="lg">
              Google / Alphabet
            </Text>
            <Flex alignItems="center" mt={2} gap={2}>
              <IoLocation />
              <Text color="gray.600" fontSize="md">
                MOUNTAIN VIEW, CA, USA / NEW YORK, NY, USA
              </Text>
            </Flex>
            <Flex alignItems="center" gap={2} mt={2}>
              <FaClock color="black" />
              <Text color="gray.600" fontSize="md">
                20 hours ago
              </Text>
            </Flex>

            <Flex mt={4} gap={3}>
              <Badge colorScheme="blue" px={3} py={1} borderRadius="full">
                Python
              </Badge>
              <Badge colorScheme="gray" px={3} py={1} borderRadius="full">
                SQL
              </Badge>
              <Badge colorScheme="teal" px={3} py={1} borderRadius="full">
                Android
              </Badge>
            </Flex>
          </Box>
          <Button
            rightIcon={<FaExternalLinkAlt />}
            colorScheme="teal"
            variant="solid"
            ml="auto"
            aria-label="Open job link"
          >
            Apply Now
          </Button>
        </Flex>
      </Box>
    </Container>
  );
}
