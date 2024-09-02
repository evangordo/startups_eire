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
} from "@chakra-ui/react";
import { COMPANIES } from "../companies";

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
            <Tr>
              <Td>{company.name}</Td>
              <Td>{company.description}</Td>
              <Td>{company.founded}</Td>
              <Td>{company.noOfEmplooyes}</Td>
              <Td>{company.linkedin}</Td>
              <Td> {company.location}</Td>
              <Td>{company.jobs}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
