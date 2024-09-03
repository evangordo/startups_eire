"use client";
import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Flex,
  HStack,
  Button,
  Input,
  Select,
  Badge,
  ButtonGroup,
  Text,
} from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import { STARTUPS } from "../lib/data/startups";
import Image from "next/image";
import linkedin from "../assets/linkedin.png";
import Link from "next/link";
import twitter from "../assets/twitter.png";
import { categoryColor } from "../lib/utils";
import { ExternalLinkIcon } from "@chakra-ui/icons";
export default function JobsBoard() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const itemsPerPage = 10;

  interface StartupProps {
    name: string;
    description: string;
    founded: string;
    category: string;
    jobs: string;
    linkedin: string;
    twitter?: string;
    location: string;
  }
  const filteredStartups = STARTUPS.filter(
    (startup: StartupProps) =>
      startup.name.toLowerCase().includes(search.toLowerCase()) &&
      (filter === "All" ||
        startup.category.toLowerCase() === filter.toLowerCase())
  ).sort((a, b) => a.name.localeCompare(b.name));

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentStartups = filteredStartups.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const totalPages = Math.ceil(filteredStartups.length / itemsPerPage);

  return (
    <Box>
      <Flex mb={4} gap={4} alignItems="center">
        <Input
          flex={1}
          ml={8}
          p={2}
          placeholder="Search by startup name"
          borderRadius="md"
          borderColor="white"
          maxWidth="600px"
          onChange={onChangeHandler}
        />
        <Select
          p={1}
          borderRadius="md"
          borderColor="white"
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
          <option value="other">Other</option>
        </Select>
      </Flex>
      <TableContainer p={4}>
        <Table variant="simple">
          <TableCaption>Jobs board for Startups based in Dublin</TableCaption>
          <Thead>
            <Tr>
              <Th>startup</Th>
              <Th>Description</Th>
              <Th>Founded</Th>
              <Th>Category</Th>
              <Th>Social</Th>
              <Th>Location</Th>
              <Th>Jobs</Th>
            </Tr>
          </Thead>
          <Tbody>
            {currentStartups
              .sort((a: StartupProps, b: StartupProps) =>
                a.name.localeCompare(b.name)
              )
              .map((startup: StartupProps) => (
                <Tr key={startup.name}>
                  <Td>
                    <Flex align="center">
                      <Avatar
                        src={`/logos/${startup.name}.png`}
                        name={startup.name}
                      />
                      <Box ml={2} color="white">
                        {startup.name}
                      </Box>
                    </Flex>
                  </Td>

                  <Td>
                    {" "}
                    <Box maxWidth="600px" whiteSpace="normal">
                      {startup.description}
                    </Box>
                  </Td>
                  <Td>{startup.founded}</Td>
                  <Td>
                    <Badge colorScheme={categoryColor(startup.category)}>
                      {startup.category}
                    </Badge>
                  </Td>
                  <Td>
                    <HStack spacing={2}>
                      <Link href={startup.linkedin}>
                        <Image
                          src={linkedin}
                          alt="linkedin"
                          width={28}
                          height={28}
                        />
                      </Link>
                      <Link href={startup.twitter ?? "#"}>
                        <Image
                          src={twitter}
                          alt="twitter"
                          width={24}
                          height={24}
                        />
                      </Link>
                    </HStack>
                  </Td>
                  <Td>{startup.location}</Td>
                  <Td>
                    <Button
                      as={Link}
                      href={startup.jobs ?? ""}
                      rightIcon={<ExternalLinkIcon />}
                      colorScheme="blue"
                      size="sm"
                    >
                      View
                    </Button>
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Flex justifyContent="center" m={6}>
        <ButtonGroup>
          <Button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            isDisabled={currentPage === 1}
          >
            Previous
          </Button>
          <Text alignSelf="center" mx={2}>
            Page {currentPage} of {totalPages}
          </Text>
          <Button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            isDisabled={currentPage === totalPages}
          >
            Next
          </Button>
        </ButtonGroup>
      </Flex>
    </Box>
  );
}
