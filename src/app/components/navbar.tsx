"use client";
import { Flex, Heading, Text, Button, useColorMode } from "@chakra-ui/react";

import Link from "next/link";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      justifyContent="space-between"
      flexDirection="row"
      alignItems="center"
      width="100%"
      gap={6}
    >
      <Heading
        p={8}
        bgGradient="linear(to-r, #00529F, #0095C8)"
        bgClip="text"
        fontSize="4xl"
        fontWeight="extrabold"
      >
        <Link href="/"> Dublin Startups</Link>
      </Heading>
      <Flex alignItems="center" p={8}>
        <Text fontSize="xl" mr={6}>
          <Link href="/">Jobs</Link>
        </Text>
        <Text fontSize="xl" mr={6}>
          <Link href="/events">Events</Link>
        </Text>

        <Button
          mr={6}
          as={Link}
          href="/uploadstartup"
          colorScheme="blue"
          fontSize="xl"
          size="md"
        >
          <Text>Contribute</Text>
        </Button>

        {/* <Box mr={6}> */}
        <Button onClick={toggleColorMode} variant="ghost" mr={4} size="md">
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Flex>
    </Flex>
  );
}
