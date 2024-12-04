"use client";

import { FaXTwitter } from "react-icons/fa6";
import { Box, Container, Stack, Text, Divider } from "@chakra-ui/react";
import Link from "next/link";

export default function Footer() {
  return (
    <Box>
      <Box bg="gray.100" width="100%" height="1px" />
      <Divider borderColor="black" />
      <Container
        as={Stack}
        maxW={"xl"}
        py={6}
        direction={"row"}
        spacing={4}
        justify={"center"}
        mt="auto"
        width="100%"
        align={"center"}
      >
        <Text ml={4} fontWeight={"bold"}>
          Contact:
        </Text>
        <Text ml={-2}>evan@startupseire.com</Text>
        <Link
          href={"https://x.com/EvanGordon9343"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter size={24} />
        </Link>
        <Stack direction={"row"} spacing={6}></Stack>
      </Container>
      <Box bg="gray.100" width="100%" height="1px" />
    </Box>
  );
}
