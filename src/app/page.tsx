"use client";
import { useState } from "react";
import useSWR from "swr";
import Hero from "./components/hero";
import JobsCard from "./components/jobsCard";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface Job {
  id: string;
  jobRole: string;
  companyName: string;
  location: string;
  createdAt: string;
  logo: string;
  tags: string[];
  companyDescription: string;
  jobDescription: string;
  applicationLink: string;
  remoteFriendly: string;
  category: string;
}

export default function Home() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const { data, error } = useSWR("/api/fetch-jobs", fetcher);
  console.log("fetching data", data);

  return (
    <main>
      <Hero setSearch={setSearch} filter={filter} setFilter={setFilter} />
      {data?.map((job: Job) => (
        <JobsCard key={job.id} job={job} />
      ))}
    </main>
  );
}
