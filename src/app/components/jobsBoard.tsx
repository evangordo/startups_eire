"use client";
import React from "react";
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
  return (
    <Box>
      <Flex mb={4}>
        <Select p={2} placeholder="Filter by industry">
          <option value="all">All</option>
          <option value="software">Software</option>
          <option value="hardware">Hardware</option>
          <option value="services">AI</option>
          <option value="services">SaaS</option>
          <option value="hardware">Gaming</option>
          <option value="hardware">FinTech</option>
          <option value="hardware">HealthTech</option>
          <option value="hardware">EdTech</option>
          <option value="hardware">Other</option>
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
            {COMPANIES.map((company) => (
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
    </Box>
  );
}
