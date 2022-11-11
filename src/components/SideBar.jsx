import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillPieChart } from 'react-icons/ai';
import { CgMenuGridO } from 'react-icons/cg';

const SideBar = () => {
  return (
    <aside className='w-[90px] md:w-fit order-first fixed' aria-label='Sidebar'>
      <div className='py-4 px-3 bg-gray-800 h-[100vh]'>
        <ul className='space-y-2 m-5'>
          <li>
            <Link to='/'>
              <a href='/' className='flex items-center p-2 w-10 md:w-fit text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'>
                <AiFillPieChart className='text-xl' />
                <span className='ml-3 hidden md:block'>General Statistics</span>
              </a>
            </Link>
          </li>
          <li>
            <Link to='/countries'>
              <a href='/countries' className='flex items-center p-2 w-8 md:w-fit text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'>
                <CgMenuGridO className='text-xl' />
                <span className='flex-1 ml-3 hidden md:block'>Countries</span>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
