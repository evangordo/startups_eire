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
}

export default function Hero({
  setSearch,
  filter,
  setFilter,
}: SearchAndFilterProps) {
  const isDesktop = useBreakpointValue({
    base: false,
    md: true,
    lg: true,
    xl: true,
  });
  const { colorMode } = useColorMode();
  const inputBorderColor = colorMode === "dark" ? "gray.600" : "gray.300";

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <Container maxW="4xl" mt={8} p={8} borderRadius="lg">
      <Box
        bg="white"
        borderWidth={"1px"}
        borderColor={"gray.300"}
        borderRadius={"lg"}
        p={4}
        shadow={"lg"}
        position="relative"
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.05,
          zIndex: 0,
          backgroundImage: `url('/irish-pattern.png')`,
          borderRadius: "lg",
        }}
      >
        <Box
          position="absolute"
          top={-3}
          right={-3}
          w="60px"
          h="60px"
          opacity={0.1}
          backgroundImage={`url('/shamrock.svg')`}
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
            Search
          </Button>
        </Flex>
        <Box
          position="absolute"
          bottom={-10}
          left="50%"
          transform="translateX(-50%)"
          display={["none", "flex"]}
          gap={4}
          color="gray.500"
          fontSize="sm"
        >
          <Text>500+ Startups</Text>
          <Text>•</Text>
          <Text>1000+ Jobs</Text>
          <Text>•</Text>
          <Text>100+ Tech Companies</Text>
        </Box>
      </Box>
    </Container>
  );
}
