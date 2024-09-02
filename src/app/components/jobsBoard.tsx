"use client";
import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Flex,
} from "@chakra-ui/react";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import { COMPANIES } from "../companies";
import Image from "next/image";
import linkedin from "../assets/linkedin.png";
import Link from "next/link";

export default function JobsBoard() {
  return (
    <TableContainer p={4}>
      <Table variant="simple">
        <TableCaption>Jobs board for Startups based in Dublin</TableCaption>
        <Thead>
          <Tr>
            <Th>Company</Th>
            <Th>Description</Th>
            <Th>Founded</Th>
            <Th>No. Employees</Th>
            <Th>Social</Th>
            <Th>Location</Th>
            <Th>Jobs</Th>
          </Tr>
        </Thead>
        <Tbody>
          {COMPANIES.map((company) => (
            <Tr key={company.name}>
              <Flex>
                <Td>
                  <Avatar
                    src={`/logos/${company.name}.png`}
                    name={company.name}
                  />
                  <Box mt={2} color="white">
                    {company.name}
                  </Box>
                </Td>
              </Flex>
              <Td>{company.description}</Td>
              <Td>{company.founded}</Td>
              <Td>{company.noOfEmplooyes}</Td>

              <Td>
                <Link href={company.linkedin}>
                  <Image src={linkedin} alt="linkedin" />
                </Link>
              </Td>
              <Td> {company.location}</Td>
              <Td>{company.jobs}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
