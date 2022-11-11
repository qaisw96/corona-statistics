import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <div className='p-10 flex-1 ml-[100px]  md:ml-[250px]'>{children}</div>
  );
};

export default MainLayout;
