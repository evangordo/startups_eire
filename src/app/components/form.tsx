import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Select,
  SimpleGrid,
  Heading,
} from "@chakra-ui/react";
import { submitStartup } from "../lib/actions";

const StartupForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    logoUrl: "",
    jobsUrl: "",
    location: "",
    category: "",
    founded: "",
    description: "",
    linkedin: "",
    twitter: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formDataToSubmit = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSubmit.append(key, value);
    });
    try {
      const response = await submitStartup(formDataToSubmit);
      console.log("Startup submitted successfully:", response);
    } catch (error) {
      console.error("Error submitting startup:", error);
    }
  };

  return (
    <>
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
        <form onSubmit={handleSubmit}>
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
                  min="1900"
                  max={new Date().getFullYear()}
                />
              </FormControl>
            </SimpleGrid>

            <SimpleGrid columns={2} spacing={3}>
              <FormControl isRequired>
                <FormLabel color="black" htmlFor="twitter" fontSize="sm">
                  Twitter
                </FormLabel>
                <Input
                  color="black"
                  borderColor="gray.300"
                  borderWidth="1px"
                  borderRadius="md"
                  bg="white"
                  name="twitter"
                  type="url"
                  value={formData.twitter}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel color="black" htmlFor="linkedin" fontSize="sm">
                  LinkedIn
                </FormLabel>
                <Input
                  color="black"
                  borderColor="gray.300"
                  borderWidth="1px"
                  borderRadius="md"
                  bg="white"
                  name="linkedin"
                  type="url"
                  value={formData.linkedin}
                  onChange={handleChange}
                />
              </FormControl>
            </SimpleGrid>

            <Button
              type="submit"
              colorScheme="blue"
              size="lg"
              width="full"
              mt={4}
              py={6}
              fontSize="xl"
            >
              Submit Startup
            </Button>
          </VStack>
        </form>
      </Box>
    </>
  );
};

export default StartupForm;
