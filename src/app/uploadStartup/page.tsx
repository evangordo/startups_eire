"use client";
import React from "react";
import { Box, Flex, Stack, Heading, Text, Container } from "@chakra-ui/react";
import StartupForm from "../components/form";

const UploadStartup = () => {
  return (
    <Box position={"relative"} minH="100vh" py={10}>
      <Container
        maxW="8xl"
        mx="auto"
        px={{ base: 4, sm: 6, lg: 8 }}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Stack spacing={{ base: 10, md: 20 }} align="center" maxW="4xl" mb={10}>
          <Heading
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
            textAlign="center"
          >
            Upload a Job to Ireland&apos;s{" "}
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "20%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "#2a7879",
                zIndex: -1,
              }}
            >
              Startup
            </Text>{" "}
            Ecosystem
          </Heading>
        </Stack>

        <Box w="full" maxW="4xl" mx="auto">
          <StartupForm />
        </Box>
      </Container>
    </Box>
  );
};

export default UploadStartup;
