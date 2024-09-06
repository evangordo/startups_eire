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
} from "@chakra-ui/react";

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to API)
    console.log("Form submitted:", formData);
    toast({
      title: "Startup submitted.",
      description: "We've received your startup information.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box
      maxWidth="lg"
      bg="#f4f5ee"
      borderRadius="lg"
      margin="auto"
      mt={20}
      p={6}
    >
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl isRequired>
            <FormLabel color="black" htmlFor="companyName" p={4} fontSize="xl">
              Company Name
            </FormLabel>
            <Input
              bg={"black"}
              id="companyName"
              name="companyName"
              color="black"
              value={formData.companyName}
              onChange={handleChange}
              px={8}
              py={2}
              borderRadius="lg"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel color="black" htmlFor="logoUrl" p={4} fontSize="xl">
              Startup Logo URL
            </FormLabel>
            <Input
              bg={"black"}
              color="white"
              id="logoUrl"
              name="logoUrl"
              type="url"
              value={formData.logoUrl}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel color="black" htmlFor="jobsUrl" p={4} fontSize="xl">
              Jobs URL
            </FormLabel>
            <Input
              bg={"black"}
              color="white"
              id="jobsUrl"
              name="jobsUrl"
              type="url"
              value={formData.jobsUrl}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel color="black" htmlFor="location" p={4} fontSize="xl">
              Location
            </FormLabel>
            <Input
              bg={"black"}
              color="white"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel color="black" htmlFor="category" p={4} fontSize="xl">
              Category
            </FormLabel>
            <Select
              bg={"black"}
              color="white"
              id="category"
              name="category"
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
            <FormLabel color="black" htmlFor="founded" p={4} fontSize="xl">
              Founded Year
            </FormLabel>
            <Input
              p={4}
              bg={"black"}
              color="white"
              id="founded"
              name="founded"
              type="number"
              value={formData.founded}
              onChange={handleChange}
              min="1900"
              max={new Date().getFullYear()}
            />
          </FormControl>

          <Button type="submit" colorScheme="blue" width="full">
            Submit Startup
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default StartupForm;
