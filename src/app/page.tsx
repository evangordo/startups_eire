import Image from "next/image";
import styles from "./page.module.css";
import { Heading } from "@chakra-ui/react";
import JobsBoard from "./components/jobsBoard";

export default function Home() {
  return (
    <main>
      <Heading p={8}>Dublin Startups</Heading>
      <JobsBoard />
    </main>
  );
}
