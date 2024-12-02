"use client";
import { useState } from "react";
import Hero from "./components/hero";
import JobsCard from "./components/jobsCard";

export default function Home() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  return (
    <main>
      <Hero setSearch={setSearch} filter={filter} setFilter={setFilter} />

      <JobsCard />
      <JobsCard />
      <JobsCard />
    </main>
  );
}
