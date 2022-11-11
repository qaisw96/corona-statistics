import React, { useContext } from "react";
import { CountriesContext } from "../context/CountriesContext";
import CountriesHeader from "./CountriesHeader";
import Country from "./Country";

const Countries = (props) => {
  const {
    sortedAndFilteredData,
    setSortingColumn,
    sortingColumn,
    sortingDirection,
    setSortingDirection,
  } = props;

  const { countries, isLoading, error } = useContext(CountriesContext);

  if (isLoading) return <p>Loading ...</p>;

  if (error) return <h3>{error}</h3>;

  const countriesItems =
    sortedAndFilteredData.length === 0 ? countries : sortedAndFilteredData;

  const countriesHeaderProps = {
    setSortingColumn,
    sortingColumn,
    setSortingDirection,
    sortingDirection,
  };

  return (
    <div>
      <CountriesHeader {...countriesHeaderProps} />
      {countriesItems.map((country) => (
        <Country key={country.id} {...country} />
      ))}
    </div>
  );
};

export default Countries;
