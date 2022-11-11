import React, { createContext } from "react";
import useFetchStatistics from "../hooks/useFetchStatistics";
import { transformCountries } from "../utils/transformation/countries";
import { transformGlobalStatistics } from "../utils/transformation/globalStatistics";

export const CountriesContext = createContext();

const CountriesProvider = ({ children }) => {
  const { countriesData, globalData, isLoading, error } = useFetchStatistics();
  const countries = transformCountries(countriesData);
  const globalStatistics = transformGlobalStatistics(globalData);

  return (
    <CountriesContext.Provider
      value={{ countries, isLoading, error, globalStatistics }}
    >
      {children}
    </CountriesContext.Provider>
  );
};

export default CountriesProvider;
