"use client";

import { Box, Text, Link, Flex, Icon } from "@chakra-ui/react";

import { FaGithub } from "react-icons/fa6";
export default function Footer() {
  return (
    <Box as="footer" py={4} textAlign="center" bg="gray.100">
      <Flex justifyContent="center" alignItems="center">
        <Link href="https://github.com" color="blue.500" isExternal>
          StartupsEire
        </Link>
        <Icon mx={2} as={FaGithub} color="black" />
      </Flex>
    </Box>
  );
}
