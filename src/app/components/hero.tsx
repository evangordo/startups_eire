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
  Text,
  HStack,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";

interface SearchAndFilterProps {
  setSearch: (search: string) => void;
  filter: string;
  setFilter: (search: string) => void;
  handleSearch: () => void;
  setLocation: (location: string) => void;
  setExperience: (experience: string) => void;
}

export default function Hero({
  setSearch,
  filter,
  setFilter,
  handleSearch,
  setLocation,
  setExperience,
}: SearchAndFilterProps) {
  const isDesktop = useBreakpointValue({
    base: false,
    md: true,
    lg: true,
    xl: true,
  });
  const { colorMode } = useColorMode();
  const inputBorderColor = colorMode === "dark" ? "gray.600" : "gray.300";

  return (
    <Container maxW="5xl" mt={8} p={8} borderRadius="lg">
      <Box
        bg="white"
        borderWidth={"1px"}
        borderColor={"gray.300"}
        borderRadius={"lg"}
        p={4}
        shadow={"lg"}
        position="relative"
      >
        <Box
          position="absolute"
          top={-3}
          right={-3}
          w="60px"
          h="60px"
          opacity={0.1}
          backgroundSize="contain"
          backgroundRepeat="no-repeat"
        />
        {isDesktop ? (
          <Heading
            mb={8}
            textAlign={"center"}
            color="teal.600"
            fontWeight="bold"
            fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap={2}
          >
            Find a Job in the Irish Startup Ecosystem
            <span role="img" aria-label="Irish flag">
              🇮🇪
            </span>
            <span role="img" aria-label="Technology">
              💻
            </span>
          </Heading>
        ) : (
          <>
            <VStack textAlign={"center"}>
              <Heading
                textAlign={"center"}
                color="teal.600"
                fontWeight="bold"
                fontSize={{ base: "2xl", md: "2xl", lg: "3xl" }}
              >
                Find a Job in the Irish Startup Ecosystem
              </Heading>
              <HStack mt={2} spacing={2} mb={8}>
                <Text fontSize={"4xl"}>🇮🇪</Text>
                <Text fontSize={"4xl"}>💻</Text>
              </HStack>
            </VStack>
          </>
        )}
        <Grid templateColumns={["1fr", "repeat(2, 1fr)"]} gap={6}>
          <Select
            placeholder="Experience"
            borderRadius="md"
            borderColor={inputBorderColor}
            size="lg"
            focusBorderColor="teal.400"
            _placeholder={{ color: "gray.400" }}
            onChange={(e) => setExperience(e.target.value)}
          >
            <option>Internship</option>
            <option>Entry Level</option>
            <option>Associate</option>
            <option>Mid-Senior</option>
            <option>Senior</option>
            <option>Director</option>
            <option>Contractor/Freelancer</option>
          </Select>
          <Input
            placeholder="Job Type (e.g., Software Engineer)"
            borderRadius="md"
            borderColor={inputBorderColor}
            size="lg"
            onChange={(e) => setSearch(e.target.value)}
            focusBorderColor="teal.400"
            _placeholder={{ color: "gray.400" }}
          />
          <Input
            placeholder="Location (e.g., Dublin)"
            borderRadius="md"
            borderColor={inputBorderColor}
            size="lg"
            focusBorderColor="teal.400"
            _placeholder={{ color: "gray.400" }}
            onChange={(e) => setLocation(e.target.value)}
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
          <Button
            bg="#2a7879"
            color={"white"}
            size="lg"
            w={["full", "50%"]}
            onClick={handleSearch}
          >
            Search
          </Button>
        </Flex>
      </Box>
    </Container>
  );
}
