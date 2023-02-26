import React from "react";
import styles from "./Header.module.css";
import { useStateContext } from "../context/StateContext";

const Header = () => {
  const { selectedFilters, setSelectedFilters } = useStateContext();

  const handleClick = (item: string) => {
    setSelectedFilters(selectedFilters.filter((l: string) => l !== item));
  };

  return (
    <header className={styles.header}>
      {selectedFilters.length === 0 ? (
        ""
      ) : (
        <div className={`${styles.filtersContainer}`}>
          <div className={`${styles.innerContainer}`}>
            <div className={styles.filterItemsContainer}>
              {selectedFilters?.map((item: string) => {
                return (
                  <button
                    className={styles.filterItem}
                    onClick={() => handleClick(item)}
                    key={item}
                  >
                    <span>
                      <span className="sr-only">Remove filter</span>
                      {item}
                    </span>
                    <div className={styles.imgContainer} aria-hidden="true">
                      <img src="/images/icon-remove.svg" alt="remove filter" />
                    </div>
                  </button>
                );
              })}
            </div>
            <button
              className={styles.cta}
              onClick={() => setSelectedFilters([])}
            >
              Clear
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
