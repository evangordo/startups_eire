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
  Flex,
  Avatar,
  Stack,
  RadioGroup,
  Radio,
  Tag,
  TagCloseButton,
  TagLabel,
  WrapItem,
  Wrap,
} from "@chakra-ui/react";
import { Editor } from "primereact/editor";
import { submitStartup } from "@/app/lib/actions";

const StartupForm = () => {
  const [jobData, setJobData] = useState({
    companyName: "",
    logo: null,
    location: "",
    category: "",
    companyDescription: "",
    jobDescription: "",
    applicationLink: "",
    tags: [] as string[],
    jobRole: "",
    remoteFriendly: "",
    email: "",
  });
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [tagInput, setTagInput] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    const { name, value, type } = target;
    const checked = target as HTMLInputElement;
    setJobData({
      ...jobData,
      [name]: type === "checkbox" ? checked.checked : value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setJobData({ ...jobData, logo: file as any });
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  function onEditorChange(e: any) {
    // adding this so it doesnt show the <p> tags on the client
    const textOnly = e.htmlValue.replace(/<\/?[^>]+(>|$)/g, "");
    setJobData((prevValues: any) => ({
      ...prevValues,
      jobDescription: textOnly,
    }));
  }

  const handleTagInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      const newTag = tagInput.trim();
      if (
        newTag &&
        !jobData.tags.includes(newTag) &&
        newTag.length >= 2 &&
        jobData.tags.length < 3
      ) {
        setJobData((prev) => ({
          ...prev,
          tags: [...prev.tags, newTag],
        }));
        setTagInput("");
      }
    }
  };

  const removeTag = (tagToRemove: string) => {
    setJobData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formDataToSubmit = new FormData();
    Object.entries(setJobData).forEach(([key, value]) => {
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

  const header = (
    <span className="ql-formats">
      <button className="ql-bold" aria-label="Bold"></button>
      <button className="ql-italic" aria-label="Italic"></button>
      <button className="ql-underline" aria-label="Underline"></button>
      <button
        className="ql-list"
        value="ordered"
        aria-label="Numbered List"
      ></button>
      <button
        className="ql-list"
        value="bullet"
        aria-label="Bullet List"
      ></button>
    </span>
  );
  return (
    <>
      <Box
        bg={"white"}
        rounded={"xl"}
        p={{ base: 4, sm: 6, md: 8 }}
        // maxW={{ base: "90vw", sm: "80vw", md: "90vw", lg: "90vw" }}
        mx="auto"
        w="full"
        boxShadow="lg"
      >
        <form onSubmit={handleSubmit}>
          <VStack spacing={5} align="stretch" width="100%">
            <Flex gap={4} align="flex-start">
              <FormControl isRequired width="200px">
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
              <VStack>
                <FormControl mt={3} isRequired flex="1">
                  <FormLabel color="black" htmlFor="companyName" fontSize="md">
                    Company Name
                  </FormLabel>
                  <Input
                    width="500px"
                    borderWidth="1px"
                    borderColor="gray.300"
                    bg="white"
                    color="black"
                    name="companyName"
                    value={jobData.companyName}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl isRequired flex="1">
                  <FormLabel color="black" htmlFor="companyName" fontSize="md">
                    Location
                  </FormLabel>
                  <Input
                    placeholder="e.g. Dublin, Galway, Cork"
                    borderWidth="1px"
                    borderColor="gray.300"
                    bg="white"
                    color="black"
                    name="companyName"
                    value={jobData.companyName}
                    onChange={handleChange}
                  />
                </FormControl>
              </VStack>
            </Flex>

            <FormControl isRequired>
              <FormLabel color="black" htmlFor="description" fontSize="md">
                Company Description
              </FormLabel>

              <Editor
                color="black"
                name="companyDescription  "
                id="companyDescription"
                headerTemplate={header}
                value={jobData.companyDescription}
                onTextChange={onEditorChange}
                style={{ height: "320px" }}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel color="black" htmlFor="jobRole" fontSize="md">
                Job Role
              </FormLabel>
              <Input
                borderWidth="1px"
                borderColor="gray.300"
                bg="white"
                color="black"
                name="jobRole"
                value={jobData.jobRole}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel color="black" htmlFor="jobDescription" fontSize="md">
                Job Description
              </FormLabel>

              <Editor
                color="black"
                name="jobDescription"
                id="jobDescription"
                headerTemplate={header}
                value={jobData.jobDescription}
                onTextChange={onEditorChange}
                style={{ height: "320px" }}
              />
            </FormControl>

            <Flex textAlign="center" gap={4}>
              <FormControl isRequired>
                <FormLabel
                  color="black"
                  id="applicationLink"
                  htmlFor="applicationLink"
                  fontSize="md"
                >
                  Application Link
                </FormLabel>
                <Input
                  borderWidth="1px"
                  borderColor="gray.300"
                  bg="white"
                  color="black"
                  name="applicationLink"
                  type="url"
                  value={jobData.applicationLink}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel color="black" htmlFor="tags" fontSize="md">
                  Tags
                </FormLabel>
                <Input
                  borderWidth="1px"
                  borderColor="gray.300"
                  bg="white"
                  color="black"
                  placeholder={"Type and press Enter to add tags, e.g. 'React'"}
                  name="tags"
                  type="text"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={handleTagInputKeyDown}
                  isDisabled={jobData.tags.length >= 3}
                />
                <Wrap spacing={2} mt={2}>
                  {jobData.tags.map((tag, index) => (
                    <WrapItem key={index}>
                      <Tag
                        size="md"
                        borderRadius="full"
                        variant="solid"
                        colorScheme="teal"
                      >
                        <TagLabel>{tag}</TagLabel>
                        <TagCloseButton onClick={() => removeTag(tag)} />
                      </Tag>
                    </WrapItem>
                  ))}
                </Wrap>
              </FormControl>
            </Flex>
            <Flex align="center" gap={4}>
              <FormControl>
                <FormLabel color="black" htmlFor="remoteFriendly" fontSize="md">
                  Remote Friendly
                </FormLabel>
                <RadioGroup
                  name="remoteFriendly"
                  value={jobData.remoteFriendly}
                  onChange={(value) =>
                    setJobData({ ...jobData, remoteFriendly: value })
                  }
                >
                  <Stack spacing={[1, 5]} direction={["column", "row"]}>
                    <Radio value="Yes" size="lg" colorScheme="green">
                      Yes
                    </Radio>
                    <Radio value="No" size="lg" colorScheme="green">
                      No
                    </Radio>
                    <Radio value="Hybrid" size="lg" colorScheme="green">
                      Hybrid
                    </Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>
              <FormControl isRequired>
                <FormLabel color="black" htmlFor="category" fontSize="md">
                  Category
                </FormLabel>
                <Select
                  borderWidth="1px"
                  borderColor="gray.300"
                  bg="white"
                  color="black"
                  name="category"
                  value={jobData.category}
                  onChange={handleChange}
                >
                  <option value="Software">Software</option>

                  <option value="Hardware">Hardware</option>
                  <option value="AI">AI</option>
                  <option value="SAAS">SAAS</option>
                  <option value="Gaming">Gaming</option>
                  <option value="Education">Education</option>
                  <option value="Fintech">Fintech</option>
                  <option value="HealthTech">HealthTech</option>
                  <option value="EdTech">EdTech</option>
                  <option value="Security">Security</option>
                  <option value="Crypto">Crypto</option>
                  <option value="Other">Other</option>
                </Select>
              </FormControl>
            </Flex>
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
                value={jobData.email}
                onChange={handleChange}
              />
            </FormControl>

            <Button
              type="submit"
              bg="#2a7879"
              size="lg"
              color="white"
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
