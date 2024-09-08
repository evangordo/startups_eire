"use client";

import { Box, Text, Link, Flex, Icon } from "@chakra-ui/react";

import { FaGithub } from "react-icons/fa6";
export default function Footer() {
  return (
    <Box as="footer" py={4} textAlign="center" bg="gray.100">
      <Text fontSize="sm" color="gray.600">
        Open source project - Help to grow the{" "}
        <Link href="https://github.com" color="blue.500" isExternal>
          Dublin startup ecosystem
        </Link>
        <Icon as={FaGithub} color="black" />
      </Text>
    </Box>
  );
}
