import React from 'react';

const Country = (props) => {
  const { name, cases, deaths, recovered } = props;

  return (
    <div className='flex mt-5'>
      <div className='w-3 md:h-20 bg-blue-400' />
      <div className='flex flex-1 flex-col md:flex-row justify-around items-center bg-slate-200 p-3'>
        <div className='flex items-center'>
          <h3 className='ml-4'>{name}</h3>
        </div>
        <div className='flex flex-col'>
          <p>{cases}</p>
        </div>
        <div className='flex flex-col'>
          <p>{deaths}</p>
        </div>
        <div className='flex flex-col'>
          <p>{recovered}</p>
        </div>
      </div>
    </div>
  );
};

export default Country;
