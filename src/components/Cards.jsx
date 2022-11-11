import React, { useContext } from 'react';
import Card from './Card';
import { CountriesContext } from '../context/CountriesContext';

const Cards = () => {
  const { globalStatistics } = useContext(CountriesContext);

  return (
    <div className='flex flex-col md:flex-row gap-3 py-10'>
      {globalStatistics.map((Statistic) => (
        <Card key={Statistic.id} {...Statistic} />
      ))}
    </div>
  );
};

export default Cards;
