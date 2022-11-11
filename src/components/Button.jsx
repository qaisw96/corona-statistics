import React from 'react';

const Button = ({ children, onClick }) => (
  <div className='flex justify-center items-center' onClick={onClick}>
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'>
      {children}
    </button>
  </div>
);

export default Button;
