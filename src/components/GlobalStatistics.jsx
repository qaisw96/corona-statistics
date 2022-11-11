import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Cards from './Cards';
import Country from './Country';
import Title from './Title';
import Button from './Button';
import SubTitle from './SubTitle';
import { CountriesContext } from '../context/CountriesContext';

const GlobalStatistics = () => {
  const { countries } = useContext(CountriesContext);

  return (
    <main>
      <Title />
      <SubTitle>General Statistics</SubTitle>
      <Cards />
      {countries.slice(0, 3).map((country) => (
        <Country key={country.id} {...country} />
      ))}
      <div className='mt-5'>
        <Link to='/countries'>
          <Button className='mt-5'>See All Countries</Button>
        </Link>
      </div>
    </main>
  );
};

export default GlobalStatistics;
