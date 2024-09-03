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
import { COMPANIES } from "../companies";
import Image from "next/image";
import linkedin from "../assets/linkedin.png";
import Link from "next/link";
import twitter from "../assets/twitter.png";
import { categoryColor } from "../lib/utils";
import { ExternalLinkIcon } from "@chakra-ui/icons";
export default function JobsBoard() {
  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCompanies = COMPANIES.slice(indexOfFirstItem, indexOfLastItem);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    var lowerCase = e.target.value.toLowerCase();
    setSearch(lowerCase);
  };

  const totalPages = Math.ceil(COMPANIES.length / itemsPerPage);

  return (
    <Box>
      <Flex mb={4} gap={4} alignItems="center">
        <Input
          flex={1}
          ml={8}
          p={2}
          placeholder="Search by company name"
          borderRadius="md"
          borderColor="white"
          maxWidth="600px"
          onChange={onChangeHandler}
        />
        <Select
          p={2}
          placeholder="Filter by industry"
          borderRadius="md"
          borderColor="white"
          maxWidth="600px"
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
          <option value="other">Other</option>
        </Select>
      </Flex>
      <TableContainer p={4}>
        <Table variant="simple">
          <TableCaption>Jobs board for Startups based in Dublin</TableCaption>
          <Thead>
            <Tr>
              <Th>Company</Th>
              <Th>Description</Th>
              <Th>Founded</Th>
              <Th>Category</Th>
              <Th>Social</Th>
              <Th>Location</Th>
              <Th>Jobs</Th>
            </Tr>
          </Thead>
          <Tbody>
            {currentCompanies
              .filter((company) =>
                company.name.toLowerCase().includes(search.toLowerCase())
              )
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((company) => (
                <Tr key={company.name}>
                  <Td>
                    <Flex align="center">
                      <Avatar
                        src={`/logos/${company.name}.png`}
                        name={company.name}
                      />
                      <Box ml={2} color="white">
                        {company.name}
                      </Box>
                    </Flex>
                  </Td>

                  <Td>
                    {" "}
                    <Box maxWidth="600px" whiteSpace="normal">
                      {company.description}
                    </Box>
                  </Td>
                  <Td>{company.founded}</Td>
                  <Td>
                    <Badge colorScheme={categoryColor(company.category)}>
                      {company.category}
                    </Badge>
                  </Td>
                  <Td>
                    <HStack spacing={2}>
                      <Link href={company.linkedin}>
                        <Image
                          src={linkedin}
                          alt="linkedin"
                          width={28}
                          height={28}
                        />
                      </Link>
                      <Link href={company.twitter ?? "#"}>
                        <Image
                          src={twitter}
                          alt="twitter"
                          width={24}
                          height={24}
                        />
                      </Link>
                    </HStack>
                  </Td>
                  <Td>{company.location}</Td>
                  <Td>
                    <Button
                      as={Link}
                      href={company.jobs ?? ""}
                      rightIcon={<ExternalLinkIcon />}
                      colorScheme="blue"
                      size="sm"
                    >
                      View jobs
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
