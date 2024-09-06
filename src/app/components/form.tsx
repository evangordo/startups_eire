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
  Container,
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

    console.log("Form submitted:", formData);
    toast({
      title: "Startup submitted.",
      description: " received your startup information.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="full" bg="red" mt={0} centerContent overflow="hidden">
      <Box maxW="md" mt={8} bg="red" p={8} borderRadius="lg">
        <form onSubmit={handleSubmit}>
          <VStack bg="white" spacing={4}>
            <FormControl isRequired>
              <FormLabel htmlFor="companyName">Company Name</FormLabel>
              <Input
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel htmlFor="logoUrl">Startup Logo URL</FormLabel>
              <Input
                id="logoUrl"
                name="logoUrl"
                type="url"
                value={formData.logoUrl}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel htmlFor="jobsUrl">Jobs URL</FormLabel>
              <Input
                id="jobsUrl"
                name="jobsUrl"
                type="url"
                value={formData.jobsUrl}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel htmlFor="location">Location</FormLabel>
              <Input
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel htmlFor="category">Category</FormLabel>
              <Select
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
              <FormLabel htmlFor="founded">Founded Year</FormLabel>
              <Input
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
    </Container>
  );
};

export default StartupForm;