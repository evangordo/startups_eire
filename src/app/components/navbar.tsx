"use client";
import {
  Flex,
  Heading,
  Text,
  Button,
  Divider,
  useBreakpointValue,
} from "@chakra-ui/react";
import se from "../assets/se.png";
import Link from "next/link";
import Image from "./image";

export default function Navbar() {
  const isDesktop = useBreakpointValue({
    base: false,
    md: true,
    lg: true,
    xl: true,
  });

  return (
    <>
      <Flex
        justifyContent="space-between"
        flexDirection="row"
        alignItems="center"
        width="100%"
        gap={6}
      >
        <Flex alignItems="center" gap={-4}>
          <Link href="/">
            <Image
              src={se}
              alt="Startups Eire"
              p={2}
              width={{ base: 90, md: 100, lg: 100 }}
              height={{ base: 90, md: 100, lg: 100 }}
            />
          </Link>
          {isDesktop && (
            <Heading
              p={2}
              bgGradient="linear(to-r, #2c797b, #2c797b)"
              bgClip="text"
              fontSize="4xl"
              fontWeight="extrabold"
            >
              <Link href="/"> Startups Eire</Link>
            </Heading>
          )}
        </Flex>
        <Flex alignItems="center" p={8}>
          <Text fontSize="xl" mr={6}>
            <Link href="/">Blog</Link>
          </Text>
          <Text fontSize="xl" mr={6}>
            <Link href="/">Jobs</Link>
          </Text>

          <Link href="/uploadstartup">
            <Button mr={6} bg="#2c797b" color="white" fontSize="xl" size="md">
              Post a Job
            </Button>
          </Link>
        </Flex>
      </Flex>
      <Divider borderColor="gray.800" />
    </>
  );
}
