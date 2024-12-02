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
  Textarea,
  Flex,
  Avatar,
} from "@chakra-ui/react";
import { submitStartup } from "../lib/actions";

const StartupForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    logo: null,
    jobsUrl: "",
    location: "",
    category: "",
    founded: "",
    description: "",
    linkedin: "",
    twitter: "",
    jobDescription: "",
    applicationLink: "",
    remoteFriendly: false,
    email: "",
  });
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, logo: file });
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formDataToSubmit = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === "logo" && value) {
        formDataToSubmit.append("logo", value);
      } else {
        formDataToSubmit.append(key, String(value));
      }
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
        bg={"white"}
        rounded={"xl"}
        p={{ base: 4, sm: 6, md: 8 }}
        maxW={{ base: "90vw", sm: "80vw", md: "70vw", lg: "60vw" }}
        mx="auto"
        w="full"
        boxShadow="lg"
      >
        <form onSubmit={handleSubmit}>
          <VStack spacing={5} align="stretch" width="100%">
            <Flex gap={4} align="flex-start">
              <FormControl width="200px">
                <FormLabel color="black" htmlFor="logo" fontSize="md">
                  Company Logo
                </FormLabel>
                <Flex direction="column" align="center">
                  <Avatar size="xl" src={previewUrl || undefined} mb={2} />
                  <Input
                    type="file"
                    name="logo"
                    accept="image/*"
                    onChange={handleFileChange}
                    display="none"
                    id="logo-upload"
                  />
                  <Button
                    as="label"
                    htmlFor="logo-upload"
                    colorScheme="gray"
                    size="sm"
                    cursor="pointer"
                  >
                    Upload Logo
                  </Button>
                </Flex>
              </FormControl>
              <FormControl isRequired flex="1">
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
            </Flex>

            <FormControl isRequired>
              <FormLabel color="black" htmlFor="description" fontSize="md">
                Company Description
              </FormLabel>
              <Textarea
                borderWidth="1px"
                borderColor="gray.300"
                bg="white"
                color="black"
                name="description"
                value={formData.description}
                onChange={handleChange}
                minH="150px"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel color="black" htmlFor="jobDescription" fontSize="md">
                Job Description
              </FormLabel>
              <Textarea
                borderWidth="1px"
                borderColor="gray.300"
                bg="white"
                color="black"
                name="jobDescription"
                value={formData.jobDescription}
                onChange={handleChange}
                minH="200px"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel color="black" htmlFor="applicationLink" fontSize="md">
                Application Link
              </FormLabel>
              <Input
                borderWidth="1px"
                borderColor="gray.300"
                bg="white"
                color="black"
                name="applicationLink"
                type="url"
                value={formData.applicationLink}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl>
              <FormLabel color="black" htmlFor="remoteFriendly" fontSize="md">
                Remote Friendly
              </FormLabel>
              <Input
                type="checkbox"
                name="remoteFriendly"
                checked={formData.remoteFriendly}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel color="black" htmlFor="email" fontSize="md">
                Email Address
              </FormLabel>
              <Input
                borderWidth="1px"
                borderColor="gray.300"
                bg="white"
                color="black"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </FormControl>

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
