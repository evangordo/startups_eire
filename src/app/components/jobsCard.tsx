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
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { FaCalendar } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { FaArrowCircleDown } from "react-icons/fa";

import React from "react";

interface Job {
  id: string;
  jobRole: string;
  companyName: string;
  location: string;
  createdAt: string;
  logo: string;
  tags: string[];
  companyDescription: string;
  jobDescription: string;
  applicationLink: string;
  remoteFriendly: string;
  category: string;
}

export default function JobsCard({ job }: { job: Job }) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <Container maxW={"7xl"} mt={5} mb={5}>
      <Box
        borderWidth={"1px"}
        borderColor={"gray.200"}
        borderRadius={"xl"}
        shadow={"md"}
        color={"black"}
        bg="white"
        overflow="hidden"
      >
        <Box p={8}>
          <Flex justifyContent="space-between" alignItems="flex-start">
            <Box flex="1">
              <Flex alignItems="center">
                <Avatar
                  src={job.logo}
                  size="xl"
                  border="2px"
                  borderColor="gray.200"
                />
                <Box ml={4}>
                  <Heading
                    size="lg"
                    fontWeight="extrabold"
                    letterSpacing="tight"
                    color="gray.800"
                  >
                    {job.jobRole}
                  </Heading>
                  <Text
                    color="gray.600"
                    fontSize="xl"
                    fontWeight="medium"
                    mt={1}
                  >
                    {job.companyName}
                  </Text>
                </Box>
              </Flex>

              <Flex mt={6} gap={6} flexWrap="wrap">
                <Flex alignItems="center" gap={2}>
                  <IoLocation size={20} color="#4A5568" />
                  <Text color="gray.600" fontSize="md" fontWeight="medium">
                    {job.location}
                  </Text>
                </Flex>
                <Flex alignItems="center" gap={2}>
                  <FaCalendar size={18} color="#4A5568" />
                  <Text color="gray.600" fontSize="md" fontWeight="medium">
                    {job.createdAt}
                  </Text>
                </Flex>
                <Flex alignItems="center" gap={2}>
                  <MdCategory size={20} color="#4A5568" />
                  <Text color="gray.600" fontSize="md" fontWeight="medium">
                    {job.category}
                  </Text>
                </Flex>
              </Flex>

              <Flex mt={6} gap={3} flexWrap="wrap">
                {job.tags.map((tag: string) => (
                  <Badge
                    key={tag}
                    colorScheme="blue"
                    px={4}
                    py={1.5}
                    borderRadius="full"
                    fontSize="sm"
                    fontWeight="medium"
                    textTransform="capitalize"
                  >
                    {tag}
                  </Badge>
                ))}
              </Flex>
            </Box>

            <Button
              rightIcon={<FaArrowCircleDown />}
              colorScheme="teal"
              size="lg"
              px={8}
              py={6}
              fontWeight="bold"
              onClick={() => setIsExpanded(!isExpanded)}
              _hover={{
                transform: "translateY(-1px)",
                shadow: "md",
              }}
              aria-label="Toggle job details"
            >
              {isExpanded ? "Hide Details" : "View Details"}
            </Button>
          </Flex>
        </Box>

        {isExpanded && (
          <Box borderTop="1px" borderColor="gray.200" bg="gray.50" p={8}>
            <Flex gap={8}>
              <Box flex="1">
                <Heading size="md" mb={4}>
                  About the Company
                </Heading>
                <Text color="gray.600" mb={6}>
                  {job.companyDescription}
                </Text>

                <Heading size="md" mb={4}>
                  About the Job
                </Heading>
                <Text color="gray.600" mb={6}>
                  {job.jobDescription}
                </Text>
              </Box>

              <Box flex="1">
                <Heading size="md" mb={4}>
                  Remote Friendly
                </Heading>
                <Text color="gray.600" mb={6}>
                  {job.remoteFriendly}
                </Text>

                <Button
                  colorScheme="teal"
                  size="lg"
                  width="full"
                  mt={8}
                  rightIcon={<FaExternalLinkAlt />}
                >
                  Apply Now
                </Button>
              </Box>
            </Flex>
          </Box>
        )}
      </Box>
    </Container>
  );
}
