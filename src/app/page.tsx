"use client";
import Image from "next/image";
import { Heading, Flex, Text, Button, useColorMode } from "@chakra-ui/react";
import JobsBoard from "./components/jobsBoard";
import Link from "next/link";
import github from "./assets/github.png";

export default function Home() {
  return (
    <main>
      <Flex
        justifyContent="space-between"
        flexDirection="row"
        alignItems="center"
        width="100%"
      >
        <Heading p={8} color="blue.600">
          Dublin Startups Job Hub
        </Heading>
        <Flex alignItems="center" p={8}>
          <Text fontSize="xl" mr={6}>
            Co-working Spaces
          </Text>
          <Button
            as={Link}
            href="https://github.com/startupsie/startupsie"
            colorScheme="blue"
            size="md"
            leftIcon={
              <Image src={github} alt="GitHub" width={20} height={20} />
            }
          >
            Contribute on GitHub
          </Button>
        </Flex>
      </Flex>
      <Text fontSize="md" textAlign="center" mb={4}>
        Open source project - Help to grow the Dublin startup ecosystem
      </Text>
      <JobsBoard />
    </main>
  );
}
