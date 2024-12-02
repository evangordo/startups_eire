"use client";
import React from "react";
import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  useBreakpointValue,
} from "@chakra-ui/react";
import StartupForm from "../components/form";

const STARTUP_LOGOS = [
  { name: "Startup 1", url: "logos/edgetier.png" },
  { name: "Startup 2", url: "logos/wayflyer.png" },
  { name: "Startup 3", url: "logos/nory.png" },
];
const UploadStartup = () => {
  return (
    <Box position={"relative"} minH="100vh" py={10}>
      <Container
        maxW="7xl"
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
            Upload a Job to Ireland's{" "}
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
          {/* <Stack direction={"row"} spacing={4} align={"center"}>
            <Text fontFamily={"heading"} fontSize={{ base: "4xl", md: "6xl" }}>
              +
            </Text>
            <Flex
              align={"center"}
              justify={"center"}
              fontFamily={"heading"}
              fontSize={{ base: "sm", md: "lg" }}
              bg={"gray.800"}
              color={"white"}
              rounded={"full"}
              minWidth={useBreakpointValue({ base: "44px", md: "60px" })}
              minHeight={useBreakpointValue({ base: "44px", md: "60px" })}
              position={"relative"}
              _before={{
                content: '""',
                width: "full",
                height: "full",
                rounded: "full",
                transform: "scale(1.125)",
                bgGradient: "linear(to-bl, green.400,yellow.400)",
                position: "absolute",
                zIndex: -1,
                top: 0,
                left: 0,
              }}
            >
              Yours
            </Flex>
          </Stack> */}
        </Stack>

        <Box w="full" maxW="4xl" mx="auto">
          <StartupForm />
        </Box>
      </Container>
    </Box>
  );
};

export default UploadStartup;
