"use client";
import Image from "next/image";
import { Heading, Flex, Text, Button, useColorMode } from "@chakra-ui/react";
import JobsBoard from "./components/jobsBoard";

export default function Home() {
  return (
    <main>
      <Text fontSize="md" textAlign="center" mb={4}>
        Open source project - Help to grow the Dublin startup ecosystem
      </Text>
      <JobsBoard />
    </main>
  );
}
