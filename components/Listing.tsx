import React, { useState } from "react";
import styles from "./Listing.module.css";
import { useStateContext } from "../context/StateContext";

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

const Listing: React.FC<{
  data: Job;
}> = ({ data }) => {
  //
  const { selectedFilters, setSelectedFilters } = useStateContext();

  const handleClick = (language: string) => {
    if (selectedFilters.includes(language)) {
      setSelectedFilters(selectedFilters.filter((l: string) => l !== language));
    } else {
      setSelectedFilters([...selectedFilters, language]);
    }
  };

  return (
    <article
      className={`${styles.jobContainer} ${data.featured && styles.featured}`}
    >
      <div className={styles.leftSide}>
        <div className={styles.imgContainer}>
          <img src={`${data.logo}`} alt={`${data.company} icon`} />
        </div>
        <div className={styles.content}>
          <div className={styles.headingTags}>
            <p className={styles.subHeading}>{data.company}</p>
            {(data.new || data.featured) && (
              <div
                className={`${data.new || data.featured ? styles.tags : ""}`}
              >
                {data.new && (
                  <div className={`${data.new && styles.tagNew}`}>
                    <p>New!</p>
                  </div>
                )}
                {data.featured && (
                  <div className={`${data.featured && styles.tagFeatured}`}>
                    <p>Featured</p>
                  </div>
                )}
              </div>
            )}
          </div>
          <div className={styles.position}>
            <h2 className={styles.positionTitle}>{data.position}</h2>
          </div>
          <div className={styles.info}>
            <p>{data.postedAt}</p>•<p>{data.contract}</p>•<p>{data.location}</p>
          </div>
          <div className={styles.line} aria-hidden="true"></div>
        </div>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.filters}>
          <p className="sr-only">Listing filters</p>
          <button onClick={() => handleClick(data?.role)}>{data?.role}</button>
          <button onClick={() => handleClick(data?.level)}>
            {data?.level}
          </button>
          {data.languages?.map((item) => {
            return (
              <button onClick={() => handleClick(item)} key={item}>
                {item}
              </button>
            );
          })}
          {data.tools?.map((item) => {
            return (
              <button onClick={() => handleClick(item)} key={item}>
                {item}
              </button>
            );
          })}
        </div>
      </div>
    </article>
  );
};

export default Listing;
