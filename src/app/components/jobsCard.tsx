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

interface Job {
  id: string;
  jobRole: string;
  companyName: string;
  location: string;
  createdAt: string;
  logo: string;
  tags: string[];
}

export default function JobsCard({ job }: { job: Job }) {
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
              <Avatar src={job.logo} size="lg" />
              <Heading size="lg" fontWeight="bold" ml={3}>
                {job.jobRole}
              </Heading>
            </Flex>
            <Text color="gray.700" mt={2} fontSize="lg">
              {job.companyName}
            </Text>
            <Flex alignItems="center" mt={2} gap={2}>
              <IoLocation />
              <Text color="gray.600" fontSize="md">
                {job.location}
              </Text>
            </Flex>
            <Flex alignItems="center" gap={2} mt={2}>
              <FaClock color="black" />
              <Text color="gray.600" fontSize="md">
                {job.createdAt}
              </Text>
            </Flex>

            <Flex mt={4} gap={3}>
              {job.tags.map((tag: string) => (
                <Badge
                  key={tag}
                  colorScheme="blue"
                  px={3}
                  py={1}
                  borderRadius="full"
                >
                  {tag}
                </Badge>
              ))}
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
