"use client";
import {
  Flex,
  Heading,
  Text,
  Button,
  Icon,
  Box,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { Arrow } from "./arrow";
import Image from "./image";
import Link from "next/link";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

import { FaGithub } from "react-icons/fa";

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
        <Link href="/"> Dublin Startup Ecosystem</Link>
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
        <Button onClick={toggleColorMode} variant="ghost" mr={6} size="md">
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
        {/* </Box> */}

        {/* <Box position={"relative"}> */}
        {/* <Icon
            as={Arrow}
            color={"white"}
            w={77}
            position={"absolute"}
            right={68}
            bottom={"-20px"}
          />
          <Text fontSize={"lg"} ml={9} transform={"rotate(20deg)"}>
            Add a Startup
          </Text> */}
        {/* </Box> */}
      </Flex>
    </Flex>
  );
}
