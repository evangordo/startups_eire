"use client";
import { useState } from "react";
import useSWR from "swr";
import Hero from "./components/hero";
import JobsCard from "./components/jobsCard";
import { Flex } from "@chakra-ui/react";
import { Container, SkeletonCircle } from "@chakra-ui/react";
import { SkeletonText } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

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

export default function Home() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const { data, error, isLoading } = useSWR("/api/fetch-jobs", fetcher);
  console.log("fetching data", data);

  return (
    <main>
      <Hero setSearch={setSearch} filter={filter} setFilter={setFilter} />
      {isLoading ? (
        <LoadingSkeletons />
      ) : (
        data?.map((job: Job) => <JobsCard key={job.id} job={job} />)
      )}
    </main>
  );
}

const LoadingSkeletons = () => {
  return (
    <>
      <Container
        maxW={"7xl"}
        mt={5}
        mb={5}
        display={"flex"}
        flexDirection={"column"}
        gap={5}
      >
        <Box padding="6" rounded={"xl"} boxShadow="lg" bg="white">
          <Flex alignItems={"center"} gap={5}>
            <SkeletonCircle size="28" />
            <Box flex="1">
              <SkeletonText
                mt="4"
                noOfLines={2}
                maxW={"40%"}
                spacing="4"
                skeletonHeight="10"
              />
            </Box>
          </Flex>

          <SkeletonText
            mt="4"
            noOfLines={2}
            spacing="4"
            skeletonHeight="4"
            maxW={"40%"}
          />
        </Box>
        <Box padding="6" rounded={"xl"} boxShadow="lg" bg="white">
          <Flex alignItems={"center"} gap={5}>
            <SkeletonCircle size="28" />
            <Box flex="1">
              <SkeletonText
                mt="4"
                noOfLines={2}
                maxW={"40%"}
                spacing="4"
                skeletonHeight="10"
              />
            </Box>
          </Flex>

          <SkeletonText
            mt="4"
            noOfLines={2}
            spacing="4"
            skeletonHeight="4"
            maxW={"40%"}
          />
        </Box>
        <Box padding="6" rounded={"xl"} boxShadow="lg" bg="white">
          <Flex alignItems={"center"} gap={5}>
            <SkeletonCircle size="28" />
            <Box flex="1">
              <SkeletonText
                mt="4"
                noOfLines={2}
                maxW={"40%"}
                spacing="4"
                skeletonHeight="10"
              />
            </Box>
          </Flex>

          <SkeletonText
            mt="4"
            noOfLines={2}
            spacing="4"
            skeletonHeight="4"
            maxW={"40%"}
          />
        </Box>
        <Box padding="6" rounded={"xl"} boxShadow="lg" bg="white">
          <Flex alignItems={"center"} gap={5}>
            <SkeletonCircle size="28" />
            <Box flex="1">
              <SkeletonText
                mt="4"
                noOfLines={2}
                maxW={"40%"}
                spacing="4"
                skeletonHeight="10"
              />
            </Box>
          </Flex>

          <SkeletonText
            mt="4"
            noOfLines={2}
            spacing="4"
            skeletonHeight="4"
            maxW={"40%"}
          />
        </Box>
      </Container>
    </>
  );
};
