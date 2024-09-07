"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Select,
  useToast,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  Icon,
} from "@chakra-ui/react";

const STARTUP_LOGOS = [
  { name: "Startup 1", url: "https://via.placeholder.com/150" },
  { name: "Startup 2", url: "https://via.placeholder.com/150" },
  { name: "Startup 3", url: "https://via.placeholder.com/150" },
];

const StartupForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    logoUrl: "",
    jobsUrl: "",
    location: "",
    category: "",
    founded: "",
  });

  const toast = useToast();

  return (
    <Box position={"relative"}>
      <Container
        as={SimpleGrid}
        maxW={"7xl"}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}
      >
        <Stack spacing={{ base: 10, md: 20 }}>
          <Heading
            lineHeight={1.1}
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
          >
            Join Dublin's{" "}
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
                bg: "blue.400",
                zIndex: -1,
              }}
            >
              Startup
            </Text>{" "}
            Ecosystem
          </Heading>
          <Stack direction={"row"} spacing={4} align={"center"}>
            <AvatarGroup>
              {STARTUP_LOGOS.map((avatar) => (
                <Avatar
                  key={avatar.name}
                  name={avatar.name}
                  src={avatar.url}
                  size={useBreakpointValue({ base: "md", md: "lg" })}
                  position={"relative"}
                  zIndex={2}
                  _before={{
                    content: '""',
                    width: "full",
                    height: "full",
                    rounded: "full",
                    transform: "scale(1.125)",
                    bgGradient: "linear(to-r, #00529F, #0095C8)",
                    position: "absolute",
                    zIndex: -1,
                    top: 0,
                    left: 0,
                  }}
                />
              ))}
            </AvatarGroup>
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
                bgGradient: "linear(to-bl, orange.400,yellow.400)",
                position: "absolute",
                zIndex: -1,
                top: 0,
                left: 0,
              }}
            >
              YOU
            </Flex>
          </Stack>
        </Stack>

        <Box
          bg={"gray.50"}
          rounded={"xl"}
          p={{ base: 4, sm: 6, md: 8 }}
          maxW={{ lg: "lg" }}
        >
          <Heading
            color={"gray.800"}
            lineHeight={1.2}
            fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}
            mb={6}
          >
            Submit Your Startup
          </Heading>
          <form
          // onSubmit={handleSubmit}
          >
            <VStack spacing={10} align="stretch">
              <SimpleGrid columns={2} spacing={5}>
                <FormControl isRequired>
                  <FormLabel color="black" htmlFor="companyName" fontSize="md">
                    Company Name
                  </FormLabel>
                  <Input
                    borderWidth="1px"
                    borderColor="gray.300"
                    bg="white"
                    color="black"
                    name="companyName"
                    value={formData.companyName}
                    // onChange={handleChange}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel color="black" htmlFor="logoUrl" fontSize="md">
                    Logo URL
                  </FormLabel>
                  <Input
                    borderWidth="1px"
                    borderColor="gray.300"
                    borderRadius="md"
                    bg="white"
                    color="black"
                    name="logoUrl"
                    type="url"
                    value={formData.logoUrl}
                    // onChange={handleChange}
                  />
                </FormControl>
              </SimpleGrid>

              <SimpleGrid columns={2} spacing={3}>
                <FormControl isRequired>
                  <FormLabel color="black" htmlFor="jobsUrl" fontSize="sm">
                    Jobs URL
                  </FormLabel>
                  <Input
                    color="black"
                    borderWidth="1px"
                    borderColor="gray.300"
                    borderRadius="md"
                    bg="white"
                    name="logoUrl"
                    type="url"
                    value={formData.jobsUrl}
                    // onChange={handleChange}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel color="black" htmlFor="location" fontSize="sm">
                    Location
                  </FormLabel>
                  <Input
                    color="black"
                    borderWidth="1px"
                    borderColor="gray.300"
                    borderRadius="md"
                    bg="white"
                    type="url"
                    name="location"
                    value={formData.location}
                    // onChange={handleChange}
                  />
                </FormControl>
              </SimpleGrid>

              <SimpleGrid columns={2} spacing={3}>
                <FormControl isRequired>
                  <FormLabel color="black" htmlFor="category" fontSize="sm">
                    Category
                  </FormLabel>
                  <Select
                    color="black"
                    borderWidth="1px"
                    borderColor="gray.300"
                    borderRadius="md"
                    bg="white"
                    name="category"
                    type="url"
                    value={formData.category}
                    // onChange={handleChange}
                    placeholder="Select category"
                  >
                    <option value="fintech">Fintech</option>
                    <option value="healthtech">Healthtech</option>
                    <option value="edtech">Edtech</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="other">Other</option>
                  </Select>
                </FormControl>

                <FormControl isRequired>
                  <FormLabel color="black" htmlFor="founded" fontSize="sm">
                    Founded Year
                  </FormLabel>
                  <Input
                    color="black"
                    borderColor="gray.300"
                    borderWidth="1px"
                    borderRadius="md"
                    bg="white"
                    name="founded"
                    type="number"
                    value={formData.founded}
                    // onChange={handleChange}
                    min="1900"
                    max={new Date().getFullYear()}
                  />
                </FormControl>
              </SimpleGrid>

              <Button
                type="submit"
                colorScheme="blue"
                size="lg" // Increased button size
                width="full"
                mt={4}
                py={6} // Increased button padding
                fontSize="xl" // Increased button font size
              >
                Submit Startup
              </Button>
            </VStack>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default StartupForm;
