"use client";
import { Flex, Heading, Text, Button } from "@chakra-ui/react";
import Image from "./image";
import Link from "next/link";
import github from "../assets/github.png";
export default function Navbar() {
  return (
    <Flex
      justifyContent="space-between"
      flexDirection="row"
      alignItems="center"
      width="100%"
    >
      <Heading p={8} color="blue.600">
        Dublin Startup Ecosystem
      </Heading>
      <Flex alignItems="center" p={8}>
        <Text fontSize="xl" mr={6}>
          <Link href="/">Jobs</Link>
        </Text>
        <Text fontSize="xl" mr={6}>
          <Link href="/events">Events</Link>
        </Text>
        <Text fontSize="xl" mr={6}>
          <Link href="/hackathons">Hackathons</Link>
        </Text>
        <Text fontSize="xl" mr={6}>
          <Link href="/coworkingspaces">Co-working</Link>
        </Text>
        <Button
          as={Link}
          href="https://github.com/startupsie/startupsie"
          colorScheme="blue"
          fontSize="xl"
          size="md"
          leftIcon={
            <Image
              p={2}
              src={github}
              alt="GitHub"
              width={12}
              height={12}
              // objectFit="cover"
            />
          }
        >
          <Text mr={4}>Contribute</Text>
        </Button>
      </Flex>
    </Flex>
  );
}
