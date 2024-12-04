"use client";
import { useEffect, useState } from "react";
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
  experience?: string;
}

export default function Home() {
  const { data, error, isLoading } = useSWR("/api/fetch-jobs", fetcher);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [experience, setExperience] = useState("");

  useEffect(() => {
    if (data) {
      setFilteredJobs(data);
    }
  }, [data]);

  const filterCategory = data?.filter((job: Job) =>
    filter === "All"
      ? true
      : job.category.toLowerCase() === filter.toLowerCase()
  );

  const filterSearch = filterCategory?.filter((job: Job) =>
    job.jobRole.toLowerCase().includes(search.toLowerCase())
  );

  const filterLocation = filterSearch?.filter((job: Job) =>
    job.location.toLowerCase().includes(location.toLowerCase())
  );

  const filterExperience = filterLocation?.filter((job: Job) =>
    job.experience?.toLowerCase().includes(experience.toLowerCase())
  );

  const handleSearch = () => {
    setFilteredJobs(filterExperience || []);
  };

  return (
    <main>
      <Hero
        setFilter={setFilter}
        filter={filter}
        setSearch={setSearch}
        handleSearch={handleSearch}
        setLocation={setLocation}
        setExperience={setExperience}
      />
      {isLoading ? (
        <LoadingSkeletons />
      ) : (
        filteredJobs.map((job: Job) => <JobsCard key={job.id} job={job} />)
      )}
    </main>
  );
}

const LoadingSkeletons = () => {
  return (
    <>
      <Container
        maxW={"8xl"}
        mt={5}
        mb={5}
        display={"flex"}
        flexDirection={"column"}
        gap={5}
      >
        <Box padding="6" rounded={"xl"} boxShadow="lg" bg="white">
          <Flex alignItems={"center"} gap={5}>
            <SkeletonCircle size="28" rounded="md" />
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
            <SkeletonCircle size="28" rounded="md" />
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
            <SkeletonCircle size="28" rounded="md" />
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
            <SkeletonCircle size="28" rounded="md" />
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
