import {
  Box,
  Container,
  Heading,
  Flex,
  Text,
  Badge,
  Avatar,
  Button,
  useBreakpointValue,
  HStack,
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
  const isDesktop = useBreakpointValue({
    base: false,
    md: true,
    lg: true,
    xl: true,
  });

  return (
    <Container maxW={"8xl"} mt={5} mb={5}>
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
                  size={{ base: "lg", md: "lg", lg: "xl" }}
                  border="2px"
                  borderColor="gray.200"
                  borderRadius="lg"
                  shadow="md"
                />

                <Box ml={4}>
                  <Heading
                    size={{ base: "md", md: "lg", lg: "xl" }}
                    fontWeight="extrabold"
                    letterSpacing="tight"
                    color="gray.800"
                    borderRadius="lg"
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

              {isDesktop ? (
                <Flex mt={6} gap={3} flexWrap="wrap">
                  {job.tags.map((tag: string) => (
                    <Badge
                      key={tag}
                      colorScheme="teal"
                      px={4}
                      py={1.5}
                      borderRadius="full"
                      fontSize="md"
                      fontWeight="medium"
                      textTransform="capitalize"
                      shadow="md"
                    >
                      {tag}
                    </Badge>
                  ))}
                </Flex>
              ) : (
                <HStack mt={2} spacing={3}>
                  {job.tags.map((tag: string) => (
                    <Badge
                      key={tag}
                      colorScheme="teal"
                      px={4}
                      py={1.5}
                      borderRadius="full"
                      fontSize="md"
                      fontWeight="medium"
                      textTransform="capitalize"
                      shadow="md"
                    >
                      {tag}
                    </Badge>
                  ))}
                </HStack>
              )}
            </Box>

            <Button
              rightIcon={isDesktop ? <FaArrowCircleDown /> : undefined}
              colorScheme="teal"
              size={{ base: "md", md: "lg", lg: "xl" }}
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
              {isExpanded
                ? "Hide Details"
                : isDesktop
                ? "View Details"
                : "View"}
            </Button>
          </Flex>
        </Box>

        {isExpanded && (
          <Box borderTop="1px" borderColor="gray.200" bg="gray.50" p={8}>
            <Flex gap={8}>
              <Box>
                <Heading size="md" mb={4}>
                  About the Company
                </Heading>
                <Box
                  bg="#f4f5ef"
                  p={4}
                  borderRadius="lg"
                  border="1px"
                  borderColor="gray.200"
                  shadow="md"
                >
                  <Text color="gray.600" mb={6}>
                    {job.companyDescription}
                  </Text>
                </Box>

                <Heading size="md" mb={4} mt={8}>
                  About the Job
                </Heading>
                <Box
                  bg="#f4f5ef"
                  p={4}
                  borderRadius="lg"
                  border="1px"
                  borderColor="gray.200"
                  shadow="md"
                >
                  <Text color="gray.600" mb={6}>
                    {job.jobDescription}
                  </Text>
                </Box>
              </Box>

              <Box flex="1">
                <Heading size="md" mb={4}>
                  Remote Friendly
                </Heading>
                <Box
                  bg="#f4f5ef"
                  p={4}
                  borderRadius="lg"
                  border="1px"
                  borderColor="gray.200"
                  shadow="md"
                >
                  <Text color="gray.600" mb={6}>
                    {job.remoteFriendly}
                  </Text>
                </Box>

                <Button
                  as="a"
                  size={{ base: "md", md: "lg", lg: "xl" }}
                  href={job.applicationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  colorScheme="teal"
                  width="full"
                  mt={8}
                  rightIcon={<FaExternalLinkAlt />}
                  _hover={{
                    transform: "translateY(-2px)",
                    boxShadow: "lg",
                  }}
                  _active={{
                    transform: "translateY(0)",
                  }}
                  transition="all 0.2s"
                  aria-label={`Apply for ${job.jobRole} position at ${job.companyName}`}
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
