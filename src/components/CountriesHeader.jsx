import React from 'react';
import { VscArrowUp, VscArrowDown } from 'react-icons/vsc';

const CountriesHeader = (props) => {
  const {
    setSortingColumn,
    sortingColumn,
    sortingDirection,
    setSortingDirection,
  } = props;

  const renderArrow = (column) => {
    if (sortingDirection === 'desc' && sortingColumn === column)
      return <VscArrowUp className='mt-2' />;
    return <VscArrowDown className='mt-2' />;
  };

  const handleClickSort = (column) => {
    if (sortingColumn === column) {
      setSortingDirection(sortingDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortingColumn(column);
      setSortingDirection('asc');
    }
  };

  return (
    <div className='flex flex-1 flex-col md:flex-row justify-around items-center px-3 ml-8 mt-4'>
      <div className='flex'>
        <p className='ml-8'>Country</p>
      </div>
      <div
        className='flex cursor-pointer underline md:no-underline'
        onClick={() => handleClickSort('cases')}
      >
        <p className='ml-8'>Cases</p>
        {renderArrow('cases')}
      </div>
      <div
        className='flex cursor-pointer underline md:no-underline'
        onClick={() => handleClickSort('deaths')}
      >
        <p className='ml-8'>Deaths</p>
        {renderArrow('deaths')}
      </div>
      <div
        className='flex cursor-pointer underline md:no-underline'
        onClick={() => handleClickSort('recovered')}
      >
        <p className='ml-8'>Recovered</p>
        {renderArrow('recovered')}
      </div>
    </div>
  );
};

export default CountriesHeader;
