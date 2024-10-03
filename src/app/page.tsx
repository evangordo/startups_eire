"use client";
import { useState } from "react";
import Hero from "./components/hero";
import JobsBoard from "./components/jobsBoard";
import JobsCard from "./components/jobsCard";

export default function Home() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  return (
    <main>
      <Hero setSearch={setSearch} filter={filter} setFilter={setFilter} />
      {/* <JobsBoard search={search} filter={filter} /> */}

      <JobsCard />
    </main>
  );
}
