import { useContext, useState, useMemo } from 'react';
import { CountriesContext } from '../context/CountriesContext';

const useFilterAndSortCountries = () => {
  const { countries } = useContext(CountriesContext);

  const [sortingColumn, setSortingColumn] = useState(null);
  const [sortingDirection, setSortingDirection] = useState('asc');
  const [userInput, setUserInput] = useState('');

  const filterCountries = (countries, userInput) => {
    return countries.filter((el) => el.name.toLowerCase().includes(userInput));
  };

  function sortCountries(data, sortingColumn, sortingDirection) {
    if (sortingColumn === null) return data;

    return data.sort((a, b) => {
      const aValue = a[sortingColumn];
      const bValue = b[sortingColumn];

      if (aValue === bValue) return 0;
      if (sortingDirection === 'asc') return aValue < bValue ? -1 : 1;
      return aValue < bValue ? 1 : -1;
    });
  }

  const sortedAndFilteredData = useMemo(() => {
    const filteredData = filterCountries(countries, userInput);
    const sortedData = sortCountries(
      filteredData,
      sortingColumn,
      sortingDirection
    );
    return sortedData;
  }, [countries, sortingColumn, userInput, sortingDirection]);

  const clearSort = () => {
    setUserInput('');
    setSortingColumn(null);
    setSortingDirection('asc');
  };

  return {
    setSortingColumn,
    sortingColumn,
    setSortingDirection,
    sortingDirection,
    sortedAndFilteredData,
    setUserInput,
    userInput,
    clearSort,
  };
};

export default useFilterAndSortCountries;
