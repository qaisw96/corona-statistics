import React from 'react';
import Countries from '../components/Countries';
import useFilterAndSortCountries from '../hooks/useFilterAndSortData';
import Title from '../components/Title';
import SubTitle from '../components/SubTitle';
import SearchInput from '../components/SearchInput';
import { RiFilterOffLine } from 'react-icons/ri';

const CountriesPage = () => {
  const {
    setSortingColumn,
    sortedAndFilteredData,
    clearSort,
    sortingColumn,
    setUserInput,
    userInput,
    sortingDirection,
    setSortingDirection,
  } = useFilterAndSortCountries();

  const handleUserInput = (e) => {
    const value = e.target.value.toLowerCase();
    setUserInput(value);
  };

  const searchInputProps = {
    userInput,
    handleUserInput,
  };

  const countriesProps = {
    sortedAndFilteredData,
    setSortingColumn,
    sortingColumn,
    setSortingDirection,
    sortingDirection,
  };

  return (
    <>
      <Title />
      <SubTitle>Countries</SubTitle>
      <div className='flex mt-12 items-center justify-between'>
        <SearchInput {...searchInputProps} />
        <RiFilterOffLine
          className='text-2xl cursor-pointer'
          onClick={clearSort}
        />
      </div>
      <Countries {...countriesProps} />
    </>
  );
};

export default CountriesPage;
