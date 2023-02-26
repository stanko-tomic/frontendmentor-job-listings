import Listing from "@/components/Listing";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import { useStateContext } from "../context/StateContext";

import { getAllData, getDataByFilters } from "../lib/data";

interface Job {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}

export default function Home() {
  const { selectedFilters } = useStateContext();

  const [filteredData, setFilteredData] = useState<Job[]>([]);

  useEffect(() => {
    setFilteredData(getDataByFilters(selectedFilters));
  }, [selectedFilters]);

  return (
    <main
      className={`${styles.mainContainer} ${
        selectedFilters < 1 ? "" : styles.active
      }`}
    >
      <h1 className="sr-only">Job listings</h1>
      <div className={styles.listingsContainer}>
        {filteredData?.map((item) => (
          <Listing data={item} key={`listing-${item.id}-${item.company}`} />
        ))}
      </div>
    </main>
  );
}
