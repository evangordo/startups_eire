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
  SimpleGrid,
} from "@chakra-ui/react";
import { FaArrowCircleUp, FaArrowUp, FaExternalLinkAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { FaCalendar } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { FaLaptop } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import ReactHtmlParser from "react-html-parser";

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
  experience?: string;
}

export default function JobsCard({ job }: { job: Job }) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const isDesktop = useBreakpointValue({
    base: false,
    md: true,
    lg: true,
    xl: true,
  });

  const DateToTimeAgo = (date: string) => {
    const now = new Date();
    const then = new Date(date);

    const diffTime = Math.abs(now.getTime() - then.getTime());
    const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
    const diffDays = Math.floor(diffHours / 24);

    if (diffHours < 1) {
      return "Just now";
    }

    if (diffHours === 1) {
      return "1 hour ago";
    }

    if (diffDays === 0) {
      return `${diffHours} hours ago`;
    }

    return `${diffDays} days ago`;
  };

  const firstLetterCapital = (word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

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
                  <Text color="gray.600" fontSize="lg" fontWeight="medium">
                    {firstLetterCapital(job.location)}
                  </Text>
                </Flex>
                <Flex alignItems="center" gap={2}>
                  <FaCalendar size={18} color="#4A5568" />
                  <Text color="gray.600" fontSize="lg" fontWeight="medium">
                    {DateToTimeAgo(job.createdAt)}
                  </Text>
                </Flex>
                <Flex alignItems="center" gap={2}>
                  <FaLaptop size={18} color="#4A5568" />
                  <Text color="gray.600" fontSize="lg" fontWeight="medium">
                    {job.remoteFriendly}
                  </Text>
                </Flex>
                <Flex alignItems="center" gap={2}>
                  <FaBriefcase size={18} color="#4A5568" />
                  <Text color="gray.600" fontSize="lg" fontWeight="medium">
                    {job.experience}
                  </Text>
                </Flex>
                <Flex alignItems="center" gap={2}>
                  <MdCategory size={20} color="#4A5568" />
                  <Text color="gray.600" fontSize="lg" fontWeight="medium">
                    {job.category}
                  </Text>
                </Flex>
              </Flex>

              {isDesktop ? (
                <Flex mt={6} gap={3} flexWrap="wrap">
                  {job.tags.map((tag: string) => (
                    <Badge
                      key={tag}
                      bg="#2a7879"
                      color="white"
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
              rightIcon={
                isDesktop ? (
                  isExpanded ? (
                    <FaArrowCircleUp />
                  ) : (
                    <FaArrowCircleDown />
                  )
                ) : undefined
              }
              bg="#2a7879"
              color="white"
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
              {/* {isExpanded
                ? "Hide Details"
                : isDesktop
                ? "View Details"
                : "View"} */}

              {isExpanded
                ? isDesktop
                  ? "Hide Details"
                  : "Hide"
                : isDesktop
                ? "View Details"
                : "View"}
            </Button>
          </Flex>
        </Box>

        {isExpanded && (
          <Box borderTop="1px" borderColor="gray.200" bg="gray.50" p={8}>
            <SimpleGrid
              columns={{ base: 1, md: 2 }}
              spacing={{ base: 6, md: 8, lg: 8 }}
            >
              <Box>
                <Heading size={{ base: "md", md: "lg", lg: "lg" }} mb={4}>
                  About the Company
                </Heading>
                <Box
                  bg="#f4f5ef"
                  p={8}
                  borderRadius="lg"
                  border="1px"
                  borderColor="gray.200"
                  shadow="md"
                >
                  <Text
                    color="black"
                    fontSize={{ base: "md", md: "lg" }}
                    mb={6}
                  >
                    {ReactHtmlParser(job.companyDescription)}
                  </Text>
                </Box>
              </Box>

              <Box>
                <Heading size={{ base: "md", md: "lg", lg: "lg" }} mb={4}>
                  About the Job
                </Heading>
                <Box
                  bg="#f4f5ef"
                  p={{ base: 6, md: 8, lg: 8 }}
                  borderRadius="lg"
                  border="1px"
                  borderColor="gray.200"
                  shadow="md"
                >
                  <Text
                    color="black"
                    fontSize={{ base: "md", md: "lg" }}
                    mb={6}
                  >
                    {ReactHtmlParser(job.jobDescription)}
                  </Text>
                </Box>
              </Box>
            </SimpleGrid>

            <Button
              as="a"
              href={job.applicationLink}
              target="_blank"
              rel="noopener noreferrer"
              bg="#2a7879"
              color="white"
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
        )}
      </Box>
    </Container>
  );
}
