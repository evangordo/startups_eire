"use client";
import Image from "next/image";
import { Heading, Flex, Text, Button, useColorMode } from "@chakra-ui/react";
import JobsBoard from "./components/jobsBoard";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main>
      <JobsBoard />
    </main>
  );
}
