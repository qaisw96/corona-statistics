import React from 'react';
import numFormatter from '../utils/helpers/formatNumber';

const Card = ({ name, value }) => (
  <div class='block p-6 rounded-lg shadow-lg bg-white w-[200px]'>
    <div className='flex justify-between'>
      <p class='text-gray-900'>{name}</p>
    </div>
    <h2 class='text-gray-700 text-3xl font-bold mt-4'>{numFormatter(value)}</h2>
  </div>
);

export default Card;
