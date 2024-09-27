import React from "react";
import { Heading, Flex, Input, Select, useColorMode } from "@chakra-ui/react";

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

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <Heading>Find a startup Job across Ireland</Heading>

      <Flex mb={4} gap={4} alignItems="center">
        <Input
          flex={1}
          ml={8}
          p={2}
          placeholder="Search for a startup"
          borderRadius="md"
          borderColor={colorMode === "dark" ? "white" : "black"}
          maxWidth="600px"
          onChange={onChangeHandler}
        />
        <Select
          p={1}
          borderRadius="md"
          borderColor={colorMode === "dark" ? "white" : "black"}
          maxWidth="600px"
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
        >
          <option value="All">All Industries</option>
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
      </Flex>
    </>
  );
}
