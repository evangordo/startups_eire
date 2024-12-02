import React from "react";
import {
  Heading,
  Flex,
  Input,
  Select,
  Button,
  Container,
  Grid,
  Box,
  useColorMode,
} from "@chakra-ui/react";

interface SearchAndFilterProps {
  setSearch: (search: string) => void;
  filter: string;
  setFilter: (search: string) => void;
}

export default function Hero({
  setSearch,
  filter,
  setFilter,
}: SearchAndFilterProps) {
  const { colorMode } = useColorMode();
  const inputBorderColor = colorMode === "dark" ? "gray.600" : "gray.300";

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <Container maxW="4xl" mt={8} p={8} borderRadius="lg">
      <Box
        borderWidth={"1px"}
        borderColor={"gray.300"}
        borderRadius={"lg"}
        p={4}
        shadow={"md"}
      >
        <Heading mb={8} textAlign={"center"} color="teal.600" fontWeight="bold">
          Find a Job in the Irish Startup Ecosystem
        </Heading>
        <Grid templateColumns={["1fr", "repeat(2, 1fr)"]} gap={6}>
          <Input
            placeholder="Startup Name"
            borderRadius="md"
            borderColor={inputBorderColor}
            size="lg"
            onChange={handleSearchChange}
            focusBorderColor="teal.400"
            _placeholder={{ color: "gray.400" }}
          />
          <Input
            placeholder="Job Type (e.g., Software Engineer)"
            borderRadius="md"
            borderColor={inputBorderColor}
            size="lg"
            onChange={handleSearchChange}
            focusBorderColor="teal.400"
            _placeholder={{ color: "gray.400" }}
          />
          <Input
            placeholder="Location (e.g., Dublin)"
            borderRadius="md"
            borderColor={inputBorderColor}
            size="lg"
            onChange={handleSearchChange}
            focusBorderColor="teal.400"
            _placeholder={{ color: "gray.400" }}
          />
          <Select
            placeholder="Select Industry"
            borderRadius="md"
            borderColor={inputBorderColor}
            size="lg"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            focusBorderColor="teal.400"
          >
            <option value="all">All Industries</option>
            <option value="software">Software</option>
            <option value="hardware">Hardware</option>
            <option value="ai">AI</option>
            <option value="saas">SaaS</option>
            <option value="gaming">Gaming</option>
            <option value="fintech">FinTech</option>
            <option value="healthtech">HealthTech</option>
            <option value="edtech">EdTech</option>
            <option value="security">Security</option>
            <option value="crypto">Crypto</option>
            <option value="other">Other</option>
          </Select>
        </Grid>
        <Flex justify="center" mt={10}>
          <Button colorScheme="teal" size="lg" w={["full", "50%"]}>
            Search Jobs
          </Button>
        </Flex>
      </Box>
    </Container>
  );
}
