"use client";
import { Flex, Heading, Text, Button, Icon } from "@chakra-ui/react";
import Image from "./image";
import Link from "next/link";

import { FaGithub } from "react-icons/fa";

export default function Navbar() {
  return (
    <Flex
      justifyContent="space-between"
      flexDirection="row"
      alignItems="center"
      width="100%"
    >
      <Heading
        p={8}
        bgGradient="linear(to-r, #00529F, #0095C8)"
        bgClip="text"
        fontSize="4xl"
        fontWeight="extrabold"
      >
        <Link href="/"> Dublin Startup Ecosystem ☘️</Link>
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
            <Icon
              p={2}
              as={FaGithub}
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
